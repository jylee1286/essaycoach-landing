"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "Will this write my essay for me?",
    answer:
      "No. And that\u2019s the point. EssayCoach gives you expert-level feedback \u2014 the kind that a $150/hour consultant would give \u2014 but the writing is always yours. Admissions officers can tell when an essay isn\u2019t authentic. We make sure yours is.",
  },
  {
    question: "Is this cheating?",
    answer:
      "Getting feedback has never been cheating. Every student with access to a college counselor, tutor, or educated parent already gets their essays reviewed. EssayCoach levels the playing field.",
  },
  {
    question: "Why $120/month?",
    answer:
      "Because $150/hour consultants charge more for less. Most students need 8\u201312 essay reviews during application season. At consultant rates, that\u2019s $1,200\u20131,800. EssayCoach gives you unlimited reviews for a fraction of the cost.",
  },
  {
    question: "What schools do you support?",
    answer:
      "We have school-specific rubrics for 200+ schools including all Ivy League, Stanford, MIT, Caltech, UChicago, Duke, and every Top 50 university. Rubrics are updated within 48 hours of new prompts being released.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT will tell you your essay is great and suggest generic improvements. EssayCoach is built on admissions-specific rubrics, trained on what actually gets students admitted, and designed to give you the honest, specific feedback that generic AI tools won\u2019t.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl tracking-[-0.03em] text-text mb-12 md:mb-16"
        >
          Questions <em className="text-cta">&amp;</em> answers
        </motion.h2>

        <div>
          {faqs.map(({ question, answer }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left group cursor-pointer"
              >
                <span className="text-base md:text-lg text-text group-hover:text-cta transition-colors duration-300 pr-8">
                  {question}
                </span>
                <span
                  className={`text-text-muted text-xl transition-transform duration-300 shrink-0 ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm md:text-base text-text-muted leading-relaxed pr-12">
                      {answer}
                    </p>
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
