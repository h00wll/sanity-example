import { combineEpics } from 'redux-observable'
import { from } from 'rxjs'
import { filter, map, mergeMap } from 'rxjs/operators'
import { loadCategories, loadCategory } from '../sanity/sanityClient'
import {
  actionLoadCategoriesSuccess,
  actionLoadCategorySuccess,
  LOAD_CATEGORIES,
  LOAD_CATEGORY,
} from './categories-actions'

const loadAuthorEpic = (action$, state$) =>
  action$.pipe(
    filter(action => action.type === LOAD_CATEGORY),
    mergeMap(action =>
      from(loadCategory(action.id)).pipe(
        filter(x => !!x), // sanity return something on 404 found?
        map(data => actionLoadCategorySuccess(data)),
      ),
    ),
  )

const loadCategoriesEpic = (action$, state$) =>
  action$.pipe(
    filter(action => action.type === LOAD_CATEGORIES),
    mergeMap(() => from(loadCategories()).pipe(map(data => actionLoadCategoriesSuccess(data)))),
  )

export const categoriesEpics = combineEpics(loadCategoriesEpic, loadAuthorEpic)
