import React, {useState, useEffect} from 'react'
import useFetch from 'hooks/useFetch'
import Post from 'components/post'
import { API_URL_POSTS } from 'lib/api'


const SinglePost = ({ match, history }) => {

  const [edit, setEdit] = useState(false)
  const [editDescription, setEditDescription] = useState('')

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

  const handleEditSubmit = async e => {
    e.preventDefault()
    console.log("handleEditSubmit")

    const res = await fetch(`${API_URL_POSTS}/${id}`)
    const data = await res.json()
    console.log("handleEditSubmit data", data)
    

    fetchPost()

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
      <button onClick={() => setEdit(true)}>Edit Post</button>
      {
        edit && (
          <form onSubmit={handleEditSubmit}>
            <input 
              type='text'
              value=''
              onChange={e => {}}
              placeholder='New description'
            />
            <button>Confirm</button>
          </form>
        )
      }
    </div>
  )
}

export default SinglePost