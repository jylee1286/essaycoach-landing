'use client';

import { motion } from 'motion/react';

export default function FooterCTA() {
  return (
    <>
      {/* Final CTA — dialog box */}
      <section id="cta" className="py-20 md:py-28 bg-bg">
        <div className="max-w-2xl mx-auto px-6">
          <div className="retro-window">
            <div className="retro-titlebar">
              <div className="retro-btn retro-btn-close" />
              <div className="retro-btn retro-btn-min" />
              <div className="retro-btn retro-btn-max" />
              <span className="ml-2 font-pixel text-[7px] text-gold">
                get_started.exe
              </span>
            </div>

            <div className="p-8 md:p-12 text-center">
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
                  className="retro-button inline-block bg-gold hover:bg-gold-hover text-bg px-10 py-4 font-pixel text-[10px] leading-relaxed"
                >
                  <span className="star-spin inline-block mr-2">&#10022;</span>
                  Score My Essay — Free
                  <span className="star-spin inline-block ml-2">&#10022;</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer — retro status bar */}
      <footer className="border-t-2 border-gold/20 bg-bg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-bold tracking-tight">
            <span className="text-gold star-spin text-xs">&#10022;</span>
            Admit&nbsp;<span className="text-gold">Max</span>
          </div>
          <div className="flex items-center gap-1 font-pixel text-[7px] text-text-muted">
            <a href="#" className="hover:text-gold transition-colors px-2 py-1 border-r border-white/[0.06]">
              Privacy
            </a>
            <a href="#" className="hover:text-gold transition-colors px-2 py-1 border-r border-white/[0.06]">
              Terms
            </a>
            <a href="#" className="hover:text-gold transition-colors px-2 py-1">
              Contact
            </a>
          </div>
          <div className="font-pixel text-[7px] text-text-muted flex items-center gap-2">
            <span>&copy; 2026 Admit Max. All rights reserved.</span>
            <span className="cursor-blink text-gold">&#9608;</span>
          </div>
        </div>
      </footer>
    </>
  );
}
