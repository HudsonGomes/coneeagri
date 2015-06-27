class CreateEventosCulturais < ActiveRecord::Migration
  def change
    create_table :eventos_culturais do |t|
      t.string :nome
      t.string :descricao
      t.string :data

      t.timestamps
    end
  end
end
