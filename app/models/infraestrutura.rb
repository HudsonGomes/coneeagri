class Infraestrutura < ActiveRecord::Base
  validates :nome, :descricao, presence: true

end