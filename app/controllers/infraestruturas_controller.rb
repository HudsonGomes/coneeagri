class InfraestruturasController < ApplicationController

  def index
    @infraestruturas = Infraestrutura.all
  end

end