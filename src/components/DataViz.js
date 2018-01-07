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
      selectedInfo: {}
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

  cardClickHandler = (selectedInfo) => {
    this.setState({ selectedInfo })
  }

  renderSelected = (selectedInfo) => {
     return (
       <div className="selected-div">
         {
           selectedInfo.employeeInfo &&
             <div>
               <h5>{selectedInfo.header}</h5>
               <p>{selectedInfo.body}</p>
               <p>{selectedInfo.employeeInfo[0]}</p>
               <p>{selectedInfo.employeeInfo[1]}</p>
             </div>
         }
         {
           selectedInfo.projectInfo &&
           <div>
             <h5>{selectedInfo.header}</h5>
             <p>{selectedInfo.body}</p>
             <p>{selectedInfo.projectInfo[0]}</p>
             <p>{selectedInfo.projectInfo[1]}</p>
           </div>
         }
         {
           selectedInfo.formDetails &&
             <div>
               <h5>{selectedInfo.header}</h5>
               <p>{selectedInfo.body}</p>
               <p>Employee Email: {selectedInfo.formDetails[0]}</p>
               <p>Project ID: {selectedInfo.formDetails[1]}</p>
               <p>Company: {selectedInfo.formDetails[2]}</p>
               <p>Date: {selectedInfo.formDetails[3]}</p>
               <p>Firewatch Requirement: {selectedInfo.formDetails[4]}</p>
               <p>Area Inspected: {selectedInfo.formDetails[5] ? 'Yes' : 'No'}</p>
               <p>Fire Extinguisher: {selectedInfo.formDetails[6] ? 'Yes' : 'No'}</p>
               <p>Flammables Removed: {selectedInfo.formDetails[7]? 'Yes' : 'No'}</p>
               <p>Sprinkler Heads Protected: {selectedInfo.formDetails[8] ? 'Yes' : 'No'}</p>
               <img src={selectedInfo.formDetails[9]}/>
             </div>
         }
       </div>
     )
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
          { this.renderSelected(this.state.selectedInfo) }
          <div className="data-viz-cards">
            {
              this.props.selectedControl === 'Projects' &&
                this.state.projects.map((project, index) => {
                  return <Card
                      key={'project' + index}
                      header={project.name}
                      body={project.location}
                      projectInfo={[project.public, project.union]}
                      cardClickHandler={this.cardClickHandler}
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
                      cardClickHandler={this.cardClickHandler}
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
                      cardClickHandler={this.cardClickHandler}
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
                    this.state.dataVizControl &&
                      <div className="selected-div">
                        {
                          this.state.hotworkForms.map((form, index) => {
                            if (parseInt(this.state.dataVizControl.split(' - ')[1]) === form.project_id) {
                              const sigImg = new Image();
                              sigImg.src = form.signature;
                              return <Card
                                key={'hotworkForm' + index}
                                header={'Hotwork Permit - ' + form.employee_name}
                                cardClickHandler={this.cardClickHandler}
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
                  }
                  {
                    this.state.projects.map((project, index) => {
                      return <Card
                        header={project.name}
                        body={<button onClick={() => this.reportsBySelectionHandler('Reports By Project - ' + project.id)}>Select</button>}
                        projectId={project.id}
                        key={'project' + index}
                        cardClickHandler={this.cardClickHandler}
                        reportsBySelectionHandler={this.reportsBySelectionHandler}
                      />
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
                    this.state.dataVizControl &&
                      <div className="selected-div">
                        {
                          this.state.hotworkForms.map((form, index) => {
                            if (this.state.dataVizControl.split(' - ')[1] === form.employee_id) {
                              const sigImg = new Image();
                              sigImg.src = form.signature;
                              return <Card
                                key={'hotworkForm' + index}
                                header={'Hotwork Permit - ' + form.employee_name}
                                cardClickHandler={this.cardClickHandler}
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
                  }
                  {
                    this.state.employees.map((employee, index) => {
                      return <Card
                        header={employee.name}
                        body={<button onClick={() => this.reportsBySelectionHandler('Reports By Employee - ' + employee.id)}>Select</button>}
                        employeeId={employee.id}
                        key={'employee' + index}
                        reportsBySelectionHandler={this.reportsBySelectionHandler}
                        cardClickHandler={this.cardClickHandler}
                      />
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
