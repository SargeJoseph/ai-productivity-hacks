import { useState } from 'react';

export default function PromptGenerator() {
  const [prompt, setPrompt] = useState('');
  const [category, setCategory] = useState('writing');
  
  const prompts = {
    writing: [
      "Write a detailed [TYPE] about [TOPIC] that includes specific examples and actionable advice",
      "Create an outline for a comprehensive guide on [TOPIC] with 5 main sections and 3 subsections each",
      "Generate a persuasive email to [AUDIENCE] that highlights the benefits of [PRODUCT/SERVICE]"
    ],
    productivity: [
      "Create a daily schedule for a [PROFESSION] that maximizes deep work and minimizes distractions",
      "Design a workflow that combines [TOOL 1] and [TOOL 2] to automate [PROCESS]",
      "Generate a template for tracking progress on [PROJECT TYPE] with key metrics and milestones"
    ],
    research: [
      "Research the latest developments in [FIELD] and provide a summary of key trends and implications",
      "Analyze [DATA/CONTENT] and identify patterns, insights, and actionable recommendations",
      "Compile a list of the top 10 resources for learning about [TOPIC] with pros and cons of each"
    ]
  };
  
  const generatePrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts[category].length);
    setPrompt(prompts[category][randomIndex]);
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    alert('Prompt copied to clipboard!');
  };
  
  return (
    <div className="prompt-generator">
      <div className="controls">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="writing">Writing</option>
          <option value="productivity">Productivity</option>
          <option value="research">Research</option>
        </select>
        <button className="btn btn-primary" onClick={generatePrompt}>Generate Prompt</button>
      </div>
      
      {prompt && (
        <div className="prompt-result">
          <p>{prompt}</p>
          <button className="btn btn-secondary" onClick={handleCopy}>Copy to Clipboard</button>
          <div className="click-to-tweet">
            <a
              href={`https://x.com/intent/tweet?text=This AI prompt is saving me hours of work! ${encodeURIComponent(prompt)} via _aiproductivity`}
              target="_blank"
              rel="noopener noreferrer"
              className="tweet-btn"
            >
              Post This Prompt on X
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
