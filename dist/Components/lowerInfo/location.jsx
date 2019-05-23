/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  color: #484848;
`;
const Headline = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
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
        <Header>The Neighborhood</Header>
        <Headline>{this.state.owner}&apos;s home is located in {this.state.city}</Headline>
        <div>{this.state.location}</div>
        <Headline>Exact location information is provided after a booking is confirmed.</Headline>
      </div>
    );
  }
}

export default Location;
