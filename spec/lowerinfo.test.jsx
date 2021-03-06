/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import LowerInfo from '../dist/Components/lowerInfo/index';

describe('Components', () => {
  test('Rendering the Lower Info component', () => {
    const wrapper = shallow(
      <LowerInfo />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
