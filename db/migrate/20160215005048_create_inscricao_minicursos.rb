class CreateInscricaoMinicursos < ActiveRecord::Migration
  def change
    create_table :inscricao_minicursos do |t|
      t.belongs_to :inscricao
      t.belongs_to :minicurso

      t.timestamps
    end
  end
end
