import React, { Component } from 'react';

export default function Hoc(WrappedComponent) {
  return class extends Component {
    state = {
      bool: false
    }
    toggle = () => {
      this.setState({ bool: !this.state.bool })
    }
    render() {
      return <WrappedComponent bool={this.state.bool} toggle={this.toggle} />
    }

  }
}