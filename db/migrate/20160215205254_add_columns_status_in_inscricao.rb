class AddColumnsStatusInInscricao < ActiveRecord::Migration
  def change
    add_column :inscricoes, :status, :integer
  end
end
