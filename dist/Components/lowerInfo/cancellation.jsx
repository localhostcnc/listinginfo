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
  padding-bottom: 10px;
`;
const Info = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: #484848;
  padding-top: 5px;
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
  padding-top: 20px;
`;
const Line = styled.hr`
  color: #E6E4E4;
  height: 1px;
  background-color: #E6E4E4;
  border-width: 0px;
  margin-top: 30px;
`;
const Icon = styled.span`
  padding-left: 10px;
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
          cancellation, description,
        } = res.data[0];
        this.setState({
          cancellation, description,
        });
      });
  }

  render() {
    if (this.state.showMore) {
      return (
        <div>
          <Header>Cancellation</Header>
          <Info>{this.state.cancellation}</Info>
          <Info>{this.state.cancellation}</Info>
          <Info>{this.state.cancellation}</Info>
          <Info>{`${this.state.description}`.slice(0, 250)}</Info>
          <Button onClick={() => this.setState({ showMore: false })}>
            Hide rules
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
        <Info>{this.state.cancellation}</Info>
        <Info>{this.state.cancellation}</Info>
        <Info>{this.state.cancellation}</Info>
        <Button onClick={() => this.setState({ showMore: true })}>
          Read all rules
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
