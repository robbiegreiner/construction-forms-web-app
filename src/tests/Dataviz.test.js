/* eslint-disable no-unused-vars, no-undef, import/no-unresolved */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';
import Dataviz from '../components/Dataviz';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('Dataviz tests', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Dataviz />);
  });

  it('should render without crashing', () => {
    shallow(<Dataviz />);
  });

});
