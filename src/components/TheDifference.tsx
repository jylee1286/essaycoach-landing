"use client";

import { motion } from "motion/react";

const lines = [
  {
    lead: "We don\u2019t write your essay.",
    emphasis: "We make you a better writer.",
  },
  {
    lead: "Built from",
    emphasis: "100+ interviews with students admitted to T20 schools.",
  },
  {
    lead: "School-specific rubrics that",
    emphasis: "update the day prompts drop.",
  },
  {
    lead: "Brutally honest feedback.",
    emphasis:
      "Not the kind that makes you feel good \u2014 the kind that gets you in.",
  },
];

export default function TheDifference() {
  return (
    <section id="features" className="py-24 md:py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.2em] text-text-muted mb-12 md:mb-16"
        >
          The difference
        </motion.p>

        <div className="space-y-10 md:space-y-14">
          {lines.map(({ lead, emphasis }, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl leading-snug tracking-[-0.02em]"
            >
              <span className="text-text-muted">{lead}</span>{" "}
              <span className="text-text">{emphasis}</span>
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
