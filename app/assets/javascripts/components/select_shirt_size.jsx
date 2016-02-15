var SelectShirtSize = React.createClass({

  PropTypes: {
    onSelectShirdSize: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      onSelectShirdSize: function() { return null }
    }
  },

  componentDidMount: function() {
    $('select').material_select();
    $(React.findDOMNode(this.refs.SelectShirtSizeBox)).on('change',this.handleShirtSizeSelectChange);
  },

  render: function() {
    return (
      <div className='row select-shirt-size'>
        <div className='select-shirt-size col l6 s12'>
          {this.renderShirtSize()}
        </div>
      </div>
    )
  },

  renderShirtSize: function() {
    return (
      <div className="input-field col s12">
        <select ref='SelectShirtSizeBox'>
          <option value="" disabled selected>Selecione o tamanho de sua camisa:</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>
        <label>Tamanho da camisa</label>
      </div>
    )
  },

  handleShirtSizeSelectChange: function(event) {
    var value = event.currentTarget.value;
    this.props.onSelectShirdSize(value)
  }

});