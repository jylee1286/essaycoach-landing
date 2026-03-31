const TESTIMONIALS = [
  {
    name: 'Sarah K.',
    school: 'Stanford',
    year: "'26",
    handle: 'sarah_k_26',
    quote:
      "I rewrote my Common App essay three times before using Admit Max. The scoring rubric showed me exactly why my opening wasn't landing. Got in ED.",
  },
  {
    name: 'Marcus T.',
    school: 'UPenn',
    year: "'26",
    handle: 'marcus_t_26',
    quote:
      "My counselor said my essay was 'fine.' Admit Max showed me fine wasn't enough. The line-by-line feedback transformed my supplementals.",
  },
  {
    name: 'Priya R.',
    school: 'MIT',
    year: "'27",
    handle: 'priya_r_27',
    quote:
      'The school-specific rubrics are what set this apart. My MIT essay was completely different from my Harvard one, and it should be.',
  },
];

function IMWindow({ t, featured }: { t: typeof TESTIMONIALS[number]; featured?: boolean }) {
  return (
    <div className="retro-window-light h-full flex flex-col">
      {/* IM titlebar */}
      <div className="retro-titlebar-light">
        <div className="retro-btn retro-btn-close" />
        <div className="retro-btn retro-btn-min" />
        <div className="retro-btn retro-btn-max" />
        <span className="ml-2 font-pixel text-[7px] text-text-muted truncate">
          {t.handle} — instant message
        </span>
      </div>

      <div className={`${featured ? 'p-8 md:p-10' : 'p-6'} flex-1 flex flex-col`}>
        {/* Chat bubble */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gold/20 border border-gold/30 flex items-center justify-center font-pixel text-[7px] text-gold">
              {t.name[0]}
            </div>
            <span className="font-pixel text-[7px] text-gold">{t.handle}</span>
            <span className="font-pixel text-[6px] text-text-muted">now</span>
          </div>
          <p className={`${featured ? 'text-lg md:text-xl' : 'text-sm'} leading-relaxed text-text/85 ml-8`}>
            {t.quote}
          </p>
        </div>

        {/* User info footer */}
        <div className="mt-5 pt-3 border-t-2 border-dashed border-white/[0.06]">
          <div className={`${featured ? 'font-semibold' : 'text-sm font-semibold'}`}>{t.name}</div>
          <div className="text-xs text-gold mt-0.5 font-pixel text-[7px]">
            {t.school} {t.year}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Don&apos;t take our word for it.
        </h2>
        <p className="font-pixel text-[8px] text-text-muted mb-14 tracking-wider">
          &#10022; USER_TESTIMONIALS.log &#10022;
        </p>

        {/* Featured large testimonial */}
        <div className="mb-6">
          <IMWindow t={TESTIMONIALS[0]} featured />
        </div>

        {/* Two smaller testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.slice(1).map((t) => (
            <IMWindow key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
