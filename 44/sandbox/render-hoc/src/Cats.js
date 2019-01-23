import React, { Component } from 'react';
import withToggle from './Hoc';

class Cats extends Component {
  render() {
    return (
      <div>
        <h1>Hide the cats</h1>
        <button onClick={this.props.toggle}>Show/Hide</button><br />
        {
          this.props.bool ? (
            <img src="https://www.washingtonpost.com/resizer/rmmBUcybIzdfzbuOeeybgskFYko=/480x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CCWE4SVKQQI6RGT5ZUYFAT7ZAI.jpg" alt="" />
          ) : null
        }
      </div>
    )
  }
}

export default withToggle(Cats)