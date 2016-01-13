class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.datetime :birth_at
      t.string :sexo
      t.string :phone_number
      t.boolean :admin
      t.string :cpf

      t.timestamps
    end
  end
end
