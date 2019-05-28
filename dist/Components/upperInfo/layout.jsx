/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faMapMarkerAlt, faKey, faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faMapMarkerAlt, faKey, faThumbsUp);

const Wrapper = styled.div`
  font-size: 15px;
  font-weight: 200;
  line-height: 22px;
  color: #484848;
  display: flex;
  padding-bottom: 7px;
  padding-left: 26px;
`;
const Inner = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  padding-left: 26px;
`;
const Type = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 25px;
  padding-left: 8px;
`;
const MidType = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 25px;
  padding-left: 14px;
`;
const LowerType = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 25px;
  padding-left: 10px;
`;
const Line = styled.hr`
  color: #E6E4E4;
  height: 1px;
  background-color: #E6E4E4;
  border-width: 0px;
`;
const Help = styled.span`
  font-weight: 100;
  font-size: 12px;
  line-height: 25px;
  cursor: pointer;
  &:hover{
    color: #008489;
  }
`;
const Icon = styled.span`
  padding-left: 5px;
`;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          rooms, beds, guests, baths,
        } = res.data[0];
        this.setState({
          rooms, beds, guests, baths,
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <FontAwesomeIcon icon="home" />
          <Type>Entire house</Type>
          <Wrapper>
            <span>{this.state.guests} guests&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>{this.state.rooms} bedrooms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>{this.state.beds} beds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>{this.state.baths} baths</span>
          </Wrapper>
        </div>
        <div>
          <FontAwesomeIcon icon="map-marker-alt" />
          <MidType>Great location</MidType>
          <Inner>
            <div>90% of recent guests gave this location a 5-star rating.</div>
            <Help>Helpful
              <Icon>
                <FontAwesomeIcon icon="thumbs-up" />
              </Icon>
            </Help>
            <Help>  &#183; Not helpful</Help>
          </Inner>
        </div>
        <div>
          <FontAwesomeIcon icon="key" />
          <LowerType>Great check-in experience</LowerType>
          <Inner>
            <div>100% of recent guests gave the check-in process a 5-star rating</div>
            <Help>
              Helpful
              <Icon>
                <FontAwesomeIcon icon="thumbs-up" />
              </Icon>
            </Help>
            <Help>  &#183; Not helpful</Help>
          </Inner>
          <Line />
        </div>
      </div>
    );
  }
}

export default Layout;
