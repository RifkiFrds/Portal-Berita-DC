import { useState } from "react";

function Header({ siteTitle }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 text-center">
        {/* Judul Situs */}
        <h1 className="text-4xl font-bold tracking-tight">
          {siteTitle}
        </h1>
        
        {/* Search Bar Section */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="relative">
            {/* Ikon Search (opsional, tapi keren!) */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Input Field */}
            <input
              type="text"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;