import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import SignInAndSignUpPage from './SignIn-and-SignOut-Page';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

it('should render SignInAndSignUpPage component', () => {
  expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});