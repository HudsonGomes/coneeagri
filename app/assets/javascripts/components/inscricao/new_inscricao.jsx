var NewInscricao = React.createClass({

  PropTypes: { },

  getDefaultProps: function() { },

  getInitialState: function() {
    return {
      package:  null,
      firstMinicurso: null,
      secondMinicurso: null,
      technicalVisit: null,
      shirtSize: null,
      error: null,
      agreeTerms: null,
      loading: false
    }
  },

  componentDidMount: function() {
    $('.collapsible').collapsible({
      accordion : false
    });
  },

  render: function() {
    return (
      <div className='new-inscricao'>
        {this.renderErrors()}
        {this.renderSelectPackages()}
        {this.renderSelectVisitaTecnica()}
        {this.renderSelectShirtSize()}
        {this.renderResume()}
      </div>
    )
  },

  renderErrors: function() {
    if (!!this.state.error) {
      return (
        <div className='errors'>
          <span>{this.state.error}</span>
        </div>
      )
    }
  },

  renderSelectPackages: function() {
    return (
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header">1 - Clique para selecionar o Pacote</div>
          <div className="collapsible-body">
            <SelectPackage
              onSelectPackage={this.handleSelectPackage} />
          </div>
        </li>
      </ul>
    );
  },

  renderSelectMinicursos: function() {
    return (
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header">2 - Clique para selecionar o(s) minicurso(s)</div>
          <div className="collapsible-body">
            <SelectMinicursos
              onSelectFirstMinicurso={this.handleSelectFirstMinicurso}
              onSelectSecondMinicurso={this.handleSelectSecondMinicurso}/>
          </div>
        </li>
      </ul>
    )
  },

  renderSelectVisitaTecnica: function() {
    return (
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header">2 - Clique para selecionar a visita técnica</div>
          <div className="collapsible-body">
            <SelectVisitaTecnica
              onSelectTechnicalVisit={this.handleSelectTechnicalVisit} />
          </div>
        </li>
      </ul>
    )
  },

  renderSelectShirtSize: function() {
    return (
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header">3 - Clique para selecionar o tamanho de sua camisa</div>
          <div className="collapsible-body">
            <SelectShirtSize
              onSelectShirdSize={this.handleSelectShirtSize} />
          </div>
        </li>
      </ul>
    )
  },

  renderResume: function() {
    return (
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header">4 - Clique para finalizar a inscrição</div>
          <div className="collapsible-body">
            <InscricaoResumo
              handleConfirmInscricao={this.handleConfirmInscricao}
              handleAgreeTerms={this.handleAgreeTerms}
              loading={this.state.loading}/>
          </div>
        </li>
      </ul>
    )
  },

  handleSelectPackage: function(value) {
    this.setState({
      package: value
    })
  },

  handleSelectFirstMinicurso: function(value) {
    this.setState({
      firstMinicurso: value
    })
  },

  handleSelectSecondMinicurso: function(value) {
    this.setState({
      secondMinicurso: value
    })
  },

  handleSelectTechnicalVisit: function(value) {
    this.setState({
      technicalVisit: value
    })
  },

  handleConfirmInscricao: function() {
    this.setState({
      loading: true
    });

    $.ajax({
      url: '/checkouts',
      method: 'POST',
      data: {
        package: this.state.package,
        first_minicurso:this.state.firstMinicurso,
        second_minicurso:this.state.secondMinicurso,
        technical_visit: this.state.technicalVisit,
        tamanho_camisa: this.state.shirtSize,
        agree_terms: this.state.agreeTerms
      },
      success: function() {
        this.setState({
          loading: false
        });
      }.bind(this),
      error: function(xhr, status) {
        this.setState({
          error: xhr.responseJSON.errors,
          loading: false
        });
        $("html, body").animate({ scrollTop: 0 }, "slow");
      }.bind(this)
    })
  },

  handleAgreeTerms: function(value) {
    this.setState({
      agreeTerms: value
    })
  },

  handleSelectShirtSize: function(value) {
    this.setState({
      shirtSize: value
    })
  }

})