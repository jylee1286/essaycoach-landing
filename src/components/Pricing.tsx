export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          One price. Everything included.
        </h2>
        <p className="font-pixel text-[8px] text-text-muted text-center mb-14 tracking-wider">
          &#10022; SELECT_PLAN.exe &#10022;
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="retro-window-light">
            <div className="retro-titlebar-light">
              <div className="retro-btn retro-btn-close" />
              <div className="retro-btn retro-btn-min" />
              <div className="retro-btn retro-btn-max" />
              <span className="ml-2 font-pixel text-[7px] text-text-muted">
                free_tier.cfg
              </span>
            </div>

            <div className="p-8">
              <div className="font-pixel text-[9px] text-text-muted uppercase tracking-wider mb-2">
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
                    <span className="text-text-muted mt-0.5 font-pixel text-[8px]">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className="retro-button-outline block text-center text-text py-3 text-[9px]"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Premium */}
          <div className="retro-window relative">
            <div className="absolute -top-3 right-6 bg-gold text-bg font-pixel text-[7px] px-3 py-1 border-2 border-gold-hover shadow-[2px_2px_0px_rgba(0,0,0,0.4)] z-10">
              Most Popular
            </div>
            <div className="retro-titlebar">
              <div className="retro-btn retro-btn-close" />
              <div className="retro-btn retro-btn-min" />
              <div className="retro-btn retro-btn-max" />
              <span className="ml-2 font-pixel text-[7px] text-gold">
                premium_tier.cfg
              </span>
            </div>

            <div className="p-8">
              <div className="font-pixel text-[9px] text-gold uppercase tracking-wider mb-2">
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
                    <span className="text-gold mt-0.5 font-pixel text-[8px]">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className="retro-button block text-center bg-gold hover:bg-gold-hover text-bg py-3 text-[9px]"
              >
                Start Premium
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
