class AddReferenceToTechnicalVisitsInInscricoes < ActiveRecord::Migration
  def change
    add_reference :inscricoes, :technical_visit, index: true
  end
end
