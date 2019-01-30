import React from 'react';
import Nested2 from './Nested2'

export default class Nested extends React.Component {
  render() {
    return (
      <>
        <h1>Hi i am nested component</h1>
        <Nested2 />
      </>
    )
  }
}