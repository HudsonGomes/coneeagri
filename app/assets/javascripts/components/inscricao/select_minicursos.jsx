var SelectMinicursos = React.createClass({

  PropTypes: {
    onSelectFirstMinicurso: React.PropTypes.func,
    onSelectSecondMinicurso: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      onSelectFirstMinicurso: function() { return null },
      onSelectSecondMinicurso: function() { return null }
    }
  },

  getInitialState: function() {
    return {
      selectedFirst: null,
      selectedSecond: null,
      error: null,
      availability: {}
    }
  },

  componentDidMount: function() {
    $('select').material_select();
    $(React.findDOMNode(this.refs.mySelectBox)).on('change',this.handleFirstSelectChange);
    $(React.findDOMNode(this.refs.mySecondSelectBox)).on('change',this.handleSecondSelectChange);
  },

  render: function() {
    return (
      <div className='row select-minicursos'>
        <div className='select-minicursos col s12'>
          {this.renderInformation()}
          {this.renderMinicursos1()}
          {this.renderMinicursos2()}
        </div>
      </div>
    )
  },

  renderInformation: function() {
    return (
      <div className='minicurso__information information'>
        <span>Até 2 minicursos podem ser selecionados</span>
      </div>
    )
  },

  renderMinicursos1: function() {
    return (
      <div className="input-field col s12">
        <select ref='mySelectBox' id='myFirstSelectBox'>
          <option value="" selected>Selecione o Minicurso:</option>
          <option value="1">Minicurso 1 - Técnicas de irrigação para gramados esportivos (Rain Bird)</option>
          <option value="2">Minicurso 2 - Saneamento e Drenagem Urbana</option>
          <option value="3">Minicurso 3 - Modelagem Fuzzi em Biossitema Animal</option>
          <option value="4">Minicurso 4 - Currículo como Ferramenta de Desenvolvimento Pessoal e Competitividade no Mercado</option>
        </select>
        <label>Minicurso 1</label>
      </div>
    )
  },

  renderMinicursos2: function() {
    return (
      <div className="input-field col s12">
        <select ref='mySecondSelectBox' id='mySecondSelectBox'>
          <option value="" selected>Selecione o Minicurso:</option>
          <option value="1">Minicurso 1 - Técnicas de irrigação para gramados esportivos (Rain Bird)</option>
          <option value="2">Minicurso 2 - Saneamento e Drenagem Urbana</option>
          <option value="3">Minicurso 3 - Modelagem Fuzzi em Biossitema Animal</option>
          <option value="4">Minicurso 4 - Currículo como Ferramenta de Desenvolvimento Pessoal e Competitividade no Mercado</option>
        </select>
        <label>Minicurso 2</label>
      </div>
    )
  },

  handleFirstSelectChange: function(event) {
    var value = event.currentTarget.value;
    this.props.onSelectFirstMinicurso(value)
  },

  handleSecondSelectChange: function(event) {
    var value = event.currentTarget.value;
    this.props.onSelectSecondMinicurso(value)
  },

});