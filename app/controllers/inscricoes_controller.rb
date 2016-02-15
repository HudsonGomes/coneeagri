class InscricoesController < ApplicationController
  before_filter :require_login

  def index
    inscricoes = InscricaoManager.list(current_user, options)
    inscricoes = InscricoesSerializer.new(inscricoes).as_list

    respond_to do |format|
      format.html
      format.json { render json: inscricoes }
    end
  end

  def new
    @inscricao = Inscricao.new
  end

  def show
    @inscricao = Inscricao.find_by(user_id = current_user.id)
  end

  def create
    begin
      flash[:success] = 'Parabéns! VocÊ foi inscrito no coneeagri UFF 2016'
    rescue
      render 'new'
    end
  end

  private

  def options
    {
      query: params[:q],
      page: params[:p],
      per_page: params[:per_page] || 20
    }
  end
end