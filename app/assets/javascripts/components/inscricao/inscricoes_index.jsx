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
              <div className="col s4">
                <div className="input-field">
                  <input id="name" type="text" />
                  <label htmlFor="name">Nome</label>
                </div>
              </div>
              <div className="col s4">
                <div className="input-field">
                  <input id="name" type="text" />
                  <label htmlFor="name">Pacote</label>
                </div>
              </div>

              <div className="col s4">

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
          <th>Confirmada?</th>
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