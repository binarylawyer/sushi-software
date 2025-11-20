import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

const services = [
  "Bespoke deployments of the Sushi Stack (n8n workflows, RAG pipelines, Qdrant/GraphRAG).",
  "Compliance architecture and attestations wired into your automation.",
  "Custom UI/UX for regulated partners, BYO wallet, and permissions gating.",
  "Integration with custodians, insurers, logistics, or internal systems.",
];

export default function AegisProPage() {
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
              Aegis Pro — Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              White-glove, compliant AI deployments
            </h1>
            <p className="text-slate-300 text-lg">
              For teams that need bespoke builds, deeper integrations, or guided rollouts of
              the Sushi ecosystem with design + systems rigor.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-slate-200">
                <a href="/contact-sales">Talk to a solutions architect</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <a href="/legal">View security approach</a>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-semibold text-white">What we deliver</h3>
            <ul className="space-y-3 text-sm text-slate-200 leading-relaxed">
              {services.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16">
        <div className="container max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Design + systems</h3>
            <p className="text-slate-600 leading-relaxed">
              We pair user-centered design with robust orchestration to keep complex
              compliance as simple as sushi.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Compliance by design</h3>
            <p className="text-slate-600 leading-relaxed">
              Legal schemas and attestations embedded into your workflows; clear SLAs and
              liability boundaries.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Speed to deployment</h3>
            <p className="text-slate-600 leading-relaxed">
              Deploy in days, not months. On-prem friendly, audit-ready, agentic + HITL flows
              from day one.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
