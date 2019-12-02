import { all, fork } from 'redux-saga/effects'

import animals from './animals'
import users from './users'

export default function * rootSaga () {
  yield all([
    fork(animals),
    fork(users)
  ])
}
