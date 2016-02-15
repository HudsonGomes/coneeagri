class Inscricao < ActiveRecord::Base
  belongs_to :user
  belongs_to :pacote

  validates :tamanho_camisa, inclusion: ['P', 'M', 'G', 'GG']

  delegate :name, to: :user, prefix: true
  delegate :nome, to: :pacote, prefix: true

  def confirmed
    self.paga
  end
end