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
      newEmployee: {},
      newProject: { 
        project_public: false,
        project_union: false,
      },
    };
  }

  selectControl = (control) => {
    this.setState({selectedControl: control});
  }

  handleEmployeeChange = (event) => {
    this.setState({
      newEmployee: Object.assign({}, 
        this.state.newEmployee, 
        { [event.target.className]: event.target.value }
      )
    })
  }

  handleProjectChange = (event) => {
    this.setState({
      newProject: Object.assign({}, 
        this.state.newProject, 
        { [event.target.className]: event.target.value }
      )
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

  postNewProject = (event) => {
    event.preventDefault();
    const postBody = Object.assign({},
      {
        name: this.state.newProject.project_name,
        location: this.state.newProject.project_location,
        union: this.state.newProject.project_union,
        public: this.state.newProject.project_public,
      }
    );
    console.log(postBody)
    fetch(`http://localhost:4000/api/v1/projects`, {
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
    if (this.state.selectedControl === 'Add Project') {
      return (
        <div className="add-popup">
          <form className="popup-form" onSubmit={this.postNewProject}>
            <button 
              onClick={() => this.setState({ selectedControl: '' })} 
              className="close-popup"
            >X</button>
            <h4>Add New Project</h4>
            <label htmlFor="project-name">Project Name: 
              <input 
                type="text" 
                ref="project-name" 
                className="project_name"  
                placeholder="Project Name" 
                onChange={this.handleProjectChange}
              />
            </label>
            <label htmlFor="project-location">Location: 
              <input 
                type="text" 
                ref="location-position" 
                className="project_location"  
                placeholder="Location" 
                onChange={this.handleProjectChange}
              />
            </label>
            <label htmlFor="project-union">Union: 
              <select 
                ref="project-union" 
                onChange={this.handleProjectChange}
                className="project_union"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>
            <label htmlFor="project-public">Public: 
              <select 
                ref="project-public" 
                onChange={this.handleProjectChange}
                className="project_public"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
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
