import React from 'react'

function Footer({ authorName }) {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white text-center py-3">
        <p>&copy; {currentYear} Dibuat oleh {authorName}</p>
        <p>Hak Cipta Dilindungi</p>
    </footer>
  )
}

export default Footer
