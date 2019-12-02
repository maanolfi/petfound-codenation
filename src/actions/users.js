import * as types from '../types/users'

export function createUser (user) {
  return {
    type: types.CREATE_USER,
    payload: user
  }
}

export function successCreateUser () {
  return {
    type: types.SUCCESS_CREATE_USER
  }
}

export function failedCreateUser () {
  return {
    type: types.FAILED_CREATE_USER
  }
}

export function login (credentials) {
  return {
    type: types.LOGIN,
    payload: credentials
  }
}

export function successLogin (key) {
  return {
    type: types.SUCCESS_LOGIN,
    payload: key
  }
}

export function failedLogin () {
  return {
    type: types.FAILED_LOGIN
  }
}

export function logout () {
  return {
    type: types.LOGOUT
  }
}
