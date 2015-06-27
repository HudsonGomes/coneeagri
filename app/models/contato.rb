class Contato < MailForm::Base
  attribute :nome,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :mensagem
  attribute :apelido,  :captcha  => true

  def headers
    {
        :subject => "CONEEAGRI 2016",
        :to => "contato@coneeagri.com.br",
        :from => %("#{nome}" <#{email}>)
    }
  end
end