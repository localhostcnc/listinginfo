/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../dist/Components/upperInfo/layout';

describe('Components', () => {
  test('Rendering the Layout component', () => {
    const wrapper = shallow(
      <Layout />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
