import { LOAD_AUTHOR, LOAD_AUTHOR_SUCCESS, LOAD_AUTHORS, LOAD_AUTHORS_SUCCESS } from './authors-actions'

const initialAuthorsState = {
  authors: {},
  items: [],
  isLoading: false,
  isLoaded: false,
}

export const authorReducer = (state = initialAuthorsState, action) => {
  switch (action.type) {
    case LOAD_AUTHOR:
      return state
    case LOAD_AUTHOR_SUCCESS:
      return {
        ...state,
        authors: {
          ...state.authors,
          [action.payload._id]: action.payload,
        },
      }
    case LOAD_AUTHORS:
      return {
        ...state,
        isLoading: true,
      }
    case LOAD_AUTHORS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        isLoaded: true,
      }
    default:
      return state
  }
}
