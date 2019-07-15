import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionLoadAuthors } from './authors-actions'
import { Link } from '@reach/router'

export const Authors = () => {
  const authors = useSelector(state => state.authors)
  const dispatch = useDispatch()
  useEffect(() => {
    if (authors.isLoaded === false && authors.isLoading === false) {
      console.log('load authors')
      dispatch(actionLoadAuthors())
    }
  }, [dispatch, authors])

  return (
    <div>
      <h2>Authors</h2>
      <ul>
        {authors.items.map(x => (
          <li key={x._id}>
            <Link to={'/author/' + x._id}>{x.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
