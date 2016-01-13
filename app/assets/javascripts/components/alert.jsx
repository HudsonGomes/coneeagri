var Alert = React.createClass({

  propTypes: {
    message: React.PropTypes.string,
    active: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      message: '',
      active: false
    }
  },

  getInitialState: function() {
    return {
      active: this.props.active
    }
  },

  render: function() {
    return (
      <div className={this.className()}>
        <span>{this.props.message}</span>
      </div>
    )
  },

  className: function() {
    return 'alert ' + this.props.type
  }

});