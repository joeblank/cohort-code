import React, { Component } from 'react';
import withToggle from './Hoc';
import HocTest from './HocTest'

class ToggleWithHoc extends Component {
  render() {
    return (
      <>
        <h1>Toggle with HOC</h1>
        <button onClick={this.props.toggle}>Toogle</button>
        <br />
        {
          this.props.bool ? (
            <p>HEY!</p>
          ) : null
        }
        <hr /><hr /><hr />
        <HocTest />
      </>
    )
  }
}

export default withToggle(ToggleWithHoc);