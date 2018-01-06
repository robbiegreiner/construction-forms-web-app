import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Card from './Card';
import '../styles/DataViz.css';

class DataViz extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      employees: [],
      hotworkForms: [],
      dataVizControl: null,
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

  reportsBySelectionHandler = (selection) => {
    this.setState({ dataVizControl: selection })
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
                  const sigImg = new Image();
                  sigImg.src = form.signature;
                  return <Card 
                      key={'hotworkForm' + index}
                      header={'Hotwork Permit - ' + form.employee_name}
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
                        sigImg,
                      ]}
                    />
                })
            }
            {
              this.props.selectedControl === 'Reports By Project' &&
                <div>
                  <h2 className="data-viz-cards-header">Select a project</h2>
                  <div className="data-viz-cards">
                  {
                    this.state.projects.map((project, index) => {
                      return <Card 
                        header={project.name}
                        body={<button onClick={() => this.reportsBySelectionHandler('Reports By Project - ' + project.id)}>Select</button>}
                        projectId={project.id}
                        key={'project' + index}
                        reportsBySelectionHandler={this.reportsBySelectionHandler}
                      />
                    })
                  }
                  {
                    this.state.dataVizControl &&
                    this.state.hotworkForms.map((form, index) => {
                      if (parseInt(this.state.dataVizControl.split(' - ')[1]) === form.project_id) {
                        const sigImg = new Image();
                        sigImg.src = form.signature;
                        return <Card
                          key={'hotworkForm' + index}
                          header={'Hotwork Permit - ' + form.employee_name}
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
                            sigImg,
                          ]}
                        />
                      }
                    })
                  }
                </div>
              </div>
            }
            {
              this.props.selectedControl === 'Reports By Employee' &&
                <div>
                  <h2 className="data-viz-cards-header">Select an employee</h2>
                  <div className="data-viz-cards">
                  {
                    this.state.employees.map((employee, index) => {
                      return <Card 
                        header={employee.name}
                        body={<button onClick={() => this.reportsBySelectionHandler('Reports By Employee - ' + employee.id)}>Select</button>}
                        employeeId={employee.id}
                        key={'employee' + index}
                        reportsBySelectionHandler={this.reportsBySelectionHandler}
                      />
                    })
                  }
                  {
                    this.state.dataVizControl &&
                    this.state.hotworkForms.map((form, index) => {
                      console.log(this.state.dataVizControl.split(' - ')[1], form.employee_id)
                      if (this.state.dataVizControl.split(' - ')[1] === form.employee_id) {
                        const sigImg = new Image();
                        sigImg.src = form.signature;
                        return <Card
                          key={'hotworkForm' + index}
                          header={'Hotwork Permit - ' + form.employee_name}
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
                            sigImg,
                          ]}
                        />
                      }
                    })
                  }
                </div>
              </div>
            }
          </div>
        </div>

    );
  }
}

export default DataViz;
