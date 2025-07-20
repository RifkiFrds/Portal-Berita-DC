import React from 'react'
import { Link } from 'react-router-dom';

function Footer({ authorName }) {
    const currentYear = new Date().getFullYear();

  return (
     <footer className="bg-gray-100 border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 py-4 text-center text-gray-600">
        <p>&copy; {currentYear} Dibuat oleh {authorName}. All rights reserved.</p>
        <Link to='/about'>Tentang Kami</Link>

      </div>
    </footer>
  )
}

export default Footer
