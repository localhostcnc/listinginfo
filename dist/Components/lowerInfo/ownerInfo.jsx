/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
const Owner = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 30px;
  color: #484848;
`;
const Avatar = styled.img`
  border-radius: 50%;
  height: 64px;
  float: right;
  width: 64px;
`;
const Headline = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #484848;
`;
const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
`;
const Linkbutton = styled.span`
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

class OwnerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          owner, ownertype, responserate, avatar,
        } = res.data[0];
        this.setState({
          owner, ownertype, responserate, avatar,
        });
      });
  }

  render() {
    return (
      <div>
        <Owner>Hosted By {this.state.owner}</Owner>
        <Headline>Joined in January 2019</Headline>
        <Headline>{this.state.ownertype}</Headline>
        <Avatar src={this.state.avatar} alt="avatar of owner" />
        <div>
          <Text>Response rate: </Text>
          <Headline>{this.state.responserate}%</Headline>
        </div>
        <div>
          <Text>Response time: </Text>
          <Headline>within a few hours</Headline>
        </div>
        <Button>Contact Host</Button>
        <div>
          <Line />
          <Headline>
            Always Communicate through Airbnb &#183;&nbsp;
          </Headline>
          <Text>
            To protect your payment, never transfer money or&nbsp;
            communicate outside of the Airbnb website or app.&nbsp;
          </Text>
          <Linkbutton>
            Learn More
          </Linkbutton>
        </div>
        <Line />
      </div>
    );
  }
}

export default OwnerInfo;
