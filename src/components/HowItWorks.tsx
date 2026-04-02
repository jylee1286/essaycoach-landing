'use client';

const STEPS = [
  {
    num: '01',
    title: 'Paste your essay',
    desc: 'Drop in your Common App, supplemental, or any college essay. No signup required for your first 2 reviews.',
    icon: '📝',
  },
  {
    num: '02',
    title: 'Get scored instantly',
    desc: 'Our AI scores your essay against rubrics built from real admissions data — what actually worked for students who got in.',
    icon: '📊',
  },
  {
    num: '03',
    title: 'Rewrite with precision',
    desc: 'Line-by-line feedback shows exactly what to fix. Your words, your voice — just sharper.',
    icon: '✨',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-4">
          How It Works
        </h2>
        <p className="text-muted text-center mb-16 max-w-xl mx-auto">
          Three steps to an essay that stands out.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">
                Step {step.num}
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
