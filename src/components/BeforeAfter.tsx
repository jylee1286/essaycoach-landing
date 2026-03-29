'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'motion/react';

const BEFORE = [
  { text: 'I have ', type: 'plain' as const },
  { text: 'always been passionate about helping others', type: 'weak' as const },
  { text: '. ', type: 'plain' as const },
  { text: 'Ever since I was young, I knew I wanted to make a difference in the world', type: 'weak' as const },
  { text: '. My volunteer experience at the local food bank ', type: 'plain' as const },
  { text: 'taught me the value of community service', type: 'weak' as const },
  { text: '.', type: 'plain' as const },
];

const AFTER = [
  { text: 'I have ', type: 'plain' as const },
  { text: "carried my grandmother's oxygen tank up three flights every Sunday", type: 'strong' as const },
  { text: '. ', type: 'plain' as const },
  { text: 'The first time I saw her smile at the top of those stairs', type: 'strong' as const },
  { text: '. My volunteer experience at the local food bank ', type: 'plain' as const },
  { text: 'I understood that showing up is the essay, not the thesis', type: 'strong' as const },
  { text: '.', type: 'plain' as const },
];

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const update = useCallback((x: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    setPos(Math.max(20, Math.min(80, ((x - left) / width) * 100)));
  }, []);

  const startDrag = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      const onMove = (ev: PointerEvent) => update(ev.clientX);
      const onUp = () => {
        document.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerup', onUp);
      };
      document.addEventListener('pointermove', onMove);
      document.addEventListener('pointerup', onUp);
    },
    [update],
  );

  return (
    <section className="py-24 md:py-32 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          See the Difference
        </motion.h2>
        <motion.p
          className="text-text-muted text-center mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Drag the slider to compare before and after.
        </motion.p>

        <motion.div
          ref={containerRef}
          className="relative bg-bg-alt border border-white/[0.06] rounded-2xl overflow-hidden select-none touch-none"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex" style={{ minHeight: 300 }}>
            {/* Before */}
            <div
              className="overflow-hidden flex-shrink-0"
              style={{ width: `${pos}%` }}
            >
              <div className="p-6 md:p-8" style={{ minWidth: 340 }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-weak">
                    Before
                  </span>
                  <span className="text-sm font-bold text-weak">62 / 100</span>
                </div>
                <p className="text-sm leading-relaxed text-text/70">
                  {BEFORE.map((s, i) =>
                    s.type === 'weak' ? (
                      <span
                        key={i}
                        className="underline decoration-weak/50 decoration-2 underline-offset-2 bg-weak/5 text-text/60"
                      >
                        {s.text}
                      </span>
                    ) : (
                      <span key={i}>{s.text}</span>
                    ),
                  )}
                </p>
              </div>
            </div>

            {/* Slider */}
            <div
              className="w-0.5 bg-gold/60 relative z-10 flex-shrink-0 cursor-col-resize"
              onPointerDown={startDrag}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-lg shadow-black/30">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M3 2L0.5 6L3 10"
                    stroke="#0D1117"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 2L11.5 6L9 10"
                    stroke="#0D1117"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* After */}
            <div className="overflow-hidden flex-1">
              <div className="p-6 md:p-8" style={{ minWidth: 340 }}>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                    After
                  </span>
                  <span className="text-sm font-bold text-gold">91 / 100</span>
                </div>
                <p className="text-sm leading-relaxed text-text/70">
                  {AFTER.map((s, i) =>
                    s.type === 'strong' ? (
                      <span key={i} className="text-gold bg-gold/5">
                        {s.text}
                      </span>
                    ) : (
                      <span key={i}>{s.text}</span>
                    ),
                  )}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
