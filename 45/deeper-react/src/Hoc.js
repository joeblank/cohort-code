import React from 'react';

export default function hoc(WrappedComponent) {
  return class extends React.Component {
    state = { bool: false }
    toggle = () => {
      this.setState({ bool: !this.state.bool })
    }
    render() {
      return (
        <>
          <WrappedComponent toggle={this.toggle} bool={this.state.bool} />
        </>
      )
    }
  }
}