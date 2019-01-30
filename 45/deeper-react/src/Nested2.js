import React from 'react';

import { NewContext } from './App4';
export default class Nested2 extends React.Component {
  render() {
    return (
      <>
        <h1>I am nested too</h1>
        <NewContext.Consumer>
          {
            (ctx) => (<p>My color is: {ctx.color}</p>)
          }
        </NewContext.Consumer>
      </>
    )
  }
}