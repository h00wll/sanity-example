import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionLoadAuthor } from './authors-actions'
import BlockContent from '@sanity/block-content-to-react'
import { Link } from '@reach/router'

export const Author = ({ path, id = undefined }) => {
  const author = useSelector(state => state.authors.authors[id])
  const dispatch = useDispatch()
  useEffect(() => {
    if (author === undefined) {
      console.log('load author ' + id)
      dispatch(actionLoadAuthor(id))
    }
  }, [dispatch, author, id])

  return author ? (
    <article>
      <h1>{author.name}</h1>
      <BlockContent projectId="9xfnweza" dataset="development" blocks={author.bio} />
      <h3>Posts:</h3>
      {author.posts.map(x => (
        <div key={x._id}>
          <Link to={'/post/' + x._id}>{x.title}</Link>
        </div>
      ))}
    </article>
  ) : null
}
