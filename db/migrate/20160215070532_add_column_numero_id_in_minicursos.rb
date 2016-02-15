class AddColumnNumeroIdInMinicursos < ActiveRecord::Migration
  def change
    add_column :minicursos, :numero_id, :integer
  end
end
