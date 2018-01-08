// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import '../styles/Form.css';

class HotworkForm extends Component {
  constructor() {
    super();
    this.state = {
      employee_name: '',
      employee_email: '',
      project_id: '',
      company: '',
      date: '',
      firewatchRequirement: '',
      timeStart: '',
      finishTime: '',
      areaInspected: false,
      fireExtinguisher: false,
      flammablesRemoved: false,
      smokeDetectorsDisabled: false,
      sprinklerHeadsProtected: false
    };
  }

  postForm(event) {
    event.preventDefault();
    fetch('http://localhost:4000/api/v1/forms/hotwork', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        employee_name: this.state.employee_name,
        employee_email: this.state.employee_email,
        project_id: this.state.project_id,
        company: this.state.company,
        date: this.state.date,
        firewatchRequirement: this.state.firewatchRequirement,
        timeStart: this.state.timeStart,
        finishTime: this.state.finishTime,
        areaInspected: this.state.areaInspected,
        fireExtinguisher: this.state.fireExtinguisher,
        flammablesRemoved: this.state.flammablesRemoved,
        smokeDetectorsDisabled: this.state.smokeDetectorsDisabled,
        sprinklerHeadsProtected: this.state.employee_name
      })
    });
  }

  render() {
    return (
      <form className="hotwork-template">
        <h1>HOT WORK PERMIT</h1>
        <h3>
          This Hot Work Permit is required for any temporary operation involving open flames
          or sparks. This includes, but is not limited to: brazing, cutting, grinding, soldering,
          thawing pipes, torch-applied roofing, and welding
        </h3>
        <p>Required fields are followed by <abbr title="required">*</abbr></p>
        <section className="general-info">

          <label htmlFor="project-id">Project ID: <abbr title="required">*</abbr>
            <input type="text" ref="project-id" placeholder="project id" onChange={(event) => this.setState({project_id: event.target.value})} />
          </label>

          <label htmlFor="employeename">Name: <abbr title="required">*</abbr>
            <input type="text" ref="employee_name" placeholder="Employee Name" onChange={(event) => this.setState({employee_name: event.target.value})} />
          </label>

          <label htmlFor="email">Email: <abbr title="required">*</abbr>
            <input type="text" ref="email" placeholder="Email" onChange={(event) => this.setState({employee_email: event.target.value})} />
          </label>

          <label htmlFor="company">Company: <abbr title="required">*</abbr>
            <input type="text" ref="company" placeholder="Company" onChange={(event) => this.setState({company: event.target.value})}/>
          </label>
          <label htmlFor="date">Date: <abbr title="required">*</abbr>
            <input type="date" ref="date" onChange={(event) => this.setState({date: event.target.value})} />
          </label>
        </section>
        <section className="string-info">
          <label htmlFor="firewatch-req">Firewatch Requirement? <abbr title="required">*</abbr>
            <input type="text" ref="firewatchRequirement" placeholder="Firewatch requirement?" onChange={(event) => this.setState({firewatchRequirement: event.target.value})} />
          </label>
          <label htmlFor="start-time">Start Time<abbr title="required">*</abbr>
            <input type="time" ref="timeStart" onChange={(event) => this.setState({timeStart: event.target.value})} />
          </label>
          <label htmlFor="end-time">End Time<abbr title="required">*</abbr>
            <input type="time" ref="finishTime" onChange={(event) => this.setState({finishTime: event.target.value})} />
          </label>
        </section>
        <section className="bool-info">

          <label htmlFor="area-inspected" onChange={(event) => this.setState({areaInspected: event.target.value})}>Area Inspected? <abbr title="required">*</abbr><br />
            <input type="radio" ref="areaInspected" name="inspected" value="true" />Yes<br />
            <input type="radio" name="inspected" ref="areaInspected" value="false"/>No<br />
          </label>


          <label htmlFor="fire-extinguesher" ref="fireExtinguisher" onChange={(event) => this.setState({fireExtinguisher: event.target.value})}>Fire Extinguisher? <abbr title="required">*</abbr><br />
            <input type="radio" name="extinguisher" value="true" />Yes<br />
            <input type="radio" name="extinguisher" value="false" />No<br />
          </label>
          <label htmlFor="flammables-removed" ref="flammablesRemoved" onChange={(event) => this.setState({flammablesRemoved: event.target.value})}>Flammables Removed? <abbr title="required">*</abbr><br />
            <input type="radio" name="flammables" value="true" />Yes<br />
            <input type="radio" name="flammables" value="false" />No<br />
          </label>
          <label htmlFor="smoke-detectors" ref="smokeDetectorsDisabled" onChange={(event) => this.setState({smokeDetectorsDisabled: event.target.value})}>Smoke Detectors Disabled? <abbr title="required">*</abbr><br />
            <input type="radio" name="smoke-detectors" value="yes" />Yes<br />
            <input type="radio" name="smoke-detectors" value="no" />No<br />
          </label>
          <label htmlFor="sprinkler-headers" ref="sprinklerHeadsProtected" onChange={(event) => this.setState({sprinklerHeadsProtected: event.target.value})}>Sprinkler Heads Protected? <abbr title="required">*</abbr><br />
            <input type="radio" name="sprinkler-heads" value="yes" />Yes<br />
            <input type="radio" name="sprinkler-heads" value="no" />No<br />
          </label>
        </section>
        <section>
          <input type="text" placeholder="Signature" />
        </section>
        <button onClick={(event) => this.postForm(event)}>Submit</button>
      </form>
    );
  }
}

export default HotworkForm;
