/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
  color: #484848;
`;
const Headline = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #484848;
`;
const Info = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
`;
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
const Line = styled.hr`
  color: #E6E4E4;
  height: 1px;
  background-color: #E6E4E4;
  border-width: 0px;
`;

class Cancellation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          cancellation,
        } = res.data[0];
        this.setState({
          cancellation,
        });
      });
  }

  render() {
    if (this.state.showMore) {
      return (
        <div>
          <Header>Cancellations</Header>
          <Headline>{this.state.cancellation}</Headline>
          <Info>{this.state.cancellation}</Info>
          <Button>Get Full Details</Button>
          <Button>Hide policies</Button>
          <Line />
        </div>
      );
    }
    return (
      <div>
        <Header>Cancellations</Header>
        <Headline>{this.state.cancellation}</Headline>
        <Info>{this.state.cancellation}</Info>
        <Button>Read More About this Policy</Button>
        <Line />
      </div>
    );
  }
}

export default Cancellation;
