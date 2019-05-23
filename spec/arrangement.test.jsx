/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Arrangement from '../dist/Components/upperInfo/arrangement';

describe('Components', () => {
  test('Rendering the Arrangment component', () => {
    const wrapper = shallow(
      <Arrangement />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
