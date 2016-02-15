class TechnicalVisit < ActiveRecord::Base

  has_many :inscricaos

  def self.technical_visit_instances
    technical_visit_1 = {
      name: 'Visita Técnica 1 - Embrapa Solos (Jardim Botânico RJ)',
      start_at: DateTime.new(16, 4, 20, 9),
      finish_at: nil,
      total_qtd: 40,
      available_qtd: 40,
      numero_id: 1
    }

    technical_visit_2 = {
      name: 'Visita Técnica 2 - Paty de Alferes (Produção de tomate + Visita ao Museu da Cachaça)',
      start_at: DateTime.new(16, 4, 20, 9),
      finish_at: nil,
      total_qtd: 80,
      available_qtd: 80,
      numero_id: 2
    }

    [technical_visit_1, technical_visit_2]
  end

end