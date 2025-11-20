export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Privacy & Data Handling</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">We design for minimal data liability: PII stays with trusted firms (Sushi Law) while the platform uses on-chain claims to enforce compliance.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">PII minimization</h2>
            <p className="text-muted-foreground leading-relaxed">We do not store user PII in the marketplace. Identity is held by member law firms inside privilege; on-chain claims are anonymous.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Compliance by construction</h2>
            <p className="text-muted-foreground leading-relaxed">ERC-3643 gating ensures transfers only occur when required claims are present; audits and HITL review protect quality of attestations.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Data boundaries</h2>
            <p className="text-muted-foreground leading-relaxed">Off-chain sensitive data lives in segregated systems; on-chain only stores claims and permissions. No centralized ?cleared buyer? database.</p>
          </div>
        </div>
      </section>
    </main>
  );
}