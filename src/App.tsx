const features = [
  {
    title: 'Circle management',
    description: 'Create savings groups with contribution amounts, payout order, member roles, and cycle dates that everyone can understand.',
    icon: '✦',
  },
  {
    title: 'Contribution visibility',
    description: 'See paid, pending, and overdue contributions in one shared dashboard instead of chasing screenshots and chat messages.',
    icon: '◷',
  },
  {
    title: 'Payout accountability',
    description: 'Track upcoming payouts, completed turns, and group activity so every member has confidence in the process.',
    icon: '✓',
  },
];

const steps = [
  'Create or join a trusted savings circle',
  'Set contribution amount, schedule, and payout order',
  'Track collections, reminders, and payouts transparently',
];

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Professional web foundation',
    status: 'Now',
    items: ['Responsive marketing site', 'Clear product positioning', 'Contributor-ready README'],
  },
  {
    phase: 'Phase 2',
    title: 'Core savings dashboard',
    status: 'Next',
    items: ['Group creation flow', 'Member contribution table', 'Payout schedule view'],
  },
  {
    phase: 'Phase 3',
    title: 'Collaboration workflows',
    status: 'Planned',
    items: ['Issue templates', 'Role-based task board', 'Notification preferences'],
  },
  {
    phase: 'Phase 4',
    title: 'Blockchain integration',
    status: 'Future',
    items: ['Stellar wallet connection', 'Soroban contract prototype', 'On-chain contribution records'],
  },
];

const issueIdeas = [
  'Build the group creation form UI',
  'Add reusable dashboard stat cards',
  'Create contribution history table mock data',
  'Design issue templates for contributors',
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(45,212,191,0.28),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.22),transparent_28%),linear-gradient(135deg,#020617,#0f172a_48%,#111827)]" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <Header />
        <Hero />
        <Features />
        <Roadmap />
        <ContributorSection />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-4 z-20 flex items-center justify-between rounded-full border border-white/10 bg-slate-950/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
      <a href="#top" className="flex items-center gap-3" aria-label="AjoChain home">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-300 text-xl font-black text-slate-950 shadow-lg shadow-teal-500/25">A</span>
        <span className="text-xl font-black tracking-tight">AjoChain</span>
      </a>
      <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex" aria-label="Primary navigation">
        <a className="transition hover:text-white" href="#features">Features</a>
        <a className="transition hover:text-white" href="#roadmap">Roadmap</a>
        <a className="transition hover:text-white" href="#contributors">Contribute</a>
      </nav>
      <a href="#contributors" className="rounded-full bg-white px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-teal-100">View issues</a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
      <div>
        <p className="mb-5 w-fit rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-teal-200">
          Community savings infrastructure
        </p>
        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Transparent rotating savings for modern communities.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          AjoChain helps families, cooperatives, and community groups coordinate Ajo savings circles with shared records, predictable schedules, and payout visibility.
        </p>
        <div id="start" className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a href="mailto:hello@ajochain.app" className="rounded-full bg-teal-300 px-8 py-4 text-center font-black text-slate-950 shadow-xl shadow-teal-500/25 transition hover:bg-teal-200">
            Request early access
          </a>
          <a href="#roadmap" className="rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-center font-black text-white transition hover:bg-white/10">
            See roadmap
          </a>
        </div>
        <div className="mt-10 grid max-w-3xl gap-4 text-sm text-slate-300 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <span className="text-teal-200">0{index + 1}</span>
              <p className="mt-2 font-bold text-white">{step}</p>
            </div>
          ))}
        </div>
      </div>
      <HeroCard />
    </section>
  );
}

function HeroCard() {
  return (
    <aside className="relative rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="rounded-[1.5rem] bg-slate-950/70 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-400">Founders Circle</p>
            <p className="mt-1 text-3xl font-black">$24,000</p>
          </div>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-300">On track</span>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-3 text-center">
          <Metric label="Members" value="12" />
          <Metric label="Paid" value="9" />
          <Metric label="Due" value="$1.5k" />
        </div>
        <div className="mt-7 space-y-4">
          {['Ada paid $500', 'Maya payout scheduled', 'Luis reminder sent'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-300/15 text-teal-200">✓</span>
              <p className="font-bold text-slate-100">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-7 rounded-2xl bg-gradient-to-r from-teal-300 to-blue-400 p-5 text-slate-950">
          <p className="text-sm font-bold uppercase tracking-widest">Next payout</p>
          <p className="mt-2 text-2xl font-black">Maya receives $6,000</p>
        </div>
      </div>
    </aside>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
      <p className="text-xl font-black">{value}</p>
      <p className="mt-1 text-xs font-semibold text-slate-400">{label}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="font-bold uppercase tracking-[0.25em] text-teal-300">Why AjoChain</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">A professional foundation for trusted group savings.</h2>
        </div>
        <p className="max-w-xl text-slate-300">Replace scattered chats and spreadsheets with one shared place for contributions, accountability, and payout visibility.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-300/15 text-2xl text-teal-200">{feature.icon}</span>
            <h3 className="mt-6 text-2xl font-black">{feature.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section id="roadmap" className="py-16">
      <p className="font-bold uppercase tracking-[0.25em] text-teal-300">Roadmap</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">A clear path for contributors to help move the project forward.</h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {roadmap.map((item) => (
          <article key={item.phase} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-black uppercase tracking-widest text-teal-200">{item.phase}</p>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">{item.status}</span>
            </div>
            <h3 className="mt-5 text-xl font-black">{item.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {item.items.map((task) => (
                <li key={task} className="flex gap-2"><span className="text-teal-300">•</span>{task}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContributorSection() {
  return (
    <section id="contributors" className="py-16">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-teal-300">Open source ready</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Turn the roadmap into beginner-friendly issues.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              Use the roadmap and starter issue ideas to create focused GitHub issues for contributors. Keep each issue small, describe the expected outcome, and link it to a roadmap phase.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-950/70 p-5">
            <p className="text-sm font-black uppercase tracking-widest text-slate-400">Starter issue ideas</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {issueIdeas.map((issue) => (
                <div key={issue} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 font-bold text-slate-100">
                  {issue}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
