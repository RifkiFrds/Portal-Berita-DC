import { useState, useEffect } from "react";

function ArticleList() {
  // 1. Siapkan "Holy Trinity" states
  const [articles, setArticles] = useState([]); // Mulai dengan array kosong
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // pakai useEffcet utuk fecth data saat komponen pertama kali di render
  useEffect(() => {
    // fungsi fecth berada di dalam useEffect
    const fetchArticles = async () => {
    try {
      const response = await fetch('/mock-articles.json');
      if (!response.ok) {
          throw new Error('Gagal mengambil data artikel');
        }
        const data = await response.json();
        setArticles(data); // Data berhasil didapat
      } catch (err) {
        setError(err.message); // Terjadi error
      } finally {
        setLoading(false); // Proses selesai, loading dihentikan
      }
    };

    fetchArticles();
  }, []); // Depedency array kosong, artinya efek ini hanya berjlan SEKALI

  // Conditional Rendering berdasarkan state
  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading....</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>
  }

  return (
    <div>
      <h2>Daftar Artikel Saat Ini</h2>
      <ul className="list-group">
        {articles.map(article => (
          <li key={article.id} className="list-group-item">
            {article.title} - oleh {article.author}
            <img className="img-fluid rounded mb-2" src={article.imageUrl} alt="imgArticle" />
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default ArticleList
