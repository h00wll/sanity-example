import { Typography } from '@material-ui/core'
import { Link, Router } from '@reach/router'
import React from 'react'
import { Author } from '../authors/author'
import { Authors } from '../authors/authors'
import { Categories } from '../categories/categories'
import { Category } from '../categories/category'
import { Post } from '../posts/post'
import { Posts } from '../posts/posts'
// @ts-ignore
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Typography variant="h1" component="h1">
          Good Blog
        </Typography>

        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <Router className={styles.content}>
        <Posts path="/" />
        <Post path="/post/:id" />
        <Author path="/author/:id" />
        <Category path="/category/:id" />
      </Router>

      <div className={styles.categories}>
        <Categories />
      </div>

      <div className={styles.authors}>
        <Authors />
      </div>
    </div>
  )
}

export default App
