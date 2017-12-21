import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={ Main } />
        {/* <Route path="/" component= { Controls } />
        <Route exact path="/" component= { DataViz } /> */}
        {/* <Route exact path="/employees" component= { employeesContainer } />
        <Route exact path="/employees/:id" component= { employeesContainer } /> */}
        {/* <Route path="/employees" component={ employees } /> */}
      </div>
    );
  }
}

export default App;
