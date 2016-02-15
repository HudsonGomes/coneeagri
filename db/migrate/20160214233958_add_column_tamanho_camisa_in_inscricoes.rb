class AddColumnTamanhoCamisaInInscricoes < ActiveRecord::Migration
  def change
    add_column :inscricoes, :tamanho_camisa, :string
  end
end
