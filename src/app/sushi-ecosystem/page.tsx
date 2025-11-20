import { Button } from "@/components/ui/button";
import { FooterSection } from "@/components/FooterSection";

const COMPANIES = [
  {
    name: "Sushi Kitchen",
    description:
      "The IP and infrastructure factory: Dockerized Sushi Stack, n8n orchestration, OCR/RAG Profiler, and modular Rolls/Combos/Platters.",
    href: "/kitchen",
    bullets: [
      "Licensed stack with radical modularity",
      "RAG lead-gen (Profiler) and workflow automation",
      "Built for compliant deployments and IP insulation",
    ],
  },
  {
    name: "Sushi Legal",
    description:
      "Compliance-as-code blueprints: dual-domicile architecture, reliance letters, indemnified member-firm MSAs, and compliance passports.",
    href: "/legal",
    bullets: [
      "Swiss/Liechtenstein firebreak + US Compliance Fortress",
      "Reliance Letter / Trusted Issuer standards",
      "Passporting across jurisdictions without holding PII",
    ],
  },
  {
    name: "Sushi Law",
    description:
      "Human-oracle network of vetted law firms issuing on-chain attestations while keeping PII inside privilege walls.",
    href: "/law",
    bullets: [
      "Design-partner firms for art/RWA compliance",
      "Tiered vetting SLAs with indemnity",
      "Attestations mapped to ERC-3643 claim topics",
    ],
  },
];

export default function SushiEcosystemPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-24">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-6 text-center">
          <div className="mx-auto h-48 w-full max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-blue-400/10 to-background" />
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">
              Sushi Ecosystem
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              A platform for simplicity in regulated RWAs
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unified design and systems thinking across Sushi Kitchen, Sushi Legal, and Sushi Law—delivering double-blind compliance, IP-grade infrastructure, and privacy-first attestations without ever holding PII.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          {COMPANIES.map((company) => (
            <div
              key={company.name}
              className="rounded-3xl border bg-card p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold">{company.name}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {company.description}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {company.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 size-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button asChild size="lg" className="mt-2 rounded-full">
                  <a href={company.href} target="_blank" rel="noreferrer">
                    Visit {company.name}
                  </a>
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
