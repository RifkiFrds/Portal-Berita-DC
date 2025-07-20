import React from 'react'
import { Link } from 'react-router-dom'
import Card from './ui/Card'
import Badge from './ui/Badge';

function ArticleCard({ article }) {
    if (!article) return null;
  return (
    <Link to={`/article/${article.id}`}>
    <Card>
        <img 
        src={article.imageUrl} 
        alt={article.title}
        className="w-full h-48 object-cover" 
        />
        <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{article.title}</h3>
            <p className="text-gray-600 text-sm">Oleh: {article.author}</p>

            <Badge>Teknologi</Badge>
        </div>
    </Card>
    </Link>
  )
}

export default ArticleCard
