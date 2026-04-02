'use client';

import Link from 'next/link';

const PLANS = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    desc: 'Try Admit Max risk-free',
    features: [
      '2 essay reviews per month',
      'Line-by-line feedback',
      'Basic rubric scoring',
      'Mobile + desktop',
    ],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '120',
    period: 'month',
    desc: 'Unlimited essay coaching',
    features: [
      'Unlimited reviews',
      'Advanced AI analysis',
      'School-specific rubrics (26+ T20s)',
      'Personalized suggestions',
      'Priority support',
      'Export your essays',
    ],
    cta: 'Join Waitlist',
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-4">
          Simple Pricing
        </h2>
        <p className="text-muted text-center mb-16 max-w-xl mx-auto">
          Start free. Upgrade anytime.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-8 transition-all hover:shadow-lg ${
                plan.highlight
                  ? 'border-accent/30 bg-accent-light/30 ring-2 ring-accent/10 md:col-span-1 md:scale-[1.05]'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
              <p className="text-muted text-sm mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text">${plan.price}</span>
                <span className="text-muted ml-2">/{plan.period}</span>
              </div>
              <Link
                href="#waitlist"
                className={`block w-full text-center px-4 py-3 rounded-lg font-semibold transition-all ${
                  plan.highlight
                    ? 'bg-accent text-white hover:bg-accent/90'
                    : 'bg-gray-100 text-text hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
