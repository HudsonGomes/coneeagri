class MinicursosController < ApplicationController

  def index
    @minicursos = Minicurso.all
    minicursos = MinicursoSerializer.new(@minicursos).as_list

    render json: minicursos
  end

end