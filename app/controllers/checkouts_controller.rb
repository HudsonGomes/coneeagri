class CheckoutsController < ApplicationController
  before_filter :require_login

  def create
    ActiveRecord::Base.transaction do
      begin
        inscricao = InscricaoManager.create(current_user, params)

        payment = PagSeguro::PaymentRequest.new

        payment.reference = inscricao.id
        payment.notification_url = 'www.coneeagri.com.br/notifications'
        payment.redirect_url = 'www.coneeagri.com.br'

        payment.items << {
          id: inscricao.id,
          description: "Coneeagri 2016 - #{inscricao.pacote.nome}" ,
          amount: inscricao.price
        }

        payment.extra_params << { extraAmount: (0.40 + inscricao.price*(4.2/100)).round(2).to_s }

        payment.sender = {
          name: current_user.name,
          email: current_user.email,
          cpf: current_user.cpf.gsub('.', '').gsub('-', ''),
          phone: {
            area_code: current_user.phone_number[1]+current_user.phone_number[2],
            number: current_user.phone_number.partition(' ').last.gsub('-', '')
          }
        }

        response = payment.register
        if response.errors.any?
          inscricao.destroy
          render json: {errors: response.errors.join("\n")}, status: :unprocessable_entity
        else
          render js: "window.location = '#{response.url}'"
        end

      rescue InvalidRecordError => e
        render json: {errors: e.message}, status: :unprocessable_entity
      end
    end
  end

end