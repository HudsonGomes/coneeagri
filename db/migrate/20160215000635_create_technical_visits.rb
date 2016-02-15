class CreateTechnicalVisits < ActiveRecord::Migration
  def change
    create_table :technical_visits do |t|
      t.string :name
      t.datetime :start_at
      t.datetime :finish_at
      t.integer :total_qtd
      t.integer :available_qtd

      t.timestamps
    end
  end
end
