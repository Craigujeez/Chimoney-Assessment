import React from 'react';
import Enzyme,{ shallow } from 'enzyme';

import PreviewCollection from './PreviewCollection';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('CollectionPreview component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const mockRouteName = 'hats';

  beforeEach(() => {
    mockMatch = {
      path: '/shop'
    };

    mockHistory = {
      push: jest.fn()
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: 'hats',
      items: []
    };

    wrapper = shallow(<PreviewCollection {...mockProps} />);
  });

  it('should render Preview Collection component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push with the right string when TitleContainer clicked', () => {
    wrapper.find('TitleContainer').simulate('click');

    expect(mockHistory.push).toHaveBeenCalledWith(
      `${mockMatch.path}/${mockRouteName}`
    );
  });
});