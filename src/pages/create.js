import React, { useState, useContext } from 'react'
import { UserContext } from 'contexts/userContext'
import { API_URL_POSTS } from 'lib/api'


export default ({ history }) => {

  const [description, setDescription] = useState([])
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')

  console.log("file", file)

  const { user } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('Please log in first')
      return
    }

    if (!description) {
      setError('Please add a description')
      return
    }

    if (!file) {
      setError('Please add a File')
      return
    }

    const formData = new FormData()
    formData.append('data', JSON.stringify({ description }))
    formData.append('files.image', file)

    try {
      const res = await fetch(API_URL_POSTS, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.jwt}`
        },
        body: formData
      })

      const data = await res.json()
      history.push('/')

      console.log("data", data)
    } catch (err) {
      console.log("Exception ", err)
      setError(err)
    }
  }

  return (
    <div className="Create">
      <h2>Create</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setError('')
            setDescription(e.target.value)
          }}
        />
        <input
          type="file"
          placeholder="Add a File"
          onChange={(e) => {
            setError('')
            setFile(e.target.files[0])
          }}
        />
        <button>Submit</button>
      </form>

    </div>
  )

}