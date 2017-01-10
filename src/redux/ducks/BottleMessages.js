import { batchActions } from 'redux-batched-actions'

//Action Types
export const LOCK_SHOW    = "auth/lock/show"

// This will update the current in the store and update the
// "last seen ID". Then new API calls will call with a lower boundary of
// the last seen ID
export const UPDATE_CURRENT

export const UPDATE_DISPLAY_SECTION

// This gets new messages in the area past a certain ID
export const GET_MESSAGES
export const GET_MESSAGES_REQUEST
export const GET_MESSAGES_SUCCESS
export const GET_MESSAGES_FAILURE

export const TYPES = {
  GET_MESSAGES: Symbol("GET_MESSAGES")
} 

// Default State
const defaultState = {

}

// Reducer
export default function reducer(state = defaultState, action) {

  switch (action.type) {

  }

}

export const getMessages = () =>
  createAPIAction({
    name: GET_MESSAGES,
    endpoint: routes.events,
    method: "POST",
  })

// Action Creators
export const getMessages = () => ({
  type: LOCK_SHOW,
})
