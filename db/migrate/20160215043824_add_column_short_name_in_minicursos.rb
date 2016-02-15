class AddColumnShortNameInMinicursos < ActiveRecord::Migration
  def change
    add_column :minicursos, :short_name, :string
  end
end
