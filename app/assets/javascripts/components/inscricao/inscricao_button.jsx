var InscricaoButton = React.createClass({

  render: function() {
    return (
      <button onClick={this.handleClick} className="waves-effect waves-light btn btn-large">INSCREVA-SE</button>
    )
  },

  handleClick: function() {
    window.location.href = '/inscricoes/new'
  }

})