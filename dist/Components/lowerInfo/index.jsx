/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import OwnerInfo from './ownerInfo.jsx';
import Rules from './rules.jsx';
import Cancellation from './cancellation.jsx';
import Location from './location.jsx';

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
        <Rules />
        <Cancellation />
        <Location />
      </div>
    );
  }
}

export default LowerInfo;
