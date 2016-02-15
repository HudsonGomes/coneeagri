class InscricaoManager

  def self.list(user, options = [])
    raise AccessDeniedError unless user.admin
    inscricoes = Inscricao.ransack(options[:query]).result
    inscricoes.page(options[:page]).per(options[:per_page])
  end

  def self.create(attributes)

  end

end