import React, { Component } from 'react';
import '../styles/Form.css';

class Form extends Component {

  render() {
    return (
      <form>
        <h1>HOT WORK PERMIT</h1>
        <h3>
          This Hot Work Permit is required for any temporary operation involving open flames
          or sparks. This includes, but is not limited to: brazing, cutting, grinding, soldering,
          thawing pipes, torch-applied roofing, and welding
        </h3>
        <p>Required fields are followed by <abbr title="required">*</abbr></p>
        <section className="general-info">
          <label htmlFor="employee-name">Name: <abbr title="required">*</abbr> 
            <input type="text" id="employee-name" placeholder="Employee Name" />
          </label>
          <label htmlFor="company">Company: <abbr title="required">*</abbr> 
            <input type="text" id="company" placeholder="Company" />
          </label>
          <label htmlFor="date">Date: <abbr title="required">*</abbr> 
            <input type="date" id="date" />
          </label>
        </section>
        <section className="string-info">
          <label htmlFor="firewatch-req">Firewatch Requirement? <abbr title="required">*</abbr> 
            <input type="text" id="firewatch-req" placeholder="Firewatch requirement?" />
          </label>
          <label htmlFor="start-time">Start Time<abbr title="required">*</abbr> 
            <input type="time" id="start-time" />
          </label>
          <label htmlFor="end-time">Start Time<abbr title="required">*</abbr> 
            <input type="time" id="end-time" />
          </label>
        </section>
        <section className="bool-info">
          <label htmlFor="area-inspected">Area Inspected? <abbr title="required">*</abbr><br /> 
            <input type="radio" name="inspected" value="yes" />Yes<br />
            <input type="radio" name="inspected" value="no" />No<br />
          </label>
          <label htmlFor="fire-extinguesher">Fire Extinguisher? <abbr title="required">*</abbr><br /> 
            <input type="radio" name="extinguisher" value="yes" />Yes<br />
            <input type="radio" name="extinguisher" value="no" />No<br />
          </label>
          <label htmlFor="flammables-removed">Flammables Removed? <abbr title="required">*</abbr><br /> 
            <input type="radio" name="flammables" value="yes" />Yes<br />
            <input type="radio" name="flammables" value="no" />No<br />
          </label>
          <label htmlFor="smoke-detectors">Smoke Detectors Disabled? <abbr title="required">*</abbr><br /> 
            <input type="radio" name="smoke-detectors" value="yes" />Yes<br />
            <input type="radio" name="smoke-detectors" value="no" />No<br />
          </label>
          <label htmlFor="sprinkler-headers">Sprinkler Heads Protected? <abbr title="required">*</abbr><br /> 
            <input type="radio" name="sprinkler-heads" value="yes" />Yes<br />
            <input type="radio" name="sprinkler-heads" value="no" />No<br />
          </label>
        </section>
        <section>
          <input type="text" placeholder="Signature" />
        </section>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form;
