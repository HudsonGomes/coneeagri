var StepWizardMenuItem = React.createClass({

  propTypes: {
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      title: '',
      active: false
    }
  },

  render: function(){
    return (
      <li className={this.className()}><span>{this.props.title}</span></li>
    )
  },

  className: function() {
    var active = this.props.active ? 'active' : '';
    return (active + ' ' + 'step-wizard-menu-item');
  }

});