/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Name = styled.span`
  font-size: 32px;
  font-weight: 550;
  line-height: 36px;
  font-family: sans-serif;
  color: #484848;
`;

const City = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
`;

const Avatar = styled.img`
  float: right;
  border-radius: 50%;
  height: 62px;
  width: 62px;
`;

const Owner = styled.span`
  float: right;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #767676;
`;

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          name, city, avatar, owner,
        } = res.data[0];
        this.setState({
          name, city, avatar, owner,
        });
      });
  }

  render() {
    return (
      <div>
        <Name>{this.state.name}</Name>
        <Avatar src={this.state.avatar} alt="avatar of owner" />
        <City>{this.state.city}</City>
        <Owner>{this.state.owner}</Owner>
      </div>
    );
  }
}

export default Info;
