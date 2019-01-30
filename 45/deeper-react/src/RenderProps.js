import React, { Component } from 'react';

export default class RenderProps extends Component {
  state = {
    bool: false
  }
  toggle = () => {
    this.setState({ bool: !this.state.bool })
  }

  render() {
    return (
      <>
        {this.props.apples(this.toggle, this.state.bool)}
      </>
    )
  }
}