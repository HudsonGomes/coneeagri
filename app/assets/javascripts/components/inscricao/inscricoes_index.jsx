var InscricoesIndex = React.createClass({

  PropTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: 'filter'
    }
  },

  getInitialState: function() {
    return {
      inscricoes: []
    }
  },

  componentDidMount: function() {
    this.loadInscricoes();
    $('select').material_select();
    $('.collapsible').collapsible({
      accordion: false
    });
  },

  render: function() {
    return (
      <div>
        {this.renderFilters()}
        <div className='divider'></div>
        {this.renderTable()}
      </div>
    )
  },

  renderFilters: function() {
    return (
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header"><i className="material-icons">filter_list</i>Filtrar</div>
          <div className="collapsible-body">
            <div className="row">
              <div className="col s5">
                <div className="input-field">
                  <input id="name" type="text" />
                  <label htmlFor="name">Nome</label>
                </div>
              </div>
              <div className="col s4">
                <div className="input-field col s12">
                  <select>
                    <option value="" disabled selected>Selecione o Pacote</option>
                    <option value="1">Pacote Completo</option>
                    <option value="2">Pacote sem Alojamento</option>
                    <option value="3">Pacote Acadêmico</option>
                  </select>
                  <label>Pacote</label>
                </div>
              </div>

              <div className="col s3">
                <div className="input-field col s12">
                  <select>
                    <option value="" disabled selected>Status da Inscrição</option>
                    <option value="1">Aguardando Pagamento</option>
                    <option value="2">Em Análise</option>
                    <option value="3">Paga</option>
                    <option value="4">Cancelada</option>
                  </select>
                  <label>Status da Inscrição</label>
                </div>
              </div>

              <div className="col s3">
                <div className="input-field col s12">
                  <select>
                    <option value="" disabled selected>Selecione a Camisa</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                    <option value="GG">GG</option>
                  </select>
                  <label>Tamanho da Camisa</label>
                </div>
              </div>
            </div>

            <div className="action-button">
              <button className='btn'>Filtrar</button>
            </div>
          </div>
        </li>
      </ul>
    )
  },

  renderTable: function() {
    var component = [];
    var inscricoes = this.state.inscricoes;

    if (inscricoes.length == 0) {
      component.push(<span>Nenhuma inscrição efetuada</span>);
    } else {
      component.push(this.renderTableInscricoes());
    }

    return component;
  },

  renderTableInscricoes: function() {
    return (
      <table>
        <thead>
          <th>Nome</th>
          <th>Pacote</th>
          <th>Camisa</th>
          <th>Status</th>
        </thead>
        <tbody>
          {this.renderInscricao()}
        </tbody>
      </table>
    )
  },

  renderInscricao: function() {
    var component = [];
    var inscricoes = this.state.inscricoes;

    for (var i = 0; i < inscricoes.length; i++) {
      component.push(
        <InscricaoItem key={'inscricao__item'+ i} inscricao={inscricoes[i]} />
      )
    }

    return component;
  },

  loadInscricoes: function() {
    $.ajax({
      url: '/inscricoes',
      method: 'GET',
      dataType: 'json',
      data: '',
      success: function(data){
        this.onSuccess(data.inscricoes);
      }.bind(this)
    })
  },

  onSuccess: function(inscricoes) {
    this.setState({
      inscricoes: inscricoes
    })
  }

});