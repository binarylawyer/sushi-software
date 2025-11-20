import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

const points = [
  "Modular Rolls/Combos/Platters for rapid deployment of on-prem AI.",
  "n8n agentic workflows with HITL checkpoints and policy-as-code.",
  "Qdrant/GraphRAG Profiler for semantic discovery at scale.",
  "IP insulation and licensing across the Sushi ecosystem.",
];

export default function KitchenPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="relative w-full overflow-hidden bg-slate-950 text-white py-24 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-600/20 blur-[100px]" />
        </div>
        <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center md:text-left grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-mono font-semibold text-indigo-300 uppercase tracking-wider">
              Sushi Kitchen — The Factory
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Design-led, on-prem AI automation
            </h1>
            <p className="text-slate-300 text-lg">
              We build the Sushi Stack—Dockerized, privacy-first agentic workflows you can run
              anywhere. Precise and intentional like sushi; compliant and auditable by design.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-slate-200">
                <a href="https://sushikitchen.io" target="_blank" rel="noreferrer">
                  Visit SushiKitchen.io
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
                <a href="/contact-sales">Talk to an architect</a>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-6 shadow-2xl">
            <h3 className="text-lg font-semibold mb-3">What’s inside the Kitchen</h3>
            <ul className="space-y-3 text-sm text-slate-300 leading-relaxed">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-1 size-2 rounded-full bg-indigo-400" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-900 text-white py-16 border-b border-white/10">
        <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Role in the ecosystem</h2>
            <p className="text-slate-300">
              Sushi Kitchen powers the stack for every property—building, packaging, and
              licensing the core infrastructure that Legal, Law, and Aegis consume.
            </p>
          </div>
          <div className="space-y-3 text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white mb-1">Design thinking</h4>
              <p className="text-sm">
                We craft agentic workflows to feel simple and intuitive—like sushi rolls—despite
                complex compliance.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white mb-1">Systems thinking</h4>
              <p className="text-sm">
                End-to-end orchestration (n8n) + RAG + containers keep deployments fast, repeatable,
                and auditable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16">
        <div className="container max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">How it works</h3>
            <p className="text-slate-600 leading-relaxed">
              Deploy the Sushi Stack on-prem/edge. Orchestrate AI + compliance via n8n. Feed outputs
              to Legal/Law/Aegis while keeping PII off-plate.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Who it’s for</h3>
            <p className="text-slate-600 leading-relaxed">
              Regulated teams needing sovereign AI; partners licensing our stack; internal Sushi
              properties building on a single, clean foundation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Outcomes</h3>
            <p className="text-slate-600 leading-relaxed">
              Deploy in days, not months. Repeatable, auditable agentic workflows. No PII custody by
              the platform.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
