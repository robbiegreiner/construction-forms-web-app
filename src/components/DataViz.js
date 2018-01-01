import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Card from './Card';
import '../styles/DataViz.css';

class DataViz extends Component {

  constructor() {
    super();
    this.state = {
      projects: '',
      employees: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/v1/projects')
      .then(projects => projects.json())
      .then(projects => this.setState({ projects }))
      .catch(error => { throw error; });
    fetch('http://localhost:4000/api/v1/employees')
      .then(employees => employees.json())
      .then(employees => this.setState({ employees }))
      .catch(error => { throw error; });
  }

  render() {
    return (
        <div className="data-viz">
          <h1>Data Viz</h1>
          <div className="data-viz-cards">
            { 
              this.props.selectedControl === 'Projects' &&
                this.state.projects.map((project, index) => {
                  return <Card 
                      key={'project' + index}
                      header={project.name}
                      body={project.location}
                      projectInfo={[project.public, project.union]}
                    />
                })
            }
            { 
              this.props.selectedControl === 'Employees' &&
                this.state.employees.map((employee, index) => {
                  return <Card 
                      key={'employee' + index}
                      header={employee.name}
                      body={employee.position}
                      employeeInfo={[employee.phone, employee.email]}
                    />
                })
            }
          </div>
        </div>

    );
  }
}

export default DataViz;
