/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import UpperInfo from './Components/upperInfo/index.jsx';
import LowerInfo from './Components/lowerInfo/index.jsx';

const Column = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  width: 42.5%;
  padding-left: 189px;
  font-family: Montserrat, sans-serif;
`;
const Page = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  width: 53%;
  padding-left: 188px;
  font-family: Montserrat, sans-serif;
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
        </Column>
        <Page />
      </div>
    );
  }
}

ReactDOM.render(<ListingInfo />, document.getElementById('listingInfo'));
