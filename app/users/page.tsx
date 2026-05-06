import { Deck, Slide } from '@/components/Slide';
import DeckHeader from '@/components/DeckHeader';
import { ArrowRight, Sparkles, MousePointerClick, Calculator, Lock, Shield, FileDown, Check } from 'lucide-react';

export const metadata = {
  title: 'Cairn for users — A retirement plan you can read',
  description: 'For people who want a real retirement plan without the spreadsheet learning curve.',
};

// Audience A: potential paying users — friends-and-family, beta testers,
// anyone who'd subscribe. Long-form-landing-page flavored deck. Heavy
// on the magic-moment demo, light on business positioning.

export default function UsersDeck() {
  return (
    <>
      <DeckHeader active="users" />
      <Deck>
        {/* 1. Cover */}
        <Slide tone="ink">
          <div className="text-center">
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">For users</p>
            <h1 className="font-serif text-5xl sm:text-7xl text-stone-100 tracking-tight mb-4 leading-tight">
              The fastest way<br/>to know you&apos;ll be OK.
            </h1>
            <p className="text-stone-400 text-lg sm:text-xl max-w-xl mx-auto mt-6">
              Cairn turns five questions into a real retirement plan. In about five minutes.
            </p>
            <p className="text-stone-500 text-sm mt-12">↓ scroll</p>
          </div>
        </Slide>

        {/* 2. The 5-minute promise */}
        <Slide tone="ink">
          <div>
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">Step one</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-10 leading-tight">Five questions. Five minutes.</h2>
            <ol className="space-y-3 text-stone-200 text-base sm:text-lg max-w-xl">
              <li className="flex gap-4"><span className="text-amber-400 font-serif text-2xl tabular">1</span><span>How old are you?</span></li>
              <li className="flex gap-4"><span className="text-amber-400 font-serif text-2xl tabular">2</span><span>When do you want to retire?</span></li>
              <li className="flex gap-4"><span className="text-amber-400 font-serif text-2xl tabular">3</span><span>What do you earn?</span></li>
              <li className="flex gap-4"><span className="text-amber-400 font-serif text-2xl tabular">4</span><span>How much have you saved?</span></li>
              <li className="flex gap-4"><span className="text-amber-400 font-serif text-2xl tabular">5</span><span>How are you invested?</span></li>
            </ol>
            <p className="text-stone-300 text-base sm:text-lg mt-10 max-w-xl">
              You see a real projection at minute 5. Add detail later if you want sharper numbers.
            </p>
          </div>
        </Slide>

        {/* 3. AI Insights demo */}
        <Slide tone="accent">
          <div>
            <Sparkles className="w-8 h-8 text-amber-300 mb-5" />
            <p className="text-amber-300 text-sm uppercase tracking-[0.2em] mb-4">Magic moment 1</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-6 leading-tight">
              An AI advisor on every dashboard.
            </h2>
            <div className="bg-stone-950/60 border border-stone-700 rounded-xl p-6 mt-6 max-w-2xl">
              <p className="text-amber-300 text-xs uppercase tracking-wider mb-2">AI Insights · sample</p>
              <p className="text-stone-100 text-lg italic leading-relaxed">
                &ldquo;Your plan runs out at 87 because your withdrawal rate is 1.2% over safe. The single biggest fix: delay Social Security to 70 — that adds 6 years of runway.&rdquo;
              </p>
            </div>
            <p className="text-stone-300 text-base mt-6 max-w-2xl">
              The kind of analysis a $400/hour advisor would do — instant, every login, based on <em>your</em> numbers. Not a generic article.
            </p>
          </div>
        </Slide>

        {/* 4. Live sliders */}
        <Slide tone="ink">
          <div>
            <MousePointerClick className="w-8 h-8 text-amber-400 mb-5" />
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">Magic moment 2</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-6 leading-tight">
              Drag a slider. Watch the future move.
            </h2>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mb-6">
              &ldquo;What if I retired two years earlier?&rdquo; &ldquo;What if I saved an extra $500/month?&rdquo; &ldquo;What if returns disappoint?&rdquo;
            </p>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl">
              Drag the slider. The projection chart re-animates in real time. Other tools make you save scenarios and compare them later. Cairn shows you the answer as fast as you can ask the question.
            </p>
          </div>
        </Slide>

        {/* 5. Show the math */}
        <Slide tone="ink">
          <div>
            <Calculator className="w-8 h-8 text-amber-400 mb-5" />
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">Magic moment 3</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-6 leading-tight">
              No black box. Click any number.
            </h2>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mb-8">
              Every figure on the dashboard is auditable. Click your net worth, your cash flow, your retirement readiness — a drilldown opens with the exact formula and the inputs.
            </p>
            <div className="bg-stone-900 border border-stone-700 rounded-lg p-5 max-w-2xl">
              <p className="text-stone-500 text-xs uppercase tracking-wider mb-2">How this is calculated</p>
              <p className="text-stone-100 font-mono text-sm">$8,420 (assets) − $1,840 (debts) = $6,580 (net worth)</p>
            </div>
          </div>
        </Slide>

        {/* 6. Privacy */}
        <Slide tone="ink">
          <div>
            <Shield className="w-8 h-8 text-amber-400 mb-5" />
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">Privacy</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-6 leading-tight">
              Your data isn&apos;t the product.
            </h2>
            <ul className="space-y-3 text-stone-300 text-base sm:text-lg max-w-2xl">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />Local-first. Your data lives in your browser by default.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />Optional cloud sync via Firebase — encrypted, isolated per user.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />No marketing trackers. No data sold to brokers. Plausible analytics, anonymous.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />Daily auto-backup via email so you never lose a year of work.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />Delete your account permanently in two clicks. We mean it.</li>
            </ul>
          </div>
        </Slide>

        {/* 7. Pricing */}
        <Slide tone="paper">
          <div>
            <p className="text-amber-700 text-sm uppercase tracking-[0.2em] mb-4">Pricing</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-10">Pay what fits you.</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              <PriceCard tier="Monthly" price="$4.99" cadence="/ month" sub="Cancel anytime. Try everything." featured={false} />
              <PriceCard tier="Annual" price="$39" cadence="/ year" sub="Save 35%. Best for consistent users." featured={false} />
              <PriceCard tier="Founding Lifetime" price="$99" cadence="once" sub="First 500 buyers. Pay once, use forever." featured={true} />
            </div>
            <p className="text-stone-500 text-sm mt-8">30-day money-back guarantee. No questions.</p>
          </div>
        </Slide>

        {/* 8. Closing */}
        <Slide tone="gradient">
          <div className="text-center">
            <FileDown className="w-10 h-10 text-amber-400 mx-auto mb-5" strokeWidth={1.5} />
            <h2 className="font-serif text-4xl sm:text-6xl text-stone-100 mb-6 leading-tight">
              Stop guessing.<br/>Start knowing.
            </h2>
            <p className="text-stone-300 text-lg max-w-xl mx-auto mb-10">
              Five questions, five minutes, a real plan you control.
            </p>
            <a href="https://retirement-planner.vercel.app" className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-stone-950 rounded-full font-medium text-lg hover:bg-amber-400 transition-colors">
              Try Cairn <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-stone-500 text-xs mt-12">No credit card to start.</p>
          </div>
        </Slide>
      </Deck>
    </>
  );
}

function PriceCard({ tier, price, cadence, sub, featured }: { tier: string; price: string; cadence: string; sub: string; featured: boolean }) {
  return (
    <div className={`rounded-xl p-6 ${featured ? 'bg-stone-900 text-stone-50 border-2 border-amber-500' : 'bg-stone-100 border border-stone-300'}`}>
      <p className={`text-xs uppercase tracking-wider mb-2 ${featured ? 'text-amber-400' : 'text-stone-500'}`}>{tier}</p>
      <p className={`font-serif text-4xl tabular ${featured ? 'text-stone-50' : 'text-stone-900'}`}>{price}<span className="text-lg ml-1 font-normal opacity-60">{cadence}</span></p>
      <p className={`text-sm mt-3 ${featured ? 'text-stone-300' : 'text-stone-600'}`}>{sub}</p>
    </div>
  );
}
