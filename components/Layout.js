import ShareBar from './ShareBar';

export default function Layout({ children }) {
  return (
    <div className="site-container">
      <header>
        <nav>
          <div className="logo">
            <a href="/">AI Productivity Hacks</a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#generator">Tools</a></li>
            <li><a href="/premium">Premium</a></li>
          </ul>
        </nav>
      </header>
      
      <main>{children}</main>
      
      <ShareBar />
      
      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>AI Productivity Hacks</h3>
            <p>Helping you work smarter, not harder, with AI.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/premium">Premium</a></li>
              <li><a href="#generator">AI Generator</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect</h3>
            <ul className="social-links">
              <li><a href="https://x.com/_aiproductivity" target="_blank" rel="noopener noreferrer">X</a></li>

            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 AI Productivity Hacks - toilemaitre.com All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
