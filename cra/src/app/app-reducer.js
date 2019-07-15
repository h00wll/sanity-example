import { combineReducers } from 'redux'
import { authorReducer } from '../authors/authors-reducer'
import { cateforiesReducer } from '../categories/categories-reducer'
import { postsReducer } from '../posts/posts-reducer'

export const appReducer = combineReducers({
  posts: postsReducer,
  authors: authorReducer,
  categories: cateforiesReducer,
})
