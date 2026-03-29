'use client';

import { motion } from 'motion/react';

const TESTIMONIALS = [
  {
    name: 'Sarah K.',
    school: 'Stanford',
    year: "'26",
    quote:
      "I rewrote my Common App essay three times before using Admit Max. The scoring rubric showed me exactly why my opening wasn't landing. Got in ED.",
  },
  {
    name: 'Marcus T.',
    school: 'UPenn',
    year: "'26",
    quote:
      "My counselor said my essay was 'fine.' Admit Max showed me fine wasn't enough. The line-by-line feedback transformed my supplementals.",
  },
  {
    name: 'Priya R.',
    school: 'MIT',
    year: "'27",
    quote:
      'The school-specific rubrics are what set this apart. My MIT essay was completely different from my Harvard one, and it should be.',
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Students Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-bg-alt border border-white/[0.06] rounded-2xl p-6 md:p-8 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-text/80 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-semibold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-gold">
                    {t.school} {t.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
