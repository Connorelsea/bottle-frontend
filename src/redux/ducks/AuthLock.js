import Auth0Lock from 'auth0-lock'
import { batchActions } from 'redux-batched-actions'

//Action Types
export const LOCK_SHOW    = "auth/lock/show"
export const LOCK_SUCCESS = "auth/lock/success"
export const LOCK_ERROR   = "auth/lock/error"

// Default State
const defaultState = {
  loggedIn: false,
  profile: undefined,
  id_token: undefined,
}

// Reducer
export default function reducer(state = defaultState, action) {

  console.log('action')
  console.log(action)

  switch (action.type) {

    case LOCK_SUCCESS:
      return {
        loggedIn: true,
        profile:  action.profile,
        id_token: action.id_token,
      }

    default:
      return state;

  }
}

// Auth Lock

console.log(process.env.REACT_APP_AUTH0_CLIENT_ID)

export const AuthLock = new Auth0Lock(
  process.env.REACT_APP_AUTH0_CLIENT_ID,
  process.env.REACT_APP_AUTH0_DOMAIN,
  {
    languageDictionary: {
      title: "Bottle"
    },
    theme: {
      logo: "",
      primaryColor: "",
    }
  }
)

// Action Creators
export const showLock = () => ({
  type: LOCK_SHOW,
})

export const lockSuccess = (profile, token) => ({
  type: LOCK_SUCCESS,
  profile,
  token,
})

export const lockError = (error) => ({
  type: LOCK_ERROR,
  error,
})

export const doLogin = () => {
  return dispatch => {
    AuthLock.show()
  }
}

export const doAuthentication = () => {
  return dispatch => {

    AuthLock.on("authenticated", authResult => {
      AuthLock.getProfile(authResult.idToken, (error, profile) => {

        if (error) {
          return dispatch(lockError(error))
        }

        console.log("Auth Result")
        console.log(authResult)

        localStorage.setItem("profile", JSON.stringify(profile))
        localStorage.setItem("id_token", authResult.idToken)

        return dispatch(batchActions([
          lockSuccess(profile, authResult.id_token),
          //setLocation("/radio")
        ]))

      })
    })

  }
}





