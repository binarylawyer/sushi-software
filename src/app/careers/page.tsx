export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Careers</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Join Sushi Software to build privacy-preserving, compliant rails for art and RWAs.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">What we value</h2>
            <p className="text-muted-foreground leading-relaxed">Craft, clarity, and compliance-first thinking. We ship fast while honoring the rigor required for regulated domains.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Open roles</h2>
            <p className="text-muted-foreground leading-relaxed">We are always meeting engineers, designers, and legal engineers who understand the intersection of UX and regulation.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">How we work</h2>
            <p className="text-muted-foreground leading-relaxed">Remote-friendly, async-first, with rapid iteration on prototypes and careful validation for production paths.</p>
          </div>
        </div>
      </section>
    </main>
  );
}