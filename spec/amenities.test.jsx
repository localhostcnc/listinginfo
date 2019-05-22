/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Amenities from '../dist/Components/upperInfo/amenities';

describe('Components', () => {
  test('Rendering the Amenities component', () => {
    const wrapper = shallow(
      <Amenities />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
