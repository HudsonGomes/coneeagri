class AddColumnNumeroIdInPackage < ActiveRecord::Migration
  def change
    add_column :pacotes, :numero_id, :integer
  end
end
