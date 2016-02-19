class ChangeColumnLoteInInscricao < ActiveRecord::Migration
  def change
    change_column :inscricoes, :lote, :integer
  end
end
