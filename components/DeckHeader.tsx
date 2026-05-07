'use client';

import Link from 'next/link';
import { Mountain, ArrowUpRight } from 'lucide-react';

// Persistent header on every deck — wordmark + variant nav + a
// "Sign in" entry point to the actual planner app. The pitch deck
// lives on cairnfund.com (marketing surface), the live app lives at
// retirement-planner-rho.vercel.app for now (will move under
// app.cairnfund.com once the auth flow is ready).

const APP_URL = 'https://retirement-planner-rho.vercel.app';

export default function DeckHeader({ active }: { active: 'main' | 'users' | 'advisors' }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0c0a]/80 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <Mountain className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
          <span className="font-serif text-lg tracking-tight text-stone-100 group-hover:text-amber-400 transition-colors">Cairn</span>
        </Link>
        <nav className="flex items-center gap-1 text-xs sm:text-sm">
          <NavLink href="/" label="Overview" active={active === 'main'} />
          <NavLink href="/users" label="For Users" active={active === 'users'} />
          <NavLink href="/advisors" label="For Advisors" active={active === 'advisors'} />
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 sm:ml-2 inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-amber-500/40 text-amber-300 hover:bg-amber-500 hover:text-stone-950 transition-colors"
          >
            Sign in
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
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
