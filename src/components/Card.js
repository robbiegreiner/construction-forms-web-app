// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import '../styles/Card.css';

class Card extends Component {
  render() {
    return (
      <div
        className={ this.props.formDetails ? 'form-card' : 'card' }
        onClick={() => this.props.cardClickHandler(this.props)}
      >
        <h5>{this.props.header}</h5>
        <p className={ this.props.reportsBySelectionHandler ? 'report-by-selection' : null }>{this.props.body}</p>
        {
          this.props.projectInfo &&
            <div>
              <p>Public: {this.props.projectInfo[0] ? 'Yes' : 'No' }</p>
              <p>Union: {this.props.projectInfo[1] ? 'Yes' : 'No' }</p>
            </div>
        }
        {
          this.props.employeeInfo &&
            <div>
              <p>{this.props.employeeInfo[0]}</p>
              <p>{this.props.employeeInfo[1]}</p>
            </div>
        }
        {
          this.props.formDetails &&
            <div className="form-card">
              <p>Employee Email: {this.props.formDetails[0]}</p>
              <p>Project ID: {this.props.formDetails[1]}</p>
              <p>Company: {this.props.formDetails[2]}</p>
              <p>Date: {this.props.formDetails[3]}</p>
              <p>Firewatch Requirement: {this.props.formDetails[4]}</p>
              <p>Area Inspected: {this.props.formDetails[5] ? 'Yes' : 'No'}</p>
              <p>Fire Extinguisher: {this.props.formDetails[6] ? 'Yes' : 'No'}</p>
              <p>Flammables Removed: {this.props.formDetails[7]? 'Yes' : 'No'}</p>
              <p>Sprinkler Heads Protected: {this.props.formDetails[8] ? 'Yes' : 'No'}</p>
              <img src={this.props.formDetails[9]} alt={this.props.header + ' Signature'}/>
            </div>
        }
      </div>
    );
  }
}

export default Card;
