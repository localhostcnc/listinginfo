/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faChevronUp);

const Header = styled.div`
  font-size: 17px;
  font-family: sans-serif;
  font-weight: 500;
  line-height: 22px;
  color: #484848;
  padding-top: 14px;
  padding-bottom: 14px;
`;
const Info = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: #484848;
  padding-top: 2px;
`;
const Button = styled.div`
  font-size: 15px;
  font-weight: 900;
  line-height: 22px;
  color: #008489;
  cursor: pointer;
  &:hover{
    text-decoration:underline;
  }
  padding-top: 20px;
`;
const Icon = styled.span`
  padding-left: 10px;
`;
const Headline = styled.div`
  font-size: 17px;
  font-weight: 900;
  line-height: 24px;
  color: #484848;
`;
const Line = styled.hr`
  color: #E6E4E4;
  height: 1px;
  background-color: #E6E4E4;
  border-width: 0px;
  margin-top: 30px;
`;

class Cancellation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info/1')
      .then((res) => {
        const {
          cancellation1, cancellation2, cancellation3, cancellation4,
        } = res.data[0];
        this.setState({
          cancellation1, cancellation2, cancellation3, cancellation4,
        });
      });
  }

  render() {
    if (this.state.showMore) {
      return (
        <div>
          <Header>Cancellation</Header>
          <Headline>{this.state.cancellation1}</Headline>
          <Info>{this.state.cancellation2}</Info>
          <Info>{this.state.cancellation3}</Info>
          <Info>{this.state.cancellation4}</Info>
          <Button>Get full details</Button>
          <Button onClick={() => this.setState({ showMore: false })}>
            Hide policies
            <Icon>
              <FontAwesomeIcon icon="chevron-up" />
            </Icon>
          </Button>
          <Line />
        </div>
      );
    }
    return (
      <div>
        <Header>Cancellation</Header>
        <Headline>{this.state.cancellation1}</Headline>
        <Info>{this.state.cancellation2}</Info>
        <Button onClick={() => this.setState({ showMore: true })}>
          Read more about the policy
          <Icon>
            <FontAwesomeIcon icon="chevron-down" />
          </Icon>
        </Button>
        <Line />
      </div>
    );
  }
}

export default Cancellation;
