var StepActionButton = React.createClass({
  mixins: [],

  propTypes: {
    previewButton: React.PropTypes.object,
    nextButton: React.PropTypes.object,
    concludeButton: React.PropTypes.object,
    onHandlePreviewStep: React.PropTypes.func,
    onHandleNextStep: React.PropTypes.func,
    nextStepCallback: React.PropTypes.func,
    onLoadPreviewStep: React.PropTypes.func,
    onLoadNextStep: React.PropTypes.func,
    concludeAction: React.PropTypes.func,
    conditionToAbleNextButton: React.PropTypes.func,
    disabledNextButton: React.PropTypes.bool,
    disabledConcludeButton: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      previewButton: null,
      nextButton: null,
      concludeButton: null,
      onLoadPreviewStep: null,
      onLoadNextStep: null,
      concludeAction: null,
      conditionToAbleNextButton: null,
      disabledNextButton: true,
      disabledConcludeButton: true
    }
  },

  render: function() {
    return (
      <div className='row step-wizard-action-buttons'>
        <div className='col s12'>
          {this.renderActionButtons()}
        </div>
      </div>
    )
  },

  getInitialState: function() {
    return {
      disabledNextButton: this.props.disabledNextButton,
      disabledConcludeButton: this.props.disabledConcludeButton
    }
  },

  componentDidMount: function() {
    //this.listenTo(InventoryPlanStore, this.onStateButtonChange);
  },

  onStateButtonChange: function(data) {
    if (data.disabledNextButton !== undefined)
      this.setState({
        disabledNextButton: data.disabledNextButton
      });

    if (data.disabledConcludeButton !== undefined)
      this.setState({
        disabledConcludeButton: data.disabledConcludeButton
      });
  },

  renderActionButtons: function() {
    var component = [];

    if (!!this.props.previewButton)
      component.push(
        <button className='btn'>{this.props.previewButton.name}</button>
      );

    if (!!this.props.nextButton)
      component.push(
        <button className='btn next-button'>{this.props.nextButton.name}</button>
      );

    if (!!this.props.concludeButton)
      component.push(
        <button className='btn conclude-button'>{this.props.concludeButton.name}</button>
      );

    return component;
  },

  handlePreviewStep: function() {
    if (!!this.props.onLoadPreviewStep) {
      this.props.onLoadPreviewStep()
    }

    this.props.onHandlePreviewStep();
  },

  handleNextStep: function(event) {
    if (!!this.props.onLoadNextStep) {
     var next = this.props.onLoadNextStep(event);
     if (next == false) return;
    }

    this.props.onHandleNextStep();
  },

  concludeAction: function() {
    if (!!this.props.concludeAction) {
      this.props.concludeAction()
    }
  },

  conditionToAbleConcludeButton: function() {
    if (!!this.props.conditionToAbleConcludeButton) {
      return !this.props.conditionToAbleConcludeButton();
    } else {
      return this.props.disabledConcludeButton;
    }
  }

});