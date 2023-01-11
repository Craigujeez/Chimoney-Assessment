import React from 'react';
import Enzyme,{ shallow } from 'enzyme';

import MenuItem from './Menu-item';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });

describe('MenuItem component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const linkUrl = '/hats';
  const size = 'large';
  const imageUrl = 'www.testimage.com';

  beforeEach(() => {
    mockMatch = {
      url: '/shop'
    };

    mockHistory = {
      push: jest.fn()
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      linkUrl,
      size,
      title: 'hats',
      imageUrl
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  it('should render MenuItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });

//   it('should call history.push with the right string when MenuItemContainer clicked', () => {
//     wrapper.find('.menu-item').simulate('click');

//     expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}${linkUrl}`);
//   });

//   it('should pass size to MenuItemContainer as the prop size', () => {
//     expect(wrapper.find('.menu-item').prop('size')).toBe(size);
//   });

//   it('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
//     expect(wrapper.find('.background-image').prop('imageUrl')).toBe(
//       imageUrl
//     );
//   });
});