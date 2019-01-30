import React, { Component } from 'react';
import './App.css';
import Header from './Header';

function Other() {
  return (
    <>
      <p>i am the other</p>
      <p>yay</p>
    </>
  )
}

class App extends Component {
  state = {
    myName: 'Joe',
    counter: 0
  }
  changeName = async () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header title={"hey"} num={9} />
        <p onClick={this.changeName}>My name is {this.state.myName}</p>
        <Other />
      </React.Fragment>
    );
  }
}

export default App;
