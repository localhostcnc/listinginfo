/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Info from '../dist/Components/upperInfo/info';

describe('Components', () => {
  test('Rendering the Info component', () => {
    const wrapper = shallow(
      <Info />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
