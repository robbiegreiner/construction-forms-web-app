import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {fetchProjects} from '../utils/fetchUtil';
import '../styles/DataViz.css';

class DataViz extends Component {

  dataSwitch = () => {
    switch(this.props.selectedControl) {
      case 'Projects': 
        fetchProjects();
      case '':
        return null;
    }
  }

  render() {
    return (
        <div className="data-viz">
          <h1>Data Viz</h1>
          {this.dataSwitch()}
        </div>

    );
  }
}

export default DataViz;
