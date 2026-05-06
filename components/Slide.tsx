'use client';

import { useEffect, useRef, useState } from 'react';

// Slide framework. Each Slide is a full-viewport section with snap-scroll
// behavior so the deck reads like Keynote in the browser. Arrow keys
// + space + Page Up/Down navigate slide-to-slide.

export interface SlideProps {
  children: React.ReactNode;
  // Background tone — 'ink' (deep) is the default; 'accent' uses a tinted
  // backdrop for emphasis slides; 'paper' is a lighter break.
  tone?: 'ink' | 'accent' | 'paper' | 'gradient';
  // Vertical alignment within the slide — defaults to center.
  align?: 'center' | 'top';
}

export function Slide({ children, tone = 'ink', align = 'center' }: SlideProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // Reveal-on-scroll: each slide fades + slides in when it enters the
  // viewport. Subtle but adds the 'deck advance' feel.
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const bg = {
    ink: 'bg-[#0d0c0a]',
    accent: 'bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950',
    paper: 'bg-[#f1ede4] text-[#0d0c0a]',
    gradient: 'bg-gradient-to-br from-purple-950 via-stone-950 to-amber-950',
  }[tone];

  return (
    <section
      ref={ref}
      className={`snap-start min-h-screen w-full flex ${align === 'top' ? 'items-start pt-20' : 'items-center'} justify-center px-6 sm:px-10 ${bg} transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-40'}`}
    >
      <div
        className={`w-full max-w-5xl transition-all duration-700 ${visible ? 'translate-y-0' : 'translate-y-6'}`}
      >
        {children}
      </div>
    </section>
  );
}

// Use as Deck root — sets up the snap-scroll container + keyboard nav.
export function Deck({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Don't hijack typing in inputs.
      const tag = (e.target as HTMLElement | null)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea') return;

      const sections = Array.from(document.querySelectorAll('section.snap-start'));
      if (sections.length === 0) return;
      const scrollY = window.scrollY + window.innerHeight / 2;
      const currentIdx = sections.findIndex(s => {
        const r = (s as HTMLElement).getBoundingClientRect();
        const top = r.top + window.scrollY;
        return scrollY >= top && scrollY < top + r.height;
      });

      let nextIdx: number | null = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        nextIdx = Math.min(currentIdx + 1, sections.length - 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        nextIdx = Math.max(currentIdx - 1, 0);
      } else if (e.key === 'Home') {
        nextIdx = 0;
      } else if (e.key === 'End') {
        nextIdx = sections.length - 1;
      }

      if (nextIdx !== null && nextIdx !== currentIdx) {
        e.preventDefault();
        sections[nextIdx].scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <main
      className="snap-y snap-mandatory h-screen overflow-y-scroll"
      style={{ scrollbarWidth: 'thin' }}
    >
      {children}
    </main>
  );
}
