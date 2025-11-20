import { FooterSection } from "@/components/FooterSection";

const resources = [
  "Aegis Core commercial plan",
  "Product Requirements (Aegis Core v2.0)",
  "System Architecture Blueprint",
  "Reliance letter and MSA overviews (coming soon)",
  "Press and case studies (in progress)",
];

export default function ResourcesPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-24">
        <div className="container max-w-5xl px-6 mx-auto text-center flex flex-col gap-6">
          <p className="text-sm font-semibold text-primary">Resources</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Whitepapers, architecture, and press
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the documentation that underpins the Sushi Software ecosystem. More assets are being prepared.
          </p>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="container max-w-5xl px-6 mx-auto rounded-3xl border bg-card p-8 shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Currently available</h3>
          <ul className="space-y-3 text-muted-foreground">
            {resources.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Need something specific? Reach out via the Sushi Legal contact to request additional materials.
          </p>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
