const features = [
  {
    title: 'Transparent savings circles',
    description: 'Create trusted Ajo groups with clear contribution schedules, member roles, and payout order from day one.',
    icon: '✦',
  },
  {
    title: 'Automated reminders',
    description: 'Keep every member on track with timely due-date alerts before each collection window closes.',
    icon: '◷',
  },
  {
    title: 'Payout confidence',
    description: 'Track who has contributed, what is pending, and when every member receives their turn.',
    icon: '✓',
  },
];

const steps = [
  'Invite your trusted members',
  'Set contribution amount and cycle',
  'Watch collections and payouts flow',
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(45,212,191,0.28),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.22),transparent_28%),linear-gradient(135deg,#020617,#0f172a_48%,#111827)]" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <Header />
        <Hero />
        <Features />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-6">
      <a href="#top" className="flex items-center gap-3" aria-label="AjoChain home">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-300 text-xl font-black text-slate-950 shadow-lg shadow-teal-500/25">A</span>
        <span className="text-xl font-black tracking-tight">AjoChain</span>
      </a>
      <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex" aria-label="Primary navigation">
        <a className="transition hover:text-white" href="#features">Features</a>
        <a className="transition hover:text-white" href="#how-it-works">How it works</a>
        <a className="transition hover:text-white" href="#start">Start</a>
      </nav>
      <a href="#start" className="rounded-full bg-white px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-teal-100">Join waitlist</a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
      <div>
        <p className="mb-5 w-fit rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-teal-200">
          Community savings, simplified
        </p>
        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Build trust in every contribution circle.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          AjoChain helps friends, families, and cooperatives organize rotating savings groups with transparent records, smart reminders, and effortless payout tracking.
        </p>
        <div id="start" className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a href="mailto:hello@ajochain.app" className="rounded-full bg-teal-300 px-8 py-4 text-center font-black text-slate-950 shadow-xl shadow-teal-500/25 transition hover:bg-teal-200">
            Get early access
          </a>
          <a href="#features" className="rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-center font-black text-white transition hover:bg-white/10">
            Explore features
          </a>
        </div>
        <div className="mt-10 grid max-w-xl gap-4 text-sm text-slate-300 sm:grid-cols-3">
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
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">Founders Circle</p>
            <p className="mt-1 text-3xl font-black">$24,000</p>
          </div>
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-300">On track</span>
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

function Features() {
  return (
    <section id="features" className="pb-16">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="font-bold uppercase tracking-[0.25em] text-teal-300">Why AjoChain</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">A calmer way to coordinate group savings.</h2>
        </div>
        <p id="how-it-works" className="max-w-xl text-slate-300">Replace scattered chats and spreadsheets with one shared place for contributions, accountability, and payout visibility.</p>
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

export default App;
