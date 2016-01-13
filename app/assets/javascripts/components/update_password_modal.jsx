var UpdatePasswordModal = React.createClass({

  propTypes: {
    modalId: React.PropTypes.string,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      modalId: 'update-password',
      className: 'modal update-password'
    }
  },

  render: function() {
    return (
      <div id={this.props.modalId} className={this.props.className}>
        <div className="modal-content">

          <h5>Trocar Senha</h5>

          <div className='row'>
            <div className="input-field col s12">
              <input name='user[password]' id='user_password' />
              <label htmlFor="user_password">Senha</label>
            </div>

            <div className="input-field col s12">
              <input name='user[password_confirmation]' id='user_password_confirmation' />
              <label htmlFor="user_password_confirmation">Confirmação de Senha</label>
            </div>
          </div>

        </div>
        <div className="modal-footer">
          <a className='waves-effect waves-green btn'>Atualizar</a>
          <a href="#!" onClick={this.closeModal}
             className=" modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
        </div>
      </div>
    )
  },

  closeModal: function() {
    $('#update-password').closeModal();
  }

})