export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Support</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">We route you to the right team based on your property of interest.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Sales & scoping</h2>
            <p className="text-muted-foreground leading-relaxed">Use Contact Sales for new projects, custom deployments, and partnership inquiries.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Technical support</h2>
            <p className="text-muted-foreground leading-relaxed">For Sushi Kitchen stack questions (n8n, OCR/RAG, integrations) or Aegis Core flows, contact Support.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Legal & compliance</h2>
            <p className="text-muted-foreground leading-relaxed">For Sushi Legal or Sushi Law attestations, work through member firms and the published SLAs.</p>
          </div>
        </div>
      </section>
    </main>
  );
}