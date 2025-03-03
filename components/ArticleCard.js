export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <div className="article-image">
        <img src={article.image} alt={article.title} loading="lazy" />
      </div>
      <div className="article-content">
        <h3>{article.title}</h3>
        <p>{article.excerpt}</p>
        <div className="article-meta">
          <span className="read-time">{article.readTime}</span>
          <a href={`/article/${article.id}`} className="read-more">Read more →</a>
        </div>
      </div>
    </div>
  );
}
