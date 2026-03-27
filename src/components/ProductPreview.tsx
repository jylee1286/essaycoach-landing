"use client";

import { motion } from "motion/react";

const scores = [
  { label: "Authenticity", score: 9, max: 10 },
  { label: "Narrative Arc", score: 7, max: 10 },
  { label: "Specificity", score: 8, max: 10 },
  { label: "Self-Reflection", score: 6, max: 10 },
  { label: "Voice", score: 9, max: 10 },
  { label: "Prompt Fit", score: 7, max: 10 },
  { label: "Grammar", score: 9, max: 10 },
];

function scoreColor(score: number) {
  if (score >= 8) return "text-strength";
  if (score >= 7) return "text-suggestion";
  return "text-issue";
}

function barColor(score: number) {
  if (score >= 8) return "bg-strength/60";
  if (score >= 7) return "bg-suggestion/60";
  return "bg-issue/60";
}

export default function ProductPreview() {
  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-text-muted mb-4">
            See it in action
          </p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-[-0.03em] text-text">
            Feedback that <em className="text-cta">actually helps</em>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.02] border border-white/[0.08] rounded-2xl overflow-hidden"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <div className="flex gap-6 text-xs font-mono text-text-muted">
              <span className="text-text border-b border-cta pb-1">Essay</span>
              <span>Scores</span>
              <span>Chat</span>
            </div>
            <div className="w-16" />
          </div>

          <div className="grid lg:grid-cols-[1fr,320px]">
            {/* Essay panel */}
            <div className="p-6 md:p-8 lg:border-r border-white/[0.06]">
              <div className="text-sm md:text-base leading-7 text-text/75 font-sans space-y-4">
                <p>
                  The moment I stepped off the plane in Santiago, I realized
                  that{" "}
                  <span className="bg-strength/15 text-strength/90 border-b border-strength/40">
                    everything I&apos;d prepared for was irrelevant
                  </span>
                  . My carefully rehearsed Spanish phrases fell flat against the
                  rapid Chilean dialect, and the confidence I&apos;d built over{" "}
                  <span className="bg-issue/15 text-issue/90 border-b border-issue/40">
                    four years of classroom Spanish
                  </span>{" "}
                  evaporated in a single taxi ride.
                </p>
                <p>
                  That first week, I{" "}
                  <span className="bg-suggestion/15 text-suggestion/90 border-b border-suggestion/40">
                    stopped trying to be the person my application said I was
                  </span>
                  . The straight-A student who &ldquo;loved challenges&rdquo; was
                  suddenly a teenager who couldn&apos;t order dinner without
                  pointing at the menu. And somehow, that was{" "}
                  <span className="bg-strength/15 text-strength/90 border-b border-strength/40">
                    exactly what I needed
                  </span>
                  .
                </p>
                <p>
                  My host family&apos;s youngest daughter, Valentina, became my
                  accidental teacher. She was eight, mercilessly honest about my
                  pronunciation, and{" "}
                  <span className="bg-suggestion/15 text-suggestion/90 border-b border-suggestion/40">
                    completely unimpressed by my GPA
                  </span>
                  . Through her, I learned that real connection doesn&apos;t
                  require perfect grammar &mdash; it requires{" "}
                  <span className="bg-strength/15 text-strength/90 border-b border-strength/40">
                    the willingness to look foolish
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Scores panel */}
            <div className="p-6 md:p-8 bg-white/[0.02] border-t lg:border-t-0 border-white/[0.06]">
              <p className="text-xs uppercase tracking-[0.15em] text-text-muted mb-5">
                Essay Score
              </p>
              <div className="space-y-4 font-mono text-sm">
                {scores.map(({ label, score, max }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-text-muted">{label}</span>
                      <span className={scoreColor(score)}>
                        {score}/{max}
                      </span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${barColor(score)}`}
                        style={{ width: `${(score / max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center">
                  <span className="text-text text-sm font-medium">Overall</span>
                  <span className="text-cta text-2xl">
                    7.9
                    <span className="text-sm text-text-muted">/10</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat preview */}
          <div className="border-t border-white/[0.06] p-6 md:p-8">
            <div className="max-w-2xl space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-cta/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] text-cta font-semibold">EC</span>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">EssayCoach</p>
                  <p className="text-sm text-text/80 leading-relaxed">
                    Your opening is strong &mdash; the Santiago arrival creates
                    immediate tension. But paragraph 2 tells us you changed
                    without showing us the moment it happened. Can you find that
                    one specific scene?
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] text-text-muted font-semibold">
                    You
                  </span>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">You</p>
                  <p className="text-sm text-text/80 leading-relaxed">
                    Should I cut the part about Valentina? It feels like a
                    tangent.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-cta/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] text-cta font-semibold">EC</span>
                </div>
                <div>
                  <p className="text-xs text-text-muted mb-1">EssayCoach</p>
                  <p className="text-sm text-text/80 leading-relaxed">
                    No &mdash; Valentina is the essay. She&apos;s where the real
                    insight lives. Make her the center of paragraph 2, not the
                    afterthought.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
