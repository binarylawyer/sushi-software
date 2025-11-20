export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Partners</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">We collaborate with law firms, custodians, insurers, and integration partners to deliver compliant liquidity.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Law partners</h2>
            <p className="text-muted-foreground leading-relaxed">Boutique firms specializing in art/RWA compliance act as trusted issuers in Sushi Law.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Custody & logistics</h2>
            <p className="text-muted-foreground leading-relaxed">Custodians and logistics providers integrate for NFT Vault metadata and movement workflows.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Technology</h2>
            <p className="text-muted-foreground leading-relaxed">Integration partners extend the Sushi Stack with custom workflows, analytics, and deployment services.</p>
          </div>
        </div>
      </section>
    </main>
  );
}