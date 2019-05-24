/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Name = styled.div`
  font-size: 31px;
  font-weight: 550;
  line-height: 36px;
  font-family: sans-serif;
  color: #484848;
  width: 80%;
  padding-bottom: 7px;
`;

const City = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
  cursor: pointer;
  &:hover{
    text-decoration:underline;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 62px;
  width: 62px;
  cursor: pointer;
`;

const Owner = styled.span`
  font-size: 13.5px;
  font-weight: 300;
  line-height: 13px;
  color: #767676;
  display: block;
  text-align: center;
`;
const Wrapper = styled.div`
  padding-left: 33px;
`;
const Box = styled.div`
  padding-top: 16px;
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
          <div>
            <Name>{this.state.name}</Name>
            <City>{this.state.city}</City>
          </div>
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
