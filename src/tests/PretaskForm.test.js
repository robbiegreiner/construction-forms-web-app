/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import PretaskForm from '../components/PretaskForm';

describe('PretaskForm tests', () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PretaskForm />);
  });

  it('should match snapshot test', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
