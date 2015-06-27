class EventosAcademicos < ActiveRecord::Base

  validates :nome, :descricao, :data, presence: true

end