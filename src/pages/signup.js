import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from 'contexts/userContext'
import { API_URL_AUTH } from 'lib/api'

const SignUp = ({ history }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')


  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    if (user) {
      history.push('/')
    }
  }, [user])

  const handleSubmit = async e => {
    e.preventDefault()

    try{

      const res = await fetch(API_URL_AUTH, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          email, 
          password
        })
      })

      const data = await res.json()
      if (data.message) {
        setError(data.message[0].messages[0].message)

        return //Stop execution
      }

      setUser(data)

      console.log('username', data);
      
    }catch(err) {
      setError('Something went wrong' + err)
    }

  }

  return(
    <div>
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Signup</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  )
}

export default SignUp

