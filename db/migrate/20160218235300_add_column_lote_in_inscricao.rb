class AddColumnLoteInInscricao < ActiveRecord::Migration
  def change
    add_column :inscricoes, :lote, :string
  end
end
