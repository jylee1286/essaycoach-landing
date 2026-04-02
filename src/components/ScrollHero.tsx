'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

/* ── Essay text ── */
const ESSAY_SENTENCES = [
  "I have always been passionate about helping others and making a difference in my community.",
  "Growing up in a small town taught me the value of hard work and perseverance.",
  "When I volunteered at the local food bank, I learned a lot from this experience.",
  "The connections I made with people from different backgrounds opened my eyes to new perspectives.",
  "I believe that my unique combination of experiences has prepared me to thrive in college.",
  "Through my leadership roles, I developed skills that will help me contribute to campus life.",
  "My journey has not been easy, but it has shaped who I am today.",
  "I am excited to bring my passion for learning to your university and continue growing as a person.",
];

const SENTENCE_TAGS: Record<number, { label: string; color: 'green' | 'yellow' | 'red' }> = {
  0: { label: 'Generic phrasing', color: 'red' },
  1: { label: 'Lacks specificity', color: 'yellow' },
  2: { label: 'Vague reflection', color: 'red' },
  3: { label: 'Strong personal insight', color: 'green' },
  4: { label: 'Cliché opener', color: 'red' },
  5: { label: 'Tell, don\'t show', color: 'yellow' },
  6: { label: 'Strong narrative arc', color: 'green' },
  7: { label: 'Generic closer', color: 'yellow' },
};

const RUBRIC_METRICS = [
  { label: 'Authenticity', value: 42, max: 100 },
  { label: 'Intellectual Vitality', value: 58, max: 100 },
  { label: 'Narrative Clarity', value: 35, max: 100 },
  { label: 'Specificity', value: 28, max: 100 },
];

const INSIGHT_CARDS = [
  'Top 10% of essays include specific turning points',
  '83% of successful admits avoid "passion" in opening line',
  'Stanford values intellectual curiosity over achievements',
  'Essays with sensory details score 2x higher on authenticity',
];

const PROFILE_INTERESTS = ['Environmental Science', 'Debate', 'Community Organizing'];
const PROFILE_EXPERIENCES = ['Food Bank Volunteer Lead', 'Student Council VP', 'Research Intern'];
const PROFILE_VALUES = ['Social Justice', 'Intellectual Growth', 'Collaboration'];
const ANGLE_CARDS = [
  { title: 'Intellectual curiosity through community research', fit: 'Strong fit for Stanford + MIT' },
  { title: 'Leadership through grassroots organizing', fit: 'Strong fit for Harvard + Yale' },
  { title: 'Bridge between science and social impact', fit: 'Strong fit for Princeton + Columbia' },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const total = containerRef.current.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / total)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { containerRef, progress };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function sceneProgress(progress: number, start: number, end: number) {
  if (progress < start) return 0;
  if (progress > end) return 1;
  return (progress - start) / (end - start);
}

export default function ScrollHero() {
  const { containerRef, progress } = useScrollProgress();

  // Scene boundaries
  const s1 = sceneProgress(progress, 0, 0.15);
  const s2 = sceneProgress(progress, 0.15, 0.25);
  const s3 = sceneProgress(progress, 0.25, 0.50);
  const s4 = sceneProgress(progress, 0.50, 0.65);
  const s45 = sceneProgress(progress, 0.65, 0.72);
  const s5 = sceneProgress(progress, 0.72, 0.85);
  const s6 = sceneProgress(progress, 0.85, 0.95);
  const s7 = sceneProgress(progress, 0.95, 1.0);

  // Scene 3: which sentences are revealed
  const sentencesRevealed = Math.floor(s3 * ESSAY_SENTENCES.length);
  
  // Scene 5: heatmap colors
  const heatmapColors = ['red', 'yellow', 'red', 'green', 'red', 'yellow', 'green', 'yellow'];

  // Background color transitions
  const bgLightness = progress < 0.15 ? lerp(100, 96, s1) : 
                      progress < 0.72 ? 96 : 
                      progress < 0.85 ? lerp(96, 98, s5) : 98;

  // Side panel width
  const sidePanelWidth = progress >= 0.25 ? lerp(0, 320, Math.min(s3 * 2, 1)) : 0;
  const sidePanelOpacity = progress >= 0.25 ? Math.min(s3 * 3, 1) : 0;

  // Scene 4: zoom
  const zoom = progress >= 0.50 ? lerp(1, 1.08, s4) : 1;

  // Scene 4.5/5/6/7: overlay content opacity
  const ethicalOpacity = s45;
  const dataOpacity = s5;
  const profileOpacity = s6;
  const ctaOpacity = s7;

  // Essay container opacity
  const essayOpacity = progress >= 0.72 ? lerp(1, 0.3, s5) :
                       progress >= 0.85 ? 0.3 : 1;

  return (
    <div ref={containerRef} className="scroll-hero" style={{ height: '700vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
           style={{ background: `hsl(45, 10%, ${bgLightness}%)` }}>
        
        {/* Main content container */}
        <div className="relative w-full max-w-5xl mx-auto px-6 flex gap-6" style={{ paddingTop: '4rem' }}>
          
          {/* Essay editor */}
          <div
            className="flex-1 transition-all duration-300"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'center center',
              opacity: essayOpacity,
            }}
          >
            {/* Editor chrome */}
            <div className={`bg-white rounded-xl shadow-lg border transition-all duration-500 ${
              progress >= 0.15 ? 'border-accent/30 glow-pulse' : 'border-gray-200'
            }`}>
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-muted ml-2 font-medium">Common Application — Personal Essay</span>
                {/* Scene 2: Analysis label */}
                {progress >= 0.15 && (
                  <span
                    className="ml-auto text-xs font-semibold text-accent bg-accent-light px-3 py-1 rounded-full transition-all duration-500"
                    style={{ opacity: Math.min(s2 * 3, 1) }}
                  >
                    Admit Max Analysis
                  </span>
                )}
              </div>

              {/* Essay body */}
              <div className="p-6 md:p-8 essay-editor relative">
                {ESSAY_SENTENCES.map((sentence, i) => {
                  const isRevealed = progress >= 0.25 && i < sentencesRevealed;
                  const tag = SENTENCE_TAGS[i];
                  const isHighlighted = progress >= 0.50 && progress < 0.72 && i === 2; // "I learned a lot"
                  
                  // Heatmap coloring (Scene 5)
                  const heatmapActive = progress >= 0.72 && s5 > 0;
                  const hColor = heatmapColors[i];
                  const heatmapBg = heatmapActive
                    ? hColor === 'green' ? 'rgba(22,163,74,0.12)' 
                    : hColor === 'red' ? 'rgba(220,38,38,0.12)'
                    : 'rgba(202,138,4,0.10)'
                    : 'transparent';

                  return (
                    <span key={i} className="relative inline">
                      <span
                        className={`transition-all duration-500 ${
                          isHighlighted ? 'bg-red-100 underline decoration-red-400 decoration-2' : ''
                        }`}
                        style={{
                          backgroundColor: isHighlighted ? undefined : heatmapBg,
                          transition: 'background-color 0.6s ease',
                        }}
                      >
                        {sentence}
                      </span>
                      {/* Tag */}
                      {isRevealed && tag && (
                        <span
                          className={`inline-block ml-2 text-xs font-medium px-2 py-0.5 rounded-full transition-all duration-300 ${
                            tag.color === 'green' ? 'bg-green-light text-green' :
                            tag.color === 'red' ? 'bg-red-light text-red' :
                            'bg-yellow-light text-yellow'
                          }`}
                          style={{
                            opacity: Math.min((sentencesRevealed - i) * 0.5, 1),
                            transform: `translateY(${Math.max(0, 4 - (sentencesRevealed - i) * 2)}px)`,
                          }}
                        >
                          {tag.label}
                        </span>
                      )}
                      {' '}
                    </span>
                  );
                })}

                {/* Blinking cursor (Scene 1 only) */}
                {progress < 0.15 && (
                  <span className="cursor-blink text-accent font-light">|</span>
                )}
              </div>

              {/* Ethical badge (Scene 3) */}
              {progress >= 0.25 && progress < 0.72 && (
                <div className="px-6 pb-4" style={{ opacity: Math.min(s3 * 4, 1) }}>
                  <span className="text-xs text-green font-medium">
                    🔒 Original voice preserved
                  </span>
                </div>
              )}
            </div>

            {/* Scene 4: Comment bubble */}
            {progress >= 0.50 && progress < 0.72 && (
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-xl shadow-xl border border-accent/20 p-4 max-w-[280px] transition-all duration-500"
                style={{
                  opacity: Math.min(s4 * 3, 1),
                  transform: `translateX(${lerp(40, 16, s4)}px) translateY(-50%)`,
                }}
              >
                <div className="text-xs text-accent font-semibold mb-1">Admit Max</div>
                <p className="text-sm text-text leading-relaxed">
                  &ldquo;This is vague — what specifically changed in you? Show the moment, don&rsquo;t summarize it.&rdquo;
                </p>
                <div className="w-3 h-3 bg-white border-l border-b border-accent/20 rotate-45 absolute left-0 top-1/2 -translate-x-1.5 -translate-y-1/2" />
              </div>
            )}
          </div>

          {/* Side panel (Scene 3) */}
          <div
            className="hidden md:block shrink-0 transition-all duration-500"
            style={{
              width: sidePanelWidth,
              opacity: sidePanelOpacity,
              overflow: 'hidden',
            }}
          >
            {progress >= 0.25 && progress < 0.72 && (
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 sticky top-24">
                <h3 className="text-sm font-bold text-text mb-1">Stanford Supplemental Rubric</h3>
                <p className="text-xs text-muted mb-4">Based on successful admits</p>
                {RUBRIC_METRICS.map((metric, i) => {
                  const animatedValue = Math.min(s3 * 2, 1) * metric.value;
                  const barColor = metric.value > 50 ? 'bg-green' : metric.value > 35 ? 'bg-yellow' : 'bg-red';
                  return (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted">{metric.label}</span>
                        <span className="font-semibold text-text">{Math.round(animatedValue)}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${barColor}`}
                          style={{ width: `${animatedValue}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Scene 1: Intro text */}
        {progress < 0.15 && (
          <div className="absolute bottom-20 left-0 right-0 text-center px-6">
            <p className="text-lg md:text-xl text-muted max-w-md mx-auto leading-relaxed"
               style={{ opacity: lerp(0, 1, s1 * 3) }}>
              {s1 < 0.5
                ? 'Every year, millions of essays are written…'
                : '…but no one tells you what actually works.'}
            </p>
          </div>
        )}

        {/* Scene 4 text */}
        {progress >= 0.50 && progress < 0.65 && (
          <div className="absolute bottom-16 left-0 right-0 text-center px-6">
            <p className="text-lg font-medium text-text" style={{ opacity: Math.min(s4 * 4, 1) }}>
              {s4 < 0.5
                ? "We don't rewrite your story."
                : 'We show you how to make it stronger.'}
            </p>
          </div>
        )}

        {/* Scene 4.5: Ethical AI overlay */}
        {progress >= 0.65 && progress < 0.72 && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-10"
               style={{ opacity: ethicalOpacity }}>
            <div className="text-center max-w-lg px-6">
              <p className="text-2xl md:text-3xl font-semibold text-text mb-3 leading-tight">
                {s45 < 0.5
                  ? "This isn't AI writing your essay."
                  : "It's helping you think like an admissions officer."}
              </p>
              <p className="text-muted text-lg">Every word is still yours.</p>
            </div>
          </div>
        )}

        {/* Scene 5: Data moat overlay */}
        {progress >= 0.72 && progress < 0.85 && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="text-center max-w-2xl px-6">
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4"
                 style={{ opacity: Math.min(s5 * 3, 1) }}>
                Powered by thousands of successful admits
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {INSIGHT_CARDS.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur rounded-lg p-4 shadow-md border border-gray-100 text-left pointer-events-auto"
                    style={{
                      opacity: Math.max(0, Math.min(1, (s5 - i * 0.15) * 4)),
                      transform: `translateY(${Math.max(0, (1 - Math.min(1, (s5 - i * 0.15) * 4)) * 20)}px)`,
                      transition: 'all 0.5s ease-out',
                    }}
                  >
                    <p className="text-sm text-text leading-relaxed">{card}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scene 6: Personalization */}
        {progress >= 0.85 && progress < 0.95 && (
          <div className="absolute inset-0 flex items-center justify-center z-10"
               style={{ opacity: profileOpacity }}>
            <div className="max-w-2xl w-full px-6">
              <p className="text-sm text-accent font-semibold uppercase tracking-widest mb-6 text-center">
                Based on your story…
              </p>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mb-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-muted uppercase tracking-wide mb-2">Interests</h4>
                    {PROFILE_INTERESTS.map((item, i) => (
                      <span key={i} className="inline-block bg-accent-light text-accent text-xs font-medium px-2 py-1 rounded mr-1 mb-1">{item}</span>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-muted uppercase tracking-wide mb-2">Experiences</h4>
                    {PROFILE_EXPERIENCES.map((item, i) => (
                      <span key={i} className="inline-block bg-green-light text-green text-xs font-medium px-2 py-1 rounded mr-1 mb-1">{item}</span>
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-muted uppercase tracking-wide mb-2">Values</h4>
                    {PROFILE_VALUES.map((item, i) => (
                      <span key={i} className="inline-block bg-yellow-light text-yellow text-xs font-medium px-2 py-1 rounded mr-1 mb-1">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {ANGLE_CARDS.map((card, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-xl shadow-md border p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer ${
                      i === 0 ? 'border-accent/30 ring-2 ring-accent/10' : 'border-gray-100'
                    }`}
                    style={{
                      opacity: Math.max(0, Math.min(1, (s6 - i * 0.1) * 4)),
                      transform: `translateY(${Math.max(0, (1 - Math.min(1, (s6 - i * 0.1) * 4)) * 16)}px)`,
                    }}
                  >
                    <p className="text-sm font-medium text-text mb-2">{card.title}</p>
                    <p className="text-xs text-accent font-semibold">{card.fit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Scene 7: Final CTA */}
        {progress >= 0.95 && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-bg/90 backdrop-blur-sm"
               style={{ opacity: ctaOpacity }}>
            <div className="text-center max-w-lg px-6">
              <p className="text-3xl md:text-4xl font-bold text-text mb-3 leading-tight">
                All the advantage.<br />None of the shortcuts.
              </p>
              <p className="text-lg text-muted mb-8">
                Powerful guidance. Completely your own work.
              </p>
              <a
                href="#waitlist"
                className="inline-block bg-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-accent/90 transition-all hover:scale-[1.03] cta-pulse"
              >
                Try Admit Max →
              </a>
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        {progress < 0.05 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/50">
            <span className="text-xs">Scroll to explore</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
