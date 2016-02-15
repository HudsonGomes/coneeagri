var StepWizardStore = Reflux.createStore({
  listenables: [StepWizardActions],

  data: {},

  onUpdateStateButton: function(disabled) {
    this.data.disabledNextButton = disabled;
    this.data.indexNextStep = null;
    this.trigger(this.data)
  },

  onUpdateStateConcludeButton: function(disabled) {
    this.data.disabledConcludeButton = disabled;
    this.data.indexNextStep = null;
    this.trigger(this.data)
  },

  onHandleChangeStep: function(indexNextStep) {
    this.data.disabledNextButton = null;
    this.data.indexNextStep = indexNextStep;
    this.trigger(this.data)
  }

});