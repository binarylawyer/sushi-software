import { HeroSection } from "@/components/HeroSection";
import { FooterSection } from "@/components/FooterSection";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function LegalPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full py-24 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Sushi Legal
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8 px-4">
          Compliance-as-code blueprints: dual-domicile architecture, reliance letters, indemnity, and compliance passports for regulated RWAs.
        </p>
        <Button size="lg" className="rounded-full" asChild>
          <a href="https://sushi.legal" target="_blank" rel="noreferrer">
            Visit Sushi.legal
          </a>
        </Button>
      </section>

      <section className="w-full py-16">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Role in the Sushi ecosystem</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sushi Legal authors the structural playbooks: Swiss/Liechtenstein firebreak, US Compliance Fortress, reliance letters, and indemnified MSAs that let Sushi Law issue attestations while keeping liability where it belongs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Blueprints</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Dual-domicile (LI Stiftung ↔ CH AG) with US C-Corp + DAO LLC.</li>
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Reliance Letter / Trusted Issuer frameworks for law firms.</li>
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Compliance passporting without storing PII on-platform.</li>
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Indemnity and SLA definitions for vetted member firms.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How it works</h3>
              <p className="text-muted-foreground leading-relaxed">
                Legal schemas define corporate wrappers, liability firebreaks, and claim topics. Sushi Law implements them; Aegis Core enforces them at transfer time via ERC-3643 compliance checks.
              </p>
              <div className="mt-4 h-32 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-primary/5 border" />
            </div>
          </div>

          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Who it’s for</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Regulated partners needing enforceable compliance architecture.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Law firms joining the Sushi Law network with clear indemnity.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Teams standardizing RWA tokenization across jurisdictions.</li>
            </ul>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
