import React from 'react'
import { Link } from 'react-router-dom'
import useFetcher from 'hooks/useFetch'
import Post from 'components/post'
import { API_URL_POSTS } from 'lib/api'


const Home = () => {

  const getPost = useFetcher(`${API_URL_POSTS}`, {})

  if (!getPost.data) return (<div>Loading...</div>)

  return (
    <div>
      {
        getPost.data.map(post => <Link 
          key={post.id}
          to={`/${post.id}`}>
          <Post
            description={post.description}
            likes={post.likes}
            url={post.image && post.image.url}
          />
        </Link>
        )
      }
    </div>
  )
}

export default Home
