class RemoveColumnsFromInscricoes < ActiveRecord::Migration
  def change
    remove_column :inscricoes, :nome
    remove_column :inscricoes, :cpf
    remove_column :inscricoes, :email
    remove_column :inscricoes, :telefone
    remove_column :inscricoes, :sexo

    remove_column :inscricoes, :logradouro
    remove_column :inscricoes, :cep
    remove_column :inscricoes, :numero
    remove_column :inscricoes, :complemento
    remove_column :inscricoes, :bairro
    remove_column :inscricoes, :cidade
    remove_column :inscricoes, :estado
  end
end
