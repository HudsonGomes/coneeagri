var LoginHeader = React.createClass({

  propTypes: {
    text: React.PropTypes.string,
    className: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      text: 'Login',
      className: 'login-header'
    }
  },

  getInitialState: function(){
    return {
      active: false
    }
  },

  handleClick: function(){
    this.state.active = !this.state.active;
    this.forceUpdate();
  },

  render: function(){
    return (
      <li id='login-header' className={this.props.className}>
        <a onClick={this.handleClick}><span>{this.props.text}</span></a>
        <Login active={this.state.active} handleClose={this.handleClose} />
      </li>
    )
  },

  handleClose: function() {
    this.setState({
      active: false
    })
  }
});

var Login = React.createClass({

  propTypes: {
    className: React.PropTypes.string,
    handleClose: React.PropTypes.func
  },

  getDefaultProps: function(){
    return {
      className: 'box-login z-depth-1',
      handleClose: null
    }
  },

  getInitialState: function() {
    return {
      token: '',
      emailValue: '',
      passwordValue: '',
      messageError: null
    }
  },

  componentDidMount: function(e) {
    $('body').bind('click', function(e){
      this.props.handleClose();
    }.bind(this));

    $('.login-form').on('click', function(e) {
      e.stopPropagation();
    }.bind(this));

    this.setState({token: $('meta[name=csrf-token]').attr('content')})
  },

  handleRegister: function(){
    $('.register-modal').openModal();
    $('select').material_select();
    $('#attributes_birth_at').inputmask("dd/mm/yyyy");
    $('#attributes_phone_number').inputmask("(99) 9999-9999");
    $('#attributes_cpf').inputmask("999.999.999-99");
    this.props.handleClose();
  },

  handleSubmit: function() {
    $.ajax({
      url: '/users/sign_in',
      type: 'POST',
      dataType: "JSON",
      data: {
        user: {
          email: this.state.emailValue,
          password: this.state.passwordValue
        },
        authenticity_token: $('meta[name=csrf-token]').attr('content')
      },
      success:function(data, textStatus) {
        window.location.href = '/'
      },
      error: function(xhr, textStatus, errorThrown) {
        this.setState({
          messageError: 'Email ou senha inválidos'
        })
      }.bind(this)
    });
  },

  render: function(){
    var display = this.props.active ? 'block' : 'none';

    return (
      <div className={this.props.className} style={{display: display}}>
        {this.renderMessageError()}
        <form className='login-form' id='login-form' acceptCharset='UTF-8'>
          <div className='email-input'>
            <label htmlFor='user_email'>Email:</label>
            <input name='user[email]' id="user_email" type='text'
                   value={this.emailValue()} onChange={this.changeEmailValue}
              />
          </div>

          <div className='password-input'>
            <label htmlFor='user_password'>Senha:</label>
            <input name='user[password]' id="user_password" type="password"
                   value={this.state.passwordValue} onChange={this.changePasswordValue} />
          </div>
          <input name="authenticity_token" type="hidden" value={this.state.token} />
        </form>
        <div className='action-buttons'>
          <button onClick={this.handleSubmit} className='waves-effect waves-light btn btn-small'>Login</button>
          <button onClick={this.handleRegister} className='waves-effect waves-light btn btn-small'>Cadastrar</button>
        </div>
      </div>
    )
  },

  emailValue: function() {
    return this.state.emailValue;
  },

  renderMessageError: function() {
    var component = [];
    if (!!this.state.messageError) {
      component.push(
        <div className='alert-unauthorized'>
          <span>{this.state.messageError}</span>
        </div>
      )
    }

    return component;
  },

  changeEmailValue: function(event) {
    var value = event.currentTarget.value;
    this.setState({
      emailValue: value
    })
  },

  changePasswordValue: function(event) {
    var value = event.currentTarget.value;
    this.setState({
      passwordValue: value
    })
  }

});