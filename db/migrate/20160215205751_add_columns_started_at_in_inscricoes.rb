class AddColumnsStartedAtInInscricoes < ActiveRecord::Migration
  def change
    add_column :inscricoes, :started_at, :datetime
  end
end
