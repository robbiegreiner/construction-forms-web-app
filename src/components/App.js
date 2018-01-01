import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home.js';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component= { Home } />
        {/* <Route exact path="/employees" component= { employeesContainer } />
        <Route exact path="/employees/:id" component= { employeesContainer } /> */}
        {/* <Route path="/employees" component={ employees } /> */}
        <Route exact path="/web-form" component = { Form } />
      </div>
    );
  }
}

export default App;
