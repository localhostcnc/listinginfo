/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Location from '../dist/Components/lowerInfo/location';

describe('Components', () => {
  test('Rendering the Location component', () => {
    const wrapper = shallow(
      <Location />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
