"use client";

import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-sm uppercase tracking-[0.2em] text-text-muted mb-4"
        >
          How it works
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-serif text-3xl md:text-5xl tracking-[-0.03em] text-text mb-16 md:mb-24"
        >
          Three steps to a <em className="text-cta">stronger</em> essay.
        </motion.h2>

        <div className="space-y-20 md:space-y-32">
          {/* Step 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            <div>
              <span className="font-mono text-xs text-text-muted">01</span>
              <h3 className="font-serif text-2xl md:text-3xl mt-2 mb-4 text-text">
                Paste your essay
              </h3>
              <p className="text-text-muted leading-relaxed">
                Drop in your Common App essay, supplementals, or any draft. No
                formatting required.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-issue/60" />
                <div className="w-2 h-2 rounded-full bg-suggestion/60" />
                <div className="w-2 h-2 rounded-full bg-strength/60" />
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-white/10 rounded w-full" />
                <div className="h-3 bg-white/10 rounded w-11/12" />
                <div className="h-3 bg-white/10 rounded w-4/5" />
                <div className="h-3 bg-white/10 rounded w-full" />
                <div className="h-3 bg-white/10 rounded w-3/4" />
                <div className="h-3 bg-white/10 rounded w-11/12" />
                <div className="h-3 bg-white/10 rounded w-2/3" />
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-8 bg-cta/20 border border-cta/30 rounded-md px-4 flex items-center">
                  <span className="text-xs text-cta font-medium">
                    Analyze Essay
                  </span>
                </div>
                <span className="text-xs text-text-muted font-mono">
                  647 words
                </span>
              </div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            <div className="md:order-2">
              <span className="font-mono text-xs text-text-muted">02</span>
              <h3 className="font-serif text-2xl md:text-3xl mt-2 mb-4 text-text">
                Get scored on what matters
              </h3>
              <p className="text-text-muted leading-relaxed">
                See exactly where you stand on the dimensions admissions officers
                actually care about.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:order-1">
              <div className="space-y-3 font-mono text-sm">
                {[
                  { label: "Authenticity", score: "9/10", color: "text-strength" },
                  { label: "Narrative Arc", score: "7/10", color: "text-suggestion" },
                  { label: "Specificity", score: "6/10", color: "text-issue" },
                  { label: "Voice", score: "8/10", color: "text-strength" },
                  { label: "Prompt Fit", score: "7/10", color: "text-suggestion" },
                ].map(({ label, score, color }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center py-1.5 border-b border-white/5"
                  >
                    <span className="text-text-muted">{label}</span>
                    <span className={color}>{score}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-text font-medium">Overall</span>
                  <span className="text-cta text-lg">7.4/10</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            <div>
              <span className="font-mono text-xs text-text-muted">03</span>
              <h3 className="font-serif text-2xl md:text-3xl mt-2 mb-4 text-text">
                Know exactly what to fix
              </h3>
              <p className="text-text-muted leading-relaxed">
                Every suggestion is specific, actionable, and tied to what top
                schools look for.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
              <div className="flex gap-3">
                <div className="w-1 rounded-full bg-suggestion shrink-0" />
                <div>
                  <p className="text-xs font-medium text-suggestion mb-1">
                    Suggestion
                  </p>
                  <p className="text-sm text-text/70 leading-relaxed">
                    &ldquo;Paragraph 3 tells us you learned something, but
                    doesn&apos;t show us the moment it clicked. Replace the
                    summary with a single vivid scene.&rdquo;
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1 rounded-full bg-strength shrink-0" />
                <div>
                  <p className="text-xs font-medium text-strength mb-1">
                    Strength
                  </p>
                  <p className="text-sm text-text/70 leading-relaxed">
                    &ldquo;Your opening line creates immediate tension. This is
                    the kind of hook that makes a reader lean in.&rdquo;
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-1 rounded-full bg-issue shrink-0" />
                <div>
                  <p className="text-xs font-medium text-issue mb-1">Issue</p>
                  <p className="text-sm text-text/70 leading-relaxed">
                    &ldquo;The conclusion restates your thesis almost
                    word-for-word. End with forward motion, not a summary.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
