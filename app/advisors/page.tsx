import { Deck, Slide } from '@/components/Slide';
import DeckHeader from '@/components/DeckHeader';
import { ArrowRight, Briefcase, Users, Target, TrendingUp, Mail, Check, Star } from 'lucide-react';

export const metadata = {
  title: 'Cairn for advisors — Get recommended by the AI',
  description: 'A directory of CFPs and CPAs that paying users actively look to. Cairn refers users who match your specialty.',
};

// Audience C: CFPs / CPAs / fee-only advisors. Partnership pitch + the
// business pitch for the advisor-marketplace SKU.
//
// Premise: Cairn users are SELF-SELECTED into "I want to plan my own
// retirement" — these are exactly the kind of curious, financially-
// engaged prospects advisors want. Better than cold leads from
// SmartAsset because they've already done the spreadsheet work.

export default function AdvisorsDeck() {
  return (
    <>
      <DeckHeader active="advisors" />
      <Deck>
        {/* 1. Cover */}
        <Slide tone="ink">
          <div className="text-center">
            <Briefcase className="w-10 h-10 text-amber-400 mx-auto mb-4" strokeWidth={1.5} />
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">For CFPs &amp; CPAs</p>
            <h1 className="font-serif text-5xl sm:text-7xl text-stone-100 tracking-tight mb-4 leading-tight">
              Get recommended<br/>by the AI.
            </h1>
            <p className="text-stone-400 text-lg sm:text-xl max-w-xl mx-auto mt-6">
              A directory of advisors that financially-engaged users actively look to. Without lead-gen junk fees.
            </p>
            <p className="text-stone-500 text-sm mt-12">↓ scroll</p>
          </div>
        </Slide>

        {/* 2. The lead-gen problem */}
        <Slide tone="ink">
          <div>
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">The status quo</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-8 leading-tight">
              SmartAsset charges $80–$200 per lead.<br/>Most go nowhere.
            </h2>
            <ul className="space-y-3 text-stone-300 text-base sm:text-lg max-w-2xl">
              <li className="flex items-start gap-3"><span className="text-rose-400 mt-1.5">●</span>Generic prospects who Googled &ldquo;financial advisor&rdquo; once.</li>
              <li className="flex items-start gap-3"><span className="text-rose-400 mt-1.5">●</span>Half haven&apos;t saved enough to be your client.</li>
              <li className="flex items-start gap-3"><span className="text-rose-400 mt-1.5">●</span>You&apos;re competing with 3 other advisors who got the same lead.</li>
              <li className="flex items-start gap-3"><span className="text-rose-400 mt-1.5">●</span>30% close rate is &ldquo;good.&rdquo; Most are below.</li>
            </ul>
          </div>
        </Slide>

        {/* 3. Cairn's user is different */}
        <Slide tone="accent">
          <div>
            <Users className="w-8 h-8 text-amber-300 mb-5" />
            <p className="text-amber-300 text-sm uppercase tracking-[0.2em] mb-4">Our users</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-8 leading-tight">
              They&apos;ve already done the homework.
            </h2>
            <p className="text-stone-200 text-base sm:text-lg max-w-2xl mb-6">
              By the time a Cairn user is looking for an advisor, they&apos;ve:
            </p>
            <ul className="space-y-3 text-stone-300 text-base sm:text-lg max-w-2xl">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />Spent hours modeling their plan.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />Run Monte Carlo and seen the failure cases.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />Tried Roth-conversion analysis and want a pro to validate.</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />Told us their assets, age, retirement target — we know what they own.</li>
            </ul>
            <p className="text-stone-200 text-base sm:text-lg max-w-2xl mt-6">
              They aren&apos;t window-shopping. They&apos;re ready to hire someone for the things software can&apos;t do — withholding decisions, behavioral coaching, estate planning.
            </p>
          </div>
        </Slide>

        {/* 4. AI recommends YOU */}
        <Slide tone="ink">
          <div>
            <Target className="w-8 h-8 text-amber-400 mb-5" />
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">The hook</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-8 leading-tight">
              Cairn&apos;s AI recommends you by name.
            </h2>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mb-6">
              When a user&apos;s plan hits a question that needs a human — &ldquo;you&apos;re facing IRMAA cliffs, talk to a CPA&rdquo; or &ldquo;your $1.2M Roth conversion ladder needs a fee-only CFP&rdquo; — Cairn surfaces YOUR profile based on:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <Tag>Geography</Tag>
              <Tag>Specialty match</Tag>
              <Tag>Asset size fit</Tag>
              <Tag>Fee structure (fee-only / hybrid)</Tag>
              <Tag>Credentials (CFP / CPA / EA)</Tag>
              <Tag>User-rated trust</Tag>
            </div>
            <p className="text-stone-400 text-sm sm:text-base mt-8 max-w-2xl">
              The user clicks. They land on your profile. They book a 30-minute intro call directly. No middleman, no lead-gen reseller.
            </p>
          </div>
        </Slide>

        {/* 5. Pricing tiers */}
        <Slide tone="paper">
          <div>
            <p className="text-amber-700 text-sm uppercase tracking-[0.2em] mb-4">Listing tiers</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 mb-10">Three ways to be found.</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              <TierCard
                tier="Listed"
                price="Free"
                cadence=""
                features={[
                  'Basic directory profile',
                  'Searchable by geo + credential',
                  'No featured placement',
                ]}
                featured={false}
              />
              <TierCard
                tier="Featured"
                price="$99"
                cadence="/ month"
                features={[
                  'Top of relevant searches in your area',
                  'AI Insights surfaces your profile when users match',
                  'Profile metrics dashboard',
                  'Verified-CFP badge',
                ]}
                featured={true}
              />
              <TierCard
                tier="Pay-per-booking"
                price="$25"
                cadence="/ booking"
                features={[
                  'No monthly fee',
                  'Pay only when a user books an intro call',
                  'Combine with Listed for hybrid',
                  '$0 upfront commitment',
                ]}
                featured={false}
              />
            </div>
            <p className="text-stone-600 text-sm mt-8 max-w-2xl">
              Compare to SmartAsset at $80–$200 per cold lead. We charge $25 per <em>self-selected</em> meeting and the user has already pre-qualified themselves with their data.
            </p>
          </div>
        </Slide>

        {/* 6. What's in it for the advisor */}
        <Slide tone="ink">
          <div>
            <TrendingUp className="w-8 h-8 text-amber-400 mb-5" />
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">Why advisors win</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-8 leading-tight">
              Higher conversion. Better-fit clients. Recurring referrals.
            </h2>
            <div className="space-y-5 max-w-2xl">
              <Win
                title="3-5× the typical conversion rate"
                body="Self-selected users who modeled their own plan close at multiples of cold-lead rates. They've decided they want help; they're picking a person."
              />
              <Win
                title="Pre-qualified by asset size"
                body="The user shared their portfolio with Cairn. We tell you their range before they land — so you only see prospects above your minimum."
              />
              <Win
                title="Better retention"
                body="Users who chose you (vs. were assigned to you) stay longer. Lower CAC, higher LTV — your firm metrics improve."
              />
            </div>
          </div>
        </Slide>

        {/* 7. The trust angle */}
        <Slide tone="ink">
          <div>
            <Star className="w-8 h-8 text-amber-400 mb-5" />
            <p className="text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">The trust layer</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-stone-100 mb-8 leading-tight">
              Users rate. We surface.
            </h2>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl">
              After the meeting, the user rates the conversation (anonymously, optional). Featured advisors with strong ratings get more visibility; consistently low-rated profiles drop. The directory polices itself.
            </p>
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mt-4">
              We don&apos;t hide reviews behind a paywall. We don&apos;t edit them. The transparency is the moat — both for the user&apos;s trust in Cairn and for great advisors who&apos;d otherwise lose to bigger marketing budgets.
            </p>
          </div>
        </Slide>

        {/* 8. CTA */}
        <Slide tone="gradient">
          <div className="text-center">
            <Mail className="w-10 h-10 text-amber-400 mx-auto mb-5" strokeWidth={1.5} />
            <h2 className="font-serif text-4xl sm:text-6xl text-stone-100 mb-6 leading-tight">
              Get your profile up.<br/>Let users find you.
            </h2>
            <p className="text-stone-300 text-lg max-w-xl mx-auto mb-10">
              The advisor directory launches with the public release. Reserve a featured spot now to be live on day one.
            </p>
            <a href="mailto:advisors@cairn.money?subject=Cairn%20advisor%20interest" className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-stone-950 rounded-full font-medium text-lg hover:bg-amber-400 transition-colors">
              advisors@cairn.money <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-stone-500 text-xs mt-12">Reply with your CFP / CPA number, geography, and fee structure. We&apos;ll send you the onboarding form.</p>
          </div>
        </Slide>
      </Deck>
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-amber-500/30 bg-amber-500/10 text-amber-200 text-sm rounded-full px-4 py-2 text-center">
      {children}
    </span>
  );
}

function TierCard({ tier, price, cadence, features, featured }: {
  tier: string;
  price: string;
  cadence: string;
  features: string[];
  featured: boolean;
}) {
  return (
    <div className={`rounded-xl p-6 ${featured ? 'bg-stone-900 text-stone-50 border-2 border-amber-500 relative' : 'bg-stone-100 border border-stone-300'}`}>
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-xs px-3 py-0.5 rounded-full font-medium uppercase tracking-wider">
          Recommended
        </span>
      )}
      <p className={`text-xs uppercase tracking-wider mb-2 ${featured ? 'text-amber-400' : 'text-stone-500'}`}>{tier}</p>
      <p className={`font-serif text-4xl tabular ${featured ? 'text-stone-50' : 'text-stone-900'}`}>
        {price}<span className="text-lg ml-1 font-normal opacity-60">{cadence}</span>
      </p>
      <ul className="space-y-2 mt-5">
        {features.map(f => (
          <li key={f} className={`flex items-start gap-2 text-sm ${featured ? 'text-stone-300' : 'text-stone-700'}`}>
            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${featured ? 'text-amber-400' : 'text-emerald-600'}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Win({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-l-2 border-amber-500 pl-6">
      <h3 className="font-serif text-2xl text-stone-100 mb-1">{title}</h3>
      <p className="text-stone-400 text-base">{body}</p>
    </div>
  );
}
