/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import OwnerInfo from './ownerInfo.jsx';
import Rules from './rules.jsx';
import Cancellation from './cancellation.jsx';
import Location from './location.jsx';
import Map from './map.jsx';

const Lower = styled.div`
  padding-top: 1000px;
`;

class LowerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Lower>
          <OwnerInfo />
          <Location />
          <Map />
          <Rules />
          <Cancellation />
        </Lower>
      </div>
    );
  }
}

export default LowerInfo;
