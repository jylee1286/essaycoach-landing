'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-text tracking-tight">
          Admit<span className="text-accent">Max</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#how-it-works" className="hover:text-text transition-colors">How It Works</a>
          <a href="#schools" className="hover:text-text transition-colors">Schools</a>
          <a href="#pricing" className="hover:text-text transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-text transition-colors">FAQ</a>
        </div>
        <a
          href="#waitlist"
          className="bg-accent text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}
