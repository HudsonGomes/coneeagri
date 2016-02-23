class PacotesController < ApplicationController

  def index
    @pacotes = Pacote.all.order(:created_at)

    respond_to do |format|
      format.html
      format.json { render json: PackagesSerializer.new(@pacotes).as_list }
    end
  end

end