class InscricaoMailer < ActionMailer::Base
  default from: 'inscricoes@coneeagri.com.br'

  def self.send_analysis_email(user)
    @user = user
    mail( :to => @user.email,
          :subject => 'Sua inscrição está em análise' )
  end

  def self.send_confirmed_email(user)
    @user = user
    mail( :to => @user.email,
          :subject => 'Sua inscrição foi confirmada com sucesso' )
  end

  def inscricao_mailer(user, inscricao)
    @user = user
    @inscricao = inscricao
    mail(to: @user.email, subject: 'CONEEAGRI 2016 - Inscrição')
  end

end
