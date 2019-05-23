/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Text = styled.p`
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
          <Button>Hide</Button>
          <Button>Contact Host</Button>
        </div>
      );
    }
    return (
      <div>
        <Text>{this.state.description}</Text>
        <Button>Read more about the space</Button>
        <Button>Contact Host</Button>
      </div>
    );
  }
}

export default Description;
