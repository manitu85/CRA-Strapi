import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div>
      <NavLink to="/" exact>Home</NavLink>{' '}
      <NavLink to="/create" exact>Create</NavLink>
    </div>
  )
}