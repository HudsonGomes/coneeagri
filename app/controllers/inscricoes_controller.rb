class InscricoesController < ApplicationController

  def new
    @inscricao = Inscricao.new
  end

  def index
    @inscricoes = Inscricao.all
  end

  def create
    begin
      InscricaoManager.create()
      flash[:success] = 'Parabéns! VocÊ foi inscrito no coneeagri UFF 2016'
    rescue
      render 'new'
    end
  end
end