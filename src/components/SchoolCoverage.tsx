'use client';

import { motion } from 'motion/react';

const SCHOOLS = [
  'Harvard',
  'Stanford',
  'MIT',
  'Yale',
  'Princeton',
  'Columbia',
  'UPenn',
  'Duke',
  'Caltech',
  'Brown',
  'Northwestern',
  'Dartmouth',
  'Johns Hopkins',
  'Cornell',
  'Rice',
  'Vanderbilt',
  'Georgetown',
  'UChicago',
  'Notre Dame',
  'Emory',
];

export default function SchoolCoverage() {
  return (
    <section className="py-24 md:py-32 bg-bg-alt">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trained on Data From Students Admitted To
        </motion.h2>
        <motion.p
          className="text-text-muted mb-14 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our rubrics reflect what actually works at these schools.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {SCHOOLS.map((school) => (
            <div
              key={school}
              className="py-3 px-4 rounded-lg border border-white/[0.06] bg-bg/50 text-sm text-text/80 hover:text-gold hover:border-gold/20 transition-colors"
            >
              {school}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
