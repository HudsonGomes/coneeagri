var Step = React.createClass({
  mixins: [ContainerMixin],

  propTypes: {
    id: React.PropTypes.string,
    activeStep: React.PropTypes.string,
    className: React.PropTypes.string,
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
    disabledConcludeButton: React.PropTypes.bool,
    nextStep: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      id: '',
      active: false,
      className: '',
      previewButton: null,
      nextButton: null,
      concludeButton: null,
      onLoadPreviewStep: null,
      onLoadNextStep: null,
      concludeAction: null,
      conditionToAbleNextButton: null,
      disabledNextButton: true,
      disabledConcludeButton: true,
      nextStep: true
    }
  },

  render: function() {
    return (
      <div id={this.props.id} className={this.className()}>
        {this.renderChildren()}
        <StepActionButton {...this.props} />
      </div>
    )
  },

  className: function() {
    return this.props.className + ' ' + 'col s12 step';
  },

  conditionToAbleConcludeButton: function() {
    if (!!this.props.conditionToAbleConcludeButton) {
      return !this.props.conditionToAbleConcludeButton();
    } else {
      return this.props.disabledConcludeButton;
    }
  }

});