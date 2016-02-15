var SelectVisitaTecnica = React.createClass({

  PropTypes: {
    onSelectTechnicalVisit: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      onSelectTechnicalVisit: function() { return null }
    }
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.TechnicalVisitBox)).on('change',this.handleSelectChange);
  },

  render: function() {
    return (
      <div className='row select-minicursos'>
        <div className='select-minicursos col s12'>
          {this.renderInformation()}
          {this.renderVisitaTecnica()}
        </div>
      </div>
    )
  },

  renderInformation: function() {
    return (
      <div className='minicurso__information information'>
        <span>Somente 1 visita técnica pode ser selecionada</span>
      </div>
    )
  },

  renderVisitaTecnica: function() {
    return (
      <div className="input-field col s12">
        <select ref='TechnicalVisitBox'>
          <option value="" disabled selected>Selecione a Visita técnica:</option>
          <option value="1">Visita Técnica 1 - Embrapa Solos (Jardim Botânico RJ)</option>
          <option value="2">Visita Técnica 2 - Paty de Alferes (Produção de tomate + Visita ao Museu da Cachaça)</option>
        </select>
        <label>Visita Técnica</label>
      </div>
    )
  },

  handleSelectChange: function(event) {
    var value = event.currentTarget.value;
    this.props.onSelectTechnicalVisit(value);
  }

});