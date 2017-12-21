import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/Home.css';
import DataViz from './DataViz.js';
import Controls from './Controls.js';

class Home extends Component {
  render() {
    return (
        <div className="main-container">
          <Controls />
          <DataViz />
        </div>

    );
  }
}

export default Home;
