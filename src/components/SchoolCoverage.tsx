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
            <span className="text-gold mx-2 md:mx-3 text-xs select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SchoolCoverage() {
  return (
    <section className="py-12 md:py-16 bg-bg-alt">
      <div className="space-y-4">
        <MarqueeRow items={ROW1} />
        <MarqueeRow items={ROW2} reverse />
      </div>
    </section>
  );
}
