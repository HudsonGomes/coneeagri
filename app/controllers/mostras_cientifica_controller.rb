class MostrasCientificaController < ApplicationController

  def index
  end

  def download_edital
    send_file(
        "#{Rails.root}/public/IC-base-do-edital-novo.pdf",
        :disposition => 'inline',
        filename: "Edital.pdf",
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

  def download_resumo_extendido
    send_file(
        "#{Rails.root}/public/resumo-extendido-modelo.pdf",
        :disposition => 'inline',
        filename: "Resumo do Modelo.pdf",
        type: "application/pdf",
        :x_sendfile => true
    )
  end

  def download_modelo_banner
    send_file(
      "#{Rails.root}/public/modelo-de-banner.pdf",
      :disposition => 'inline',
      filename: "Modelo de Banner.pdf",
      type: "application/pdf",
      :x_sendfile => true
    )
  end

  def download_artigos_selecionados
    send_file(
      "#{Rails.root}/public/artigos-selecionados.pdf",
      :disposition => 'inline',
      filename: "Artigos Selecionados.pdf",
      type: "application/pdf",
      :x_sendfile => true
    )
  end

  def download_errata_edital
    send_file(
      "#{Rails.root}/public/errata01-datas-artigos.pdf",
      :disposition => 'inline',
      filename: "Errata 01 - Datas dos Artigos.pdf",
      type: "application/pdf",
      :x_sendfile => true
    )
  end

end