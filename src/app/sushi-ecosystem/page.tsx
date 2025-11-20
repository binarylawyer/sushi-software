import { Button } from "@/components/ui/button";
import { FooterSection } from "@/components/FooterSection";

const COMPANIES = [
  {
    name: "Sushi Kitchen",
    description:
      "Design-led R&D: the Sushi Stack (Dockerized AI/agentic workflows with n8n, Qdrant/GraphRAG) packaged for on-prem simplicity.",
    href: "/kitchen",
    bullets: [
      "Modular Rolls/Combos/Platters; sovereign AI in days",
      "Agentic workflows + HITL via n8n; no PII custody",
      "Licensed IP and insulation across the ecosystem",
    ],
  },
  {
    name: "Sushi Legal",
    description:
      "Compliance-as-code and liability firebreaks?dual domicile schemas, reliance letters, indemnity, and passports for automation.",
    href: "/legal",
    bullets: [
      "CH/LI/DE schemas; compliance-by-design",
      "Trusted Issuer / reliance frameworks for member firms",
      "Audit-ready, regulator-friendly blueprints",
    ],
  },
  {
    name: "Sushi Law",
    description:
      "Human-oracle network issuing attestations without exposing PII; keeps verification inside privilege walls.",
    href: "/law",
    bullets: [
      "Indemnified SLAs for attestations",
      "Claims-driven permissions; no PII on-platform",
      "Collector-controlled disclosure; no poaching risk",
    ],
  },
  {
    name: "Aegis Core",
    description:
      "RegTech product demonstrating the stack: compliant automation/marketplaces with enforced permissions and instant settlement options.",
    href: "/aegis-core",
    bullets: [
      "Agentic compliance flows; no PII custody",
      "Instant payout logic; claims-driven gating",
      "Proof that simplicity + compliance co-exist",
    ],
  },
  {
    name: "Aegis Pro",
    description:
      "White-glove deployments and bespoke integrations for regulated partners.",
    href: "/aegis-pro",
    bullets: [
      "Custom workflows and RAG pipelines",
      "Compliance architecture embedded",
      "Faster launches; on-prem friendly",
    ],
  },
];

export default function SushiEcosystemPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="relative w-full overflow-hidden bg-slate-950 text-white py-24 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-600/20 blur-[100px]" />
        </div>
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-mono font-semibold text-indigo-300 uppercase tracking-wider">
            Sushi Ecosystem
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simplicity of sushi across the entire stack
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Unified design and systems thinking?Kitchen, Legal, Law, Aegis?delivering on-prem, audit-ready AI automation without PII custody.
          </p>
        </div>
      </section>

      <section className="w-full bg-slate-900 text-white py-16 border-b border-white/10">
        <div className="container max-w-6xl px-6 mx-auto grid gap-8">
          {COMPANIES.map((company) => (
            <div
              key={company.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{company.name}</h2>
                <p className="text-slate-200 leading-relaxed">
                  {company.description}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-slate-200">
                {company.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 size-2 rounded-full bg-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button asChild size="lg" className="mt-2 rounded-full bg-white text-slate-950 hover:bg-slate-200">
                  <a href={company.href}>Visit {company.name}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
