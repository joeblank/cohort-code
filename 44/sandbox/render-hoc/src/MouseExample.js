import React, { Component } from 'react';
import './App.css';

class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="http://frontpagemeews.com/wp-content/uploads/2017/07/Face-expressions-cats-cover-750x526.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y, height: '100px' }} alt="" />
    )
  }
}

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

export default class MouseTracker extends React.Component {

  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={(mouseState) => (
          <Cat mouse={mouseState} />
        )} />
      </div>
    );
  }
}
