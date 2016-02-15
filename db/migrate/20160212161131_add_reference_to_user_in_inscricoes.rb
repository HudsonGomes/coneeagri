class AddReferenceToUserInInscricoes < ActiveRecord::Migration
  def change
    add_reference :inscricoes, :user, index: true
  end
end
