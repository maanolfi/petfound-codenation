import { takeEvery, put, call, all } from 'redux-saga/effects'

import * as types from '../types/users'
import * as actions from '../actions/users'

import { register, login, logout } from '../services/auth'

function * asyncCreateUser (action) {
  try {
    const key = yield call(register, action.payload)

    yield put(actions.successCreateUser(key))
  } catch (err) {
    yield put(actions.failedCreateUser())
  }
}

function * asyncLogin (action) {
  try {
    const key = yield call(login, action.payload)

    yield put(actions.successLogin(key))
  } catch (err) {
    yield put(actions.failedLogin())
  }
}

function * asyncLogout () {
  yield call(logout)
}

export default function * root () {
  yield all([
    takeEvery(types.CREATE_USER, asyncCreateUser),
    takeEvery(types.LOGIN, asyncLogin),
    takeEvery(types.LOGOUT, asyncLogout)
  ])
}
