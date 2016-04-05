class Admin::InscricoesController < ApplicationController

  def new
    raise PermissionDenied unless current_user.admin
    render 'admin/inscricoes/new.html.erb'
  end

  def create
    begin
      InscricaoManager.create_for_admin(params['user'].permit!, params['inscricao'].permit!)
      redirect_to inscricoes_path
    rescue InscricaoError => e
      flash['error'] = e.message
      redirect_to new_admin_inscricao_path
    rescue => e
      flash['error'] = e.message
      redirect_to new_admin_inscricao_path
    end
  end

end