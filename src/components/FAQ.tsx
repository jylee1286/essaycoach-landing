'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FAQS = [
  {
    q: 'How does the scoring work?',
    a: "Your essay is evaluated across multiple dimensions used by T20 admissions readers -- narrative strength, specificity, voice, structure, and more. Each dimension is scored individually, then combined into an overall score out of 100.",
  },
  {
    q: 'What schools are covered?',
    a: "Our rubrics are built from interviews with students admitted to 20+ top universities including Harvard, Stanford, MIT, Yale, Princeton, and more. We also offer school-specific rubrics that account for each school's unique values and essay prompts.",
  },
  {
    q: 'Is my essay data private?',
    a: 'Yes. Your essays are encrypted, never shared, and never used to train AI models. You can delete your data at any time.',
  },
  {
    q: 'Can I use this for supplemental essays?',
    a: "Absolutely. Premium users get access to school-specific rubrics for supplemental essays, including 'Why this school?' and activity essays.",
  },
  {
    q: 'How is this different from ChatGPT?',
    a: "ChatGPT gives generic writing feedback. Admit Max scores your essay against rubrics built from real admissions data -- what actually worked for students who got in. We don't write your essay; we show you exactly how to make it stronger.",
  },
  {
    q: 'Who built this?',
    a: 'Admit Max was built by a team of Harvard students who conducted 100+ interviews with students admitted to T20 universities. Our rubrics are grounded in real admissions insights, not guesswork.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-bg">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className="border border-white/[0.06] rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-medium text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${
                    openIdx === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-text-muted leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
