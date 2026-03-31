'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const FAQS = [
  {
    q: 'How does the scoring work?',
    a: "Your essay is evaluated across multiple dimensions used by T20 admissions readers -- narrative strength, specificity, voice, structure, and more. Each dimension is scored individually, then combined into an overall score out of 100.",
  },
  {
    q: 'What schools are covered?',
    a: "Our rubrics are built from interviews with students admitted to 23 top universities including Harvard, Stanford, MIT, Yale, Princeton, and more. We also offer school-specific rubrics that account for each school's unique values and essay prompts.",
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
    <section id="faq" className="py-14 md:py-20 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          You&apos;re probably wondering...
        </h2>
        <p className="font-pixel text-[8px] text-text-muted mb-14 tracking-wider">
          &#128193; C:\ADMITMAX\FAQ\
        </p>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Questions — file explorer style */}
          <div className="flex-1">
            <div className="retro-window-light">
              <div className="retro-titlebar-light">
                <div className="retro-btn retro-btn-close" />
                <div className="retro-btn retro-btn-min" />
                <div className="retro-btn retro-btn-max" />
                <span className="ml-2 font-pixel text-[7px] text-text-muted">
                  faq_explorer.exe
                </span>
              </div>

              <div className="divide-y-2 divide-white/[0.04]">
                {FAQS.map((faq, i) => (
                  <div key={i}>
                    <button
                      className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
                      onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    >
                      {/* Folder/file icon */}
                      <span className="font-pixel text-[10px] text-gold flex-shrink-0">
                        {openIdx === i ? '&#128194;' : '&#128193;'}
                      </span>
                      <span className="font-medium text-sm md:text-base flex-1 pr-4">
                        {faq.q}
                      </span>
                      <span className={`font-pixel text-[8px] text-text-muted flex-shrink-0 transition-transform duration-200 ${
                        openIdx === i ? 'rotate-90' : ''
                      }`}>
                        &#9654;
                      </span>
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
                          <div className="px-5 pb-4 pl-12 text-sm text-text-muted leading-relaxed border-l-2 border-gold/20 ml-5">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar — retro dialog */}
          <div className="md:sticky md:top-24 w-full md:w-72 flex-shrink-0">
            <div className="retro-window">
              <div className="retro-titlebar">
                <div className="retro-btn retro-btn-close" />
                <div className="retro-btn retro-btn-min" />
                <div className="retro-btn retro-btn-max" />
                <span className="ml-2 font-pixel text-[7px] text-text-muted">
                  help.txt
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-base mb-2">Still have questions?</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Email us at{' '}
                  <a
                    href="mailto:hello@admitmax.com"
                    className="text-gold hover:text-gold-hover transition-colors"
                  >
                    hello@admitmax.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
