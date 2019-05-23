/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Related from './related.jsx';
import NearbyCities from './nearbyCities.jsx';

class RelatedListings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Related />
        <NearbyCities />
      </div>
    );
  }
}

export default RelatedListings;
