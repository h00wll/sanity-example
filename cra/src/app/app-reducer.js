import { combineReducers } from 'redux'
import { authorReducer } from '../authors/authors-reducer'
import { cateforiesReducer } from '../categories/categories-reducer'
import { postsReducer } from '../posts/posts-reducer'
import { errorsReducer } from '../general/errors/errors-reducer'

export const appReducer = combineReducers({
  posts: postsReducer,
  authors: authorReducer,
  categories: cateforiesReducer,
  errors: errorsReducer,
})
