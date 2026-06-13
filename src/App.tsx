
const navItems = ['Dashboard', 'Groups', 'Contributions', 'Members', 'Settings'];

const steps = [
  { title: 'Create a circle', copy: 'Set contribution amounts, member limits, payout order, and savings cadence in minutes.' },
  { title: 'Invite trusted members', copy: 'Bring your community together with transparent rules and shared accountability.' },
  { title: 'Contribute on schedule', copy: 'Track deposits, upcoming turns, and group progress through a clean member dashboard.' },
  { title: 'Receive payouts', copy: 'Members receive scheduled payouts with records designed for Stellar and Soroban rails.' },
];

const features = [
  { icon: 'users', title: 'Savings groups', copy: 'Launch and manage multiple rotating savings circles from one workspace.' },
  { icon: 'shield', title: 'Transparent rules', copy: 'Clear contribution schedules and payout sequencing for every participant.' },
  { icon: 'network', title: 'Soroban-ready', copy: 'Frontend foundation prepared for future smart contract interactions.' },
  { icon: 'globe', title: 'Borderless access', copy: 'A fintech experience designed for global communities and digital-first savers.' },
];

const benefits = ['Lower friction for community savings', 'Modern records for every contribution', 'Designed for mobile and desktop users', 'Built with a scalable frontend structure'];

const history = [
  { group: 'Founders Circle', date: 'Jun 10, 2026', amount: '$500', status: 'Completed' },
  { group: 'Family Builders', date: 'Jun 03, 2026', amount: '$250', status: 'Completed' },
  { group: 'Stellar Savers', date: 'May 28, 2026', amount: '$750', status: 'Completed' },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_28%),linear-gradient(180deg,#020617,#0f172a)]" />
      <LandingPage />
      <DashboardPage />
    </main>
  );
}

function LandingPage() {
  return (
    <section className="relative px-6 py-6 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-teal-400 text-slate-950 shadow-lg shadow-teal-400/30"><Icon name="coin" /></div>
          <span className="text-xl font-bold tracking-tight">AjoChain</span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#dashboard" className="hover:text-white">Dashboard</a>
        </div>
        <button className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 md:block">Launch App</button>
        <span className="md:hidden text-2xl">☰</span>
      </nav>

      <div className="mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm text-teal-200"><Icon name="spark" /> Stellar + Soroban savings circles</div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">Save Together. Grow Together.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">A decentralized savings circle platform powered by Stellar and Soroban.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="group rounded-full bg-teal-400 px-7 py-4 font-bold text-slate-950 shadow-2xl shadow-teal-500/20 transition hover:bg-teal-300">Create a Group <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span></button>
            <button className="rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/10">Learn More</button>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-slate-900/90 p-6">
            <div className="flex items-center justify-between"><span className="text-sm text-slate-400">Circle balance</span><Icon name="wallet" className="text-teal-300" /></div>
            <p className="mt-4 text-5xl font-black">$48,250</p>
            <div className="mt-8 h-3 rounded-full bg-slate-800"><div className="h-3 w-3/4 rounded-full bg-gradient-to-r from-teal-300 to-blue-400" /></div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {['12 members', '4 payouts', '98% on-time', '3 groups'].map((item) => <div key={item} className="rounded-2xl bg-white/5 p-4 text-sm font-semibold">{item}</div>)}
            </div>
          </div>
        </div>
      </div>

      <section id="how" className="mx-auto max-w-7xl py-16">
        <SectionHeader eyebrow="How it works" title="Coordinate savings circles with clarity." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{steps.map((step, index) => <InfoCard key={step.title} prefix={`0${index + 1}`} {...step} />)}</div>
      </section>

      <section id="features" className="mx-auto max-w-7xl py-16">
        <SectionHeader eyebrow="Features" title="Everything needed for the frontend foundation." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{features.map(({ icon, ...feature }) => <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><Icon name={icon} className="mb-5 text-teal-300" /><h3 className="text-xl font-bold">{feature.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{feature.copy}</p></div>)}</div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 py-16 lg:grid-cols-2">
        <div><SectionHeader eyebrow="Benefits" title="Built for communities that save with purpose." /></div>
        <div className="grid gap-4">{benefits.map((benefit) => <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"><Icon name="check" className="text-teal-300" />{benefit}</div>)}</div>
      </section>

      <section className="mx-auto my-16 max-w-7xl rounded-[2rem] border border-teal-300/20 bg-gradient-to-r from-teal-400/20 to-blue-500/20 p-10 text-center shadow-2xl shadow-teal-950/30">
        <h2 className="text-4xl font-black">Start your first AjoChain circle.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">Create transparent group savings experiences today and connect blockchain functionality later.</p>
        <button className="mt-8 rounded-full bg-teal-300 px-8 py-4 font-bold text-slate-950">Create a Group</button>
      </section>
    </section>
  );
}

function DashboardPage() {
  return (
    <section id="dashboard" className="border-t border-white/10 bg-slate-950/80 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-8 flex items-center gap-3 text-xl font-bold"><Icon name="dashboard" className="text-teal-300" /> Dashboard</div>
          <nav className="space-y-2">{navItems.map((item) => <a key={item} className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm ${item === 'Dashboard' ? 'bg-teal-400 text-slate-950 font-bold' : 'text-slate-300 hover:bg-white/5'}`} href="#dashboard">{item === 'Settings' ? <Icon name="settings" /> : <Icon name="chart" />}{item}</a>)}</nav>
        </aside>
        <div className="space-y-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-teal-300">AjoChain app UI</p><h2 className="text-4xl font-black">Savings Dashboard</h2></div><button className="rounded-full bg-white px-5 py-3 font-bold text-slate-950">New Group</button></div>
          <div className="grid gap-5 md:grid-cols-3">
            <Metric icon="coin" label="Total Savings" value="$48,250" />
            <Metric icon="users" label="Active Groups" value="3" />
            <Metric icon="calendar" label="Upcoming Payouts" value="2" />
          </div>
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h3 className="mb-5 text-xl font-bold">Contribution History</h3><div className="space-y-3">{history.map((row) => <div key={row.group} className="grid grid-cols-2 gap-3 rounded-2xl bg-slate-900/80 p-4 text-sm md:grid-cols-4"><span className="font-semibold">{row.group}</span><span className="text-slate-400">{row.date}</span><span>{row.amount}</span><span className="text-teal-300">{row.status}</span></div>)}</div></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><h3 className="text-xl font-bold">Upcoming Payouts</h3><div className="mt-6 space-y-4"><Payout name="Maya Chen" group="Founders Circle" amount="$6,000" /><Payout name="Luis Okafor" group="Family Builders" amount="$2,500" /></div></div>
          </div>
        </div>
      </div>
      <footer className="mx-auto mt-20 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row"><span>© 2026 AjoChain. Frontend foundation.</span><span>Built for Stellar and Soroban communities.</span></footer>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) { return <div className="mb-10"><p className="font-bold uppercase tracking-[0.3em] text-teal-300">{eyebrow}</p><h2 className="mt-3 max-w-3xl text-3xl font-black text-white md:text-5xl">{title}</h2></div>; }
function InfoCard({ prefix, title, copy }: { prefix: string; title: string; copy: string }) { return <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><span className="text-sm font-black text-teal-300">{prefix}</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{copy}</p></div>; }
function Metric({ icon, label, value }: { icon: string; label: string; value: string }) { return <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><Icon name={icon} className="text-teal-300" /><p className="mt-5 text-sm text-slate-400">{label}</p><p className="mt-2 text-3xl font-black">{value}</p></div>; }
function Payout({ name, group, amount }: { name: string; group: string; amount: string }) { return <div className="rounded-2xl bg-slate-900/80 p-4"><div className="flex items-center justify-between"><span className="font-bold">{name}</span><span className="text-teal-300">{amount}</span></div><p className="mt-1 text-sm text-slate-400">{group}</p></div>; }

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const symbols: Record<string, string> = { coin: "◉", spark: "✦", wallet: "▣", check: "✓", dashboard: "▦", settings: "⚙", chart: "▥", users: "◌", shield: "◇", network: "⌬", globe: "◎", calendar: "◷" };
  return <span className={`inline-flex h-6 w-6 items-center justify-center text-xl ${className}`} aria-hidden="true">{symbols[name] ?? "•"}</span>;
}

export default App;
