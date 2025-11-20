import { ArrowUpRight, Zap } from "lucide-react";

const InstantPaySection = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-r from-primary/10 via-background to-primary/5 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3 text-primary">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                <Zap className="size-6" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary/70">Instant Pay</p>
                <h3 className="text-2xl font-semibold">Settlement in seconds, not 90 days</h3>
              </div>
            </div>
            <div className="text-sm text-muted-foreground max-w-md">
              1.5% fee, ~3-day float, ~180% APR-equivalent economics. Galleries choose immediate payout; compliance is enforced on-chain.
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-primary font-semibold">
            <span className="rounded-full bg-primary/10 px-3 py-1">ERC-3643 gating</span>
            <span className="rounded-full bg-primary/10 px-3 py-1">PaymentSplitter</span>
            <span className="rounded-full bg-primary/10 px-3 py-1">Atomic settlement</span>
            <span className="rounded-full bg-primary/10 px-3 py-1">No PII custody</span>
            <span className="rounded-full bg-primary/10 px-3 py-1 inline-flex items-center gap-1">
              Learn more <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { InstantPaySection };
