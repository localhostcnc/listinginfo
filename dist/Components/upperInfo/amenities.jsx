/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTv, faWifi, faToiletPaper, faDumbbell,
} from '@fortawesome/free-solid-svg-icons';

library.add(faTv, faWifi, faToiletPaper, faDumbbell);

const Button = styled.div`
  font-size: 15px;
  font-weight: 900;
  line-height: 22px;
  color: #008489;
  cursor: pointer;
  &:hover{
    text-decoration:underline;
  }
  padding-bottom: 18px;
`;

const Header = styled.div`
  font-size: 15px;
  font-weight: 900;
  line-height: 22px;
  padding-top: 15px;
`;
const Line = styled.hr`
  color: #E6E4E4;
  height: 1px;
  background-color: #E6E4E4;
  border-width: 0px;
`;
const Amenity = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: #484848;
  margin-right: 21px;
  padding-top: 19px;
  padding-left: 5px;
`;
const Right = styled.div`
  padding-bottom: 26px;
  padding-left: 220px;
`;
const Box = styled.div`
  display: flex;
`;
const Icon = styled.span`
  padding-right: 7px;
`;

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          amenities,
        } = res.data[0];
        this.setState({
          amenities,
        });
      });
  }

  render() {
    return (
      <div>
        <Header>Amenities</Header>
        <Box>
          <div>
            <Amenity>
              <Icon>
                <FontAwesomeIcon icon="wifi" />
              </Icon>
              Wifi
            </Amenity>
            <Amenity>
              <Icon>
                <FontAwesomeIcon icon="dumbbell" />
              </Icon>
              Gym
            </Amenity>
          </div>
          <Right>
            <Amenity>
              <Icon>
                <FontAwesomeIcon icon="tv" />
              </Icon>
              Cable TV
            </Amenity>
            <Amenity>
              <Icon>
                <FontAwesomeIcon icon="toilet-paper" />
              </Icon>
              Essentials
            </Amenity>
          </Right>
        </Box>
        <Button>
          Show all {this.state.amenities} amenities
        </Button>
        <Line />
      </div>
    );
  }
}

export default Amenities;
