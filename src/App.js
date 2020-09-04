import React, {useState, useEffect} from 'react'
import Post from './components/post'
import './App.css'


const API_URL = 'https://localhost:1337/posts'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPost = async () => {
      // const res = await fetch(`${API_URL}/posts`)
      const res = await fetch('http://localhost:1337/posts/')
      const data = res.json
      setPosts(data)
    }
    getPost()
  }, [])
  

  return (
    <div>
      HELLO WORLD + STRAPI
      {
        posts.map(post => <Post
            key={post.id}
            description={post.description}
            likes={post.likes}
            url={post.image && post.image.url}
          />
        )
      }
    </div>
  );
}

export default App;
