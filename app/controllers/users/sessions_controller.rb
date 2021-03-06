class Users::SessionsController < Devise::SessionsController
# before_filter :configure_sign_in_params, only: [:create]
  skip_before_filter :verify_authenticity_token
  respond_to :html, :json
  # GET /resource/sign_in
   def new
     super
   end

  # POST /resource/sign_in
   def create
     self.resource = warden.authenticate!(auth_options)
     set_flash_message(:notice, :signed_in) if is_flashing_format?
     sign_in(resource_name, resource)
     yield resource if block_given?
     respond_with resource, location: after_sign_in_path_for(resource)
   end

  # DELETE /resource/sign_out
   def destroy
     signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
     set_flash_message :notice, :signed_out if signed_out && is_flashing_format?
     yield if block_given?
     redirect_to root_path
   end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.for(:sign_in) << :attribute
  # end
end
