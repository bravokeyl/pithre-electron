import React, { Component } from 'react';

class Pithre extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const P = 'Double Pithre';
    return (
      <div>
        <h1>Hola! {P} </h1>
      </div>
    );
  }
}

export default Pithre;
