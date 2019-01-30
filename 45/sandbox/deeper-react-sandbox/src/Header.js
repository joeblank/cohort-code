import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired
}