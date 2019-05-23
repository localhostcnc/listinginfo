/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import OwnerInfo from '../dist/Components/lowerInfo/ownerInfo';

describe('Components', () => {
  test('Rendering the Owner Info component', () => {
    const wrapper = shallow(
      <OwnerInfo />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
