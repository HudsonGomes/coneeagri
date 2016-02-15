class Minicurso < ActiveRecord::Base

  has_many :inscricao_minicursos

  def self.minicurso_instances
    minicurso_1 = {
      name: 'Minicurso 1 - Técnicas de irrigação para gramados esportivos ( Rain Bird)',
      start_at: DateTime.new(16, 4, 19, 14),
      finish_at: DateTime.new(16, 4, 19, 17),
      total_qtd: 40,
      available_qtd: 40,
      short_name: 'Minicurso 1',
      numero_id: 1
    }

    minicurso_2 = {
      name: 'Minicurso 2 - Saneamento e Drenagem Urbana',
      start_at: DateTime.new(16, 4, 19, 9),
      finish_at: DateTime.new(16, 4, 19, 17),
      total_qtd: 40,
      available_qtd: 40,
      short_name: 'Minicurso 2',
      numero_id: 2
    }

    minicurso_3 = {
      name: 'Minicurso 3 - Modelagem Fuzzi em Biossitema Animal',
      start_at: DateTime.new(16, 4, 21, 10),
      finish_at: DateTime.new(16, 4, 21, 12),
      total_qtd: 40,
      available_qtd: 40,
      short_name: 'Minicurso 3',
      numero_id: 3
    }

    minicurso_4 = {
      name: 'Minicurso 4 - Currículo como Ferramenta de Desenvolvimento Pessoal e Competitividade no Mercado',
      start_at: DateTime.new(16, 4, 21, 9),
      finish_at: DateTime.new(16, 4, 21, 12),
      total_qtd: 40,
      available_qtd: 40,
      short_name: 'Minicurso 4',
      numero_id: 4
    }

    [minicurso_1, minicurso_2, minicurso_3, minicurso_4]
  end
end