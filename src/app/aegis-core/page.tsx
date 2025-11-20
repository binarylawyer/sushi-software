import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

const bullets = [
  "Agentic compliance flows with ERC-3643 gating and trusted attestations.",
  "No PII custody; verification stays with counsel; platform enforces rules.",
  "Instant-settlement logic configurable for different verticals.",
  "Composable: use as marketplace, automation layer, or RFP/compliance router.",
];

export default function AegisCorePage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="relative w-full overflow-hidden bg-slate-950 text-white py-24 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-purple-500/20 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-600/20 blur-[100px]" />
        </div>
        <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-mono font-semibold text-purple-300 uppercase tracking-wider">
              Aegis Core — RegTech product
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Compliant automation, minimal friction
            </h1>
            <p className="text-slate-300 text-lg">
              Aegis Core shows the Sushi architecture in action: agentic workflows with
              enforced permissions, instant payouts, and zero PII custody.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-slate-200">
                <a href="/contact-sales">See the on-prem demo</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <a href="/legal">Read security docs</a>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-semibold text-white">Core capabilities</h3>
            <ul className="space-y-3 text-sm text-slate-200 leading-relaxed">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-900 text-white py-16 border-b border-white/10">
        <div className="container max-w-5xl px-6 mx-auto grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">What Aegis Core does</h2>
            <p className="text-slate-200 leading-relaxed">
              Provides compliant, automated flows for regulated markets—double-blind when
              needed—enforcing eligibility on-chain while keeping identities private.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Why it matters</h2>
            <p className="text-slate-200 leading-relaxed">
              Shows how the Sushi Stack, Legal schemas, and Law attestations converge. A
              proof point that simplicity and compliance can coexist.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16">
        <div className="container max-w-5xl px-6 mx-auto grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">For decision makers</h3>
            <p className="text-slate-600 leading-relaxed">
              Compliance-first automation without PII risk; faster settlements; clearer
              accountability and auditability.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">For implementers</h3>
            <p className="text-slate-600 leading-relaxed">
              Containerized, API-first, and orchestrated via n8n. Claims-driven gating and
              modular payouts to adapt to any vertical.
            </p>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
