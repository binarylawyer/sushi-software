import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

export default function LawPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full py-24 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Sushi Law
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8 px-4">
          The human-oracle network: vetted law firms issuing on-chain attestations while keeping PII inside privilege walls.
        </p>
        <Button size="lg" className="rounded-full" asChild>
          <a href="https://sushi.law" target="_blank" rel="noreferrer">
            Visit Sushi.law
          </a>
        </Button>
      </section>

      <section className="w-full py-16">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Role in the Sushi ecosystem</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sushi Law operationalizes the blueprints from Sushi Legal, acting as Trusted Issuers. Member firms hold client data, issue claims, and indemnify the platform; Aegis Core enforces compliance at transfer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What it delivers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Tiered vetting SLAs with indemnity for attestations.</li>
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />On-chain claims for ERC-3643 Identity Registry (no PII).</li>
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Human-in-the-loop validation that maps to automated checks.</li>
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />“Collector-controlled disclosure” to prevent client poaching.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How it works</h3>
              <p className="text-muted-foreground leading-relaxed">
                Firms ingest documents off-chain; HITL review confirms identity and risk; claims are posted on-chain by trusted issuers; Aegis Core canTransfer checks enforce compliance before any settlement.
              </p>
              <div className="mt-4 h-32 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-primary/5 border" />
            </div>
          </div>

          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Who it’s for</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Boutique law firms specializing in art/RWA compliance.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Galleries needing vetted, anonymous collectors.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Collectors who want privacy with on-chain proof of eligibility.</li>
            </ul>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
