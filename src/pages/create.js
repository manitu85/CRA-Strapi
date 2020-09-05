import React, {useState} from 'react'

const Create = () => {

  const [description, setDescription] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const res = await fetch('http://localhost:1337/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({description})
    }) 

    const data = await res.json()
    console.log('data', data);
    
  }

  return(
    <div className='Create'>
      <h2>Create</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default Create