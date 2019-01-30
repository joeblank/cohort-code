import React, { Component } from 'react';

export default class RenderProp extends Component {
  state = { show: false };

  toggle = () => this.setState((prevState) => ({ show: !prevState.show }))

  render() {
    return (<>{this.props.render({ val: this.state.show, toggle: this.toggle })}</>)
  }
}