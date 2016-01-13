var AcceptanceTerm = React.createClass({

  PropTypes: {
    modalId: React.PropTypes.string,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      modalId: 'acceptance-modal',
      className: 'modal acceptance-modal'
    }
  },

  render: function() {
    return (
      <div id={this.props.modalId} className={this.props.className}>
        <div className="modal-content">
          <h4>Termo de Aceitação</h4>
          <div className='divider'></div>

          <div>
            <p>Declaro que aceito as condições para participar do Coneeagri</p>
          </div>

        </div>
        <div className="modal-footer">
          <a href="#!" onClick={this.closeModal}
             className=" modal-action modal-close waves-effect waves-green btn-flat">Fechar</a>
        </div>
      </div>
    )
  },

  closeModal: function() {
    $('.acceptance-modal').closeModal();
  }

});