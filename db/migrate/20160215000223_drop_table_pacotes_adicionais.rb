class DropTablePacotesAdicionais < ActiveRecord::Migration
  def change
    drop_table :pacotes_adicionais
  end
end
