import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/Home.css';
import DataViz from './DataViz.js';
import Controls from './Controls.js';

class Home extends Component {
  
  constructor() {
    super();

    this.state = {
      selectedControl: '',
    };
  }

  selectControl = (control) => {
    this.setState({selectedControl: control});
  }

  render() {
    return (
        <div className="main-container">
          <Controls 
            selectControl = {this.selectControl}
          />
          <DataViz 
            selectedControl = {this.state.selectedControl}
          />
        </div>

    );
  }
}

export default Home;
