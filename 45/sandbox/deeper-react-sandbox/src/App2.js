import React, { Component } from 'react';
import './App.css';
import hoc from './Hoc';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggle}>click me</button>
        <hr />
        {
          this.props.bool && <h1>it worked</h1>
        }
      </div>
    );
  }
}

export default hoc(App);
