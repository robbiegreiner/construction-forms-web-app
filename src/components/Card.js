import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h5>{this.props.header}</h5>
        <p>{this.props.body}</p>
        {
          this.props.projectInfo &&
            <div>
              <p>Public: {this.props.projectInfo[0].toString()}</p>
              <p>Union: {this.props.projectInfo[1].toString()}</p>
            </div>
        }
        {
          this.props.employeeInfo &&
            <div>
              <p>Phone: {this.props.employeeInfo[0]}</p>
              <p>Email: {this.props.employeeInfo[1]}</p>
            </div>
        }
      </div>
    )
  }
}

export default Card;
