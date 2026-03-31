export default function Credibility() {
  return (
    <section className="py-20 md:py-28 bg-bg-alt">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          We talked to 100+ admits. Here&apos;s what we learned.
        </h2>
        <p className="font-pixel text-[8px] text-text-muted mb-12 tracking-wider">
          &#10022; SYSTEM_STATS.exe &#10022;
        </p>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: stats in terminal window */}
          <div className="md:w-2/5 flex-shrink-0">
            <div className="retro-window retro-flicker">
              <div className="retro-titlebar">
                <div className="retro-btn retro-btn-close" />
                <div className="retro-btn retro-btn-min" />
                <div className="retro-btn retro-btn-max" />
                <span className="ml-2 font-pixel text-[7px] text-gold">
                  stats_console.exe
                </span>
              </div>
              <div className="p-6 font-mono space-y-5">
                <div>
                  <div className="text-xs text-text-muted mb-1 font-pixel text-[7px]">
                    C:\&gt; interviews.count
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-gold leading-none">
                    100+
                  </div>
                  <div className="text-text-muted text-sm mt-1">Interviews conducted</div>
                </div>
                <div className="border-t border-dashed border-white/[0.06] pt-5">
                  <div className="text-xs text-text-muted mb-1 font-pixel text-[7px]">
                    C:\&gt; schools.count
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-gold leading-none">
                    23
                  </div>
                  <div className="text-text-muted text-sm mt-1">T20 schools covered</div>
                </div>
                <div className="border-t border-dashed border-white/[0.06] pt-5">
                  <div className="text-xs text-text-muted mb-1 font-pixel text-[7px]">
                    C:\&gt; dimensions.count
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-gold leading-none">
                    7
                  </div>
                  <div className="text-text-muted text-sm mt-1">Scoring dimensions</div>
                </div>
                <div className="border-t border-dashed border-white/[0.06] pt-3">
                  <span className="font-pixel text-[7px] text-gold cursor-blink">_</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: story */}
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
