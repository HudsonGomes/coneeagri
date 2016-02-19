class NotificationsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :create

  def create
    transaction = PagSeguro::Transaction.find_by_notification_code(params[:notificationCode])

    if transaction.errors.empty?
      inscricao_id = transaction.reference
      inscricao = Inscricao.find(inscricao_id)


      if (inscricao.status.nil?)
        ActiveRecord::Base.transaction do
          # Update Pacote
          pacote = inscricao.pacote
          if pacote.numero_id == 1
            available = pacote.available_qtd_2 - 1
            pacote.update_attributes({available_qtd_2: available})
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

      if (transaction.status.id == '7')
        # Update Technical Visit
        technical_visit = inscricao.technical_visit
        if technical_visit
          available = technical_visit.available_qtd + 1
          technical_visit.update_attributes({available_qtd: available})
        end

        # Update Minicursos
        minicursos = inscricao.minicursos
        if minicursos.any?
          minicursos.each do |minicurso|
            available = minicurso.available_qtd + 1
            minicurso.update_attributes({available_qtd: available})
          end
        end
      end

      inscricao.update_attributes({status: transaction.status.id})
    end

    render nothing: true, status: 200
  end
end