class UsersController < ApplicationController

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