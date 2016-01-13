class InscricoesController < ApplicationController
  before_filter :require_login

  def new
    @inscricao = Inscricao.new
  end

  def index
    @inscricoes = Inscricao.all
  end

  def show
    @inscricao = Inscricao.find_by(user_id = params[:id])
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