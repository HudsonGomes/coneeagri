var Package = React.createClass({

  PropTypes: {
    className: React.PropTypes.string,
    packageName: React.PropTypes.string,
    packageDescription: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: 'package',
      packageName: 'Pacote Completo',
      packageDescription: ''
    }
  },

  render: function() {
    return (
      <div className={this.props.className}>
        {this.renderCheckbox()}
        {this.renderDescription()}
      </div>
    )
  },

  renderCheckbox: function() {
    var component = [];
    component.push(
      <p>
        <input type="checkbox" id={this.packageId()} name={this.packageName()} />
        <label htmlFor={this.packageId()} className='package-name'>{this.props.packageName}</label>
      </p>
    );

    return component;
  },

  renderDescription: function() {
    var component = [];
    component.push(
      <p className='package-description'>
        {this.props.packageDescription}
      </p>
    );

    return component;
  },

  packageId: function() {
    return this.props.packageName.replace(' ', '-').toLowerCase();
  },

  packageName: function() {
    return 'package['+this.packageId()+']';
  },

});