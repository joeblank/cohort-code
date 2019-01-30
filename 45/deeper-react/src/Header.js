import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.title} and my number is {this.props.number}</h1>
      </>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
}