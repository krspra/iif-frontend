import React from 'react'
import { Link } from 'react-router-dom'

function LoginButton() {
  return (
    <Link to='/login' className="h-10 w-16 text-lg flex text-center items-center">Login</Link>
  )
}

export default LoginButton