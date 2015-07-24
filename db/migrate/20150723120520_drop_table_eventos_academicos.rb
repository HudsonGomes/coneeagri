class DropTableEventosAcademicos < ActiveRecord::Migration
  def change
    drop_table :eventos_academicos
  end
end
