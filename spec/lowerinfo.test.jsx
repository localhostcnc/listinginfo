/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import LowerInfo from '../dist/Components/upperinfo';

describe('Components', () => {
  test('Rendering the Lower Info component', () => {
    const wrapper = shallow(
      <LowerInfo />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
