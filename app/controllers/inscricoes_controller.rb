class InscricoesController < ApplicationController
  before_filter :require_login

  def index
    raise PermissionDenied unless current_user.admin
    @q = Inscricao.ransack(params[:q])
    @inscricoes = @q.result(distinct: true).where.not(status: nil).page(params[:page]).per(20)

    respond_to do |format|
      format.html
      format.json { render json: @inscricoes }
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