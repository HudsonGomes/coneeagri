class CreatePacotes < ActiveRecord::Migration
  def change
    create_table :pacotes do |t|
      t.string :nome, null: false
      t.text :descricao, null: false
      t.decimal :valor_lote_1
      t.decimal :valor_lote_2
      t.decimal :valor_lote_3
      t.integer :qtd_lote_1
      t.integer :qtd_lote_2
      t.integer :qtd_lote_3

      t.timestamps
    end
  end
end
