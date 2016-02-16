var InscricaoResumo = React.createClass({

  PropTypes: {
    handleConfirmInscricao: React.PropTypes.func,
    handleAgreeTerms: React.PropTypes.func,
    loading: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      handleConfirmInscricao: function() { return null },
      handleAgreeTerms: function() { return null },
      loading: false
    }
  },

  render: function() {
    return (
      <div className='row inscricao-resumo'>
        <div className='col s12 terms'>
          <p>
            <input onChange={this.handleChange} type="checkbox" id="agree_terms" name='agree_terms' />
            <label htmlFor="agree_terms">Li e aceito os </label><a onClick={this.openModal}> termos de inscrição</a>
          </p>
        </div>
        <div className=' col s12 action-buttons'>
          <button className='btn' onClick={this.onHandleConfirm}>{this.buttonText()}</button>
        </div>
        <AcceptanceTerm />
      </div>
    )
  },
  buttonText: function() {
    if (!!this.props.loading) {
      return 'Carregando...';
    } else {
      return 'Realizar Inscrição';
    }
  },

  openModal: function() {
    $('#acceptance-modal').openModal();
  },

  onHandleConfirm: function() {
    this.props.handleConfirmInscricao();
  },

  handleChange: function(event) {
    var value = $(event.currentTarget).is(':checked');
    this.props.handleAgreeTerms(value);
  }

});