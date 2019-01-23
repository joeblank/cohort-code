import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    myName: 'Joe',
    test: 'test',
    number: 0
  }
  update = () => {
    this.setState((prevState) => {
      return { number: prevState.number + 1 }
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.myName}
        {this.state.test}
        <br />
        <button onClick={this.update}>Update Name</button>
      </div>
    );
  }
}

export default App;
