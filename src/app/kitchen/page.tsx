import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

export default function KitchenPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full py-24 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Sushi Kitchen
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8 px-4">
          The IP and infrastructure factory. Build and deploy the Sushi Stack with modular Rolls/Combos/Platters for compliant RWA and art workflows.
        </p>
        <Button size="lg" className="rounded-full" asChild>
          <a href="https://sushikitchen.io" target="_blank" rel="noreferrer">
            Visit SushiKitchen.io
          </a>
        </Button>
      </section>

      <section className="w-full py-16">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Role in the Sushi ecosystem</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sushi Kitchen houses the Sushi Stack—Dockerized microservices, n8n orchestration, OCR/Python pipelines, and Qdrant-backed RAG (Profiler). It licenses IP to the other entities while insulating core assets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What it delivers</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Modular Rolls/Combos/Platters for rapid deployment.</li>
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Profiler RAG for lead-gen and research using public data.</li>
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Workflow automation via n8n + External Service Nodes.</li>
                <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />IP held separately for legal insulation and licensing.</li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How it works</h3>
              <p className="text-muted-foreground leading-relaxed">
                Galleries and partners spin up the stack as needed; OCR/RAG ingests catalogs; n8n orchestrates compliance-friendly workflows; outputs feed Aegis Core and Sushi Law for attestations and compliant liquidity.
              </p>
              <div className="mt-4 h-32 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-primary/5 border" />
            </div>
          </div>

          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Who it’s for</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Internal teams building compliant RWA experiences.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Galleries needing ingestion, automation, and lead-gen.</li>
              <li className="flex gap-3"><span className="mt-1 size-2 rounded-full bg-primary" />Partners licensing the Sushi Stack for their own jurisdictions.</li>
            </ul>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
