class InscricoesController < ApplicationController

  def new

  end

  def index
    @inscricoes = Inscricao.all
  end
end