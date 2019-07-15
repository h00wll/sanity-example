import { Link } from '@reach/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionLoadCategory } from './categories-actions'

export const Category = ({ path, id = undefined }) => {
  const category = useSelector(state => state.categories.categories[id])
  const dispatch = useDispatch()
  useEffect(() => {
    if (category === undefined) {
      console.log('load category ' + id)
      dispatch(actionLoadCategory(id))
    }
  }, [dispatch, category, id])

  return category ? (
    <article>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <h3>Posts:</h3>
      {category.posts.map(x => (
        <div key={x._id}>
          <Link to={'/post/' + x._id}>{x.title}</Link>
        </div>
      ))}
    </article>
  ) : null
}
