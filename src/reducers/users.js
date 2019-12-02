import * as types from '../types/users'

const INITIAL_STATE = {
  key: '',
  loading: false,
  error: false
}

export default function users (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_USER:
      return {
        ...state,
        loading: true
      }
    case types.SUCCESS_CREATE_USER:
      return {
        ...state,
        key: action.payload,
        loading: false,
        error: false
      }
    case types.FAILED_CREATE_USER:
      return {
        ...state,
        key: '',
        loading: false,
        error: true
      }
    case types.LOGIN:
      return {
        ...state,
        loading: true
      }
    case types.SUCCESS_LOGIN:
      return {
        ...state,
        key: action.payload,
        loading: false,
        error: false
      }
    case types.FAILED_LOGIN:
      return {
        ...state,
        key: '',
        loading: false,
        error: true
      }
    case types.LOGOUT:
      return {
        ...state,
        key: ''
      }

    default:
      return state
  }
}
