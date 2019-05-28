/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import OwnerInfo from './ownerInfo.jsx';
import Rules from './rules.jsx';
import Cancellation from './cancellation.jsx';
import Location from './location.jsx';
import Map from './map.jsx';

class LowerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <OwnerInfo />
        <Location />
        <Map />
        <Rules />
        <Cancellation />
      </div>
    );
  }
}

export default LowerInfo;
