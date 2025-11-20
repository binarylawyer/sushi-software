export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Insights on double-blind compliance, RWA tokenization, and design systems for regulated markets.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">What to expect</h2>
            <p className="text-muted-foreground leading-relaxed">Deep dives on ERC-3643, dual-domicile structures, Instant Pay economics, and design thinking for compliance UX.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Build in public</h2>
            <p className="text-muted-foreground leading-relaxed">We share architecture decisions, playbooks, and lessons as we evolve the Sushi ecosystem.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Announcements</h2>
            <p className="text-muted-foreground leading-relaxed">Partnerships, product updates, and new releases from Aegis Core, Sushi Kitchen, Legal, and Law.</p>
          </div>
        </div>
      </section>
    </main>
  );
}