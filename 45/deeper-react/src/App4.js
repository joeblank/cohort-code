import React from 'react';
import Nested from './Nested'

export const NewContext = React.createContext()
export default class App4 extends React.Component {
  state = {
    color: 'blue'
  }
  render() {
    return (
      <NewContext.Provider value={{ color: this.state.color }}>
        <Nested />
        <button onClick={() => this.setState({ color: 'green' })}>change color</button>
      </ NewContext.Provider>
    )
  }
}