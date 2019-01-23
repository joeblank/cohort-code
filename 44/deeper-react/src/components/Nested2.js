import React, { Component } from 'react';
import { NameContext } from './Context';

export default class Nested2 extends Component {
  render() {
    return (
      <>
        <h1>Nested 2</h1>
        <NameContext.Consumer>
          {
            (value) => {
              return (
                <div>
                  <h1>My name is {value.myName}</h1>
                  <button onClick={value.changeName}>Change</button>
                  <hr />
                  <p>{value.test.code}</p>
                  <button onClick={value.updateCode}>update</button>
                </div>
              )
            }
          }
        </NameContext.Consumer>
      </>
    )
  }
}