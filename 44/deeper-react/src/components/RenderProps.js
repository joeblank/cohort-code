import React, { Component } from 'react';

class RenderProps extends Component {
  state = {
    show: false
  }

  toggle = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    return (
      <div>
        {this.props.render({ bool: this.state.show, toggle: this.toggle })}
      </div>
    )
  }
}

export default class ToggleImage extends Component {
  render() {
    return (
      <div>
        <RenderProps render={({ bool, toggle }) => (
          <div>
            <p onMouseEnter={toggle} onMouseLeave={toggle}>{bool ? 'get off of me' : 'hover over'}</p>
            {
              bool ? <p>AHHHHHHHH!</p> : null
            }
          </div>
        )} />
        <hr />
        <RenderProps render={({ bool, toggle }) => (
          <div>
            <p onClick={toggle}>Show/Hide</p>
            {
              bool ? (
                <p>Hey can you see me?</p>
              ) : null
            }
          </div>
        )} />
        <hr />
        <RenderProps render={({ bool, toggle }) => (
          <div>
            <button onClick={toggle}>Toggle</button> <br />
            {
              bool ? (
                <img src="http://frontpagemeews.com/wp-content/uploads/2017/07/Face-expressions-cats-cover-750x526.png" alt="" />
              ) : null
            }
          </div>
        )} />
      </div>
    )
  }
}