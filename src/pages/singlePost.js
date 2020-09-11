import React, {useState, useEffect, useContext} from 'react'
import Post from 'components/post'
import { API_URL_POSTS } from 'lib/api'
import { UserContext } from 'contexts/userContext'


const SinglePost = ({ match, history }) => {

  const [loading, setLoading] = useState(true)
  const [post,setPost] = useState({})
  const [edit,setEdit] = useState(false)
  const [description, setDescription] = useState('')

  const { id } = match.params

  const {user, setUser} = useContext(UserContext)
  console.log(user);
  

  const fetchPost = async () => {
    const res = await fetch(`${API_URL_POSTS}/${id}`)
    const data = await res.json()

    console.log("data", data)
    setPost(data)
    setDescription(data.description)
    setLoading(false)
  }

  const handleDeletePost = async () => {
    const res = await fetch(`${API_URL_POSTS}/${id}`, {
      method: 'DELETE' ,
      headers: {
        'Authorization': `Bearer ${user.jwt}`
      },
    })
    const deletePost = await res.json()
    history.push('/')
  }

  const handleEditSubmit = async e => {
    e.preventDefault()

    const res = await fetch(`http://localhost:1337/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.jwt}`
      },
      body: JSON.stringify({
        description
      })
    })

    const data = await res.json()
    fetchPost()
    console.log("handleEditSubmitData", data)
  }
  
  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
      {loading &&
        <p>Loading...</p>
      }
      {!loading &&
        <>
          {post.id &&
            <>
              <Post
                description={post.description}
                url={post.image && post.image.url}
                likes={post.likes}
              />
                {
                  user && <>
                    <button onClick={handleDeletePost}>Delete this Post</button>
                    <button onClick={() => setEdit(true)}>Edit this Post</button>
                    {edit &&
                      <form onSubmit={handleEditSubmit}>
                        <input
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="New description"
                        />
                        <button>Confirm</button>
                      </form>
                    }
                  </>
                }
            </>
          }
          {!post.id &&
            <p>404 - not found</p>
          }
        </>
      }
    </div>
  )
}



export default SinglePost


          

       