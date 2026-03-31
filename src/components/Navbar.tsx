'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b-2 border-gold/20'
          : 'border-b-2 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="text-gold star-spin text-xs">&#10022;</span>
          Admit&nbsp;<span className="text-gold">Max</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <a
            href="#how-it-works"
            className="font-pixel text-[9px] text-text-muted hover:text-gold hover:bg-white/[0.03] px-3 py-2 transition-colors border-r border-white/[0.06]"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="font-pixel text-[9px] text-text-muted hover:text-gold hover:bg-white/[0.03] px-3 py-2 transition-colors border-r border-white/[0.06]"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="font-pixel text-[9px] text-text-muted hover:text-gold hover:bg-white/[0.03] px-3 py-2 transition-colors border-r border-white/[0.06]"
          >
            FAQ
          </a>
          <a
            href="#cta"
            className="retro-button bg-gold hover:bg-gold-hover text-bg font-pixel text-[9px] px-4 py-2 ml-2"
          >
            Score My Essay
          </a>
        </div>

        <button className="md:hidden text-text" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-t-2 border-gold/20 px-6 py-5 flex flex-col gap-4">
          <a href="#how-it-works" onClick={() => setOpen(false)} className="font-pixel text-[9px] text-text-muted hover:text-gold transition-colors">
            How It Works
          </a>
          <a href="#pricing" onClick={() => setOpen(false)} className="font-pixel text-[9px] text-text-muted hover:text-gold transition-colors">
            Pricing
          </a>
          <a href="#faq" onClick={() => setOpen(false)} className="font-pixel text-[9px] text-text-muted hover:text-gold transition-colors">
            FAQ
          </a>
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="retro-button bg-gold text-bg font-pixel text-[9px] px-5 py-2.5 text-center"
          >
            Score My Essay
          </a>
        </div>
      )}
    </nav>
  );
}
