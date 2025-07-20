import React from 'react'
import { useParams } from 'react-router-dom'

function ArticleDetailPages() {
    const { id } =  useParams();
  return (
    <div className='p-4'>
        <h1 className='text-3xl font-bold bg-linear-white-blue'>Halaman Detail Artikel</h1>
        <p className='mt-4'>ID Artikel yang sedang anda lihat adalah: <span className='font-moni bg-gray-200 p-1 rounded'>{id}</span>
        </p>
        <p className='mt-2 text-gray-600'>(Untuk Fetch Data Artikel id nanti di modul selnjutnya)</p>
      
    </div>
  )
}

export default ArticleDetailPages
