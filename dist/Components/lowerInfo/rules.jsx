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
const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
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

class Rules extends React.Component {
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
          rules, description,
        } = res.data[0];
        this.setState({
          rules, description,
        });
      });
  }

  render() {
    if (this.state.showMore) {
      return (
        <div>
          <Title>Policies</Title>
          <Header>House Rules</Header>
          <Headline>{this.state.rules}</Headline>
          <Info>{this.state.rules}</Info>
          <Info>{this.state.description}</Info>
          <Button onClick={() => this.setState({ showMore: false })}>Hide rules</Button>
          <Line />
        </div>
      );
    }
    return (
      <div>
        <Title>Policies</Title>
        <Header>House Rules</Header>
        <Headline>{this.state.rules}</Headline>
        <Info>{this.state.rules}</Info>
        <Button onClick={() => this.setState({ showMore: true })}>Read all rules</Button>
        <Line />
      </div>
    );
  }
}

export default Rules;
