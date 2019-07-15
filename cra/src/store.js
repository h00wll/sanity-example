import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { appEpics } from './app/app-epics'
import { appReducer } from './app/app-reducer'

export function initializeStore() {
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(appReducer, applyMiddleware(epicMiddleware))
  epicMiddleware.run(appEpics)
  return store
}
