export default function ShareBar() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <div className="share-bar">
      <a
        href={`https://twitter.com/intent/tweet?text=Loving these AI productivity hacks! Check it out: ${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
    </div>
  );
}
