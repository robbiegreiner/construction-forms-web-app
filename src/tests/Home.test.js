/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

describe('Home tests', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render without crashing', () => {
    shallow(<Home />);
  });

  it('should render with three children', () => {
    expect(wrapper.find('div').getElements()[0].props.children.length).toEqual(3);
  });

  it('should render with empty state', () => {
    const emptyState = {
      selectedControl: '',
      newEmployee: {
        employee_name: '',
        employee_position: '',
        employee_phone: '',
        employee_email: ''
      },
      newProject: { 
        project_name: '',
        project_location: '',
        project_public: false,
        project_union: false
      }
    };

    expect(wrapper.state()).toEqual(emptyState);
  });

  it('should be able to select a control', () => {
    wrapper.instance().selectControl('Employees');
    expect(wrapper.state().selectedControl).toEqual('Employees');
  });

  it('should be able to deselect a control if the same input is entered twice', () => {
    wrapper.instance().selectControl('Employees');
    wrapper.instance().selectControl('Employees');
    expect(wrapper.state().selectedControl).toEqual('');
  });

  it('should handle change on the new employee input form', () => {
    const mockEvent = {
      target: {
        className: 'employee_name',
        value: 'Joe Dirt'
      }
    }; 

    const updatedState = {
      employee_name: 'Joe Dirt',
      employee_email: '',
      employee_phone: '',
      employee_position: ''
    };

    wrapper.instance().handleEmployeeChange(mockEvent);
    expect(wrapper.state().newEmployee).toEqual(updatedState);
  });

  it('should handle change on the new project input form', () => {
    const mockEvent = {
      target: {
        className: 'project_name',
        value: 'Arcosanti Road'
      }
    };

    const updatedState = {
      project_name: 'Arcosanti Road',
      project_location: '',
      project_union: false,
      project_public: false
    };

    wrapper.instance().handleProjectChange(mockEvent);
    expect(wrapper.state().newProject).toEqual(updatedState);
  });

  it('should render a form to add a new employee', () => {
    wrapper.setState({ selectedControl: 'Add Employee' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a form to add a new project', () => {
    wrapper.setState({ selectedControl: 'Add Project' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
