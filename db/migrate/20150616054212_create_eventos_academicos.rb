class CreateEventosAcademicos < ActiveRecord::Migration
  def change
    create_table :eventos_academicos do |t|
      t.string :nome
      t.string :descricao
      t.string :data

      t.timestamps
    end
  end
end
