import React from 'react'


// const formatImageUrl = url => `${API_URL}${url}`

export default ({ description, likes, url}) => {

  return (
    <div className="Post">
      {/* <img className="Post__Image" src={formatImageUrl(url)} /> */}
      <h4>{description}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
    </div>
  )
}

