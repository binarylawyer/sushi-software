export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">About Sushi Software</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Sushi Software unites the Sushi ecosystem?Kitchen, Legal, Law, and Aegis products?to deliver double-blind compliance and design-first RWA experiences without ever holding PII.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Our mission</h2>
            <p className="text-muted-foreground leading-relaxed">Make regulated transactions simple, privacy-preserving, and design-forward. We combine design thinking and systems thinking to remove friction from compliant liquidity.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">What we build</h2>
            <p className="text-muted-foreground leading-relaxed">A parent platform spanning infrastructure (Sushi Kitchen), compliance frameworks (Sushi Legal), trusted issuers (Sushi Law), and the flagship marketplace (Aegis Core).</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Principles</h2>
            <p className="text-muted-foreground leading-relaxed">Privacy-by-design, compliance enforced on-chain, IP insulation through dual-domicile structures, and human-in-the-loop rigor for sensitive workflows.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Why it matters</h2>
            <p className="text-muted-foreground leading-relaxed">The art and RWA markets demand both anonymity and transparency. We solve the paradox so partners can grow without adding risk.</p>
          </div>
        </div>
      </section>
    </main>
  );
}