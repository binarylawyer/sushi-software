import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

export default function LawPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="relative w-full overflow-hidden bg-slate-950 text-white py-24 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-600/20 blur-[100px]" />
        </div>
        <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-mono font-semibold text-blue-300 uppercase tracking-wider">
              Sushi Law — The Network
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Human-oracle attestations, simplified
            </h1>
            <p className="text-slate-300 text-lg">
              Curated firms verify and attest without exposing PII. Trusted issuers keep
              client data inside privilege while automation enforces compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-slate-200">
                <a href="https://sushi.law" target="_blank" rel="noreferrer">
                  Visit Sushi.law
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <a href="/contact-sales">Talk to an architect</a>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-semibold text-white">What Sushi Law delivers</h3>
            <ul className="space-y-3 text-sm text-slate-200 leading-relaxed">
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-blue-400" />Tiered vetting SLAs with indemnity for attestations.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-blue-400" />On-chain claims/permissions without PII; compliant identity registry.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-blue-400" />Human-in-the-loop validation mapped to automated checks.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-blue-400" />Collector-controlled disclosure to prevent client poaching.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-900 text-white py-16 border-b border-white/10">
        <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Role in the ecosystem</h2>
            <p className="text-slate-300">
              Sushi Law operationalizes Sushi Legal’s schemas and feeds attestations into
              automation (Aegis, Kitchen workflows) while keeping liability with member firms.
            </p>
          </div>
          <div className="space-y-3 text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white mb-1">Design thinking</h4>
              <p className="text-sm">Simple, clear attestations; no PII on-platform; easy-trigger workflows.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white mb-1">Systems thinking</h4>
              <p className="text-sm">Identity claims, permissions, and SLAs baked into compliance automation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16">
        <div className="container max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">How it works</h3>
            <p className="text-slate-600 leading-relaxed">
              Firms ingest documents off-chain; HITL review confirms identity and risk; trusted
              issuers post claims; automation enforces compliance at transfer.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Who it’s for</h3>
            <p className="text-slate-600 leading-relaxed">
              Boutique compliance firms, regulated partners needing vetted collectors, and
              privacy-focused buyers wanting proof without exposure.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Outcomes</h3>
            <p className="text-slate-600 leading-relaxed">
              Trusted, indemnified attestations; compliant automation without PII custody; faster
              approvals with clear accountability.
            </p>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
