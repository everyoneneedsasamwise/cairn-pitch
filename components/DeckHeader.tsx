'use client';

import Link from 'next/link';
import { Mountain } from 'lucide-react';

// Persistent header on every deck — wordmark + variant nav. Lets a
// reader on the user deck jump to the advisor deck and vice versa.

export default function DeckHeader({ active }: { active: 'main' | 'users' | 'advisors' }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0c0a]/80 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Mountain className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
          <span className="font-serif text-lg tracking-tight text-stone-100 group-hover:text-amber-400 transition-colors">Cairn</span>
        </Link>
        <nav className="flex items-center gap-1 text-xs sm:text-sm">
          <NavLink href="/" label="Overview" active={active === 'main'} />
          <NavLink href="/users" label="For Users" active={active === 'users'} />
          <NavLink href="/advisors" label="For Advisors" active={active === 'advisors'} />
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3 py-1.5 rounded-full transition-colors ${
        active
          ? 'bg-amber-500 text-stone-950 font-medium'
          : 'text-stone-400 hover:text-stone-100'
      }`}
    >
      {label}
    </Link>
  );
}
