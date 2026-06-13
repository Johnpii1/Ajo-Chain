const navItems = ['Dashboard', 'Groups', 'Contributions', 'Members', 'Settings'];

const metrics = [
  { label: 'Total Savings', value: '$48,250', detail: '+12.5% from last month', icon: 'coin' },
  { label: 'Active Groups', value: '8', detail: '3 payout cycles in progress', icon: 'users' },
  { label: 'Upcoming Payouts', value: '$9,750', detail: 'Next payout on Jun 18', icon: 'calendar' },
];

const contributionHistory = [
  { group: 'Founders Circle', member: 'Maya Chen', date: 'Jun 10, 2026', amount: '$500', status: 'Completed' },
  { group: 'Family Builders', member: 'Luis Okafor', date: 'Jun 07, 2026', amount: '$250', status: 'Completed' },
  { group: 'Stellar Savers', member: 'Amina Bello', date: 'Jun 03, 2026', amount: '$750', status: 'Completed' },
  { group: 'Market Women Co-op', member: 'Priya Shah', date: 'May 28, 2026', amount: '$400', status: 'Completed' },
];

const upcomingPayouts = [
  { name: 'Maya Chen', group: 'Founders Circle', amount: '$6,000', date: 'Jun 18' },
  { name: 'Luis Okafor', group: 'Family Builders', amount: '$2,500', date: 'Jun 21' },
  { name: 'Priya Shah', group: 'Market Women Co-op', amount: '$1,250', date: 'Jun 28' },
];

const groupProgress = [
  { name: 'Founders Circle', saved: '$24,000', progress: '80%' },
  { name: 'Family Builders', saved: '$11,250', progress: '56%' },
  { name: 'Stellar Savers', saved: '$8,500', progress: '68%' },
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_26%),linear-gradient(135deg,#020617,#0f172a_48%,#111827)]" />
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />
        <DashboardPage />
      </div>
    </main>
  );
}

function Sidebar() {
  return (
    <aside className="border-b border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen lg:w-72 lg:border-b-0 lg:border-r">
      <div className="mb-8 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-300 text-2xl text-slate-950 shadow-lg shadow-teal-500/25">◉</div>
        <div>
          <p className="text-xl font-black tracking-tight text-white">AjoChain</p>
          <p className="text-xs text-slate-400">Savings circles dashboard</p>
        </div>
      </div>

      <nav className="grid gap-2 sm:grid-cols-5 lg:grid-cols-1">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
              item === 'Dashboard'
                ? 'bg-teal-300 text-slate-950 shadow-lg shadow-teal-500/20'
                : 'text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon name={item} />
            {item}
          </a>
        ))}
      </nav>

      <div className="mt-8 hidden rounded-3xl border border-teal-300/20 bg-teal-300/10 p-5 lg:block">
        <p className="text-sm font-bold text-teal-200">Next contribution</p>
        <p className="mt-2 text-2xl font-black text-white">$500</p>
        <p className="mt-1 text-sm text-slate-400">Due in 3 days for Founders Circle.</p>
      </div>
    </aside>
  );
}

function DashboardPage() {
  return (
    <section className="flex-1 px-5 py-8 sm:px-8 lg:px-10">
      <header className="mb-8 flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
        <div>
          <p className="font-bold uppercase tracking-[0.3em] text-teal-300">Dashboard</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-6xl">Welcome back, Ada</h1>
          <p className="mt-3 max-w-2xl text-slate-300">Monitor savings, group activity, upcoming payouts, and contribution records from one clean AjoChain workspace.</p>
        </div>
        <button className="w-full rounded-full bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-teal-100 sm:w-auto">Create Group</button>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
        <ContributionHistory />
        <UpcomingPayouts />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <ActiveGroups />
        <SavingsOverview />
      </div>
    </section>
  );
}

function MetricCard({ label, value, detail, icon }: { label: string; value: string; detail: string; icon: string }) {
  return (
    <article className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-300/15 text-2xl text-teal-200"><Icon name={icon} /></span>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Live</span>
      </div>
      <p className="mt-6 text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-4xl font-black text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{detail}</p>
    </article>
  );
}

function ContributionHistory() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-white">Contribution History</h2>
          <p className="text-sm text-slate-400">Recent member deposits across groups.</p>
        </div>
        <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-white/10">View all</button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <div className="hidden grid-cols-[1.2fr_1fr_0.9fr_0.7fr_0.8fr] bg-slate-900/80 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 md:grid">
          <span>Group</span><span>Member</span><span>Date</span><span>Amount</span><span>Status</span>
        </div>
        {contributionHistory.map((row) => (
          <div key={`${row.group}-${row.date}`} className="grid gap-2 border-t border-white/10 bg-slate-950/40 px-4 py-4 text-sm md:grid-cols-[1.2fr_1fr_0.9fr_0.7fr_0.8fr]">
            <span className="font-bold text-white">{row.group}</span>
            <span className="text-slate-300">{row.member}</span>
            <span className="text-slate-400">{row.date}</span>
            <span className="font-bold text-white">{row.amount}</span>
            <span className="w-fit rounded-full bg-teal-300/10 px-3 py-1 text-xs font-bold text-teal-200">{row.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function UpcomingPayouts() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <h2 className="text-2xl font-black text-white">Upcoming Payouts</h2>
      <p className="text-sm text-slate-400">Scheduled recipient turns.</p>
      <div className="mt-6 space-y-4">
        {upcomingPayouts.map((payout) => (
          <article key={payout.name} className="rounded-2xl bg-slate-950/60 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-bold text-white">{payout.name}</p>
                <p className="mt-1 text-sm text-slate-400">{payout.group}</p>
              </div>
              <p className="font-black text-teal-200">{payout.amount}</p>
            </div>
            <div className="mt-4 rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-300">Payout date: {payout.date}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ActiveGroups() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <h2 className="text-2xl font-black text-white">Active Groups</h2>
      <div className="mt-6 space-y-4">
        {groupProgress.map((group) => (
          <div key={group.name}>
            <div className="mb-2 flex justify-between text-sm"><span className="font-bold text-white">{group.name}</span><span className="text-slate-400">{group.saved}</span></div>
            <div className="h-3 rounded-full bg-slate-800"><div className="h-3 rounded-full bg-gradient-to-r from-teal-300 to-blue-400" style={{ width: group.progress }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SavingsOverview() {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <h2 className="text-2xl font-black text-white">Savings Overview</h2>
      <div className="mt-6 flex h-64 items-end gap-3 rounded-2xl bg-slate-950/50 p-4">
        {['35%', '48%', '42%', '60%', '72%', '66%', '88%'].map((height, index) => (
          <div key={height} className="flex flex-1 flex-col items-center gap-3">
            <div className="w-full rounded-t-2xl bg-gradient-to-t from-teal-400 to-blue-400" style={{ height }} />
            <span className="text-xs text-slate-500">W{index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const symbols: Record<string, string> = {
    Dashboard: '▦', Groups: '◌', Contributions: '↗', Members: '◎', Settings: '⚙', coin: '◉', users: '◌', calendar: '◷',
  };
  return <span aria-hidden="true">{symbols[name] ?? '•'}</span>;
}

export default App;
