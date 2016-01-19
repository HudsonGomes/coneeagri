class UsersController < ApplicationController
  before_filter :require_login, only: :index

  def index
    raise PermissionDenied unless current_user.admin
    @q = User.ransack(params[:q])
    @users = @q.result(distinct: true).page(params[:page]).per(20)
  end

  def show
    @user = User.find(params[:id])

    respond_to do |format|
      format.html
      format.json { render json: { user: @user } }
    end
  end

  def create
    begin
      UserManager.create(attributes)
      render json: { status: :success }
    rescue InvalidRecordError => e
      render json: e.object.errors, :status => :unprocessable_entity
    end
  end

  def update
    begin
      UserManager.update(params[:id], attributes_to_update)
      flash[:success] = 'Atualizado com sucesso'
      redirect_to user_path(params[:id])
    rescue InvalidRecordError => e
      flash[:success] = 'Atualizado com sucesso'
      redirect_to user_path(params[:id])
    end
  end

  private

  def attributes
    params[:attributes].permit!
  end

  def attributes_to_update
    params[:user].permit!
  end

end