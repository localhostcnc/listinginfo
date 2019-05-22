/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Description from '../dist/Components/upperInfo/description';

describe('Components', () => {
  test('Rendering the Description component', () => {
    const wrapper = shallow(
      <Description />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
