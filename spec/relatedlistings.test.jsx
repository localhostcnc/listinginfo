/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import RelatedListings from '../dist/Components/relatedlistings';

describe('Components', () => {
  test('Rendering the Related Listings component', () => {
    const wrapper = shallow(
      <RelatedListings />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
