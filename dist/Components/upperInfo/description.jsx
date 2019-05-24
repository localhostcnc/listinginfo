/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Text = styled.p`
  padding-top: 9px;
  font-size: 15px;
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
          <Button onClick={() => this.setState({ showMore: false })}>Hide</Button>
          <Button>Contact Host</Button>
          <Line />
        </div>
      );
    }
    return (
      <div>
        <Text>{this.state.description}</Text>
        <Button onClick={() => this.setState({ showMore: true })}>Read more about the space</Button>
        <Button>Contact Host</Button>
        <Line />
      </div>
    );
  }
}

export default Description;
