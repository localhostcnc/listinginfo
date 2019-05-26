/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle);

const Button = styled.button`
  font-size: 14px;
  font-weight: 450;
  line-height: 22px;
  color: #008489;
  cursor: pointer;
  background-color: white;
  border: solid #008489 1px;
  border-radius: 5px;
  padding: 6px 15px;
`;
const Owner = styled.div`
  font-size: 24.5px;
  font-weight: 600;
  line-height: 24px;
  font-family: sans-serif;
  color: #484f4f;
  padding-bottom: 10px;
  padding-top: 17px;
`;
const Avatar = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
`;
const Floater = styled.div`
  padding-top: 19px;
  padding-right: 10px;
  float: right;
`;
const Headline = styled.span`
  font-size: 17px;
  font-family: sans-serif;
  font-weight: 500;
  line-height: 22px;
  color: #484848;
`;
const Text = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 24px;
  color: #484848;
  padding-bottom: 7px;
`;
const Info = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #484848;
  padding-bottom: 7px;
`;
const Type = styled.span`
  font-size: 14.5px;
  font-weight: 400;
  line-height: 24px;
  color: #484848;
  padding-bottom: 18px;
  padding-left: 8px;
`;
const Response = styled.span`
  font-size: 14.5px;
  font-weight: 400;
  line-height: 15px;
  color: #484848;
`;
const Bold = styled.span`
  font-size: 15px;
  font-weight: 900;
  line-height: 22px;
  color: #484848;
`;
const Linkbutton = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-family: sans-serif;
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
const Bottom = styled.div`
  padding-bottom: 18px;
`;
const Wrapper = styled.div`
  padding-top: 12px;
  padding-bottom: 18px;
`;
const Inner = styled.div`
  padding-bottom: 8px;
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
        <Floater>
          <Avatar src={this.state.avatar} alt="avatar of owner" />
        </Floater>
        <Owner>Hosted by {this.state.owner}</Owner>
        <Text>Joined in January 2019</Text>
        <FontAwesomeIcon icon="check-circle" />
        <Type>{this.state.ownertype}</Type>
        <Bottom />
        <Inner>
          <Response>Response rate: </Response>
          <Bold>{this.state.responserate}%</Bold>
        </Inner>
        <Inner>
          <Response>Response time: </Response>
          <Bold>within a few hours</Bold>
        </Inner>
        <Wrapper>
          <Button>Contact Host</Button>
        </Wrapper>
        <div>
          <Line />
          <Headline>
            Always communicate through Airbnb &#183;&nbsp;
          </Headline>
          <Info>
            To protect your payment, never transfer money or&nbsp;
            communicate outside of the Airbnb website or app.&nbsp;
          </Info>
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
