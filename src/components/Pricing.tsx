"use client";

import { motion } from "motion/react";

const features = [
  "Unlimited essay reviews",
  "School-specific rubrics (200+ schools)",
  "Line-by-line annotations",
  "Dimension scoring with explanations",
  "Conversational feedback & Q&A",
  "Supplemental essay support",
  "Revision tracking & improvement scores",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-36 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cta to-transparent" />

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.15em] text-cta font-medium">
              Premium
            </p>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="font-serif text-5xl md:text-6xl text-text">
                $120
              </span>
              <span className="text-text-muted text-lg">/month</span>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-cta mt-0.5 shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8.5L6.5 12L13 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-text/80">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            <a
              href="#"
              className="block w-full text-center bg-cta text-bg font-semibold py-4 rounded-full hover:bg-cta-hover transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,83,0.15)]"
            >
              Start Free Review
            </a>
            <p className="text-center text-sm text-text-muted">
              Start free &mdash; 2 reviews/month, no card required.
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-text-muted text-sm mt-8"
        >
          Still 95% cheaper than a college consultant.
        </motion.p>
      </div>
    </section>
  );
}
