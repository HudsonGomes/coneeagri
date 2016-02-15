class Inscricao < ActiveRecord::Base
  belongs_to :user
  belongs_to :pacote
  has_many :inscricao_minicursos
  has_many :minicursos, through: :inscricao_minicursos
  has_one :technical_visit

  validates :tamanho_camisa, inclusion: { in: ['P', 'M', 'G', 'GG'] }

  delegate :name, to: :user, prefix: true
  delegate :nome, to: :pacote, prefix: true

  def confirmed
    self.paga
  end

  def price
    pacote = self.pacote
    if pacote.numero_id == 1
      if pacote.available_qtd_1 > 0
        return pacote.valor_lote_1
      elsif pacote.available_qtd_2 > 0
        return pacote.valor_lote_2
      elsif pacote.available_qtd_3 > 0
        return pacote.valor_lote_3
      end
    else
      pacote.valor_lote_1
    end
  end
end