import React, { Component } from 'react';
import RenderProps from './RenderProps';
import hoc from './Hoc';

class App extends Component {
  render() {
    return (
      <>
        <h1>Title of my App</h1>
        <RenderProps apples={(toggle, bool) => {
          return (
            <>
              <button onClick={toggle}>Click Me</button>
              <hr />
              {bool && <img style={{ width: '300px' }} src="http://frontpagemeews.com/wp-content/uploads/2017/07/Face-expressions-cats-cover-750x526.png" alt="" />}
            </>
          )
        }} />

        <RenderProps apples={(toggle, bool) => {
          return (
            <>
              <p onClick={toggle}>click me</p>
              {bool && <h1>hey</h1>}
            </>
          )
        }} />

        <RenderProps apples={(toggle, bool) => {
          return (
            <>
              <h3 onMouseEnter={toggle} onMouseLeave={toggle}>{bool ? "Get off me" : "hello"}</h3>
            </>
          )
        }} />
        <hr /><hr /><hr />
        <h1>Hawks</h1>
        <button onClick={this.props.toggle}>dont click me</button>
        {this.props.bool && <p>Hawks are pretty sweet</p>}
      </>
    )
  }
}

export default hoc(App)