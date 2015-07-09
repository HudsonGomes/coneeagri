class CreateInfraestruturas < ActiveRecord::Migration
  def change
    create_table :infraestruturas do |t|
      t.string :nome
      t.string :descricao

      t.timestamps
    end
  end
end
