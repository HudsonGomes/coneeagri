class Contato < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :nickname,  :captcha  => true

  def headers
    {
        :subject => "CONEEAGRI 2016",
        :to => "coneeagriuff@gmail.com",
        :from => %("#{name}" <#{email}>)
    }
  end
end