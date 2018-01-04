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
      newEmployee: {}
    };
  }

  selectControl = (control) => {
    this.setState({selectedControl: control});
  }

  handleEmployeeChange = (event) => {
    const newK = event.target.className
    const newO = Object.assign({}, this.state.newEmployee, { [event.target.className]: event.target.value })
    this.setState({
      newEmployee: newO
    })
  }

  postNewEmployee = (event) => {
    event.preventDefault();
    const postBody = Object.assign({},
      {
        name: this.state.newEmployee.employee_name,
        position: this.state.newEmployee.employee_position,
        email: this.state.newEmployee.employee_email,
        phone: this.state.newEmployee.employee_phone,
      }
    );
    fetch(`http://localhost:4000/api/v1/employees`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(postBody)
    })
      .then(res => res.json())
      .catch(error => { throw error; });
  }


  renderPopUp() {
    if (this.state.selectedControl === 'Add Employee') {
      return (
        <div className="add-popup">
          <form className="popup-form" onSubmit={this.postNewEmployee}>
            <button 
              onClick={() => this.setState({ selectedControl: '' })} 
              className="close-popup"
            >X</button>
            <h4>Add New Employee</h4>
            <label htmlFor="employee-name">Name: 
              <input 
                type="text" 
                ref="employee-name" 
                className="employee_name"  
                placeholder="Name" 
                onChange={this.handleEmployeeChange}
              />
            </label>
            <label htmlFor="employee-position">Position: 
              <input 
                type="text" 
                ref="employee-position" 
                className="employee_position"  
                placeholder="Position" 
                onChange={this.handleEmployeeChange}
              />
            </label>
            <label htmlFor="employee-email">Email: 
              <input 
                type="email" 
                ref="employee-email" 
                className="employee_email"  
                placeholder="Email" 
                onChange={this.handleEmployeeChange}
              />
            </label>
            <label htmlFor="employee-phone">Phone: 
              <input 
                type="text" 
                ref="employee-phone" 
                className="employee_phone"  
                placeholder="Phone" 
                onChange={this.handleEmployeeChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }

  postNewEmployee(event) {
    event.preventDefault();
    console.log(event.target) 
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
          {this.renderPopUp()}
        </div>
    );
  }
}

export default Home;
