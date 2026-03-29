'use client';

import { motion } from 'motion/react';

export default function Credibility() {
  return (
    <section className="py-24 md:py-32 bg-bg-alt">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Built on Real Data, Not Guesswork
        </motion.h2>

        <motion.div
          className="space-y-6 text-text-muted text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p>
            Our rubrics are built from in-depth interviews with{' '}
            <span className="text-gold font-medium">
              100+ students admitted to T20 universities
            </span>
            . We asked them what worked, what didn&apos;t, and what they wish
            they&apos;d known.
          </p>
          <p>
            Every scoring dimension, every annotation pattern, and every piece
            of feedback is grounded in real admissions outcomes -- not generic
            writing advice.
          </p>
          <p>
            The team behind Admit Max includes current and former Harvard
            students who have been through the process themselves and have
            mentored hundreds of applicants.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold">
              100+
            </div>
            <div className="text-xs text-text-muted mt-1">Interviews</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold">20+</div>
            <div className="text-xs text-text-muted mt-1">Schools Covered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gold">7</div>
            <div className="text-xs text-text-muted mt-1">
              Scoring Dimensions
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
