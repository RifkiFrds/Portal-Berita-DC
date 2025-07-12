import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

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
      <h2 className="text-2xl font-bold mb-4">Daftar Artikel Terkini</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ArticleList
