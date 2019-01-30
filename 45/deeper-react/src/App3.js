import React from 'react';
import hoc from './Hoc'
class Test extends React.Component {
  render() {
    const { toggle, bool } = this.props;
    return (
      <>
        <button onClick={toggle}>{bool ? 'why you do that' : 'please dont click'}</button>
      </>
    )
  }
}

export default hoc(Test)

