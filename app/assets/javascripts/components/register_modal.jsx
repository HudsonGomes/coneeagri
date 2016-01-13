var RegisterModal = React.createClass({

  propTypes: {
    modalId: React.PropTypes.string,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      modalId: 'register-modal',
      className: 'modal register-modal'
    }
  },

  render: function() {
    return(
      <div id={this.props.modalId} className={this.props.className}>
        <div className="modal-content">
          <h4>Cadastro</h4>
          <div className='divider'></div>
          <UserForm />
        </div>
        <div className="modal-footer">
          <a onClick={this.registerUser}
             className="modal-action waves-effect waves-green btn-flat">Cadastrar</a>
          <a href="#!" onClick={this.closeModal} className=" modal-action modal-close waves-effect waves-green btn-flat">Cancelar</a>
        </div>
      </div>
    )
  },

  registerUser: function() {
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: "JSON",
      data: $('#register-form').serialize(),
      success:function(data, textStatus) {
        alert('Um email foi enviado para você. ' +
          'Favor confirmar seu cadastro através do link presente no email.');
      },
      error: function(xhr, textStatus, errorThrown) {
        this.setState({
          errors: JSON.parse(xhr.responseText)
        })
      }.bind(this)
    });
  },

  closeModal: function() {
    $('.register-modal').closeModal()
  }

});