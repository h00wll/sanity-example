import { Link } from '@reach/router'
import BlockContent from '@sanity/block-content-to-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionLoadPosts } from './posts-actions'

export const Post = ({ path, id = undefined }) => {
  const post = useSelector(state => state.posts.posts.find(x => x._id === id))
  const dispatch = useDispatch()
  useEffect(() => {
    if (post === undefined) {
      console.log('load posts')
      dispatch(actionLoadPosts())
    }
  }, [dispatch, post])

  return post ? (
    <article>
      <h1>{post.title}</h1>
      <BlockContent projectId="9xfnweza" dataset="development" blocks={post.body} />
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: 'auto' }}>
          By: <Link to={'/author/' + post.author._id}>{post.author.name}</Link>
        </div>
      </div>
    </article>
  ) : null
}
