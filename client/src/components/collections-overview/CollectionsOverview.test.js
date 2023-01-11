import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import CollectionsOverview from './CollectionsOverview';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

it('should render CollectionsOverview component', () => {
  expect(shallow(<CollectionsOverview collections={[]} />)).toMatchSnapshot();
});