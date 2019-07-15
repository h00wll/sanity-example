export const POSTS_LOAD = 'POSTS_LOAD'
export const POSTS_LOAD_SUCCESS = 'POSTS_LOAD_SUCCESS'

export const actionLoadPosts = () => {
  return { type: POSTS_LOAD }
}

export const actionLoadPostsSuccess = payload => {
  return { type: POSTS_LOAD_SUCCESS, payload }
}
