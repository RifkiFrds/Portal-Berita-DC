import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ArticleDetailPages() {
  const { id } = useParams();


  // State untuk artikel tunggal, loading, dan error
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/mock-articles.json'); 
        if (!response.ok) {
          throw new Error('Gagal Mengambil data');
        }
        const articles = await response.json();

        //temukan artikel yang cocok, ingat 'id' dari prams yang adalah string!
        const foundArticle = articles.find(a => a.id === parseInt(id));

        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          // jika artikel tidak tetemukan, lempar error
          throw new Error('Artikel tidak di temukan');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]); // <-- id sebagai depedency array

  //kondisi rendering
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
     return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  }

  if (!article) {
    return null;
  }

  return (
 <article className="max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Kembali ke Beranda</Link>
      <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">Oleh: {article.author}</p>
      <img 
        src={article.imageUrl} 
        alt={article.title}
        className="w-full rounded-lg shadow-lg mb-6"
      />
      <div className="prose dark:prose-invert max-w-none">
        <p>{article.content}</p>
      </div>
    </article>
  );
}

export default ArticleDetailPages;
