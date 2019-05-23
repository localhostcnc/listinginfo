/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Related from '../dist/Components/relatedListings/related';

describe('Components', () => {
  test('Rendering the Related component', () => {
    const wrapper = shallow(
      <Related />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
