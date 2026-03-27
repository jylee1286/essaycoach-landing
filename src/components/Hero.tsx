"use client";

import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const { scrollY } = useScroll();
  const annotationY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg to-bg-light" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-[-0.03em] text-text"
        >
          Your essay is the only part
          <br className="hidden sm:block" /> of your application you still{" "}
          <em className="text-cta">control</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 md:mt-8 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Expert-level feedback on your college application essays. In minutes,
          not weeks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10"
        >
          <a
            href="#pricing"
            className="inline-block bg-cta text-bg font-semibold text-lg px-8 py-4 rounded-full hover:bg-cta-hover transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,83,0.2)]"
          >
            Start Free Review
          </a>
        </motion.div>
      </div>

      <motion.div
        style={{ y: annotationY }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-16 md:mt-20 w-full max-w-3xl mx-auto"
      >
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="ml-3 text-xs text-text-muted font-mono">
              personal_statement_v3.doc
            </span>
          </div>

          <div className="text-sm md:text-base leading-7 text-text/80 font-sans relative">
            <p>
              The moment I stepped off the plane in Santiago, I realized that{" "}
              <span className="bg-strength/15 text-strength border-b border-strength/40 px-0.5">
                everything I&apos;d prepared for was irrelevant
              </span>
              . My carefully{" "}
              <span className="bg-suggestion/15 text-suggestion border-b border-suggestion/40 px-0.5 relative">
                rehearsed Spanish phrases
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-bg-light border border-white/10 rounded-lg p-3 text-xs text-text-muted leading-relaxed hidden md:block">
                  <span className="text-suggestion font-medium block mb-1">
                    Suggestion
                  </span>
                  Consider expanding on which specific phrases you prepared — this
                  adds vivid detail.
                  <span className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-bg-light border-r border-b border-white/10 rotate-45 -mt-1" />
                </span>
              </span>{" "}
              fell flat against the rapid Chilean dialect, and the{" "}
              <span className="bg-issue/15 text-issue border-b border-issue/40 px-0.5">
                confidence I&apos;d built over four years of classroom Spanish
              </span>{" "}
              evaporated in a single taxi ride from the airport.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
