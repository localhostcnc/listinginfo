/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

library.add(faBed);

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 18px;
`;
const Header = styled.div`
  font-size: 15px;
  font-weight: 900;
  line-height: 22px;
  padding-bottom: 14px;
  padding-top: 18px;
`;
const Line = styled.hr`
  color: #E6E4E4;
  height: 1px;
  background-color: #E6E4E4;
  border-width: 0px;
`;
const Square = styled.span`
  border: solid #E6E4E4 1px;
  height: 167px;
  width: 350px;
  border-radius: 4px;
  margin-right: 16px;
`;
const LowerSquare = styled.span`
  border: solid #E6E4E4 1px;
  height: 167px;
  width: 350px;
  border-radius: 4px;
`;
const Upper = styled.div`
  font-weight: 900;
  font-size: 15px;
  line-height: 25px;
  padding-left: 23px;
`;
const Lower = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
  padding-left: 23px;
`;
const Icon = styled.div`
  padding-top: 27px;
  padding-right: 2px;
  padding-left: 27px;
  padding-bottom: 24px;
`;
const Icons = styled.div`
  display: flex;
`;

class Arrangement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          bedtype1, bedtype2, bedtype3, bedtype4,
        } = res.data[0];
        console.log(res.data[0]);
        this.setState({
          bedtype1, bedtype2, bedtype3, bedtype4,
        });
      });
  }

  render() {
    return (
      <div>
        <Header>Sleeping arrangments</Header>
        <Wrapper>
          <Square>
            <Icon>
              <FontAwesomeIcon icon="bed" />
            </Icon>
            <Upper>Bedroom 1</Upper>
            <Lower>1 {this.state.bedtype1} bed</Lower>
          </Square>
          <Square>
            <Icon>
              <FontAwesomeIcon icon="bed" />
            </Icon>
            <Upper>Bedroom 2</Upper>
            <Lower>1 {this.state.bedtype2} bed</Lower>
          </Square>
          <LowerSquare>
            <Icons>
              <Icon>
                <FontAwesomeIcon icon="bed" />
              </Icon>
              <Icon>
                <FontAwesomeIcon icon="bed" />
              </Icon>
            </Icons>
            <Upper>Common areas</Upper>
            <Lower>1 {this.state.bedtype3} and 1 {this.state.bedtype4}</Lower>
          </LowerSquare>
        </Wrapper>
        <Line />
      </div>
    );
  }
}

export default Arrangement;
