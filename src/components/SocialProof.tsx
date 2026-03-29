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
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Don&apos;t take our word for it.
        </h2>

        {/* Featured large testimonial */}
        <div className="bg-bg-alt border border-white/[0.06] rounded-2xl p-8 md:p-12 mb-6">
          <div className="text-7xl text-gold/25 font-serif leading-none mb-4 select-none">
            &ldquo;
          </div>
          <p className="text-xl leading-relaxed text-text/90 mb-8">
            {TESTIMONIALS[0].quote}
          </p>
          <div>
            <div className="font-semibold">{TESTIMONIALS[0].name}</div>
            <div className="text-sm text-gold mt-0.5">
              {TESTIMONIALS[0].school} {TESTIMONIALS[0].year}
            </div>
          </div>
        </div>

        {/* Two smaller testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.slice(1).map((t) => (
            <div
              key={t.name}
              className="bg-bg-alt border border-white/[0.06] rounded-2xl p-6 md:p-8 flex flex-col"
            >
              <p className="text-text/80 leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-gold mt-0.5">
                  {t.school} {t.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
