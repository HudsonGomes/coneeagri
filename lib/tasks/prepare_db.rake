namespace :prepare_db do

  desc 'Prepara o banco com minicursos e visitas técnicas'
  task :prepare => :environment do
    create_minicursos
    create_technical_visits
  end

  def create_minicursos
    Minicurso.destroy_all

    minicursos = Minicurso.minicurso_instances
    minicursos.each do |minicurso_attributes|
      Minicurso.create!(minicurso_attributes)
    end
  end

  def create_technical_visits
    TechnicalVisit.destroy_all

    technical_visits = TechnicalVisit.technical_visit_instances
    technical_visits.each do |tv_attributes|
      TechnicalVisit.create!(tv_attributes)
    end
  end

end