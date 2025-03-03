// pages/premium.js
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Premium() {
  return (
    <Layout>
      <Head>
        <title>Premium AI Productivity Hacks | Unlock Your Full Potential</title>
        <meta name="description" content="Unlock our premium collection of AI productivity hacks, templates, and workflows to save 20+ hours every week." />
      </Head>

      <section className="premium-hero">
        <h1>Premium AI Productivity Hacks</h1>
        <h2>Unlock the Full Potential of AI</h2>
        <p>Join thousands of professionals who've transformed their work with our premium AI strategies.</p>
      </section>

      <section className="premium-features">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>25 Advanced AI Prompts</h3>
            <p>Copy-paste prompts for writing, research, coding, and data analysis that deliver perfect results every time.</p>
          </div>
          <div className="feature-card">
            <h3>AI Workflow Blueprints</h3>
            <p>Step-by-step workflows to automate your most time-consuming tasks across different roles and industries.</p>
          </div>
          <div className="feature-card">
            <h3>Tool Recommendations</h3>
            <p>Curated list of the best AI tools with exclusive discounts negotiated for our members.</p>
          </div>
          <div className="feature-card">
            <h3>Weekly Updates</h3>
            <p>As new AI tools and techniques emerge, you'll be the first to know and implement them.</p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="pricing-card">
          <h3>AI Productivity Bundle</h3>
          <p className="price">$9 <span className="original-price">$29</span></p>
          <ul className="benefits">
            <li>✓ 25 Advanced AI Prompts</li>
            <li>✓ AI Workflow Blueprints</li>
            <li>✓ Tool Recommendations</li>
            <li>✓ Weekly Updates</li>
            <li>✓ Private Community Access</li>
          </ul>
          <button className="btn btn-accent btn-large">Get Instant Access</button>
          <p className="guarantee">30-day money-back guarantee</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Members Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"These AI hacks have literally cut my workday in half. I'm now completing tasks in minutes that used to take hours."</p>
            <p className="author">— Sarah K., Marketing Director</p>
          </div>
          <div className="testimonial">
            <p>"The prompt templates alone are worth 10x the price. My writing is better, faster, and more persuasive."</p>
            <p className="author">— James L., Content Creator</p>
          </div>
          <div className="testimonial">
            <p>"As a developer, I was skeptical about AI tools, but these workflows have become essential to my daily coding process."</p>
            <p className="author">— Michael R., Software Engineer</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
