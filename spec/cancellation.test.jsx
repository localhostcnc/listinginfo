/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Cancellation from '../dist/Components/lowerInfo/cancellation';

describe('Components', () => {
  test('Rendering the Cancellation component', () => {
    const wrapper = shallow(
      <Cancellation />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
