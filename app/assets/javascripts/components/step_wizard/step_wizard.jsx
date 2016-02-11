var StepWizard = React.createClass({
  mixins: [ContainerMixin],

  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      className: 'step-wizard'
    }
  },

  getInitialState: function() {
    return {
      idActiveStep: null,
      indexActiveStep: 1
    }
  },

  render: function() {
    return (
      <div className={this.props.className}>
        <ul className="step-wizard-menu-list z-depth-1" ref="tabsContainer">
          {this.renderMenuList()}
        </ul>
        <div style={{'clear': 'both'}}></div>

        <div className="row" style={{'backgroundColor': '#e8f5e9'}}>
          {this.renderActiveWindow()}
        </div>
        <div style={{'clear': 'both'}}></div>
      </div>
    )
  },

  componentDidMount: function() {
    //this.listenTo(InventoryPlanStore, this.onHandleChangeStep);
    this.setState({
      idActiveStep: this.props.children[this.state.indexActiveStep - 1].props.id
    })
  },

  propsToForward: function() {
    return ['activeStep', 'onHandlePreviewStep', 'onHandleNextStep'];
  },

  onHandleChangeStep: function(data) {
    if (!!data.indexNextStep) {
      this.setState({
        indexActiveStep: data.indexNextStep + 1,
        idActiveStep: this.props.children[data.indexNextStep].props.id
      })
    }
  },

  onHandlePreviewStep: function() {
    var indexActiveStep = this.state.indexActiveStep;

    this.setState({
      indexActiveStep: indexActiveStep - 1,
      idActiveStep: this.props.children[indexActiveStep - 2].props.id
    })
  },

  onHandleNextStep: function() {
    var indexActiveStep = this.state.indexActiveStep;

    this.setState({
      indexActiveStep: indexActiveStep + 1,
      idActiveStep: this.props.children[indexActiveStep].props.id
    })
  },

  renderMenuList: function() {
    var component = [];
    var children = this.getChildren();

    React.Children.forEach(children, function(child, i) {
      var isActive = (i === (this.state.indexActiveStep - 1));
      component.push(<StepWizardMenuItem {...child.props} active={isActive} key={"wizard_" + i} />);
      component.push(<li key={'chevron_' + i} className='chevron-right'><i className='material-icons'>chevron_right</i></li>);
    }.bind(this));
    component.pop();

    return component;
  },

  renderActiveWindow: function() {
    //var children = this.cloneChildrenWithProps({childrenType: Step});

    var children = this.filterChildren(Step);

    for (var i = 0; i < children.length; i ++){
      if (i == this.state.indexActiveStep-1) {
        return children[i];
      }
    }

  }

});