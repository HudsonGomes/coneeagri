class CreateInscricoes < ActiveRecord::Migration
  def change
    create_table :inscricoes do |t|
      t.string :nome
      t.string :cpf
      t.string :email
      t.string :telefone
      t.string :sexo

      t.boolean :paga

      t.string :logradouro
      t.string :cep
      t.string :numero
      t.string :complemento
      t.string :bairro
      t.string :cidade
      t.string :estado

      t.timestamps
    end
  end
end
