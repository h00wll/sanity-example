import { combineEpics } from 'redux-observable'
import { from } from 'rxjs'
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators'
import { actionLoadPostsSuccess, POSTS_LOAD } from './posts-actions'
import { loadPosts } from '../sanity/sanityClient';

const loadPostsEpic = (action$, state$) =>
  action$.pipe(
    filter(action => action.type === POSTS_LOAD),
    withLatestFrom(state$),
    mergeMap(([action, state]) => from(loadPosts()).pipe(map(actionLoadPostsSuccess))),
  )

export const postsEpics = combineEpics(loadPostsEpic)
