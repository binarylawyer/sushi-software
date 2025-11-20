export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Team</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">A cross-functional group of legal engineers, product designers, and systems builders focused on compliant liquidity for RWAs.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Design + systems thinking</h2>
            <p className="text-muted-foreground leading-relaxed">We pair product design sensibilities with robust system architecture to deliver elegant front-ends backed by verifiable compliance.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Legal engineering</h2>
            <p className="text-muted-foreground leading-relaxed">We work with boutique law firms and compliance experts to encode jurisdictional rules into operational playbooks and attestations.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Automation & infra</h2>
            <p className="text-muted-foreground leading-relaxed">From OCR/RAG pipelines to n8n-orchestrated workflows, we build the Sushi Stack that powers the ecosystem.</p>
          </div>
        </div>
      </section>
    </main>
  );
}