import AppContainer from '../App/AppContainer'
import BrowserHistory from 'react-history/BrowserHistory'
import React from 'react'
import { Provider as Redux, connect } from 'react-redux'
import { StaticRouter } from 'react-router'
import { setLocation } from '../../redux/ducks/Location'

type RouterProps = {
  dispatch: () => void,
  pathname: string,
  store: object,
  setLocation: func,
};

const Router = ({ dispatch, pathname, store, setLocation }: RouterProps) => (
  // TODO: Use ControlledRouter once it will be released.
  <BrowserHistory
    key={pathname} // github.com/yahoo/react-intl/issues/234#issuecomment-163366518
  >
    {({ history, action, location }) => {

      console.log("LOCATION")
      console.log(location)

      if (location.pathname !== pathname) {
        setImmediate(() => {
          setLocation(location)
        });
      }
      return (
        <StaticRouter
          action={action}
          location={location}
          onPush={history.push}
          onReplace={history.replace}
          blockTransitions={history.block}
        >
          <AppContainer store={store}/>
        </StaticRouter>
      );
    }}
  </BrowserHistory>
)

const mapStateToProps = function(state) {
  return {
    pathname: state.location && state.location.pathname
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    setLocation: (location) => {
      dispatch(setLocation(location))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)
