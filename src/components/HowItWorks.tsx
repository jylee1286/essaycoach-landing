const STEPS = [
  {
    num: '01',
    title: 'Paste your essay',
    desc: 'Drop in your Common App, supplemental, or any college essay draft.',
    file: 'essay_input.exe',
  },
  {
    num: '02',
    title: 'Get scored against T20 rubrics',
    desc: 'Our rubrics are built from 100+ real interviews with students admitted to top schools.',
    file: 'rubric_engine.dll',
  },
  {
    num: '03',
    title: 'Improve with AI feedback',
    desc: 'Line-by-line annotations show you exactly what to fix and why.',
    file: 'feedback_v3.sys',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-bg-alt">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Three steps. That&apos;s it.
        </h2>
        <p className="font-pixel text-[8px] text-text-muted mb-14 tracking-wider">
          &#10022; PROCESS_OVERVIEW.exe &#10022;
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.num} className="retro-window">
              <div className="retro-titlebar">
                <div className="retro-btn retro-btn-close" />
                <div className="retro-btn retro-btn-min" />
                <div className="retro-btn retro-btn-max" />
                <span className="ml-2 font-pixel text-[7px] text-text-muted truncate">
                  {step.file}
                </span>
              </div>
              <div className="p-6">
                <span className="font-pixel text-[28px] md:text-[32px] text-gold/25 leading-none block mb-3">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
