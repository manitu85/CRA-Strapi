import React from 'react'
import useFetch from 'hooks/useFetch'
import Post from 'components/post'
import { API_URL_POSTS } from 'lib/api'


const SinglePost = ({ match, history }) => {

  const { id } = match.params

  const fetchPost = useFetch(`${API_URL_POSTS}/${id}`)
  const post = fetchPost.data
  console.log(post)

  if (!post) return (<div>Loading...</div>)

  const handleDeletePost = async () => {
    const res = await fetch(`${API_URL_POSTS}/${id}`, {
      method: 'DELETE' 
    })
    const deletePost = await res.json()
    history.push('/')
  }

  return(
    <div>
      {
        post.id ?
         ( <Post
            description={post.description}
            likes={post.likes}
            url={post.image && post.image.url}
          />) : post.id && (<p>Not found 404</p>)
      }
      <button onClick={handleDeletePost}>Delete Post</button>
    </div>
  )
}

export default SinglePost