import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/Controls.css';

class Controls extends Component {

  generateButtons() {
    const buttonContent = ['Projects', 'Employees', 'All Reports', 'Reports By Project', 'Reports By Employee', 'Add Employee', 'Add Project', 'Placeholder', 'Placeholder']

    return buttonContent.map((buttonName, index) => {
      return (
        <div 
          className={ this.props.selectedControl === buttonName ? 'button selected-button' : 'button' }
          onClick={() => this.props.selectControl(buttonName)}
          key={"button-type-" + buttonName + index}
        >
          <div className="circle-icon"></div>
          <p className="button-name">{buttonName}</p>
        </div>
      )
    })
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
