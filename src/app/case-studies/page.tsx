export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Case Studies</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Examples of privacy-first, compliant deployments using the Sushi ecosystem.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Double-blind sales</h2>
            <p className="text-muted-foreground leading-relaxed">How vetted collectors purchased tokenized art with on-chain compliance checks and no PII exposure to the platform.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Instant Pay impact</h2>
            <p className="text-muted-foreground leading-relaxed">Galleries leveraged 1.5% Instant Pay to unlock cash flow, reducing settlement cycles from 90 days to seconds.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Legal firebreak</h2>
            <p className="text-muted-foreground leading-relaxed">Separating IP in Liechtenstein and operations in CH/US to insulate assets while scaling regulated products.</p>
          </div>
        </div>
      </section>
    </main>
  );
}