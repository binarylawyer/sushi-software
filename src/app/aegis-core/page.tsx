import { FooterSection } from "@/components/FooterSection";

const bullets = [
  "ERC-3643 compliant transfers with canTransfer gating tied to on-chain attestations.",
  "Double-blind privacy: platform never touches PII, law firms hold privilege.",
  "Instant Pay settlement (1.5% fee, ~3-day float) for galleries and artists.",
  "NFT Vault pattern: ERC-721 master + ERC-3643 fractional, enforced royalties.",
  "Compliant UX: Bring Your Own Wallet, dynamic buy-state, no user emails stored.",
];

export default function AegisCorePage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-24">
        <div className="container max-w-5xl px-6 mx-auto text-center flex flex-col gap-6">
          <p className="text-sm font-semibold text-primary">Aegis Core</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            The double-blind marketplace for regulated RWAs & art
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compliance-enforced liquidity without sacrificing privacy. Verification stays with counsel; attestations live on-chain; transfers self-enforce.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">ERC-3643 Identity Registry</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">Instant Pay</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">No PII custody</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">NFT Vault model</span>
          </div>
        </div>
      </section>
      <section className="w-full py-16">
        <div className="container max-w-4xl px-6 mx-auto grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">What Aegis Core does</h2>
            <p className="text-muted-foreground leading-relaxed">
              Provides a compliant, anonymous trading venue for tokenized art and RWAs. Transfers check eligibility on-chain; buyers remain pseudonymous; sellers get immediate settlement options.
            </p>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Why it matters</h2>
            <p className="text-muted-foreground leading-relaxed">
              Regulatory rigor with collector-grade privacy solves the art market trilemma—unlocking liquidity while keeping client lists and identities protected.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full pb-24">
        <div className="container max-w-5xl px-6 mx-auto">
          <div className="rounded-3xl border bg-card p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Core capabilities</h3>
            <ul className="space-y-3 text-muted-foreground">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
