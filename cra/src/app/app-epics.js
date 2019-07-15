import { combineEpics } from 'redux-observable'
import { EMPTY, of } from 'rxjs'
import { mergeMap, tap, withLatestFrom, catchError } from 'rxjs/operators'
import { authorsEpics } from '../authors/authors-epics'
import { categoriesEpics } from '../categories/categories-epics'
import { postsEpics } from '../posts/posts-epics'
import { actionErrorShow } from '../general/errors/errors-actions'
import { errorsEpics } from '../general/errors/errors-epics'

export const defaultCatchError = ({ key = Date.now(), message = 'Whoops!', duration = 5000 } = {}) =>
  // @ts-ignore
  catchError(error => console.log(error) || of(actionErrorShow({ key, message, duration })))

const logEpic = (action$, state$) =>
  action$.pipe(
    withLatestFrom(state$),
    tap(([action, state]) => console.log({ action, state })),
    mergeMap(() => EMPTY),
  )

export const appEpics = combineEpics(logEpic, authorsEpics, postsEpics, categoriesEpics, errorsEpics)
