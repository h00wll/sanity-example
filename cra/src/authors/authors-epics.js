import { combineEpics } from 'redux-observable'
import { from } from 'rxjs'
import { filter, map, mergeMap } from 'rxjs/operators'
import { actionLoadAuthorSuccess, LOAD_AUTHOR, LOAD_AUTHORS, actionLoadAuthorsSuccess } from './authors-actions'
import { loadAuthor, loadAuthors } from '../sanity/sanityClient'

const loadAuthorEpic = (action$, state$) =>
  action$.pipe(
    filter(action => action.type === LOAD_AUTHOR),
    mergeMap(action =>
      from(loadAuthor(action.id)).pipe(
        filter(x => !!x), // sanity return something on 404 found?
        map(actionLoadAuthorSuccess),
      ),
    ),
  )

const loadAuthorsEpic = (action$, state$) =>
  action$.pipe(
    filter(action => action.type === LOAD_AUTHORS),
    mergeMap(action => from(loadAuthors()).pipe(map(actionLoadAuthorsSuccess))),
  )

export const authorsEpics = combineEpics(loadAuthorEpic, loadAuthorsEpic)
