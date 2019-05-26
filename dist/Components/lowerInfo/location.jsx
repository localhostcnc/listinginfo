/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import key from './api.jsx';

const Header = styled.div`
  font-size: 24.5px;
  font-weight: 600;
  line-height: 24px;
  font-family: sans-serif;
  color: #484f4f;
  padding-top: 37px;
  padding-bottom: 17px;
`;
const Text = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
`;
const Upper = styled.div`
  padding-bottom: 15px;
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
          owner, city,
        } = res.data[0];
        this.setState({
          owner, city,
        });
      });
  }

  render() {
    const src = `https://www.google.com/maps/embed/v1/search?key=${key}=${this.state.city}`;
    return (
      <div>
        <Header>The neighborhood</Header>
        <Upper>
          <Text>{this.state.owner}&apos;s home is located in {this.state.city}.</Text>
        </Upper>
        <iframe title="map" width="595" height="350" frameBorder="0" src={src} />
        <Lower>
          <Text>Exact location information is provided after a booking is confirmed.</Text>
        </Lower>
        <Line />
      </div>
    );
  }
}

export default Location;
