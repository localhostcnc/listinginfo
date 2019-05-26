/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 24.5px;
  font-weight: 600;
  line-height: 24px;
  font-family: sans-serif;
  color: #484f4f;
  padding-top: 37px;
  padding-bottom: 17px;
`;
const Headline = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
`;
const Upper = styled.div`
  padding-bottom: 10px;
`;
const Lower = styled.div`
  padding-top: 7px;
  padding-bottom: 13px;
`;
const Line = styled.hr`
  color: #E6E4E4;
  height: 1px;
  background-color: #E6E4E4;
  border-width: 0px;
`;

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          location, owner, city,
        } = res.data[0];
        this.setState({
          location, owner, city,
        });
      });
  }

  render() {
    return (
      <div>
        <Header>The neighborhood</Header>
        <Upper>
          <Headline>{this.state.owner}&apos;s home is located in {this.state.city}.</Headline>
        </Upper>
        <div>{this.state.location}</div>
        <Lower>
          <Headline>Exact location information is provided after a booking is confirmed.</Headline>
        </Lower>
        <Line />
      </div>
    );
  }
}

export default Location;
