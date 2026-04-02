'use client';

const TESTIMONIALS = [
  {
    quote: "I rewrote my Common App essay three times before using Admit Max. The scoring rubric showed me exactly why my opening wasn't landing. Got in ED.",
    name: 'Sarah K.',
    school: 'Duke \'30',
  },
  {
    quote: "My counselor said my essay was 'fine.' Admit Max showed me fine wasn't enough. The line-by-line feedback transformed my supplementals.",
    name: 'Marcus T.',
    school: 'Stanford \'30',
  },
  {
    quote: "The personalization feature matched my experiences to specific school prompts I hadn't even considered. Game changer for supplements.",
    name: 'Priya R.',
    school: 'MIT \'30',
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">
          What Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-bg rounded-xl p-6 border border-gray-100">
              <p className="text-sm text-text leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-text">{t.name}</p>
                <p className="text-xs text-accent font-medium">{t.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
