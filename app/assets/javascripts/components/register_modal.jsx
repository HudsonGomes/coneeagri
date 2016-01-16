var RegisterModal = React.createClass({

  propTypes: {
    modalId: React.PropTypes.string,
    className: React.PropTypes.string,
    registerPassword: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      modalId: 'register-modal',
      className: 'modal register-modal',
      registerPassword: true
    }
  },


  getInitialState: function() {
    return {
      errors: {}
    }
  },

  render: function() {
    return(
      <div id={this.props.modalId} className={this.props.className}>
        <div className="modal-content">
          <h4>Cadastro</h4>
          <div className='divider'></div>

          <form id='register-form' className='register-form'>
            <div className='row'>
              <h6 className='col s12' style={{'font-weight': 'bold'}}>Dados Pessoais</h6>
              <div className='input-field col l8 m8 s12'>
                <input id='attributes_name' className={this.classInputError('name')}
                       type='text' name='attributes[name]'></input>
                <label htmlFor='attributes_name'
                       className={this.classLabelError('name')}>Nome</label>
                {this.handleError('name')}
              </div>

              <div className="input-field col l4 m4 ms12">
                <select name='attributes[sexo]'>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </select>
                <label>Sexo</label>
              </div>

              <div className='input-field col l6 m12 s12'>
                <input id='attributes_birth_at' type='text' name='attributes[birth_at]'
                       className={this.classInputError('birth_at')}></input>
                <label htmlFor='attributes_birth_at'
                       className={this.classLabelError('birth_at')}>Data de Nascimento</label>
                {this.handleError('birth_at')}
              </div>

              <div className='input-field col l6 m12 s12'>
                <input id='attributes_cpf' type='text' name='attributes[cpf]'
                       className={this.classInputError('cpf')}></input>
                <label htmlFor='attributes_cpf'
                       className={this.classLabelError('cpf')}>CPF</label>
                {this.handleError('cpf')}
              </div>

              <div className='input-field col s12'>
                <input id='attributes_university' type='text' name='attributes[university]'
                       className={this.classInputError('university')}></input>
                <label htmlFor='attributes_university'
                       className={this.classLabelError('university')}>Universidade</label>
                {this.handleError('university')}
              </div>

            </div>

            {this.renderContactForm()}

            {this.renderPasswordForm()}
          </form>

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
        this.closeModal()
      }.bind(this),
      error: function(xhr, textStatus, errorThrown) {
        this.setState({
          errors: JSON.parse(xhr.responseText)
        })
      }.bind(this)
    });
  },

  renderContactForm: function() {
    var component = [];
    component.push(
      <div className='row'>
        <h6 className='col s12' style={{'font-weight': 'bold'}}>Contato</h6>
        <div className='input-field col l6 m12 s12'>
          <input id='attributes_email' type='text'
                 name='attributes[email]' className={this.classInputError('email')} />
          <label htmlFor='attributes_email'
                 className={this.classLabelError('email')}>Email</label>
          {this.handleError('email')}
        </div>

        <div className="input-field col l6 s12">
          <input id="attributes_phone_number" type="tel" name='attributes[phone_number]'
                 className={this.classInputError('phone_number')}></input>
          <label for="attributes_phone_number"
                 className={this.classLabelError('phone_number')}>Telefone</label>
          {this.handleError('phone_number')}
        </div>
      </div>
    );

    return component;
  },

  renderPasswordForm: function() {
    var component = [];

    if (this.props.registerPassword)
      component.push(
        <div className='row'>
          <h6 className='col s12' style={{'font-weight': 'bold'}}>Acesso</h6>
          <div className='input-field col l6 m12 s12'>
            <input id='attributes_password' type='password'
                   className={this.classInputError('password')}
                   name='attributes[password]'></input>
            <label htmlFor='attributes_password'
                   className={this.classLabelError('password')}>Senha</label>
            {this.handleError('password')}
          </div>

          <div className='input-field col l6 m12 s12'>
            <input id='attributes_password_confirmation' type='password'
                   className={this.classInputError('password')}
                   name='attributes[password_confirmation]'></input>
            <label htmlFor='attributes_password_confirmation'
                   className={this.classLabelError('password_confirmation')}>Confirmar Senha</label>
            {this.handleError('password_confirmation')}
          </div>
        </div>
      );

    return component;
  },

  classInputError: function(input) {
    var errors = this.state.errors;
    if (!!errors[input]) {
      return 'input-with-errors'
    }
  },

  classLabelError: function(input) {
    var errors = this.state.errors;
    if (!!errors[input]) {
      return 'label-with-errors'
    }
  },

  handleError: function(input) {
    var component = [];
    var errors = this.state.errors;

    if (!!errors[input])
      component.push(<span className='text-error'>{errors[input]}</span>);

    return component;
  },

  closeModal: function() {
    $('.register-modal').closeModal()
  }

});