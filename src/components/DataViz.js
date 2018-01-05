import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Card from './Card';
import '../styles/DataViz.css';

class DataViz extends Component {

  constructor() {
    super();
    this.state = {
      projects: {},
      employees: {},
      hotworkForms: {},
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
    fetch('http://localhost:4000/api/v1/forms/hotwork')
      .then(hotworkForms => hotworkForms.json())
      .then(hotworkForms => this.setState({ hotworkForms }))
      .catch(error => { throw error; });
  }

  render() {
    return (
        <div className="data-viz">
          {
            !this.props.selectedControl && 
              <div className="welcome">
                <h1>Welcome to Construction Forms!</h1>
                <div className="logo"></div>
              </div>
          }
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
            {
              this.props.selectedControl === 'All Reports' && 
                this.state.hotworkForms.map((form, index) => {
                  const sigImg = form.signature;
                  const newImg = new Image();
                  newImg.src = sigImg
                  console.log(newImg)
                  return <Card 
                      key={'hotworkForm' + index}
                      header={'Hotwork Permit ' + form.employee_name}
                      formDetails={[
                        form.employee_email,
                        form.project_id,
                        form.company,
                        form.date,
                        form.firewatchRequirement,
                        form.areaInspected,
                        form.fireExtinguisher,
                        form.flammablesRemoved,
                        form.sprinklerHeadsProtected,
                        form.signature,
                        newImg,
                      ]}
                    />
                })
            }
          </div>
        </div>

    );
  }
}

export default DataViz;
