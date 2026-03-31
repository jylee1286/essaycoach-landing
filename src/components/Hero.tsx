'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/* ── timing (ms) ──────────────────────────────────────────── */
const TYPE_MS = 18;
const HIGHLIGHT_GAP = 700;
const REPLACE_MS = 25;
const DISSOLVE_MS = 400;
const SCORE_TICK = 25;
const HOLD_MS = 3000;

/* ── data ─────────────────────────────────────────────────── */
interface Swap {
  original: string;
  replacement: string;
  annotation: string;
}

type Seg = { kind: 'text'; value: string } | { kind: 'swap'; index: number };

const SWAPS: Swap[] = [
  {
    original: 'always been passionate about helping others',
    replacement:
      "carried my grandmother's oxygen tank up three flights every Sunday",
    annotation: 'Cliche opener',
  },
  {
    original:
      'Ever since I was young, I knew I wanted to make a difference in the world',
    replacement:
      'The first time I saw her smile at the top of those stairs',
    annotation: 'Generic',
  },
  {
    original: 'taught me the value of community service',
    replacement:
      'I understood that showing up is the essay, not the thesis',
    annotation: "Tell, don't show",
  },
];

const SEGS: Seg[] = [
  { kind: 'text', value: 'I have ' },
  { kind: 'swap', index: 0 },
  { kind: 'text', value: '. ' },
  { kind: 'swap', index: 1 },
  { kind: 'text', value: '. My volunteer experience at the local food bank ' },
  { kind: 'swap', index: 2 },
  { kind: 'text', value: '.' },
];

const FULL = SEGS.map((s) =>
  s.kind === 'text' ? s.value : SWAPS[s.index].original,
).join('');

const SCORES = [62, 71, 84, 91];

/* ── component ────────────────────────────────────────────── */
export default function Hero() {
  const [typed, setTyped] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreOn, setScoreOn] = useState(false);
  const [hiCount, setHiCount] = useState(0);
  const [dissolved, setDissolved] = useState([false, false, false]);
  const [repLen, setRepLen] = useState([0, 0, 0]);
  const [headline, setHeadline] = useState(false);
  const [cursor, setCursor] = useState<'essay' | number | null>('essay');
  const dead = useRef(false);

  const wait = useCallback(
    (ms: number) =>
      new Promise<void>((res, rej) =>
        setTimeout(() => (dead.current ? rej('x') : res()), ms),
      ),
    [],
  );

  const tickScore = useCallback(
    async (from: number, to: number) => {
      const step = Math.max(SCORE_TICK, 200 / (to - from));
      for (let i = from + 1; i <= to; i++) {
        if (dead.current) return;
        setScore(i);
        await wait(step);
      }
    },
    [wait],
  );

  useEffect(() => {
    dead.current = false;

    const run = async () => {
      while (!dead.current) {
        if (dead.current) return;
        setTyped(0);
        setScore(0);
        setScoreOn(false);
        setHiCount(0);
        setDissolved([false, false, false]);
        setRepLen([0, 0, 0]);
        setHeadline(false);
        setCursor('essay');

        try {
          /* beat 1 — type essay */
          for (let i = 1; i <= FULL.length; i++) {
            if (dead.current) return;
            setTyped(i);
            await wait(TYPE_MS);
          }
          await wait(400);
          setScoreOn(true);
          setScore(62);
          await wait(1000);

          /* beat 2 — highlight weak phrases */
          setCursor(null);
          for (let i = 1; i <= 3; i++) {
            if (dead.current) return;
            setHiCount(i);
            await wait(HIGHLIGHT_GAP);
          }
          await wait(500);

          /* beat 3 — replace each phrase */
          for (let si = 0; si < 3; si++) {
            if (dead.current) return;
            setDissolved((d) => {
              const n = [...d];
              n[si] = true;
              return n;
            });
            await wait(DISSOLVE_MS);
            setCursor(si);
            const rep = SWAPS[si].replacement;
            for (let c = 1; c <= rep.length; c++) {
              if (dead.current) return;
              setRepLen((r) => {
                const n = [...r];
                n[si] = c;
                return n;
              });
              await wait(REPLACE_MS);
            }
            setCursor(null);
            await tickScore(SCORES[si], SCORES[si + 1]);
            await wait(200);
          }

          /* beat 4 — hold */
          await wait(400);
          setHeadline(true);
          await wait(HOLD_MS);
        } catch {
          return;
        }
      }
    };

    run();
    return () => {
      dead.current = true;
    };
  }, [wait, tickScore]);

  /* ── render essay text ────────────────────────────────── */
  const renderEssay = () => {
    let remaining = typed;
    const els: React.ReactNode[] = [];
    let k = 0;

    for (const seg of SEGS) {
      const isSwap = seg.kind === 'swap';
      const si = isSwap ? seg.index : -1;
      const orig = isSwap ? SWAPS[si].original : seg.value;

      /* typing phase — no highlights yet */
      if (hiCount === 0 && !dissolved.some(Boolean)) {
        if (remaining <= 0) break;
        const n = Math.min(orig.length, remaining);
        remaining -= n;
        els.push(<span key={k++}>{orig.substring(0, n)}</span>);
        if (n < orig.length) break;
        continue;
      }

      /* post-typing: segment-aware rendering */
      if (!isSwap) {
        els.push(<span key={k++}>{seg.value}</span>);
        continue;
      }

      const dis = dissolved[si];
      const rl = repLen[si];
      const hi = si < hiCount;

      if (dis && rl > 0) {
        els.push(
          <span key={k++} className="text-gold font-medium">
            {SWAPS[si].replacement.substring(0, rl)}
            {cursor === si && rl < SWAPS[si].replacement.length && (
              <span className="cursor-blink text-gold">|</span>
            )}
          </span>,
        );
      } else if (dis) {
        els.push(
          <span
            key={k++}
            className="transition-opacity duration-300 opacity-0"
          >
            {orig}
          </span>,
        );
      } else if (hi) {
        els.push(
          <span key={k++} className="relative inline">
            <span className="underline decoration-weak/80 decoration-2 underline-offset-4">
              {orig}
            </span>
            <span className="absolute -top-7 left-0 text-[11px] text-weak bg-weak/10 border border-weak/20 px-2 py-0.5 whitespace-nowrap font-medium font-pixel text-[8px]">
              {SWAPS[si].annotation}
            </span>
          </span>,
        );
      } else {
        els.push(<span key={k++}>{orig}</span>);
      }
    }

    return (
      <p className="text-[17px] md:text-lg leading-relaxed text-text/90 font-light tracking-wide">
        {els}
        {cursor === 'essay' && (
          <span className="cursor-blink text-gold ml-0.5">|</span>
        )}
      </p>
    );
  };

  /* ── layout ───────────────────────────────────────────── */
  return (
    <section className="relative min-h-screen bg-bg overflow-hidden pt-20">
      <h1 className="sr-only">
        Admit Max — AI-Powered College Essay Coaching
      </h1>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,83,0.04),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-14 md:py-20">
        {/* Static heading */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5">
            <span className="text-gold text-sm star-spin inline-block mr-2">&#10038;</span>
            Admit <span className="text-gold">Max</span>
            <span className="text-gold text-sm star-spin inline-block ml-2">&#10038;</span>
          </h2>
          <p className="text-text-muted text-lg md:text-xl mb-8 max-w-xl mx-auto leading-relaxed">
            Built by Harvard students. Powered by 100+ real T20 interviews.
          </p>
          <a
            href="#cta"
            className="retro-button inline-block bg-gold hover:bg-gold-hover text-bg px-8 py-4 font-pixel text-[10px] leading-relaxed mb-6"
          >
            Score My Essay — Free
          </a>
          {/* Trust strip */}
          <div className="flex items-center justify-center gap-2 md:gap-3 text-xs text-text-muted flex-wrap font-pixel text-[7px] md:text-[8px]">
            <span>100+ interviews</span>
            <span className="text-gold">&#10022;</span>
            <span>23 T20 schools</span>
            <span className="text-gold">&#10022;</span>
            <span>Built at Harvard</span>
            <span className="text-gold">&#10022;</span>
            <span>Essays never stored</span>
          </div>
        </div>

        {/* Demo panels */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* essay panel — OS window */}
          <div className="w-full lg:w-[62%]">
            <div className="retro-window min-h-[260px]">
              <div className="retro-titlebar">
                <div className="retro-btn retro-btn-close" />
                <div className="retro-btn retro-btn-min" />
                <div className="retro-btn retro-btn-max" />
                <span className="ml-3 text-xs text-text-muted tracking-wide font-pixel text-[8px]">
                  essay_draft_v2.txt
                </span>
              </div>
              <div className="p-6 md:p-10">
                {renderEssay()}
              </div>
            </div>
          </div>

          {/* score card panel — OS window */}
          <div className="w-full lg:w-[38%] flex flex-col items-stretch justify-start lg:pt-0 min-h-[260px]">
            <div
              className={`retro-window transition-all duration-500 ${
                scoreOn
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {/* titlebar */}
              <div className="retro-titlebar">
                <div className="retro-btn retro-btn-close" />
                <div className="retro-btn retro-btn-min" />
                <div className="retro-btn retro-btn-max" />
                <span className="ml-3 font-pixel text-[8px] text-text-muted tracking-wide uppercase">
                  Score Breakdown
                </span>
              </div>

              <div className="p-6 md:p-8">
                {/* score header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-white/[0.06]">
                  <span className="font-pixel text-[8px] text-text-muted tracking-[0.2em] uppercase">Score</span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-4xl md:text-5xl font-bold tabular-nums transition-colors duration-500 ${
                        score >= 80 ? 'text-gold' : 'text-weak'
                      }`}
                    >
                      {score}
                    </span>
                    <span className="text-base text-text-muted font-light">
                      / 100
                    </span>
                  </div>
                </div>

                {/* rubric dimensions */}
                {(() => {
                  const dims = [
                    { label: 'Narrative Voice', base: 12, final: 18, max: 20 },
                    { label: 'Specificity', base: 8, final: 19, max: 20 },
                    { label: 'Authenticity', base: 14, final: 18, max: 20 },
                    { label: 'Insight & Reflection', base: 10, final: 17, max: 20 },
                    { label: 'Structure', base: 18, final: 19, max: 20 },
                  ];
                  const progress = score <= 62 ? 0 : Math.min(1, (score - 62) / (91 - 62));
                  return (
                    <div className="space-y-4">
                      {dims.map((d) => {
                        const val = Math.round(d.base + (d.final - d.base) * progress);
                        const pct = (val / d.max) * 100;
                        const isStrong = pct >= 85;
                        return (
                          <div key={d.label}>
                            <div className="flex justify-between text-sm mb-1.5">
                              <span className="text-text/70 font-light">{d.label}</span>
                              <span className={`tabular-nums font-medium transition-colors duration-300 ${isStrong ? 'text-gold' : 'text-text/50'}`}>
                                {scoreOn ? val : '—'}/{d.max}
                              </span>
                            </div>
                            <div className="h-2.5 bg-white/[0.06] overflow-hidden border border-white/[0.04]">
                              <div
                                className={`h-full transition-all duration-700 ease-out ${isStrong ? 'bg-gold' : 'bg-weak/60'}`}
                                style={{ width: scoreOn ? `${pct}%` : '0%' }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}

                {/* overall label */}
                <div className={`mt-5 pt-4 border-t-2 border-white/[0.06] flex items-center justify-between transition-opacity duration-500 ${score >= 80 ? 'opacity-100' : 'opacity-40'}`}>
                  <span className="font-pixel text-[8px] text-text-muted tracking-wide uppercase">Overall</span>
                  <span className={`text-sm font-semibold transition-colors duration-500 ${
                    score >= 85 ? 'text-gold' : score >= 70 ? 'text-yellow-400' : 'text-weak'
                  }`}>
                    {score >= 85 ? 'Excellent' : score >= 70 ? 'Good' : score >= 50 ? 'Needs Work' : '—'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
