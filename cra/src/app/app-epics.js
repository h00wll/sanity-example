import { combineEpics } from 'redux-observable'
import { EMPTY } from 'rxjs'
import { mergeMap, tap, withLatestFrom } from 'rxjs/operators'
import { authorsEpics } from '../authors/authors-epics'
import { categoriesEpics } from '../categories/categories-epics'
import { postsEpics } from '../posts/posts-epics'

const logEpic = (action$, state$) =>
  action$.pipe(
    withLatestFrom(state$),
    tap(([action, state]) => console.log({ action, state })),
    mergeMap(() => EMPTY),
  )

export const appEpics = combineEpics(logEpic, authorsEpics, postsEpics, categoriesEpics)
