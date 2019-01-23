import React from 'react';
import Nested2 from './Nested2'

export default function Nested(props) {
  return (
    <React.Fragment>
      <h4>First nested</h4>
      <Nested2 />
    </React.Fragment>
  )
}