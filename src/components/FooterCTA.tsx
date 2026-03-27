"use client";

import { motion } from "motion/react";

export default function FooterCTA() {
  return (
    <>
      <section className="py-24 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-6xl tracking-[-0.03em] text-text"
          >
            Your next draft <em className="text-cta">starts here</em>.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="#pricing"
              className="inline-block bg-cta text-bg font-semibold text-lg px-8 py-4 rounded-full hover:bg-cta-hover transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,83,0.2)]"
            >
              Start Free Review
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 md:py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-serif italic text-lg text-text">
            EssayCoach<span className="text-cta">.</span>
          </a>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <a href="#" className="hover:text-text transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-text transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-text transition-colors">
              Contact
            </a>
          </div>
          <p className="text-xs text-text-muted/60">
            &copy; 2026 EssayCoach. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
