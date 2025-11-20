export default function Page() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-16">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Help Center</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Quick guidance on using the Sushi ecosystem.</p>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className="container max-w-5xl px-6 mx-auto space-y-8">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Getting started</h2>
            <p className="text-muted-foreground leading-relaxed">Explore the Sushi Ecosystem page to choose the right property; use Contact Sales for tailored guidance.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Brand pages</h2>
            <p className="text-muted-foreground leading-relaxed">Each brand page (Kitchen, Legal, Law, Aegis Core/Pro) outlines capabilities and links to deeper resources.</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">Need more?</h2>
            <p className="text-muted-foreground leading-relaxed">Reach out via Contact Sales or Support for specific implementation questions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}