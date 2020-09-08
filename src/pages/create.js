import React, {useState} from 'react'

const Create = () => {

  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  // console.log('FILE', file);
  

  const handleSubmit = async e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('data', JSON.stringify({ description }))
    formData.append('files.image', file)

    const res = await fetch('http://localhost:1337/posts', {
      method: 'POST',
      body: formData
    }) 

    const data = await res.json()
    console.log('DATA', data);
    
  }

  return(
    <div className='Create'>
      <h2>Create</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />{' '}
        <input 
          type='file'
          placeholder='Add a File'
          onChange={e => setFile(e.target.files[0])}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create