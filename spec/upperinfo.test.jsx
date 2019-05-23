/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import UpperInfo from '../dist/Components/upperInfo/index';

describe('Components', () => {
  test('Rendering the Upper Info component', () => {
    const wrapper = shallow(
      <UpperInfo />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
