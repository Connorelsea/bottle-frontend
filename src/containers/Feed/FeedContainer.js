import React, { Component } from 'react'
import { connect } from 'react-redux'

class FeedContainer extends Component {

  render() {
    return (
      <div className="FeedContainer">
        Feed
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
