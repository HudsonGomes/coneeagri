class DropTableEventosCulturais < ActiveRecord::Migration
  def change
    drop_table :eventos_culturais
  end
end
