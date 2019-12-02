import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, compose(applyMiddleware(sagaMiddleware), devTools))
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
