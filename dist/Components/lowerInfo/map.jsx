/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import key from './api.jsx';

const Line = styled.hr`
  color: #E6E4E4;
  height: 1px;
  background-color: #E6E4E4;
  border-width: 0px;
`;
const Lower = styled.div`
  padding-top: 7px;
  padding-bottom: 13px;
`;
const Text = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
`;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info/1')
      .then((res) => {
        const {
          city,
        } = res.data[0];
        this.setState({
          city,
        });
      });
  }

  render() {
    const src = `https://www.google.com/maps/embed/v1/search?key=${key}=${this.state.city}`;
    return (
      <div>
        <iframe title="map" width="595" height="350" frameBorder="0" src={src} />
        <Lower>
          <Text>Exact location information is provided after a booking is confirmed.</Text>
        </Lower>
        <Line />
      </div>
    );
  }
}

export default Map;
