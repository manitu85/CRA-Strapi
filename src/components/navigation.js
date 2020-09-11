import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from 'contexts/userContext'

export default () => {

  const { user } = useContext(UserContext)
  
  return (
    <div>
      <NavLink to="/" exact>Home</NavLink>{' '}
      {user &&
        <NavLink to="/create" exact> Create </NavLink>
      }{' '}
      {
        !user && <>
          <NavLink to="/login" exact>Login</NavLink>{' '}
          <NavLink to="/signup" exact>Sign Up</NavLink>
        </>
      }
    </div>
  )
}