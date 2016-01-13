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

  componentDidMount: function() {
    this.loadData();
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
    var component = [];
    component.push(<UserForm />);

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