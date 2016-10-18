/*eslint no-console: 0*/
import React, { PropTypes } from 'react'
import { historyContext as historyContextType } from 'react-history/PropTypes'
import StaticRouter from './StaticRouter'

// intitial key is `null` because JSON.stringify turns undefined into null, and
// we use this value as the "initial key"
const initialKeys = [ null ]

const IS_DOM = typeof window !== 'undefined'

const findKeyIndex = (keys, key) => (
  // switchup `undefined` to `null` because that's what JSON.stringify does
  // when we persist to sessionStorage
  keys.indexOf(key || null)
)

const restoreKeys = () => {
  if (IS_DOM) {
    try {
      return JSON.parse(sessionStorage.ReactRouterKeys)
    } catch(e) {
      // couldn't find them, so send the default
      return initialKeys
    }
  } else {
    return initialKeys
  }
}

const locationsAreEqual = (a, b) => {
  // If we're on the initial entry and we get a new location descriptor then
  // neither will have a key, so we compare the path. We have to guard on the
  // keys so we allow pushing the same path w/ a different key.
  if (a.key == null && b.key == null)
    return a.path === b.path

  // the initial entry has no key, and neither does a pushed location
  // descriptor, so we use identity for that case
  if (a === b)
    return true

  // locations lose their identity after leaving the domain, so we use the key
  // instead, all locations but the first will have a key
  if (a.key === b.key)
    return true

  return false
}

const saveKeys = (keys) => {
  if (IS_DOM) {
    try {
      sessionStorage.ReactRouterKeys = JSON.stringify(keys)
    } catch(e) {} // eslint-disable-line
  }
}

class ControlledHistory extends React.Component {

  static propTypes = {
    children: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    action: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    restoreKeys: PropTypes.func.isRequired,
    saveKeys: PropTypes.func.isRequired
  }

  static childContextTypes = {
    history: historyContextType.isRequired
  }

  static defaultProps = {
    restoreKeys,
    saveKeys
  }

  getChildContext() {
    return {
      history: this.getHistoryContext()
    }
  }

  getHistoryContext() {
    const { action, location, history } = this.props

    return {
      action,
      location,
      ...history
    }
  }

  constructor(props) {
    super(props)
    const location = props.history.getCurrentLocation()
    const cameBackFromOtherDomain = !!location.key
    this.updatingFromHistoryChange = false
    this.syncingHistory = false
    this.syncingReplace = false
    this.keys = cameBackFromOtherDomain ? props.restoreKeys() : initialKeys
    this.setupHistory()
    this.state = {
      location,
      action: 'POP'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      !this.syncingReplace &&
      !this.updatingFromHistoryChange &&
      !locationsAreEqual(
        nextProps.location,
        this.props.location
      )
    ) {
      this.syncingHistory = true
      const { history } = this.props
      const { action, location } = nextProps
      const nextIndex = findKeyIndex(this.keys, location.key)
      if (location.key && nextIndex !== -1) {
        // we've been here before
        const currentIndex = findKeyIndex(this.keys, this.props.location.key)
        const delta = nextIndex - currentIndex
        history.go(delta)
      } else if (action === 'PUSH') {
        history.push(location.path, location.state)
      } else if (action === 'REPLACE') {
        history.replace(location.path, location.state)
      }
    }
  }

  setupHistory() {
    this.props.history.listen((location, action) => {
      this.storeKey(location.key, action)
      this.updatingFromHistoryChange = true // must come before onChange!
      if (!this.syncingHistory) {
        this.props.onChange(location, action)
      }
      if (this.syncingReplace) {
        this.props.onChange(location, 'SYNC')
      }
      this.setState({ location, action }, () => {
        this.updatingFromHistoryChange = false
        if (this.syncingHistory) {
          this.syncingHistory = false
        } else {
          this.checkIfLocationAccepted()
        }
      })
    })
  }

  checkIfLocationAccepted() {
    const { location } = this.props
    const { location:stateLocation, action:stateAction } = this.state
    if (!locationsAreEqual(location, stateLocation)) {
      this.syncingHistory = true
      const index = findKeyIndex(this.keys, location.key)
      const stateIndex = findKeyIndex(this.keys, stateLocation.key)
      const delta = index - stateIndex
      if (stateAction === 'REPLACE') {
        // Gah! the app is now going to have the right path, the right number
        // of entries in the history, the right index in the history, but not
        // the right key :(.
        //
        // Once the browser replaces, that's it!  we can't stop it, and we
        // can't ever get that location back.  So we'll call props.onChange in
        // history.listen to let the app synchronize with us (which it MUST do,
        // it must always accept a 'SYNC' action location into its state)
        this.syncingReplace = true
        this.props.history.replace(location.path, location.state)
      } else {
        if (stateIndex === -1) {
          // playing whack-a-mole here D: after we pop off the last key a
          // few lines down, if they click "forward" we won't find the key
          // so let's just do a -1 for delta.
          this.props.history.go(-1)
        } else {
          this.props.history.go(delta)
        }
        if (stateAction === 'PUSH') {
          // get rid of the last entry so our delta isn't off if they try to
          // push here again
          this.keys.pop()
        }
      }
    }
  }

  storeKey(key, action) {
    if (action === 'PUSH') {
      this.keys.push(key)
    } else if (action === 'REPLACE') {
      this.keys[this.keys.length - 1] = key
    }
    // browsers only keep 50 entries, so we'll do that too
    if (this.keys.length > 50)
      this.keys.unshift()
    this.props.saveKeys(this.keys)
  }

  render() {
    return this.props.children(this.getHistoryContext())
  }

}

const ControlledRouter = ({ history, location, onChange, action, restoreKeys, saveKeys, ...rest }) => (
  <ControlledHistory
    history={history}
    location={location}
    onChange={onChange}
    action={action}
    restoreKeys={restoreKeys}
    saveKeys={saveKeys}
  >
    {(history) => (
      <StaticRouter
        action={history.action}
        location={history.location}
        onPush={history.push}
        onReplace={history.replace}
        blockTransitions={history.block}
        {...rest}
      />
    )}
  </ControlledHistory>
)

ControlledRouter.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  restoreKeys: PropTypes.func,
  saveKeys: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ])
}

export default ControlledRouter
