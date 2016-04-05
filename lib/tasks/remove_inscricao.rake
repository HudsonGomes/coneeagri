namespace :inscricao do

  desc 'Prepara o banco com minicursos e visitas técnicas'
  task :remove, [:inscricao_id] => :environment do |t, args|
    ActiveRecord::Base.transaction do
      begin
        puts "##########################"
        i = Inscricao.find(args.inscricao_id)
        puts "Deletando a inscricão de #{i.user.name}"

        if i.status == 7
          if i.technical_visit
            tv = TechnicalVisit.find(i.technical_visit_id)
            tv.available_qtd += 1
            tv.save
          end

          i.inscricao_minicursos.each do |im|
            minicurso_id = im.minicurso_id
            m = Minicurso.find(minicurso_id)
            m.available_qtd += 1
            m.save
          end
        end

        i.inscricao_minicursos.destroy_all
        i.destroy

        puts "Inscrição removida com sucesso!"
        puts "###############################"
      rescue Exception => e
        puts "Um erro ocorreu: #{e.message}"
      end
    end
  end

end