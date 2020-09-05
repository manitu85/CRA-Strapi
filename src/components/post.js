import React from 'react'


export default ({ description, likes, url}) => {

  return (
    <div className="Post">
      <img className="Post__Image" src={url} alt='' />
      <h4>{description}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
    </div>
  )
}

