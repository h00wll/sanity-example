import { ERROR_SHOW, ERROR_HIDE } from './errors-actions'

const initialPostsState = {
  items: [],
}

export const errorsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case ERROR_SHOW:
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case ERROR_HIDE:
      return {
        ...state,
        items: state.items.filter(x => x.key !== action.key),
      }
    default:
      return state
  }
}
