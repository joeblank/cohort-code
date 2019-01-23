import React, { Component } from 'react';
import Nested from './Nested'

export const NameContext = React.createContext()

export default class Context extends Component {
  state = {
    myName: 'Joe',
    code: 'false'
  }

  changeName = () => {
    this.setState({ myName: 'Cherry' })
  }

  updateCode = () => {
    this.setState({ code: 'true' })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <NameContext.Provider value={{
          myName: this.state.myName,
          changeName: this.changeName,
          test: { code: this.state.code },
          updateCode: this.updateCode
        }}>
          <h1>ContextAPI Test: {this.state.myName}</h1>
          <Nested />
        </NameContext.Provider>
      </>
    )
  }
}