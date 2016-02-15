class InscricoesSerializer# < ActiveType::Object
  attr_accessor :inscricoes, :inscricao

  def initialize(inscricoes)
    @inscricoes = inscricoes
  end

  def as_list
    return if inscricoes.nil?
    serialized_inscricoes = { 'inscricoes' => [] }
    inscricoes.each do |inscricao|
      self.inscricao = inscricao
      serialized_inscricoes['inscricoes'] << as_details
    end

    serialized_inscricoes
  end

  def as_details
    return if inscricao.nil?
    serialized_inscricao = {}
    serialized_inscricao['user_name'] = inscricao.user_name
    serialized_inscricao['package_name'] = inscricao.pacote_nome
    serialized_inscricao['shirt_size'] = inscricao.tamanho_camisa
    serialized_inscricao['status'] = inscricao.status

    serialized_inscricao
  end
end