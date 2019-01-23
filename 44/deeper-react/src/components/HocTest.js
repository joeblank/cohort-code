import React, { Component } from 'react';
import withToggle from './Hoc';

class HocTest extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>TEST the HOC</h1>
        <h4 onMouseEnter={this.props.toggle} onMouseLeave={this.props.toggle}>Toogle</h4>
        <br />
        {
          this.props.bool ? (
            <div style={{ background: 'blue', width: '50px', height: '100px' }}></div>
          ) : null
        }
      </React.Fragment>
    )
  }
}

export default withToggle(HocTest);