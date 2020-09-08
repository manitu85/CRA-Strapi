import React, {useState} from 'react'

const Create = () => {

  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')

  // console.log('FILE', file);
  
  const handleSubmit = async e => {
    e.preventDefault()

    if(!description) {
      setError('Please add description')
      return
    }

    if(!file) {
      setError('Please add an image')
      return
    }

    const formData = new FormData()
    formData.append('data', JSON.stringify({ description }))
    formData.append('files.image', file)

    try{
      const res = await fetch('http://localhost:1337/posts', {
        method: 'POST',
        body: formData
      }) 

      const data = await res.json()
      console.log('DATA', data);
    }catch(err){
      console.log('Exception', err);
      setError(err)
    }

  }

  return(
    <div className='Create'>
      <h2>Create</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Description"
          value={description}
          onChange={(event) => {
            setError('')
            setDescription(event.target.value)
          }}
        />
        <input
          type="file"
          placeholder="Add a File"
          onChange={(event) => {
            setError('')
            setFile(event.target.files[0])
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Create