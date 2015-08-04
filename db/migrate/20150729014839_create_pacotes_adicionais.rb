class CreatePacotesAdicionais < ActiveRecord::Migration
  def change
    create_table :pacotes_adicionais do |t|
      t.string :nome, null: false
      t.text :descricao, null: false
      t.decimal :valor
      t.integer :qtd

      t.timestamps
    end
  end
end
