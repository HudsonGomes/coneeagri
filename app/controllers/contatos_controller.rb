class ContatosController < ApplicationController
  def new
    @contato = Contato.new
  end

  def create
    @contato = Contato.new(params[:contato])
    @contato.request = request
    if @contato.deliver
      flash.now[:notice] = 'Mensagem enviado com sucesso'
      render :new
    else
      flash.now[:error] = 'Desculpe, não foi possível enviar o email'
      render :new
    end
  end
end