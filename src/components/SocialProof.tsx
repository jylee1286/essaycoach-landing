"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "I went through three rounds of revisions with EssayCoach. My counselor said my final draft was the strongest personal statement she\u2019d seen in twelve years.",
    name: "Sarah M.",
    school: "Admitted to Stanford \u201928",
  },
  {
    quote:
      "The feedback was uncomfortably honest at first. Then I realized that\u2019s exactly what I needed. No one else was willing to tell me my essay was forgettable.",
    name: "James L.",
    school: "Admitted to UPenn \u201928",
  },
  {
    quote:
      "I used it for all eight of my supplementals. Having school-specific rubrics meant I wasn\u2019t guessing what each school wanted.",
    name: "Priya K.",
    school: "Admitted to MIT \u201928",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.2em] text-text-muted mb-12 md:mb-20"
        >
          What students say
        </motion.p>

        <div className="space-y-16 md:space-y-20">
          {testimonials.map(({ quote, name, school }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={
                i % 2 === 1
                  ? "md:ml-auto md:text-right md:max-w-2xl"
                  : "max-w-2xl"
              }
            >
              <span className="font-serif text-5xl md:text-7xl text-cta/30 leading-none block mb-2">
                &ldquo;
              </span>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-text/90 -mt-8 md:-mt-12">
                {quote}
              </p>
              <div className="mt-4 md:mt-6">
                <p className="text-sm text-text font-medium">{name}</p>
                <p className="text-xs text-text-muted mt-0.5">{school}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 md:mt-28 pt-12 border-t border-white/10 text-center"
        >
          <p className="font-mono text-5xl md:text-7xl text-cta tracking-tight">
            +24%
          </p>
          <p className="text-text-muted mt-3 text-sm md:text-base">
            Average score improvement after 3 revisions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
