/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Rules from '../dist/Components/lowerInfo/rules';

describe('Components', () => {
  test('Rendering the Rules component', () => {
    const wrapper = shallow(
      <Rules />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
