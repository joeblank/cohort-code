import React from 'react';
import { NameContext } from './Ctx';

export default class Nested3 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Deeply nested component</h3>
        <NameContext.Consumer>
          {
            (value) => {
              return (
                <div>
                  <p>{value.name}</p>
                  <button onClick={value.changeName}>Change Name</button>
                </div>
              )
            }
          }
        </NameContext.Consumer>
      </React.Fragment>
    )
  }
}