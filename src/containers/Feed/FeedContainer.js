import React, { Component } from 'react'
import { connect } from 'react-redux'

import BottleMessage from "components/BottleMessage/BottleMessage"

class FeedContainer extends Component {

  render() {
    return (
      <div className="FeedContainer">
        <BottleMessage
          content="What's the best story you could tell in a paragraph?"
        />
      </div>
    )
  }

}

const mapStateToProps = function(state) {
  return {

  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)
