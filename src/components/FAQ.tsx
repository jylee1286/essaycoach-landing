'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: "How is Admit Max different from ChatGPT or other writing tools?",
    a: "ChatGPT gives generic writing feedback. Admit Max scores your essay against rubrics built from real admissions data — what actually worked for students who got in. We don't write your essay; we show you exactly how to make it stronger.",
  },
  {
    q: "Will Admit Max help my essay stand out?",
    a: "Yes. Our analysis pinpoints what makes essays memorable: specific moments, authentic voice, and intellectual engagement. We highlight generic phrases and suggest angles tailored to your story and school choices.",
  },
  {
    q: "Is this AI rewriting my essay?",
    a: "No. Every word remains yours. We provide line-by-line feedback and suggest rewrites you can choose to adopt or ignore. Your voice is always in control.",
  },
  {
    q: "How does Admit Max have T20 rubrics?",
    a: "Admit Max was built by a team of Harvard students who conducted 100+ interviews with students admitted to top universities. Our rubrics are grounded in real admissions insights, not guesswork.",
  },
  {
    q: "Do you store my essays?",
    a: "Yes, we store essays to track your progress and improve our feedback. You can delete essays anytime. We never share your essays with schools or third parties.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-center justify-between gap-4 hover:text-accent transition-colors group"
      >
        <span className="font-medium text-text text-lg">{q}</span>
        <svg
          className={`w-5 h-5 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
      {open && (
        <p className="mt-4 text-muted leading-relaxed text-base">{a}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-bg">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-4">
          FAQs
        </h2>
        <p className="text-muted text-center mb-12">
          Questions? We&rsquo;ve got answers.
        </p>
        <div className="space-y-1 divide-y divide-gray-100">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
