import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Homepage from './Homepage';

Enzyme.configure({ adapter: new Adapter() })

it('should render Homepage component', () => {
  expect(shallow(<Homepage />)).toMatchSnapshot();
});