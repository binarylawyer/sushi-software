import { ArrowRight, Layers, Landmark, Scale, Building2, Sparkles } from "lucide-react";

const ECOSYSTEM = [
  {
    title: "Aegis Core",
    description: "The double-blind RWA marketplace with ERC-3643 compliance baked into every transfer.",
    href: "/aegis-core",
    icon: Landmark,
  },
  {
    title: "Sushi Kitchen",
    description: "The IP and infrastructure factory—Dockerized stack, n8n orchestration, OCR/RAG, and the Profiler.",
    href: "/kitchen",
    icon: Layers,
  },
  {
    title: "Sushi Legal",
    description: "Compliance-as-code blueprints: dual domicile, liability firebreaks, reliance letters, and passports.",
    href: "/legal",
    icon: Scale,
  },
  {
    title: "Sushi Law",
    description: "Human-oracle network of vetted firms issuing attestations while keeping PII inside privilege walls.",
    href: "/law",
    icon: Building2,
  },
  {
    title: "Aegis Pro",
    description: "Professional services and advanced deployments for regulated partners and bespoke integrations.",
    href: "/aegis-pro",
    icon: Sparkles,
  },
];

const EcosystemSection = () => {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold text-primary">The Sushi ecosystem</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            One parent company, five focused products
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Design thinking and systems thinking meet regulated finance—each unit handles its lane, together they deliver compliant liquidity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex h-full flex-col justify-between rounded-2xl border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </span>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                <span>Learn more</span>
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { EcosystemSection };
