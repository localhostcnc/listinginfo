/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import UpperInfo from './Components/upperInfo/index.jsx';
import LowerInfo from './Components/lowerInfo/index.jsx';
import RelatedListings from './Components/relatedListings/index.jsx';

const Column = styled.div`
  width: 40%;
  font-family: sans-serif;
`;

class ListingInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Column>
          <UpperInfo />
          <LowerInfo />
          <RelatedListings />
        </Column>
      </div>
    );
  }
}

ReactDOM.render(<ListingInfo />, document.getElementById('listingInfo'));
