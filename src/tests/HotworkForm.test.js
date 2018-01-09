/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import HotworkForm from '../components/HotworkForm';

describe('HotworkForm tests', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HotworkForm />);
  });

  it('should match snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
