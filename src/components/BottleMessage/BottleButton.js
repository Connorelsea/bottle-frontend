import React, { Component } from 'react'

class BottleButton extends Component {

  render() {
    return (
      <button
        className={`BottleMessage__Button BottleMessage__Button--${this.props.text}`}
      >
        {this.props.text}
      </button>
    )
  }

}

export default BottleButton
