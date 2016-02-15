var SelectPackage = React.createClass({

  PropTypes: {
    onSelectPackage: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      onSelectPackage: function() { return null }
    }
  },

  getInitialState: function() {
    return {
      packages:[]
    }
  },

  componentDidMount: function() {
    this.loadPackages();
  },

  render: function() {
    return (
      <div className='select-packages'>
          {this.renderPackages()}
      </div>
    )
  },

  renderPackages: function() {
    var component = [];
    var packages = this.state.packages;

    for (var i = 0; i < packages.length; i++) {
      var package = packages[i];
      component.push(
        <Package
          packageId={package.package_id}
          packageName={package.nome}
          packageDescription={package.descricao}
          packageValue={package.valor}
          onHandleSelectPackage={this.props.onSelectPackage}/>
      )
    }

    return component;
  },

  renderCompletePackage: function() {
    var component = [];
    component.push(
      <Package packageName='Pacote Completo'
        packageDescription='O Pacote Completo oferece acesso ao alojamento,
        incluindo almoço e jantar de segunda à sexta, participação em um minicurso, uma visita técnica,
        acesso às palestras, acesso Encontro das Entidades Estudantis da Engenharia Agrícola e
        Engenharia Agrícola e Ambiental (Reunião Feeagri), direito de participação da Mostra de
        Iniciação Científica, par ticipação no Desafiando Engenheiros, acesso ao transporte e
        aos 7 eventos culturais.'
      />
    );

    return component;
  },

  renderPackageWithoutAccommodation: function() {
    var component = [];
    component.push(
      <Package packageName='Pacote sem Alojamento'
        packageDescription='O Pacote Sem Alojamento oferece participação em um minicurso,
        uma visita técnica, acesso às palestras, acesso Encontro das Entidades Estudantis da Engenharia
        Agrícola e Engenharia Agrícola e Ambiental (Reunião Feeagri), direito de participação da
        Mostra de Iniciação Científica, participação no Desafian do Engenheiros e aos 7 eventos culturais.'
      />
    );

    return component;
  },

  renderAcademicPackage: function() {
    var component = [];
    component.push(
      <Package packageName='Pacote Acadêmico'
        packageDescription='O Pacote Acadêmico oferece participação em um minicurso,
        uma visita técnica, acesso às palestras, acesso ao Encontro das Entidades Estudantis da
        Engenharia Agrícola e Engenharia Agrícola e Ambiental (Reunião Feeagri), direito de
        participação da Mostra de Iniciação Científica, participação no Desafian do Engenheiros.'
      />
    );

    return component;
  },

  loadPackages: function() {
    $.ajax({
      url: '/pacotes',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        this.setState({
          packages: data.packages
        })
      }.bind(this)
    })
  }

});