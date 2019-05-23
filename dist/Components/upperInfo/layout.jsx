/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Number = styled.span`
  color: dimgray;
`;
const Wrapper = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
`;
const Type = styled.div`
   font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #484848;
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          rooms, beds, guests, baths,
        } = res.data[0];
        this.setState({
          rooms, beds, guests, baths,
        });
      });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Type>Entire cabin</Type>
          <Number>{this.state.rooms} bedrooms </Number>
          <Number>{this.state.beds} beds </Number>
          <Number>{this.state.baths} baths </Number>
          <Number>{this.state.guests} guests</Number>
        </Wrapper>
      </div>
    );
  }
}

export default Layout;
