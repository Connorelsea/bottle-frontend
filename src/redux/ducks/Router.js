import history from "../../utils/history"

export const NAVIGATE = "NAVIGATE"

const defaultState = {
  router: {
    location: history.location,
    action: history.action
  }
}

export default function(state = defaultState, action) {
  if (action.type === NAVIGATE) {
    return {
      ...state,
      router: {
        location: action.location,
        action: action.action
      }
    }
  } else {
    return state
  }
}

export const doNavigation = (location, action) => ({
  type: NAVIGATE,
  location,
  action
}) 
