export default function Credibility() {
  return (
    <section className="py-20 md:py-28 bg-bg-alt">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          We talked to 100+ admits. Here&apos;s what we learned.
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: stats — 40% */}
          <div className="md:w-2/5 space-y-8 flex-shrink-0">
            <div>
              <div className="text-6xl md:text-7xl font-bold text-gold leading-none">
                100+
              </div>
              <div className="text-text-muted mt-2">Interviews conducted</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold text-gold leading-none">
                23
              </div>
              <div className="text-text-muted mt-2">T20 schools covered</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-bold text-gold leading-none">
                7
              </div>
              <div className="text-text-muted mt-2">Scoring dimensions</div>
            </div>
          </div>

          {/* Right: story — 60% */}
          <div className="space-y-5 text-text-muted text-lg leading-relaxed">
            <p>
              Our rubrics are built from in-depth interviews with{' '}
              <span className="text-gold font-medium">
                100+ students admitted to T20 universities
              </span>
              . We asked them what worked, what didn&apos;t, and what they wish
              they&apos;d known.
            </p>
            <p>
              Every scoring dimension and annotation pattern is grounded in real
              admissions outcomes — not generic writing advice. The team behind
              Admit Max includes current Harvard students who have mentored
              hundreds of applicants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
