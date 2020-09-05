import React from 'react'
import useFetcher from 'hooks/useFetcher'
import Post from 'components/post'

const API_URL_POSTS = 'http://localhost:1337/posts'

const Home = () => {

  const getPost = useFetcher(`${API_URL_POSTS}`, {})
  console.log('GATEPOSTS', getPost);


  if (!getPost.data) return (<div>Loading...</div>)

  return (
    <div>
      {
        getPost.data.map(post => <Post
          key={post.id}
          description={post.description}
          likes={post.likes}
          url={post.image && post.image.url}
        />
        )
      }
    </div>
  )
}

export default Home
