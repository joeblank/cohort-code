import React, { Component } from 'react';

export default function withToggle(WrappedComponent) {
  return class extends Component {
    state = {
      show: false
    }
    toggle = () => {
      this.setState({ show: !this.state.show })
    }
    render() {
      return <WrappedComponent toggle={this.toggle} bool={this.state.show} />
    }
  }
}