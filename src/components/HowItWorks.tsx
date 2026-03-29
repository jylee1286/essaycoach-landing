const STEPS = [
  {
    num: '01',
    title: 'Paste your essay',
    desc: 'Drop in your Common App, supplemental, or any college essay draft.',
  },
  {
    num: '02',
    title: 'Get scored against T20 rubrics',
    desc: 'Our rubrics are built from 100+ real interviews with students admitted to top schools.',
  },
  {
    num: '03',
    title: 'Improve with AI feedback',
    desc: 'Line-by-line annotations show you exactly what to fix and why.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Three steps. That&apos;s it.
        </h2>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[2.75rem] top-5 bottom-5 w-px bg-gold/15 hidden sm:block" />

          <div className="space-y-12">
            {STEPS.map((step) => (
              <div key={step.num} className="flex items-start gap-8 sm:gap-12">
                {/* Left: large number */}
                <div className="flex-shrink-0 w-20 sm:w-24 flex justify-center">
                  <span className="text-6xl sm:text-7xl font-bold text-gold/20 leading-none tabular-nums">
                    {step.num}
                  </span>
                </div>
                {/* Right: content */}
                <div className="pt-2 pb-2">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
