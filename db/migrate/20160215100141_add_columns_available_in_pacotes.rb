class AddColumnsAvailableInPacotes < ActiveRecord::Migration
  def change
    add_column :pacotes, :available_qtd_1, :integer
    add_column :pacotes, :available_qtd_2, :integer
    add_column :pacotes, :available_qtd_3, :integer
  end
end
