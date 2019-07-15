import { Link } from '@reach/router'
import React from 'react'
import { useSelector } from 'react-redux'
import { useLoadItems } from '../hooks/use-load-items'
import { actionLoadPosts } from './posts-actions'

export const Posts = ({ path }) => {
  const posts = useSelector(state => state.posts)

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   if (posts.isLoaded === false && posts.isLoading === false) {
  //     console.log('load posts')
  //     dispatch(actionLoadPosts())
  //   }
  // }, [dispatch, posts])

  useLoadItems(posts, actionLoadPosts)

  return (
    <div>
      <h1>Posts {posts.time}</h1>
      {posts.isLoading ? (
        <div>Loading...</div>
      ) : (
        posts.posts.map(post => (
          <div key={post._id}>
            <Link to={`/post/${post._id}`}>
              <h2>{post.title}</h2>
            </Link>
            <div style={{ display: 'flex' }}>
              <div style={{ marginLeft: 'auto' }}>By: {post.author.name}</div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
