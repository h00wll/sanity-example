import { combineEpics } from 'redux-observable'
import { of } from 'rxjs'
import { delay, filter, mergeMap } from 'rxjs/operators'
import { actionErrorHide, ERROR_SHOW } from './errors-actions'

const errorShowEpic = (action$, state$) =>
  action$.pipe(
    filter(action => action.type === ERROR_SHOW),
    mergeMap(action => of(actionErrorHide(action.payload.key)).pipe(delay(action.payload.duration))),
  )

export const errorsEpics = combineEpics(errorShowEpic)
