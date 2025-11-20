import { FooterSection } from "@/components/FooterSection";

const services = [
  "Bespoke deployments of the Sushi Stack (n8n workflows, OCR/RAG pipelines, Qdrant).",
  "Advisory on ERC-3643 integration, attestations, and compliance automation.",
  "Custom UI/UX for regulated partners, integrating Bring Your Own Wallet flows.",
  "Integration with custodians, insurers, and logistics partners for tokenized assets.",
];

export default function AegisProPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-24">
        <div className="container max-w-5xl px-6 mx-auto text-center flex flex-col gap-6">
          <p className="text-sm font-semibold text-primary">Aegis Pro</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Professional services and advanced deployments
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For partners who need bespoke builds, deeper integrations, or guided rollouts of the Sushi Software ecosystem.
          </p>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="container max-w-5xl px-6 mx-auto rounded-3xl border bg-card p-8 shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">What we deliver</h3>
          <ul className="space-y-3 text-muted-foreground">
            {services.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
