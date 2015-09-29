var LoginHeader = React.createClass({

  propTypes: {
    text: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      text: 'Login'
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
      <li className={this.props.className}>
        <a onClick={this.handleClick}><span>{this.props.text}</span></a>
        <Login {...this.props} active={this.state.active} />
      </li>
    )
  }

});

var Login = React.createClass({

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      className: 'box-login z-depth-1'
    }
  },

  handleSubmit: function(){
    alert('Submit')
  },

  handleRegister: function(){
    alert('Register')
  },

  render: function(){
    var display = this.props.active ? 'block' : 'none';

    return (
      <div className={this.props.className} style={{display: display}}>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="text" class="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" class="validate" />
            <label htmlFor="password">Senha</label>
          </div>
        </div>

        <button onClick={this.handleSubmit} className='waves-effect waves-light btn btn-small'>Login</button>
        <button onClick={this.handleRegister} className='waves-effect waves-light btn btn-small'>Cadastrar</button>
      </div>
    )
  }

});