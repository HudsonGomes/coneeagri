class Pacote < ActiveRecord::Base

  has_many :inscricoes

  PACOTES = [ PACOTE_COMPLETO = 'Pacote Completo',
              PACOTE_SEM_ALOJAMENTO = 'Pacote sem Alojamento',
              PACOTE_ACADEMICO = 'Pacote Acadêmico' ]

  def self.pacotes
    pacote_1 = {
      nome: 'Pacote Completo',
      descricao: 'O Pacote Completo oferece acesso ao alojamento,
        incluindo alimentação de segunda à sexta, participação em um minicurso,
        uma visita técnica, acesso às palestras, acesso Encontro das Entidades Estudantis da
        Engenharia Agrícola e Engenharia Agrícola e Ambiental (Reunião Feeagri), direito de participação da
        Mostra de Iniciação Científica, participação no Desafiando Engenheiros,
        acesso ao transporte e aos 7 eventos culturais.',
      valor_lote_1: 300,
      valor_lote_2: 350,
      valor_lote_3: 400,
      qtd_lote_1: 50,
      qtd_lote_2: 150,
      qtd_lote_3: 500,
      available_qtd_1: 50,
      available_qtd_2: 150,
      available_qtd_3: 500,
      numero_id: 1
    }

    pacote_2 = {
      nome: 'Pacote sem Alojamento',
      descricao: 'O Pacote Sem Alojamento oferece participação em um
        minicurso, uma visita técnica, acesso às palestras, acesso ao Encontro das
        Entidades Estudantis da Engenharia Agrícola e Engenharia Agrícola e Ambiental (Reunião Feeagri),
        direito de participação da Mostra de Iniciação Científica, participação no
        Desafiando Engenheiros e aos 7 eventos culturais.',
      valor_lote_1: 250,
      numero_id: 2
    }

    pacote_3 = {
      nome: 'Pacote Acadêmico',
      descricao: 'O Pacote Acadêmico oferece participação em um minicurso,
        uma visita técnica, acesso às palestras, acesso ao Encontro das
        Entidades Estudantis da Engenharia Agrícola e Engenharia Agrícola e
        Ambiental (Reunião Feeagri), direito de participação da Mostra de Iniciação Científica,
        participação no Desafiando Engenheiros.',
      valor_lote_1: 150,
      numero_id: 3
    }

    [pacote_1, pacote_2, pacote_3]
  end

end