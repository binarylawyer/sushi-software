import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

export default function LegalPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="relative w-full overflow-hidden bg-slate-950 text-white py-24 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-[100px]" />
        </div>
        <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-mono font-semibold text-emerald-300 uppercase tracking-wider">
              Sushi Legal — The Architect
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Compliance-as-code, designed for simplicity
            </h1>
            <p className="text-slate-300 text-lg">
              We author the structural playbooks—dual-domicile firebreaks, reliance letters,
              indemnity, and passports—so sophisticated automation stays audit-ready and
              beautifully simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-slate-200">
                <a href="https://sushi.legal" target="_blank" rel="noreferrer">
                  Visit Sushi.legal
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <a href="/contact-sales">Talk to an architect</a>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-semibold text-white">What Sushi Legal delivers</h3>
            <ul className="space-y-3 text-sm text-slate-200 leading-relaxed">
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-emerald-400" />Dual-domicile (LI Stiftung ↔ CH AG) plus US compliance fortress schemas.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-emerald-400" />Reliance Letter and Trusted Issuer frameworks for member firms.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-emerald-400" />Compliance passporting without storing PII on-platform.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-emerald-400" />Indemnity and SLAs that keep liability where it belongs.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-900 text-white py-16 border-b border-white/10">
        <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Role in the ecosystem</h2>
            <p className="text-slate-300">
              Sushi Legal defines the rules and firebreaks that keep Sushi Law’s attestations
              and Aegis automation safe, simple, and regulator-ready.
            </p>
          </div>
          <div className="space-y-3 text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white mb-1">Design thinking</h4>
              <p className="text-sm">We make compliance consumable—like sushi rolls—precise, packaged, and easy to adopt.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white mb-1">Systems thinking</h4>
              <p className="text-sm">Schemas, claims, and permissions that flow through automation and attestations without PII custody.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16">
        <div className="container max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">How it works</h3>
            <p className="text-slate-600 leading-relaxed">
              Legal schemas define wrappers, liability firebreaks, and claim topics. Sushi Law
              implements them; automation enforces them at transfer time.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Who it’s for</h3>
            <p className="text-slate-600 leading-relaxed">
              Regulated partners, member firms seeking indemnified frameworks, and teams
              standardizing compliant AI across jurisdictions.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Outcomes</h3>
            <p className="text-slate-600 leading-relaxed">
              Faster deployments, clearer liability boundaries, and audit-ready automation
              without PII on-platform.
            </p>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
