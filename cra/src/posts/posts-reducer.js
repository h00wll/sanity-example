import { POSTS_LOAD, POSTS_LOAD_SUCCESS } from './posts-actions'

const initialPostsState = {
  posts: [],
  isLoaded: false,
  isLoading: false,
  time: 0,
}

export const postsReducer = (state = initialPostsState, action) => {
  console.log(action)
  switch (action.type) {
    case POSTS_LOAD:
      return {
        ...state,
        isLoading: true,
      }
    case POSTS_LOAD_SUCCESS:
      return {
        ...state,
        posts: action.payload.data,
        time: action.payload.time,
        isLoading: false,
        isLoaded: true,
      }
    default:
      return state
  }
}
