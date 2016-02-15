class AddColumnNumeroIdInTechnicalVisit < ActiveRecord::Migration
  def change
    add_column :technical_visits, :numero_id, :integer
  end
end
