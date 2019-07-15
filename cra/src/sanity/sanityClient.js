import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
})

export const loadCategory = id =>
  // @ts-ignore
  client.fetch('*[_id == $id][0]{..., "posts": *[_type == "post" && references(^._id)]}', { id })
// @ts-ignore
export const loadCategories = () => client.fetch('*[_type == $type]', { type: 'category' })

export const loadAuthor = id =>
  // @ts-ignore
  client.fetch('*[_id == $id][0]{..., "posts": *[_type == "post" && references(^._id)]}', { id })
// @ts-ignore
export const loadAuthors = () => client.fetch('*[_type == $type]', { type: 'author' })

export const loadPosts = () => {
  const start = performance.now() // measure query perf just for fun
  // @ts-ignore
  return client.fetch('*[_type == $type]{..., author->}', { type: 'post' }).then(data => {
    return { data, time: performance.now() - start }
  })
}
