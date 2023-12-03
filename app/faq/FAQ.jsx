'use client';
import { useState } from 'react';

const FAQ = ({ question, answer }) => {
const [isExpanded, setIsExpanded] = useState(false);

const handleToggle = () => {
  setIsExpanded((prevExpanded) => !prevExpanded);
};
  return (
    <div className="faq-item">
      <div className="question" onClick={handleToggle}>
        <h3>{question}</h3>
      </div>
      <div
        className="answer"
        style={{ display: isExpanded ? 'block' : 'none' }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
