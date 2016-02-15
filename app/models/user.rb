class User < ActiveRecord::Base
  devise :database_authenticatable, :recoverable,
         :rememberable, :trackable, :validatable, :confirmable

  has_many :inscricoes

  validates :name, :cpf, :birth_at, :phone_number, presence: true
end