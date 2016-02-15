class InscricaoMailer < ActionMailer::Base

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

end
