class AddReferenceToPacoteInInscricoes < ActiveRecord::Migration
  def change
    add_reference :inscricoes, :pacote, index: true
  end
end
