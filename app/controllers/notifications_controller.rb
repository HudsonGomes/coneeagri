class NotificationsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create

  def create
    transaction = PagSeguro::Transaction.find_by_code(params[:notificationCode])

    if transaction.errors.empty?
      inscricao_id = transaction.reference
      inscricao = Inscricao.find(inscricao_id)

      if transacion.status == 3
        ActiveRecord::Base.transaction do
          # Update Pacote
          pacote = inscricao.pacote
          if pacote.numero_id == 1
            available = pacote.aPavailable_qtd_1 - 1
            pacote.update_attributes({available_qtd_1: available})
          end

          # Update Technical Visit
          technical_visit = inscricao.technical_visit
          if technical_visit
            available = technical_visit.available_qtd - 1
            technical_visit.update_attributes({available_qtd: available})
          end

          # Update Minicursos
          minicursos = inscricao.minicursos
          if minicursos.any?
            minicursos.each do |minicurso|
              available = minicurso.available_qtd - 1
              minicurso.update_attributes({available_qtd: available})
            end
          end

        end
      end

      inscricao.update_attributes({status: transaction.status, started_at: transaction.date})
    end

    render nothing: true, status: 200
  end
end