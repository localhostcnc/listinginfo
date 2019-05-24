/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #008489;
  cursor: pointer;
  &:hover{
    text-decoration:underline;
  }
`;

const Header = styled.span`
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
  color: #484848;
`;
const Line = styled.hr`
  color: lightgrey;
  height: 1px;
  background-color: lightgrey;
  border-width: 0px;
`;

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          amenities,
        } = res.data[0];
        this.setState({
          amenities,
        });
      });
  }

  render() {
    if (this.state.showModal) {
      return (
        <div>
          <Header>Amenities</Header>
          <div>{this.state.amenities}</div>
          <Button>Show All Amenities Button</Button>
          <Line />
        </div>
      );
    }
    return (
      <div>
        <Header>Amenities</Header>
        <div>{this.state.amenities}</div>
        <Button>Show All Amenities</Button>
        <Line />
      </div>
    );
  }
}

export default Amenities;
