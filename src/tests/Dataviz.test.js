/* eslint-disable no-unused-vars, no-undef, import/no-unresolved */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import DataViz from '../components/DataViz';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('DataViz tests', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DataViz />);
  });

  it('should render without crashing', () => {
    shallow(<DataViz />);
  });

  it('should render with empty state', () => {
    const emptyState = {
      projects: [],
      employees: [],
      hotworkForms: [],
      pretaskForms: [],
      dataVizControl: null,
      selectedInfo: {}
    };

    expect(wrapper.state()).toEqual(emptyState);
  });

  it('should set selected view in state', () => {
    wrapper.instance().formsBySelector('Reports By Project - 10');

    expect(wrapper.state().dataVizControl).toEqual('Reports By Project - 10');

  });

  it('should set selected card in state', () => {
    const mockCardProps = {
      body: {},
      cardClickHandler: jest.fn(),
      formsBySelector: true,
      header: 'Confluence Condominiums',
      projectId: 10
    };

    wrapper.instance().cardClickHandler(mockCardProps);

    expect(wrapper.state().selectedInfo).toBe(mockCardProps);
  });

  it('should do nothing when clicked on a form by selector', () => {
    wrapper.instance().setState({ selectedInfo: 'Sirius' });
    wrapper.instance().mockCardClickHandler({ selectedInfo: 'Eye In The Sky' });
    expect(wrapper.state().selectedInfo).toEqual('Sirius');
  });

  it('should clear state when closeSelected', () => {
    wrapper.instance().setState({ selectedInfo: 'Sirius' });
    wrapper.instance().closeSelected();

    expect(wrapper.state().selectedInfo).toEqual({});
  });

  it('should sort an array of objects by name', () => {
    const arrayOfObjs = [
      { name: 'Jorge' },
      { name: 'Alan' },
      { name: 'Robbie' }
    ];

    const sortedArray = [
      { name: 'Alan' },
      { name: 'Jorge' },
      { name: 'Robbie' }
    ];

    expect(wrapper.instance().aToZ(arrayOfObjs)).toEqual(sortedArray);
  });

  it('should render a welcome page when no control is selected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match snapshot when selectedControl is Projects', () => {
    const wrapper = shallow(<DataViz selectedControl='Projects' />);
    wrapper.instance().setState({
      projects: [
        { id: 1, location: 'Omaha', name: 'FNBO Building', public: true, union: true },
        { id: 2, location: 'Boston', name: 'Stadium', public: true, union: false }
      ]
    });
    wrapper.update();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match snapshot when selectedControl is Employees', () => {
    const wrapper = shallow(<DataViz selectedControl='Employees' />);
    wrapper.instance().setState({
      employees: [
        { id: 1, email: 'robbie@email.com', name: 'Robbie Griener', phone: '555-555-5556', position: 'The Boss' },
        { id: 2, email: 'mickjeets@email.com', name: 'Mick Jeets', phone: '444-444-4445', position: 'Underling' }
      ]
    });
    wrapper.update();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match snapshot when selectedControl is All Reports', () => {
    const wrapper = shallow(<DataViz selectedControl='All Reports' />);
    wrapper.instance().setState({
      hotworkForms: [
        {
          id: 1,
          areaInspected: true,
          company: 'Mortenson',
          date: '2018-01-07T21:18:12.993Z',
          employee_email: 'robbie@g.com',
          employee_id: '31',
          employee_name: 'Robbie',
          fireExtinguisher: true,
          firewatchRequirement: '30 minutes',
          flammablesRemoved: true,
          project_id: 11,
          signature: 'xxx'
        }
      ],
      pretaskForms: [
        {
          id: 1,
          adequateLighting: true,
          buddyAssignment: false,
          company: 'Mortenson',
          crewSize: 12,
          date: '2018-01-07T21:18:12.993Z',
          employee_email: 'robbie@g.com',
          employee_id: '31',
          employee_name: 'Robbie',
          equipmentShutdown: true,
          fluidDischarge: false,
          hazards: 'Overhead',
          impactOwner: false,
          lifting: false,
          msdsReviewed: true,
          planReview: true,
          project_id: 11,
          requireTraining: true,
          safetyLocations: false,
          signature: 'xxx'
        }
      ]
    });
    wrapper.update();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match snapshot when Reports By Project is selectedControl', () => {
    const wrapper = shallow(<DataViz selectedControl='Reports By Project' />);
    wrapper.instance().setState({
      employees: [
        { id: 1, email: 'dani@g.com', name: 'Dani Griener', location: 'Denver', position: 'Welder' }
      ],
      hotworkForms: [
        {
          id: 1,
          areaInspected: true,
          company: 'Mortenson',
          date: '2018-01-07T21:18:12.993Z',
          employee_email: 'robbie@g.com',
          employee_id: '31',
          employee_name: 'Robbie',
          fireExtinguisher: true,
          firewatchRequirement: '30 minutes',
          flammablesRemoved: true,
          project_id: 11,
          signature: 'xxx'
        }
      ]
    });
    wrapper.update();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should match snapshot when Reports By Employee is selectedControl', () => {
    const wrapper = shallow(<DataViz selectedControl='Reports By Employee' />);
    wrapper.instance().setState({
      employees: [
        { id: 1, location: 'Omaha', name: 'FNBO Building', public: true, union: true }
      ],
      hotworkForms: [
        {
          id: 1,
          areaInspected: true,
          company: 'Mortenson',
          date: '2018-01-07T21:18:12.993Z',
          employee_email: 'robbie@g.com',
          employee_id: '31',
          employee_name: 'Robbie',
          fireExtinguisher: true,
          firewatchRequirement: '30 minutes',
          flammablesRemoved: true,
          project_id: 11,
          signature: 'xxx'
        }
      ]
    });
    wrapper.update();
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
