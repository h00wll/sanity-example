export const LOAD_CATEGORY = 'LOAD_CATEGORY'
export const LOAD_CATEGORY_SUCCESS = 'LOAD_CATEGORY_SUCCESS'
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS'

export const actionLoadCategory = id => {
  return { type: LOAD_CATEGORY, id }
}

export const actionLoadCategorySuccess = payload => {
  return { type: LOAD_CATEGORY_SUCCESS, payload }
}

export const actionLoadCategories = () => {
  return { type: LOAD_CATEGORIES }
}

export const actionLoadCategoriesSuccess = payload => {
  return { type: LOAD_CATEGORIES_SUCCESS, payload }
}
