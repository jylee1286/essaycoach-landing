'use client';

import { useState } from 'react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email');
      return;
    }

    // TODO: Connect to actual waitlist backend
    // For now, just show success state
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="waitlist" className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-4">
          Ready to transform your essays?
        </h2>
        <p className="text-muted text-center mb-8">
          Join the waitlist for early access. Free tier available now.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
              disabled={submitted}
            />
            {error && <p className="text-red text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={submitted}
            className={`w-full px-4 py-3 rounded-lg font-semibold transition-all ${
              submitted
                ? 'bg-green text-white'
                : 'bg-accent text-white hover:bg-accent/90'
            }`}
          >
            {submitted ? '✓ Got it! Check your email.' : 'Join Waitlist'}
          </button>
        </form>

        <p className="text-xs text-muted text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
