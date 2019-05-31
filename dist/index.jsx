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
const Index1 = styled.div`
  z-index: 1;
`;
const Index2 = styled.div`
  margin-top: 600px;
  margin-bottom: -800px;
`;

class ListingInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Column>
          <Index1>
            <UpperInfo />
          </Index1>
          <Index2>
            <LowerInfo />
          </Index2>
        </Column>
      </div>
    );
  }
}

ReactDOM.render(<ListingInfo />, document.getElementById('listingInfo'));
export default ListingInfo;
