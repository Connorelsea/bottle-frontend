import React, { Component } from 'react'

import BottleButton from "components/BottleMessage/BottleButton"

import "./BottleMessage.sass"

class BottleMessage extends Component {

  render() {
    return (
      <div className="BottleMessage">
        <p>{this.props.content}</p>

        <div className="BottleMessage__Buttons">
          <BottleButton text="ignore" />
          <BottleButton text="reply" />
        </div>
      </div>
    )
  }

}

export default BottleMessage
