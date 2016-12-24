import React, { Component } from "react"
import { connect } from 'react-redux'

import ControlledRouter from 'react-router-addons-controlled/ControlledBrowserRouter'
import history from  "../../utils/history"

import { doNavigation } from "../../redux/ducks/Router"

type Props = {
  location: object,
  action: string,
  doNavigation: func,
  children: func
};

class RouterContainer extends Component {

  props: Props;

  render() {

    return (
      <div className="Router-Container">

        <ControlledRouter
          history={history}
          location={this.props.location}
          action={this.props.action}
          push={() => { }}
          onChange={(location, action) => {

            if (action === "SYNC") {
              this.props.doNavigation(location, this.props.action)
            }

            else if (!window.block) {
              this.props.doNavigation(location, action)
            }

          }}
        >
          {this.props.children}
        </ControlledRouter>

      </div>
    )
  }

}

const mapStateToProps = function(state) {
  return {
    location: state.Router.router.location,
    action: state.Router.router.action
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {

    doNavigation: (location, action) => {
      dispatch(doNavigation(location, action))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterContainer)
