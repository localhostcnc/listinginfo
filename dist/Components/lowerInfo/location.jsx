/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faChevronUp);

const Header = styled.div`
  font-size: 24.5px;
  font-weight: 600;
  line-height: 24px;
  font-family: sans-serif;
  color: #484f4f;
  padding-top: 37px;
  padding-bottom: 17px;
`;
const Info = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 34px;
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
  padding-bottom: 30px;
`;
const Icon = styled.span`
  padding-left: 10px;
`;

class Location extends React.Component {
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
          owner, city, location1, location2, location3,
        } = res.data[0];
        this.setState({
          owner, city, location1, location2, location3,
        });
      });
  }

  render() {
    if (this.state.showMore) {
      return (
        <div>
          <Header>The neighborhood</Header>
          <Info>{this.state.location1}</Info>
          <Info>{this.state.owner}&apos;s home is located in {this.state.city}</Info>
          <Info>{this.state.location2}</Info>
          <Info>{this.state.location3}</Info>
          <Button onClick={() => this.setState({ showMore: false })}>
            Hide
            <Icon>
              <FontAwesomeIcon icon="chevron-up" />
            </Icon>
          </Button>
        </div>
      );
    }
    return (
      <div>
        <Header>The neighborhood</Header>
        <Info>{this.state.location1}</Info>
        <Info>{this.state.owner}&apos;s home is located in {this.state.city}</Info>
        <Button onClick={() => this.setState({ showMore: true })}>
          Read more about the neighborhood
          <Icon>
            <FontAwesomeIcon icon="chevron-down" />
          </Icon>
        </Button>
      </div>
    );
  }
}

export default Location;
