import { useState } from "react";

function Header({ siteTitle }) {
// Fungsi State
const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-primary text-white text-center p-3 mb-4">
      <h1>{siteTitle}</h1>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group">
            <input 
            type="text"
            className="form-control"
            placeholder="Ketik untuk mencari berita.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="btn text-white btn-outline-secondary" onClick={() => setSearchTerm('')}>Reset</button>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
} 

export default Header;