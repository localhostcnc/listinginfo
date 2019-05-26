/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faChevronUp);

const Text = styled.p`
  padding-top: 9px;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
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
  padding-bottom:31px;
  padding-top:14px;
`;
const Contact = styled.div`
  font-size: 15px;
  font-weight: 900;
  line-height: 22px;
  color: #008489;
  cursor: pointer;
  &:hover{
    text-decoration:underline;
  }
  padding-bottom:16px;
`;
const ReadMore = styled.span`
  padding-right: 10px;
  font-weight: 900;
`;
const Line = styled.hr`
  color: #E6E4E4;
  height: 1px;
  background-color: #E6E4E4;
  border-width: 0px;
`;

class Description extends React.Component {
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
          description,
        } = res.data[0];
        this.setState({
          description,
        });
      });
  }

  render() {
    if (this.state.showMore) {
      return (
        <div>
          <Text>{this.state.description}</Text>
          <Text>{this.state.description}</Text>
          <Text>{this.state.description}</Text>
          <Button onClick={() => this.setState({ showMore: false })}>
            <ReadMore>Hide</ReadMore>
            <FontAwesomeIcon icon="chevron-up" />
          </Button>
          <Contact>Contact Host</Contact>
          <Line />
        </div>
      );
    }
    return (
      <div>
        <Text>{this.state.description}</Text>
        <Button onClick={() => this.setState({ showMore: true })}>
          <ReadMore>Read more about the space</ReadMore>
          <FontAwesomeIcon icon="chevron-down" />
        </Button>
        <Contact>Contact host</Contact>
        <Line />
      </div>
    );
  }
}

export default Description;
