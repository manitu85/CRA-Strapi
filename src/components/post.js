import React from 'react'

const API_URL = 'http://localhost:1337'

export default ({ description, likes, url}) => {

  const formImageUrl = url => `${API_URL}${url}`

  return (
    <div className="Post">
      <img className="Post__Image" src={formImageUrl(url)} alt='' />
      <h4>{description}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
    </div>
  )
}

