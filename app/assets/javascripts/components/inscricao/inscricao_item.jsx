var InscricaoItem = React.createClass({

  PrpTypes: {
    inscricao: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      inscricao: null
    }
  },

  render: function() {
    var inscricao = this.props.inscricao;

    if (!inscricao)
      return '';

    return (
      <tr>
        <td>{inscricao.user_name}</td>
        <td>{inscricao.package_name}</td>
        <td>{inscricao.shirt_size}</td>
        <td>{inscricao.confirmed}</td>
      </tr>
    )
  }

});