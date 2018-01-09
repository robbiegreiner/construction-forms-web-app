/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Card';

describe('Card tests', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('should render without crashing', () => {
    shallow(<Card />);
  });

  it('should have a class of card by default', () => {
    expect(wrapper.hasClass('card')).toEqual(true);
  });

  it('should have a class of form-card when passed formDetails', () => {
    wrapper = shallow(<Card formDetails={[]} />);
    expect(wrapper.hasClass('form-card')).toEqual(true);
  });

  it('should render as a project card when passed projectInfo', () => {
    const mockProjectInfo = [true, true];

    wrapper = shallow(<Card 
      header='The Alan Parsons Project'
      body='Sirius'
      projectInfo={ mockProjectInfo }
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render as an employee card when passed employeeInfo', () => {
    const mockEmployeeInfo = ['555-555-5556', 'alanparsons@project.com'];

    wrapper = shallow(<Card 
      header='Alan Parson'
      body='Musician'
      employeeInfo={ mockEmployeeInfo }
    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render as a form card when passed formInfo', () => {
    const mockFormDetails = [
      'alanparsons@project.com',
      '12',
      'The APP Inc',
      '2018-01-08',
      '1 hour',
      true,
      true,
      true,
      true,
      'xxx'
    ];

    wrapper = shallow(<Card 
      header='Hotwork Permit - Alan Parson'
      formDetails={ mockFormDetails }
    />);

    expect(wrapper).toMatchSnapshot();
  });


  it('should match the snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
