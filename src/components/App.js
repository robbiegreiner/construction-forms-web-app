import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component= { Home } />
        {/* <Route exact path="/employees" component= { employeesContainer } />
        <Route exact path="/employees/:id" component= { employeesContainer } /> */}
        {/* <Route path="/employees" component={ employees } /> */}
      </div>
    );
  }
}

export default App;
