const ROW1 = [
  'Harvard', 'Stanford', 'MIT', 'Yale', 'Princeton', 'Columbia', 'UPenn',
  'Duke', 'Caltech', 'Brown', 'Northwestern', 'Dartmouth',
];

const ROW2 = [
  'Johns Hopkins', 'Cornell', 'Rice', 'Vanderbilt', 'UChicago', 'Notre Dame',
  'UC Berkeley', 'UCLA', 'University of Michigan',
  'Washington University in St. Louis', 'Carnegie Mellon',
];

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const list = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `${reverse ? 'marquee-right' : 'marquee-left'} 30s linear infinite`,
        }}
      >
        {list.map((school, i) => (
          <span key={i} className="inline-flex items-center flex-shrink-0">
            <span className="text-text/75 text-sm md:text-base px-1">{school}</span>
            <span className="text-gold mx-2 md:mx-3 text-xs select-none">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SchoolCoverage() {
  return (
    <section className="py-12 md:py-16 bg-bg-alt">
      {/* Retro frame border */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-2 border-gold/20 p-4 md:p-6 shadow-[4px_4px_0px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-pixel text-[8px] text-gold tracking-wider">&#9733; SCHOOL COVERAGE &#9733;</span>
            <div className="flex-1 border-t border-dashed border-gold/20" />
          </div>
          <div className="space-y-4">
            <MarqueeRow items={ROW1} />
            <MarqueeRow items={ROW2} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
