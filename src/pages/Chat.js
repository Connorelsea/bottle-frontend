import React, { Component } from 'react'
import { connect } from 'react-redux'

class Chat extends Component {

  render() {
    return (
      <div className="Chat">
        Chat
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

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
