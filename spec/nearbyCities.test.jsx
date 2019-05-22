/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import NearbyCities from '../dist/Components/relatedListings/nearbyCities';

describe('Components', () => {
  test('Rendering the Nearby Cities component', () => {
    const wrapper = shallow(
      <NearbyCities />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
