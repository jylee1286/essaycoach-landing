'use client';

import { motion } from 'motion/react';

const STEPS = [
  {
    num: '01',
    title: 'Paste your essay',
    desc: 'Drop in your Common App, supplemental, or any college essay draft.',
  },
  {
    num: '02',
    title: 'Get scored against T20 rubrics',
    desc: 'Our rubrics are built from 100+ real interviews with students admitted to top schools.',
  },
  {
    num: '03',
    title: 'Improve with AI feedback',
    desc: 'Line-by-line annotations show you exactly what to fix and why.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-bg-alt">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="text-5xl font-bold text-gold/20 mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-text-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
