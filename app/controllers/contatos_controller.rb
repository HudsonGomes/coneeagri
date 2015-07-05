class ContatosController < ApplicationController
  def new
    @contato = Contato.new
  end

  def create
    @contato = Contato.new(params[:contato])
    @contato.request = request
    if @contato.deliver
      flash.now[:notice] = 'Thank you for your message. We will contact you soon!'
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end
end