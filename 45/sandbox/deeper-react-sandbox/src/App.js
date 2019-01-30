import React, { Component } from 'react';
import './App.css';
import RenderProp from './RenderProp'
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="hazel and daddy and mommy and brother ki  ukjbjj <-- (hazel's code)"
          // bool={false}
          func={'test'}
        // arr={[1, 2, 3]} 
        />
        <RenderProp render={(propsObj) => (
          <>
            <button onClick={propsObj.toggle}>Toggle</button>
            <hr />
            {
              propsObj.val && <img src="https://i.pinimg.com/originals/26/3f/b2/263fb273d7d56654498835e614759fec.jpg" alt="" />
            }
          </>
        )} />
        <hr />
        <RenderProp render={(propsObj) => (
          <>
            <button onClick={propsObj.toggle}>Toggle</button>
            <hr />
            {
              propsObj.val && <p>hahah</p>
            }
          </>
        )} />
        <hr />
        <RenderProp render={(propsObj) => (
          <>
            <h1 onMouseEnter={propsObj.toggle} onMouseLeave={propsObj.toggle}>hover</h1>
            <hr />
            {
              propsObj.val && <p>get off me</p>
            }
          </>
        )} />
      </div>
    );
  }
}

export default App;
