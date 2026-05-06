import { Deck, Slide } from '@/components/Slide';
import DeckHeader from '@/components/DeckHeader';
import Link from 'next/link';
import { Mountain, Sparkles, ArrowRight, Compass, Users, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Cairn — A retirement planner that earns trust',
  description: 'A retirement planning tool that explains itself. Built for the gap between bank dashboards and FIRE spreadsheets.',
};

// Audience D: the "smart friend" overview. One deck that can be sent
// to anyone — users, beta testers, advisors, journalists — to give
// them the picture in 2-3 minutes of scrolling. Branches off to /users
// or /advisors for audience-specific depth.

export default function MainDeck() {
  return (
    <>
      <DeckHeader active="main" />
      <Deck>
        {/* 1. Cover */}
        <Slide tone="ink">
          <div className="text-center">
            <Mountain className="w-12 h-12 text-amber-400 mx-auto mb-6" strokeWidth={1.25} />
            <h1 className="font-serif text-6xl sm:text-8xl text-stone-100 tracking-tight mb-4">Cairn</h1>
            <p className="text-stone-400 text-lg sm:text-xl max-w-xl mx-auto">A retirement plan you can read.</p>
            <p className="text-stone-500 text-sm mt-12">↓ scroll</p>
          </div>
        </Slide>

        {/* 2. The problem */}
        <Slide tone="ink">
          <div>
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">The problem</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-6 leading-tight">
              Every retirement tool is built for someone else.
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 mt-12 text-stone-300">
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wider mb-2">Bank dashboards</p>
                <p className="text-base">Built to upsell you to advisors. Your data is the product.</p>
              </div>
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wider mb-2">FIRE spreadsheets</p>
                <p className="text-base">Powerful, but you spend Saturday afternoons learning them.</p>
              </div>
              <div>
                <p className="text-stone-500 text-xs uppercase tracking-wider mb-2">Advisor tools</p>
                <p className="text-base">$400/hr means you visit annually and forget the rest.</p>
              </div>
            </div>
            <p className="text-stone-200 text-xl mt-12 max-w-2xl">
              The middle is empty. People who want a real plan, on their own time, without becoming a spreadsheet jockey.
            </p>
          </div>
        </Slide>

        {/* 3. The thesis */}
        <Slide tone="accent">
          <div className="text-center">
            <p className="text-amber-300 text-sm uppercase tracking-[0.2em] mb-6">Cairn</p>
            <h2 className="font-serif text-4xl sm:text-6xl text-stone-100 mb-8 leading-tight">
              A retirement plan<br/>that explains itself.
            </h2>
            <p className="text-stone-300 text-lg max-w-2xl mx-auto">
              Real tax-aware projections. Plain-English insights. Sliders you drag and a chart that re-animates while you watch. Click any number to see exactly how it was computed.
            </p>
          </div>
        </Slide>

        {/* 4. Three magic moments */}
        <Slide tone="ink" align="top">
          <div>
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">What&apos;s different</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-10">Three things competitors don&apos;t do.</h2>
            <div className="space-y-8">
              <Magic num="01" title="AI Insights, on the dashboard." body="Plain-English read on where you stand. 'Your plan runs out at 87 because your withdrawal rate is 1.2% over safe. Delaying SS to 70 adds 6 years.' The kind of analysis a $400/hr advisor would do — instant, on every login." />
              <Magic num="02" title="Live what-if sliders." body="Drag retirement age 62↔70. The projection chart re-animates in real time. Boldin makes you save scenarios and compare them. We show the answer as fast as you can ask the question." />
              <Magic num="03" title="Show the math." body="Click any number on the dashboard. A drilldown opens with the exact formula and the inputs. Every figure is auditable. No black box." />
            </div>
          </div>
        </Slide>

        {/* 5. The moat */}
        <Slide tone="ink">
          <div>
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">The moat</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-6">Two things that aren&apos;t a feature war.</h2>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mb-10">
              Tax math, withdrawal modeling, scenario planning — those are at parity with Boldin and ProjectionLab. Where Cairn pulls away:
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="border border-stone-800 rounded-lg p-6">
                <Sparkles className="w-6 h-6 text-amber-400 mb-3" />
                <h3 className="font-serif text-2xl text-stone-100 mb-2">AI as the front door</h3>
                <p className="text-stone-400 text-sm">No competitor does this. The user&apos;s first impression every login is a personalized read on their plan, ranked by impact.</p>
              </div>
              <div className="border border-stone-800 rounded-lg p-6">
                <Compass className="w-6 h-6 text-amber-400 mb-3" />
                <h3 className="font-serif text-2xl text-stone-100 mb-2">Editorial design</h3>
                <p className="text-stone-400 text-sm">Every other tool looks like 1998 financial software. Cairn reads like a magazine. People stay longer in software they enjoy looking at.</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* 6. Two sides */}
        <Slide tone="ink">
          <div>
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">Two audiences</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-10">One product. Two checks.</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link href="/users" className="block border border-stone-800 hover:border-amber-500 rounded-lg p-7 transition-colors group">
                <Users className="w-7 h-7 text-amber-400 mb-3" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-stone-100 mb-2">For users</h3>
                <p className="text-stone-400 text-sm mb-4">$4.99/mo · $39/yr · $99 founding-member lifetime. The bulk of the revenue.</p>
                <span className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium group-hover:gap-2 transition-all">
                  See the user pitch <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/advisors" className="block border border-stone-800 hover:border-amber-500 rounded-lg p-7 transition-colors group">
                <Briefcase className="w-7 h-7 text-amber-400 mb-3" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-stone-100 mb-2">For CFPs &amp; CPAs</h3>
                <p className="text-stone-400 text-sm mb-4">Pay to be recommended in our advisor directory. The high-margin layer.</p>
                <span className="inline-flex items-center gap-1 text-amber-400 text-sm font-medium group-hover:gap-2 transition-all">
                  See the advisor pitch <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </Slide>

        {/* 7. Numbers */}
        <Slide tone="ink">
          <div>
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">The math</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-10">Realistic, not aspirational.</h2>
            <div className="grid sm:grid-cols-3 gap-8 text-stone-100">
              <Stat n="100K-500K" label="US retirement-tool buyers" sub="Realistic TAM. Boldin has ~50K paying users; ProjectionLab ~10K." />
              <Stat n="1-5K" label="Year-1 paying target" sub="$60-300K ARR — a real indie SaaS." />
              <Stat n="4,300" label="Salary replacement" sub="$14K/mo at $39/yr × 4,300 active subs. 18-24 month horizon." />
            </div>
          </div>
        </Slide>

        {/* 8. Status */}
        <Slide tone="paper">
          <div>
            <p className="text-amber-700 text-sm uppercase tracking-[0.2em] mb-4">Status</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-8">Built. Not yet shipped.</h2>
            <ul className="space-y-3 text-stone-700 text-base sm:text-lg">
              <li className="flex items-start gap-3"><Check />Foundation: schema versioning, IndexedDB durability, Firestore isolation, golden-test suite for tax + withdrawal math (213/213).</li>
              <li className="flex items-start gap-3"><Check />Magic moments: 5-min onboarding, AI Insights, live sliders, Monte Carlo bands, &ldquo;show the math&rdquo; everywhere.</li>
              <li className="flex items-start gap-3"><Check />Imports: AI-assisted CSV mapping for any vendor, batch transaction categorizer, undo within 30 days.</li>
              <li className="flex items-start gap-3"><Check />Productization: Stripe + Square billing both wired, paywall component, account deletion, ToS / Privacy / Refund pages, support widget.</li>
              <li className="flex items-start gap-3"><Check />Marketing: SEO calculators (when-can-I-retire, Roth conversion), blog skeleton, OG cards.</li>
              <li className="flex items-start gap-3 text-stone-500"><span className="text-stone-400 mt-1">○</span>Pending public launch: domain + landing page polish + paywall flip + advisor marketplace UI.</li>
            </ul>
          </div>
        </Slide>

        {/* 9. Closing */}
        <Slide tone="gradient">
          <div className="text-center">
            <Mountain className="w-12 h-12 text-amber-400 mx-auto mb-6" strokeWidth={1.25} />
            <h2 className="font-serif text-4xl sm:text-6xl text-stone-100 mb-6 leading-tight">
              Cairns mark the path.<br/>So should your plan.
            </h2>
            <p className="text-stone-300 text-lg max-w-xl mx-auto mb-10">Built so you don&apos;t guess your way to retirement.</p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Link href="/users" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-stone-950 rounded-full font-medium hover:bg-amber-400 transition-colors">
                For users <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/advisors" className="inline-flex items-center gap-2 px-6 py-3 border border-stone-700 text-stone-100 rounded-full font-medium hover:bg-stone-800 transition-colors">
                For advisors <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-stone-500 text-xs mt-12">↑ ↓ to navigate</p>
          </div>
        </Slide>
      </Deck>
    </>
  );
}

function Magic({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="border-l-2 border-amber-500 pl-6">
      <p className="text-amber-400 text-xs tabular tracking-wider mb-1">{num}</p>
      <h3 className="font-serif text-2xl sm:text-3xl text-stone-100 mb-2">{title}</h3>
      <p className="text-stone-400 text-base">{body}</p>
    </div>
  );
}

function Stat({ n, label, sub }: { n: string; label: string; sub: string }) {
  return (
    <div>
      <p className="font-serif text-3xl sm:text-4xl text-amber-400 tabular">{n}</p>
      <p className="text-stone-100 text-base font-medium mt-1">{label}</p>
      <p className="text-stone-500 text-sm mt-1">{sub}</p>
    </div>
  );
}

function Check() {
  return <span className="text-emerald-700 mt-1 font-bold">✓</span>;
}
