export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          One price. Everything included.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="bg-bg border border-white/[0.06] rounded-2xl p-8">
            <div className="text-sm text-text-muted uppercase tracking-wider mb-2">
              Free
            </div>
            <div className="text-4xl font-bold mb-1">$0</div>
            <div className="text-text-muted text-sm mb-8">
              No credit card required
            </div>

            <ul className="space-y-3 mb-8">
              {[
                '2 essay reviews',
                'Full-quality feedback',
                'Score + dimension breakdown',
                'Account required',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text/80"
                >
                  <svg
                    className="w-4 h-4 text-text-muted mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="block text-center border border-white/10 hover:border-white/20 text-text rounded-xl py-3 font-semibold text-sm transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Premium */}
          <div className="bg-bg border-2 border-gold/40 rounded-2xl p-8 relative">
            <div className="absolute -top-3 right-8 bg-gold text-bg text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="text-sm text-gold uppercase tracking-wider mb-2">
              Premium
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold">$120</span>
              <span className="text-text-muted text-sm">/month</span>
            </div>
            <div className="text-text-muted text-sm mb-8">
              95% cheaper than a college consultant
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'Unlimited essay reviews',
                'Conversation mode',
                'School-specific rubrics',
                'Line-by-line annotations',
                'Dimension scoring with explanations',
                'Supplemental essay support',
                'Revision tracking',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text/80"
                >
                  <svg
                    className="w-4 h-4 text-gold mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="block text-center bg-gold hover:bg-gold-hover text-bg rounded-xl py-3 font-semibold text-sm transition-colors"
            >
              Start Premium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
