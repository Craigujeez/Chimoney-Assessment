import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import CartItem from './Cart-Item';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

it('should render CartItem component', () => {
  const mockItem = {
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9uJTIwcmVzdGF1cmFudCUyMGFmcmljYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    price: 10,
    name: 'hats',
    quantity: 2
  };

  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});