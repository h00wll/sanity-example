export const LOAD_AUTHOR = 'LOAD_AUTHOR'
export const LOAD_AUTHOR_SUCCESS = 'LOAD_AUTHOR_SUCCESS'
export const LOAD_AUTHORS = 'LOAD_AUTHORS'
export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS'

export const actionLoadAuthor = id => {
  return { type: LOAD_AUTHOR, id }
}

export const actionLoadAuthorSuccess = payload => {
  return { type: LOAD_AUTHOR_SUCCESS, payload }
}

export const actionLoadAuthors = () => {
  return { type: LOAD_AUTHORS }
}

export const actionLoadAuthorsSuccess = payload => {
  return { type: LOAD_AUTHORS_SUCCESS, payload }
}
