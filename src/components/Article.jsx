import React from 'react'

function Article({ title, content }) {
  return (
    <article className="p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </article>
  )
}

export default Article
