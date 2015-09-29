var StepWizard = React.createClass({

  propTypes: {
    className: React.PropTypes.string,
    titlesOfWizards: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      className: 'step-wizard',
      titlesOfWizards: ['Default']
    }
  },

  getInitialState: function(){
    return {
      currentWizard: 1
    }
  },

  onHandleChangedCurrentWizard: function(){

  },

  render: function() {
    return (
      <div className={this.props.className}>
        <MenuList {...this.props} onHanleChangedCurrentWizard={this.onHandleChangedCurrentWizard()} currentWizard={this.state.currentWizard} />
        <Windows />
      </div>
    );
  }
});

var MenuList = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      className: 'menu-list'
    }
  },

  onHandleClick: function(){
    alert('clicou');
  },

  componentMenuList: function(){
    component = [];
    for(var i = 0; i < this.props.titlesOfWizards.length; i++){
      var className = 'menu-item';
      if( i === this.props.currentWizard - 1 ) { className='active-menu-item' }
      component.push(<MenuItem wizardTitle={this.props.titlesOfWizards[i]} className={className} onHandleClick={this.onHandleClick} />);
    }

    return component;
  },

  render: function(){
    return (
      <div>
        <ul>
          {this.componentMenuList()}
        </ul>
      </div>
    );
  }
});

var MenuItem = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    onHandleClick: React.PropTypes.func
  },

  getDefaultProps: function(){
    return {
      className: 'menu-item'
    }
  },

  render: function(){
    return(
      <li className={this.props.className} onClick={this.onHandleClick}><span>{this.props.wizardTitle}</span></li>
    );
  }
});

var Windows = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      className: 'wizards'
    }
  },

  render: function(){
    return (
      <div className={this.props.className}>
        <ActionButtons />
      </div>
    );
  }
});

var ActionButtons = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function(){
    return {
      className: 'action-buttons'
    }
  },

  handleClick: function(){
    this.props.onHandleChangedCurrentWizard;
  },

  render: function(){
    return (
      <div className='row'>
        <div className='col s12'>
          <div className={this.props.className}>
            <button className='waves-effect waves-light btn'>Anterior</button>
            <button className='waves-effect waves-light btn'>Pŕoximo</button>
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

var ActionView = React.createClass({
  render: function(){
    return (
      <div>
      </div>
    );
  }
});