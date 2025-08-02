import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='relative text-blue-400 text-center'>
      <h1 className='text-center text-xl'>404</h1>
      <p>Maaf Kamu tersesat!</p>
      <Link className='relative bg-gray-488 pt-23' to='/'>Back To Home</Link>
    </div>
  )
}

export default NotFound
