import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store, persistor } from './store'
import './index.css'
import './scss/custom.scss'

import MyRouter from './router'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <MyRouter />
      </Router>
    </PersistGate>
  </Provider>
  , document.getElementById('root')
)
