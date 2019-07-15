import { LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORY, LOAD_CATEGORY_SUCCESS } from './categories-actions';

const initialState = {
  categories: {},
  items: [],
  isLoaded: false,
  isLoading: false
};

export const cateforiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY:
      return state;
    case LOAD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload._id]: action.payload
        }
      };
    case LOAD_CATEGORIES:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_CATEGORIES_SUCCESS:
      const a = {
        ...state,
        items: action.payload,
        isLoading: false,
        isLoaded: true
      };
      return a;
    default:
      return state;
  }
};
