import { FooterSection } from "@/components/FooterSection";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">About Sushi Software</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Sushi Software unites the Sushi ecosystem?Kitchen, Legal, Law, and Aegis products?to deliver double-blind compliance and design-first RWA experiences without ever holding PII.</p>
        </div>
      </section>
      <section className="w-full pb-12">
        <div className="container max-w-5xl px-6 mx-auto text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Overview</p>
          <p className="text-muted-foreground mt-3">A parent platform spanning infrastructure, legal blueprints, trusted issuers, and marketplaces to solve the privacy/compliance paradox.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Sushi Kitchen</h3>
            <p className="text-sm text-muted-foreground mt-2">IP + infrastructure factory for compliant automation and RAG.</p>
          </div>
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Sushi Legal</h3>
            <p className="text-sm text-muted-foreground mt-2">Compliance-as-code blueprints and liability firebreaks.</p>
          </div>
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Sushi Law</h3>
            <p className="text-sm text-muted-foreground mt-2">Trusted issuers holding PII and posting on-chain claims.</p>
          </div>
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
            <p className="text-muted-foreground leading-relaxed">Infrastructure (Sushi Kitchen), compliance frameworks (Sushi Legal), trusted issuers (Sushi Law), and marketplaces (Aegis Core/Pro).</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Principles</h2>
            <p className="text-muted-foreground leading-relaxed">Privacy-by-design, compliance enforced on-chain, IP insulation via dual-domicile, and human-in-the-loop rigor for sensitive workflows.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Why it matters</h2>
            <p className="text-muted-foreground leading-relaxed">The art and RWA markets demand both anonymity and transparency. We solve the paradox so partners can grow without adding risk.</p>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}