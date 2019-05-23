/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3006/listing_info')
      .then((res) => {
        const {
          related1, related2, related3,
        } = res.data[0];
        this.setState({
          related1, related2, related3,
        });
      });
  }

  render() {
    return (
      <div>
        <div>{`${this.state.related1}`}</div>
        <div>{`${this.state.related2}`}</div>
        <div>{`${this.state.related3}`}</div>
      </div>
    );
  }
}

export default Related;
