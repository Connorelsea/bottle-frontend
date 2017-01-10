import React, { Component } from 'react'
import { connect } from 'react-redux'

class Posts extends Component {

  render() {
    return (
      <div className="Posts">
        Posts
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
