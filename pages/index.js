import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import PromptGenerator from '../components/PromptGenerator';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd connect this to a newsletter service
    alert(`Thanks for subscribing with ${email}! You'll get AI hacks weekly.`);
    setEmail('');
  };

  const articles = [
    {
      id: 1,
      title: "The AI Tool That Saved Me 20 Hours This Week—and It's Free",
      excerpt: "Discover how I used this overlooked AI assistant to automate my most tedious tasks and reclaim almost an entire workday.",
      image: "https://images.unsplash.com/photo-1677442713786-1fc02a6a9f5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "Why AI Is Making You Lazy, Not Smart",
      excerpt: "The uncomfortable truth about AI productivity tools that nobody's talking about - and what to do instead.",
      image: "https://images.unsplash.com/photo-1675271591211-626d08d1e881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "10 AI Prompts That Will 10x Your Productivity",
      excerpt: "Copy-paste these exact prompts to transform how you work, write, and think with AI tools.",
      image: "https://images.unsplash.com/photo-1684772742121-32732f247bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      readTime: "5 min read"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>AI Productivity Hacks | Work Smarter, Not Harder</title>
        <meta name="description" content="Discover the best AI productivity hacks, tools, and strategies to 10x your work efficiency in 2025." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AI Productivity Hacks",
            "url": "https://aiproductivityhacks.toilemaitre.com",
            "description": "Discover the best AI productivity hacks, tools, and strategies to 10x your work efficiency in 2025.",
            "publisher": {
              "@type": "Organization",
              "name": "AI Productivity Hacks",
              "logo": {
                "@type": "ImageObject",
                "url": "https://aiproductivityhacks.toilemaitre.com/logo.png"
              }
            }
          })}
        </script>
      </Head>

      <section className="hero">
        <div className="hero-content">
          <h1>AI Productivity Hacks</h1>
          <h2>Work 10x Faster with AI in 2025</h2>
          <p>Discover battle-tested AI strategies used by top performers to slash their workday in half.</p>
          <div className="cta-buttons">
            <a href="#generator" className="btn btn-primary">Try AI Prompt Generator</a>
            <a href="/premium" className="btn btn-secondary">Get Premium Hacks</a>
          </div>
        </div>
      </section>

      <section className="featured-articles">
        <h2>Latest AI Hacks & Insights</h2>
        <div className="article-grid">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section id="generator" className="tool-section">
        <h2>AI Prompt Generator</h2>
        <p>Generate powerful AI prompts to boost your productivity instantly.</p>
        <PromptGenerator />
      </section>

      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Get Weekly AI Hacks</h2>
          <p>Join 50,000+ professionals receiving our best AI productivity tips.</p>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p className="fine-print">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      <section className="teaser">
        <h2>Want to save 20+ hours every week?</h2>
        <p>We've compiled our top 25 AI productivity hacks into a comprehensive guide.</p>
        <div className="teaser-content">
          <div className="teaser-text">
            <h3>Here's what you'll get:</h3>
            <ul>
              <li>✓ 25 advanced AI prompt templates</li>
              <li>✓ Custom workflow automation guides</li>
              <li>✓ 10 AI tool recommendations with special discounts</li>
              <li>✓ Weekly updates as new AI tools emerge</li>
            </ul>
          </div>
          <div className="teaser-cta">
            <p className="price"><span className="original-price">$29</span> $9</p>
            <a href="/premium" className="btn btn-accent">Get Premium Access</a>
            <p className="guarantee">30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
