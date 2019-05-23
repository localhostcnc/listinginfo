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
const Headline = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
`;
const Button = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #767676;
`;

class NearbyCities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          nearbycities, city,
        } = res.data[0];
        this.setState({
          nearbycities: nearbycities + nearbycities + nearbycities + nearbycities + nearbycities,
          city,
        });
      });
  }

  render() {
    return (
      <div>
        <Header>Explore other options in and around {this.state.city}</Header>
        <Headline>More places to stay in {this.state.city}: </Headline>
        <Button>Apartments &#183; </Button>
        <Button>Houses &#183; </Button>
        <Button>Bed and Breakfasts &#183; </Button>
        <Button>Lofts &#183; </Button>
        <Button>Villas</Button>
        <div>{this.state.nearbycities}</div>
      </div>
    );
  }
}

export default NearbyCities;
