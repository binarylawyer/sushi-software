import { FooterSection } from "@/components/FooterSection";
import { Layers, ShieldCheck, Workflow, Sparkles, Compass, Terminal } from "lucide-react";

const pillars = [
  {
    title: "Design thinking",
    copy: "Start with clarity. We reduce complex regtech into elegant flows, so every action feels intentional.",
  },
  {
    title: "Systems thinking",
    copy: "Map the whole ecosystem. Tech, legal schemas, and human verification are orchestrated as one stack.",
  },
  {
    title: "Simplicity of sushi",
    copy: "Modular, precise, and safe by default—like a perfect roll. No extra garnish, just what is essential.",
  },
];

const units = [
  {
    title: "Sushi Kitchen",
    desc: "Tech factory. Dockerized, on-prem agentic workflows with n8n, Qdrant/GraphRAG, and Python.",
  },
  {
    title: "Sushi Legal",
    desc: "Compliance-as-code. Dual-domicile schemas, reliance frameworks, and indemnity baked into every workflow.",
  },
  {
    title: "Sushi Law",
    desc: "Human-oracle network. Trusted verification and attestations without exposing PII.",
  },
  {
    title: "Aegis Core / Pro",
    desc: "RegTech products that prove the stack—compliant automation and marketplaces with enforced permissions.",
  },
];

const proofPoints = [
  {
    title: "Privacy-first delivery",
    copy: "AI comes to your data. We never hold PII; everything runs on-prem or in your private cloud.",
  },
  {
    title: "Audit-ready by design",
    copy: "Liability firebreaks, traceability, and human-in-the-loop checkpoints keep regulators comfortable.",
  },
  {
    title: "Speed without chaos",
    copy: "Agentic workflows ship in days, not months, thanks to pre-built rolls and patterns.",
  },
];

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden bg-slate-950 text-white">
      <section className="relative w-full overflow-hidden py-20 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-24 -top-16 h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-600/20 blur-[100px]" />
        </div>
        <div className="container max-w-6xl px-6 mx-auto flex flex-col gap-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-mono font-semibold text-indigo-300 uppercase tracking-wider">
            About Sushi Software
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            The simplicity of sushi, applied to sovereign AI
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            We design AI automation that is as deliberate as a perfect roll—clean, compliant, and ready for regulated industries. Design thinking plus systems thinking keep complexity under the hood while workflows stay elegant.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5">On-prem first</span>
            <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5">No PII custody</span>
            <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5">Agentic workflows</span>
            <span className="px-3 py-1 rounded-full border border-white/15 bg-white/5">Compliance-as-code</span>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-900 py-16 border-b border-white/10">
        <div className="container max-w-6xl px-6 mx-auto grid gap-8 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-indigo-300">
                <Layers className="size-5" />
                {item.title}
              </div>
              <p className="text-slate-200 leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-slate-950 py-16 border-b border-white/10">
        <div className="container max-w-6xl px-6 mx-auto flex flex-col gap-8">
          <div className="text-center space-y-3">
            <p className="text-sm font-semibold text-indigo-300 uppercase tracking-[0.2em]">Ecosystem</p>
            <h2 className="text-3xl font-bold">Four lanes, one experience</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Kitchen, Legal, Law, and Aegis each own their lane, but the experience feels seamless to clients—to them it is one simple, compliant flow.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {units.map((unit) => (
              <div key={unit.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 shadow-sm space-y-3">
                <h3 className="text-xl font-semibold text-white">{unit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{unit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-900 py-16 border-b border-white/10">
        <div className="container max-w-6xl px-6 mx-auto grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-semibold text-emerald-300 uppercase tracking-wider">
              How we deliver
            </div>
            <h3 className="text-3xl font-bold">Design + systems in one motion</h3>
            <p className="text-slate-300 leading-relaxed">
              We frame every engagement as a workflow: intent, guardrails, automation, and verification. The outcome is clarity for executives and safety for regulators.
            </p>
            <ul className="space-y-3 text-slate-200">
              <li className="flex items-center gap-3"><Sparkles className="size-5 text-indigo-300" />Blueprint fast, iterate live with stakeholders.</li>
              <li className="flex items-center gap-3"><Workflow className="size-5 text-indigo-300" />Agentic flows with human checkpoints where they matter.</li>
              <li className="flex items-center gap-3"><ShieldCheck className="size-5 text-indigo-300" />Compliance baked into the code—no bolt-ons later.</li>
              <li className="flex items-center gap-3"><Compass className="size-5 text-indigo-300" />Clear handover paths to each brand when depth is needed.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg space-y-5">
            <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-indigo-300">
              <Terminal className="size-5" />
              Proof points
            </div>
            <div className="space-y-4">
              {proofPoints.map((point) => (
                <div key={point.title} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <h4 className="text-lg font-semibold text-white">{point.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{point.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
