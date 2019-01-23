import React, { Component } from 'react';
import Nested2 from './Nested2'

export default class Nested extends Component {
  render() {
    return (
      <>
        <h1>Nested 1</h1>
        <Nested2 />
      </>
    )
  }
}