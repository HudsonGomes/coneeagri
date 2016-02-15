class MinicursosSerializer
  attr_accessor :minicursos, :minicurso

  def initialize(minicursos)
    @minicursos = minicursos
  end

  def as_list
    return if minicursos.nil?
    serialized_minicursos = { 'minicursos' => [] }
    minicursos.each do |minicurso|
      self.minicurso = minicurso
      serialized_minicursos['minicursos'] << as_details
    end

    serialized_minicursos
  end

  def as_details
    return if minicurso.nil?
    serialized_minicurso = {}
    serialized_minicurso[minicurso.short_name] = minicurso.available_qtd

    serialized_minicurso
  end

end