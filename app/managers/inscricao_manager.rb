class InscricaoManager

  def self.list(user, options = [])
    raise AccessDeniedError unless user.admin
    inscricoes = Inscricao.ransack(options[:query]).result.where.not(status: nil)
    inscricao.total_count = inscricoes.count
    inscricoes.page(options[:page]).per(options[:per_page])
  end

  def self.create(user, options)
    have_inscricao = user.inscricoes.where(status: [1, 3]).any?

    if have_inscricao
      raise InscricaoError, 'Você já se inscreveu no CONEEAGRI - 2016'
    end

    inscricao = user.inscricoes.where(status: [nil, 7, 20]).first

    ActiveRecord::Base.transaction do
      begin
        if options[:agree_terms].nil? or options[:agree_terms].blank?
          raise InscricaoError, 'Você não concordou com os termos de inscrição'
        end

        inscricao = (inscricao || Inscricao.new)
        inscricao.status = 20 #Criada via email e não paga

        #Status 30 = Criada via email e paga

        inscricao.inscricao_minicursos.destroy_all

        attributes = self.attributes(user, options)
        inscricao.assign_attributes(attributes)
        inscricao.save!
        sync_minicursos(inscricao.id, options[:first_minicurso], options[:second_minicurso])

        inscricao
      rescue => e
        puts '############# ERROR MESSAGE #############'
        puts e.message
        puts '##########################################'
        raise InvalidRecordError.new(inscricao), e.message
      end
    end
  end

  def self.attributes(user, attributes)
    {
      user_id: user.id,
      pacote_id: sync_package(attributes[:package]),
      technical_visit_id: sync_technical_visit(attributes[:technical_visit]),
      tamanho_camisa: attributes[:tamanho_camisa],
      lote: '2'
    }
  end

  def self.create_for_admin(user_attributes, inscricao_attributes)
    ActiveRecord::Base.transaction do

      unless inscricao_attributes['pacote'] and user_attributes['email'] and
        inscricao_attributes['tamanho_camisa'] and inscricao_attributes['status']
        raise InscricaoError, 'Todos os campos são obrigatórios'
      end

      user = User.find_by(email: user_attributes['email'])

      unless user
        unless user_attributes['name'] and user_attributes['email'] and
            user_attributes['sexo'] and user_attributes['university']
          raise InscricaoError, 'Todos os campos são obrigatórios'
        end

        user = User.new(user_attributes)
        user.birth_at = Date.today
        user.phone_number = '123456789'
        user.password = '123456789'
        user.skip_confirmation!
        user.save!
      end

      inscricao = user.inscricoes[0]
      inscricao = Inscricao.new unless inscricao

      inscricao.user = user
      inscricao.lote = '2'
      inscricao.status = inscricao_attributes['status']
      inscricao.pacote_id = inscricao_attributes['pacote']

      if inscricao_attributes['visita_tecnica']
        t = TechnicalVisit.find(inscricao_attributes['visita_tecnica'])

        if t.available_qtd <= 0
          raise InscricaoError, "Você não pode selecionar a visita #{inscricao_attributes['visita_tecnica']}. ESGOTADA!"
        end

        t.available_qtd -= 1
        t.save!

        inscricao.technical_visit_id = inscricao_attributes['visita_tecnica']
      end


      inscricao.tamanho_camisa = inscricao_attributes['tamanho_camisa']

      inscricao.save!

      minicurso_1 = inscricao_attributes['minicurso_1']
      minicurso_2 = inscricao_attributes['minicurso_2']
      minicursos = [minicurso_1, minicurso_2].compact

      minicursos.each do |minicurso_id|
        m = Minicurso.find(minicurso_id)

        raise InscricaoError, "Você não pode selecionar o minicurso #{minicurso_id}. ESGOTADO!" if m.available_qtd <= 0

        m.available_qtd -= 1
        m.save!

        InscricaoMinicurso.create!({minicurso_id: minicurso_id, inscricao: inscricao})
      end
    end
  end

  private

  def self.sync_package(package_id)
    raise InscricaoError, 'É obrigatório selecionar um pacote' if package_id.nil? or package_id.blank?
    package = Pacote.find(package_id)

    if package.numero_id == 1

      #TODO: Código referente ao pacote COMPLETO
      if package.available_qtd_2 == 0
        raise InscricaoError, 'O PACOTE COMPLETO está temporariamente indisponível. Tente novamente mais tarde.'
      end
    end

    #if package.available_qtd_1 == 0 and package.available_qtd_2 == 0 and pacote.available_qtd_3 == 0
     # raise InscricaoError, 'Esse Pacote está encerrado'
    #end

    package.id
  end

  def self.sync_technical_visit(technical_visit_number)
    unless technical_visit_number.nil? or technical_visit_number.blank?
      technical_visit = TechnicalVisit.find_by(numero_id: technical_visit_number)

      if technical_visit && technical_visit.available_qtd > 0
        technical_visit.id
      else
        raise InscricaoError, "#{technical_visit.name} está esgotada"
      end
    end
  end

  def self.sync_minicursos(inscricao_id, first_minicurso, second_minicurso)
    if (first_minicurso == second_minicurso) and (!first_minicurso.blank?)
      raise InscricaoError, 'Você não pode escolher minicursos iguais'
    end

    if (first_minicurso == '1' and second_minicurso == '2') or (first_minicurso == '2' and second_minicurso == '1')
      raise InscricaoError, 'Minicursos possuem horários conflitantes'
    end

    if (first_minicurso == '3' and second_minicurso == '4') or (first_minicurso == '4' and second_minicurso == '3')
      raise InscricaoError, 'Minicursos possuem horários conflitantes'
    end

    unless first_minicurso.nil? or first_minicurso.blank?
      minicurso_1 = Minicurso.find_by(numero_id: first_minicurso)
      first_minicurso_id = Minicurso.find_by(numero_id: first_minicurso).id if first_minicurso
    end

    unless second_minicurso.nil? or second_minicurso.blank?
      minicurso_2 = Minicurso.find_by(numero_id: second_minicurso)
      second_minicurso_id = Minicurso.find_by(numero_id: second_minicurso).id if second_minicurso
    end

    validate_minicursos_vagas(minicurso_1, minicurso_2)
    create_minicursos(inscricao_id, first_minicurso_id, second_minicurso_id)
  end

  def self.validate_minicursos_vagas(first_minicurso, second_minicurso)
    if first_minicurso and first_minicurso.available_qtd <= 0
      raise InscricaoError, "Minicurso #{first_minicurso.name} está esgotado"
    end

    if second_minicurso and second_minicurso.available_qtd <= 0
      raise InscricaoError, "Minicurso #{second_minicurso.name} está esgotado"
    end
  end

  def self.create_minicursos(inscricao_id, first_minicurso_id, second_minicurso_id)
    if first_minicurso_id
      InscricaoMinicurso.create!({inscricao_id: inscricao_id, minicurso_id: first_minicurso_id})
    end

    if second_minicurso_id
      InscricaoMinicurso.create!({inscricao_id: inscricao_id, minicurso_id: second_minicurso_id})
    end
  end

end