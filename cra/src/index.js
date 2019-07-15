import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/app'
import { initializeStore } from './store'

const reduxStore = initializeStore()
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
