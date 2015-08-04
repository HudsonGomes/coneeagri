class InscricoesController < ApplicationController

  def new
    @pacotes = Pacote.all
    @pacotes_adicionais = PacoteAdicional.all
  end

  def index
    @inscricoes = Inscricao.all
  end
end