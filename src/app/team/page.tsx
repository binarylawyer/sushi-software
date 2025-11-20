import { FooterSection } from "@/components/FooterSection";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Team</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">A cross-functional group of legal engineers, product designers, and systems builders focused on compliant liquidity for RWAs.</p>
        </div>
      </section>
      <section className="w-full pb-12">
        <div className="container max-w-5xl px-6 mx-auto text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">Overview</p>
          <p className="text-muted-foreground mt-3">We blend design thinking and systems thinking to craft regulated user experiences backed by verifiable compliance.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Sushi Kitchen</h3>
            <p className="text-sm text-muted-foreground mt-2">IP + infrastructure factory for compliant automation and RAG.</p>
          </div>
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Sushi Legal</h3>
            <p className="text-sm text-muted-foreground mt-2">Compliance-as-code blueprints and liability firebreaks.</p>
          </div>
          <div className="rounded-2xl border bg-card p-4 shadow-sm">
            <h3 className="text-lg font-semibold">Sushi Law</h3>
            <p className="text-sm text-muted-foreground mt-2">Trusted issuers holding PII and posting on-chain claims.</p>
          </div>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Design + systems thinking</h2>
            <p className="text-muted-foreground leading-relaxed">We pair product design sensibilities with robust system architecture to deliver elegant front-ends backed by compliance.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Legal engineering</h2>
            <p className="text-muted-foreground leading-relaxed">Boutique law expertise encoded into operational playbooks and attestations.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Automation & infra</h2>
            <p className="text-muted-foreground leading-relaxed">OCR/RAG pipelines, n8n workflows, and the Sushi Stack power the ecosystem.</p>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}