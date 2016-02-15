var Package = React.createClass({

  PropTypes: {
    className: React.PropTypes.string,
    packageName: React.PropTypes.string,
    packageDescription: React.PropTypes.string,
    onHandleSelectPackage: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      className: 'package',
      packageName: 'Pacote Completo',
      packageDescription: '',
      onHandleSelectPackage: function() { return null }
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
        <input onChange={this.handleSelectPackage} className='with-gap' type="checkbox" type='radio' id={this.packageId()} name='select-package' />
        <label htmlFor={this.packageId()} className='package-name'>{this.props.packageName}</label>
      </p>
    );

    return component;
  },

  renderDescription: function() {
    var component = [];
    component.push(
      <div className='description'>
        <p className='package-description'>
          {this.props.packageDescription}
        </p>
        <span className='value'><strong>Valor: </strong>{'R$ '+this.props.packageValue+'0'}</span>
      </div>
    );

    return component;
  },

  packageId: function() {
    return this.props.packageId;
  },

  packageName: function() {
    return 'package['+this.packageId()+']';
  },

  handleSelectPackage: function(event) {
    var value = event.currentTarget.id;
    this.props.onHandleSelectPackage(value)
  }

});