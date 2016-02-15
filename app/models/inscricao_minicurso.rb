class InscricaoMinicurso < ActiveRecord::Base
  belongs_to :inscricao
  belongs_to :minicurso
end