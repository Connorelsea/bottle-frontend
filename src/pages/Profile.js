import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {

  render() {
    return (
      <div className="Profile">
        Profile
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
