class PackagesSerializer
  attr_accessor :packages, :package

  def initialize(packages)
    @packages = packages
  end

  def as_list
    return if packages.nil?
    serialized_packages = { 'packages' => [] }
    packages.each do |package|
      self.package = package
      serialized_packages['packages'] << as_details
    end

    serialized_packages
  end

  def as_details
    return if package.nil?
    serialized_package = {}
    serialized_package['package_id'] = package.id
    serialized_package['nome'] = package.nome
    serialized_package['descricao'] = package.descricao
    serialized_package['valor'] = value(package)

    serialized_package
  end

  private

  def value(package)
    if package.numero_id == 1
      if package.available_qtd_1 > 0
        package.valor_lote_1
      elsif package.available_qtd_2 > 0
        package.valor_lote_2
      else
        package.valor_lote_3
      end
    else
      package.valor_lote_1
    end
  end

end