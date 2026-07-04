"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  badge?: string;
}

export default function FAQ({ items, title = "Frequently Asked Questions", badge = "✦ FAQs" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section animate-on-scroll">
      <div className="faq-header">
        <span className="badge badge-primary">{badge}</span>
        <h2 className="text-h1 split-text-animate">{title}</h2>
      </div>
      <div className="faq-list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "faq-item--open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{item.question}</span>
              <svg
                className="faq-chevron"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              id={`faq-answer-${index}`}
              className="faq-answer"
              role="region"
              aria-hidden={openIndex !== index}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
