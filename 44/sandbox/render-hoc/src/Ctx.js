import React, { Component } from 'react';
import Nested from './Nested'

export const NameContext = React.createContext()

export default class Ctx extends Component {
  state = {
    name: 'Joe'
  }

  changeName = () => this.setState({ name: 'Terry' })
  render() {
    return (
      <React.Fragment>
        <NameContext.Provider value={{ name: this.state.name, changeName: this.changeName }}>
          <Nested />
          {/* <p>{this.context}</p> */}
        </NameContext.Provider>
      </React.Fragment>
    )
  }
}