// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { Route } from 'react-router-dom';
import '../styles/Controls.css';

class Controls extends Component {

  generateButtons() {
    const buttonContent = ['Projects', 'Employees', 'All Reports', 'Reports By Project', 'Reports By Employee', 'All Forms', 'Add Employee', 'Add Project'];

    return buttonContent.map((buttonName, index) => {
      return (
        <div 
          className={ this.props.selectedControl === buttonName ? 'button selected-button' : 'button' }
          onClick={() => this.props.selectControl(buttonName)}
          key={'button-type-' + buttonName + index}
        >
          <div className={'circle-icon bg-' + index}></div>
          <p className="button-name">{buttonName}</p>
        </div>
      );
    });
  }

  render() {
    return (

      <div className="controls">
        <h1>Controls</h1>
        <hr/>
        <div className="button-container">
          {this.generateButtons()}
        </div>
      </div>

    );
  }
}

export default Controls;
