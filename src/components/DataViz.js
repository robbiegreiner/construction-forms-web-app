/* eslint-disable no-unused-vars, array-callback-return , default-case*/
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { 
  fetchProjects, 
  fetchEmployees, 
  fetchHotwork, 
  fetchPretask } from '../utils/fetchUtils';
import Card from './Card';
import HotworkForm from './HotworkForm';
import PretaskForm from './PretaskForm';

import '../styles/DataViz.css';

class DataViz extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      employees: [],
      hotworkForms: [],
      pretaskForms: [],
      dataVizControl: null,
      selectedInfo: {}
    };
  }

  componentDidMount() {
    fetchProjects(this);
    fetchEmployees(this);
    fetchHotwork(this);
    fetchPretask(this);
  }

  reportsBySelectionHandler = (selection) => {
    this.setState({ dataVizControl: selection });
  }

  cardClickHandler = (selectedInfo) => {
    this.setState({ selectedInfo });
  }

  // eslint-disable-next-line no-unused-vars
  mockCardClickHandler = (selectedInfo) => null;

  closeSelected = () => {
    this.setState({ selectedInfo: {} });
  }

  renderSelected = (selectedInfo) => {
    if (this.props.selectedControl === '' && Object.keys(selectedInfo).length !== 0) {
      this.setState({ selectedInfo: {} });
    }
    return (
      <div className="selected-div">
        {
          selectedInfo.employeeInfo &&
             <div>
               <h5>{selectedInfo.header}</h5>
               <p>{selectedInfo.body}</p>
               <p>{selectedInfo.employeeInfo[0]}</p>
               <p>{selectedInfo.employeeInfo[1]}</p>
               <button onClick={this.closeSelected}>X</button>
             </div>
        }
        {
          selectedInfo.projectInfo &&
           <div>
             <h5>{selectedInfo.header}</h5>
             <p>{selectedInfo.body}</p>
             <p>Public: {selectedInfo.projectInfo[0] ? 'Yes' : 'No'}</p>
             <p>Union: {selectedInfo.projectInfo[1] ? 'Yes' : 'No'}</p>
             <button onClick={this.closeSelected}>X</button>
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
               <img src={selectedInfo.formDetails[9]} alt={selectedInfo.header + ' Signature'}/>
               <button onClick={this.closeSelected}>X</button>
             </div>
        }
      </div>
    );
  }

  renderWelcome = (selectedControl) => {
    if (!selectedControl) {
      return (
        <div className="welcome">
          <h1>Welcome to Construction Forms!</h1>
          <div className="logo"></div>
        </div>
      );
    }
  }

  aToZ = arrayOfObjs => {
    const sorted = arrayOfObjs.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }

  cardSwitch = (selectedControl) => {
    switch (selectedControl) {
    case 'Projects':
      return this.aToZ(this.state.projects).map((project, index) => {
        return <Card
          key={'project' + index}
          header={project.name}
          body={project.location}
          projectInfo={[project.public, project.union]}
          cardClickHandler={this.cardClickHandler}
        />;
      });
    case 'Employees':
      return this.aToZ(this.state.employees).map((employee, index) => {
        return <Card
          key={'employee' + index}
          header={employee.name}
          body={employee.position}
          employeeInfo={[employee.phone, employee.email]}
          cardClickHandler={this.cardClickHandler}
        />;
      });
    case 'All Reports':
      return this.state.hotworkForms.concat(this.state.pretaskForms).map((form, index) => {
        const sigImg = new Image();
        sigImg.src = form.signature;
        return <Card
          key={'form' + index}
          header={
            Object.keys(form).includes('firewatchRequirement') ? 'Hotwork Permit - ' + form.employee_name : 'Pretask Permit - ' + form.employee_name
          }
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
            sigImg
          ]}
        />;
      });
    case 'All Forms':
      return (
        <div className="all-forms">
          <HotworkForm />
          <PretaskForm />
        </div>
      );
    case 'Reports By Project':
      return (
        <div>
          <h2 className="data-viz-cards-header">Select a project</h2>
          <div className="data-viz-cards">
            {
              this.state.dataVizControl &&
                <div className="selected-div">
                  {
                    this.state.hotworkForms.concat(this.state.pretaskForms).map((form, index) => {
                      if (parseInt(this.state.dataVizControl.split(' - ')[1], 10) === form.project_id) {
                        const sigImg = new Image();
                        sigImg.src = form.signature;
                        return <Card
                          key={'form' + index}
                          header={
                            Object.keys(form).includes('firewatchRequirement') ? 'Hotwork Permit - ' + form.employee_name : 'Pretask Permit - ' + form.employee_name
                          }
                          cardClickHandler={this.mockCardClickHandler}
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
                            sigImg
                          ]}
                        />;
                      }
                    })
                  }
                </div>
            }
            {
              this.aToZ(this.state.projects).map((project, index) => {
                return <Card
                  header={project.name}
                  body={<button onClick={() => this.reportsBySelectionHandler('Reports By Project - ' + project.id)}>Select</button>}
                  projectId={project.id}
                  key={'project' + index}
                  cardClickHandler={this.cardClickHandler}
                  reportsBySelectionHandler={this.reportsBySelectionHandler}
                />;
              })
            }
          </div>
        </div>
      );
    case 'Reports By Employee':
      return (
        <div>
          <h2 className="data-viz-cards-header">Select an employee</h2>
          <div className="data-viz-cards">
            {
              this.state.dataVizControl &&
                <div className="selected-div">
                  {
                    this.state.hotworkForms.concat(this.state.pretaskForms).map((form, index) => {
                      if (this.state.dataVizControl.split(' - ')[1] === form.employee_id) {
                        const sigImg = new Image();
                        sigImg.src = form.signature;
                        return <Card
                          key={'form' + index}
                          header={
                            Object.keys(form).includes('firewatchRequirement') ? 'Hotwork Permit - ' + form.employee_name : 'Pretask Permit - ' + form.employee_name
                          }
                          cardClickHandler={this.mockCardClickHandler}
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
                            sigImg
                          ]}
                        />;
                      }
                    })
                  }
                </div>
            }
            {
              this.aToZ(this.state.employees).map((employee, index) => {
                return <Card
                  header={employee.name}
                  body={<button onClick={() => this.reportsBySelectionHandler('Reports By Employee - ' + employee.id)}>Select</button>}
                  employeeId={employee.id}
                  key={'employee' + index}
                  reportsBySelectionHandler={this.reportsBySelectionHandler}
                  cardClickHandler={this.cardClickHandler}
                />;
              })
            }
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="data-viz">
        { this.renderWelcome(this.props.selectedControl) }
        { this.renderSelected(this.state.selectedInfo) }
        <div className="data-viz-cards">
          { this.cardSwitch(this.props.selectedControl) }
        </div>
      </div>

    );
  }
}

export default DataViz;
