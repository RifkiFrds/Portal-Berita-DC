import React from 'react'

function Jumbotron({ title, subtitle, buttonText }) {
  return (
    <div className='jumbrotan p-5 mb-4 bg-body-tertiary rounded-3'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button className='btn btn-primary'>{buttonText}</button>
    </div>
  )
}

export default Jumbotron
