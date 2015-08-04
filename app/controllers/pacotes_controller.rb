class PacotesController < ApplicationController

  def index
    @pacotes = Pacote.all
    @pacotes_adicionais = PacoteAdicional.all
  end

end