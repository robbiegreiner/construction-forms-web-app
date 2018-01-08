/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should have a single child element', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toEqual(1);
});
