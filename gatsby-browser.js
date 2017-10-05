import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './src/store'

exports.replaceRouterComponent = ({ history }) => {
  const initialState = window['__initial_state__'] || {}
  const store = createStore(initialState)

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return ConnectedRouterWrapper
}
