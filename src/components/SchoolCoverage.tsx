'use client';

const SCHOOLS = [
  'Harvard', 'Stanford', 'MIT', 'Yale', 'Princeton',
  'Columbia', 'UPenn', 'Caltech', 'Duke', 'Johns Hopkins',
  'Northwestern', 'Dartmouth', 'Brown', 'Cornell', 'Rice',
  'Vanderbilt', 'Notre Dame', 'Georgetown', 'UCLA', 'UC Berkeley',
  'UMich', 'UVA', 'UNC Chapel Hill', 'USC', 'NYU', 'Carnegie Mellon',
];

export default function SchoolCoverage() {
  return (
    <section id="schools" className="py-24 bg-bg">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-4">
          Rubrics for 26 Top Schools
        </h2>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          Built from 100+ interviews with students who got in. Real data, not guesswork.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {SCHOOLS.map((school, i) => (
            <span
              key={i}
              className="bg-white border border-gray-200 text-sm text-text font-medium px-4 py-2 rounded-lg hover:border-accent/30 hover:shadow-sm transition-all cursor-default"
            >
              {school}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
