/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import Info from './info.jsx';
import Layout from './layout.jsx';
import Amenities from './amenities.jsx';
import Description from './description.jsx';
import Arrangement from './arrangement.jsx';

class UpperInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Info />
        <Layout />
        <Description />
        <Amenities />
        <Arrangement />
      </div>
    );
  }
}

export default UpperInfo;
