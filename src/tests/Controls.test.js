/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../components/Controls';

describe('Controls tests', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Controls />);
  });

  it('should render without crashing', () => {
    shallow(<Controls />);
  });

  it('should render buttons based on content array', () => {
    expect(wrapper.instance().generateButtons().length).toEqual(8);
  });

  it('should match snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
