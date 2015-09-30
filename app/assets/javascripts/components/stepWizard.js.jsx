var StepWizard = React.createClass({

  propTypes: {
    className: React.PropTypes.string,
    menuList: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      className: 'step-wizard',
      menuList: []
    }
  },

  getInitialState: function(){
    return {
      currentIndex: 0
    }
  },

  handleIncrementCurrentIndex: function(){
    if (this.state.currentIndex < this.props.menuList.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex += 1
      });
    }
  },

  handleDecrementCurrentIndex: function(){
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex -= 1
      });
    }
  },

  render: function() {
    return (
      <div className={this.props.className}>
        <MenuList
          list={this.props.menuList}
          currentIndex={this.state.currentIndex} />

        <Windows
          currentIndex={this.state.currentIndex}
          lastIndex={this.props.menuList.length - 1}
          onIncrementCurrentIndex={this.handleIncrementCurrentIndex}
          onDecrementCurrentIndex={this.handleDecrementCurrentIndex} />
      </div>
    );
  }
});

var MenuList = React.createClass({

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: 'step-wizard-menu-list'
    }
  },

  render: function() {
    var menuList = this.props.list;
    var rows = [];
    menuList.forEach(function(option, i){
      var className = this.props.currentIndex == i ? "menu-option active-menu-option" : "menu-option  non-active-menu-option";
      rows.push(<MenuOption key={i} option={option} className={className} />);
      if (i !== 2)
        rows.push(<li className='chevron-right'><i className='material-icons'>chevron_right</i></li>);
    }.bind(this));

    return (
      <div className={this.props.className}>
        <ul>
          {rows}
        </ul>
      </div>
    );
  }

});

var MenuOption = React.createClass({

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      className: 'non-active-menu-option'
    }
  },

  render: function(){
    var option = this.props.option;

    return (
      <li className={this.props.className}><span>{option}</span></li>
    );
  }

});

var Windows = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      className: 'active-window'
    }
  },

  getInitialState: function() {
    return {
      disabledSubmitButton: true
    }
  },

  changeSubmitButton: function(enable){
    this.setState({
      disabledSubmitButton: enable
    })
  },

  render: function(){
    return (
      <div className={this.props.className}>

        <WindowButtons
          currentIndex={this.props.currentIndex}
          lastIndex={this.props.lastIndex}
          onIncrementCurrentIndex={this.props.onIncrementCurrentIndex}
          onDecrementCurrentIndex={this.props.onDecrementCurrentIndex}
          disabledSubmitButton={this.state.disabledSubmitButton}
          />

      </div>
    );
  }
});

var WindowButtons = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    disabledSubmitButton: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      className: 'action-buttons',
      disabledSubmitButton: true
    }
  },

  decrementCurrentIndex: function(){
    this.props.onDecrementCurrentIndex();
  },

  incrementCurrentIndex: function(){
    this.props.onIncrementCurrentIndex();
  },

  handleSubmit: function() {
    alert('Finalizou')
  },

  render: function(){
    var index = this.props.currentIndex;
    var lastIndex = this.props.lastIndex;
    buttonComponents = [];

    if (index === 0) {
      buttonComponents.push(<button key={index} className='btn button-next' onClick={this.incrementCurrentIndex} >Próximo</button>);
    } else if (index == lastIndex) {
      buttonComponents.push(<button key={index} className='btn button' onClick={this.decrementCurrentIndex}>Anterior</button>);
      buttonComponents.push(<button ref={'submitButton'} onClick={this.handleSubmit} className='btn button-next'>Finalizar</button>);
    } else{
      buttonComponents.push(<button key={index} className='btn button' onClick={this.decrementCurrentIndex}>Anterior</button>);
      buttonComponents.push(<button key={index+1} className='btn button-next' onClick={this.incrementCurrentIndex} >Próximo</button>);
    }

    return (
      <div className='row div-action-buttons'>
        <div className='col s12'>
          <div className={this.props.className} >
            {buttonComponents}
          </div>
        </div>
      </div>
    );
  }

});

var FormWizard = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      className: 'form-wizard'
    }
  },

  render: function(){
    return (
      <div className={this.props.className}>
        <FormView />
        <ActionView />
      </div>
    );
  }
});

var FormView = React.createClass({
  render: function(){
    return (
      <div>
      </div>
    );
  }
});
