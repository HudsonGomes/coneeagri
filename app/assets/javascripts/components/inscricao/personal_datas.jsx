var PersonalDatas = React.createClass({

  PropTypes: {
    currentUserId: React.PropTypes.number,
    user: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      currentUserId: null,
      user: null
    }
  },

  getInitialState: function() {
    return {
      errors: {}
    }
  },

  componentDidMount: function() {
    this.loadData();
  },

  componentDidUpdate: function() {
    $('select').material_select();
    $('#attributes_birth_at').inputmask("dd/mm/yyyy");
    $('#attributes_phone_number').inputmask("(99) 99999-9999");
    $('#attributes_cpf').inputmask("999.999.999-99");
  },

  render: function() {
    return (
      <div>
        {this.renderPersonalForm()}
        {this.acceptanceTerm()}
        <AcceptanceTerm />
      </div>
    )
  },

  renderPersonalForm: function() {
    return (
      <form id='user-form' className='user-form'>
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
      </form>
    )
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

  acceptanceTerm: function() {
    var component = [];
    component.push(
      <span>
        <p>
          Declaro que aceito as condições. Para ler o termo,
            <span onClick={this.openAcceptanceModal}> clique aqui
            </span>.
        </p>
      </span>
    );

    return component;
  },

  loadData: function() {
    $.ajax({
      url: this.getUrl(),
      dataType: 'JSON',
      method: 'GET',
      success: function(data) {
        this.setState({
          user: data.user
        })
      }
    })
  },

  getUrl: function() {
    return '/user/'+this.props.currentUserId
  },

  openAcceptanceModal: function() {
    $('.acceptance-modal').openModal();
  }

});