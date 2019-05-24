/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Name = styled.div`
  font-size: 31px;
  font-weight: 550;
  line-height: 38px;
  font-family: sans-serif;
  color: #484848;
  width: 80%;
  padding-bottom: 5px;
`;

const City = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 62px;
  width: 62px;
  padding-bottom: 0px;
`;

const Owner = styled.span`
  font-size: 13.5px;
  font-weight: 300;
  line-height: 13px;
  color: #767676;
  display: block;
  text-align: center;
  padding-top: 0px;
`;
const Wrapper = styled.div`
  padding-right: 25px;
  padding-top: 11px;
`;
const Box = styled.div`
  display: flex;
  padding-bottom: 12px;
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
        <Box>
          <Wrapper>
            <Name>{this.state.name}</Name>
            <City>{this.state.city}</City>
          </Wrapper>
          <Wrapper>
            <Avatar src={this.state.avatar} alt="avatar of owner" />
            <Owner>{this.state.owner}</Owner>
          </Wrapper>
        </Box>
      </div>
    );
  }
}

export default Info;
