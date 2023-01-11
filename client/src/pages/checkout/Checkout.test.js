import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import Checkout from './Checkout';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

let wrapper;
beforeEach(() => {
  const mockProps = {
    cartItems: [],
    total: 100
  };

  wrapper = shallow(<Checkout {...mockProps} />);
});

it('should render CheckoutPage component', () => {
  expect(wrapper).toMatchSnapshot();
});