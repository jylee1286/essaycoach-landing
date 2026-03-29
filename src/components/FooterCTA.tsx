'use client';

import { motion } from 'motion/react';

export default function FooterCTA() {
  return (
    <>
      {/* Final CTA */}
      <section id="cta" className="py-20 md:py-28 bg-bg">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to see your{' '}
            <span className="text-gold">real score</span>?
          </motion.h2>
          <motion.p
            className="text-text-muted text-lg mb-10 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Paste your essay and get scored in under a minute. Free, no credit
            card.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#"
              className="inline-block bg-gold hover:bg-gold-hover text-bg px-10 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Score My Essay — Free
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-bold tracking-tight">
            Admit&nbsp;<span className="text-gold">Max</span>
          </div>
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
          <div className="text-xs text-text-muted">
            &copy; 2026 Admit Max. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
