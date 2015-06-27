class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  after_filter :set_no_cache

  def index
    render 'layouts/home.erb.html'
  end

  rescue_from AccessDeniedError do |e|
    redirect_to new_user_session_path, :flash => { :alert => e.message }
  end

  def after_sign_out_path_for(resource_or_scope)
    new_user_session_path
  end

  def require_login
    unless current_user
      raise AccessDeniedError.new(I18n.t('devise.failure.unauthenticated'))
    end
  end

  def require_admin
    require_login

    unless current_user.admin?
      raise AccessDeniedException.new(I18n.t('devise.failure.not_permitted'))
    end
  end

  def set_no_cache
    expires_now

    response.headers['Cache-Control'] = 'no-cache, no-store, max-age=0, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = 'Fri, 01 Jan 1990 00:00:00 GMT'
  end

  def create_selected_user_cookies
    cookies.permanent[:duubiz_cotacao_selected_user_id] = current_user.id
    cookies.permanent[:duubiz_cotacao_selected_user_name] = current_user.name
  end

  def destroy_selected_user_cookies
    cookies.delete :duubiz_cotacao_selected_user_id
    cookies.delete :duubiz_cotacao_selected_user_name
  end

end
