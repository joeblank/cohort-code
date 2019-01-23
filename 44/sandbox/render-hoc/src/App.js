import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    show: false
  }
  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div>
        {this.props.render({ boolVal: this.state.show, toggle: this.toggle })}
      </div>
    )
  }
}

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        <Toggle render={(toggleObj) => (
          <div>
            <button onClick={toggleObj.toggle}>Toggle</button><br />
            {
              toggleObj.boolVal ? (
                <img style={{ width: '200px' }} src="http://frontpagemeews.com/wp-content/uploads/2017/07/Face-expressions-cats-cover-750x526.png" alt="" />
              ) : null
            }
          </div>
        )} />

        <Toggle render={({ boolVal, toggle }) => (
          <div>
            <p onClick={toggle} style={{ cursor: 'pointer' }}>{boolVal ? 'Hide' : 'Show'}</p>
            {
              boolVal ? <p>Can you see this text?</p> : null
            }
          </div>
        )} />
        <Toggle render={({ boolVal, toggle }) => (
          <div>
            <p onMouseEnter={toggle} onMouseLeave={toggle} style={{ cursor: 'pointer' }}>{boolVal ? 'go away' : 'hover'}</p>
            {
              boolVal ? <p>Can you see this text as well?</p> : null
            }
          </div>
        )} />
      </div>
    )
  }
}