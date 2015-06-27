class MostrasCientificaController < ApplicationController

  def index
  end

  def download_edital
    send_file(
        "#{Rails.root}/public/IC-base-do-edital.pdf",
        :disposition => 'inline',
        filename: "IC-base-do-edital.pdf",
        type: "application/pdf",
        :x_sendfile => true
    )
  end

  def download_formulario
    send_file(
        "#{Rails.root}/public/Formulário de Inscrição para Mostra de Iniciação Científica do Coneeagri 2016.docx",
        filename: "Formulário de Inscrição para Mostra de Iniciação Científica do Coneeagri 2016.docx",
        type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    )
  end
end