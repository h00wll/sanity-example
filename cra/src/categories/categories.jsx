import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionLoadCategories } from './categories-actions'
import { Link } from '@reach/router'

export const Categories = () => {
  const categories = useSelector(state => state.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    if (categories.isLoaded === false && categories.isLoading === false) {
      console.log('load categories')
      dispatch(actionLoadCategories())
    }
  }, [dispatch, categories])

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.items.map(x => (
          <li key={x._id}>
            <Link to={'/category/' + x._id}>{x.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
