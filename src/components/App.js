/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
