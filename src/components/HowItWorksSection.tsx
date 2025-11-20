import { ShieldCheck, FileCheck2, Stamp, Sparkles } from "lucide-react";

const STEPS = [
  {
    title: "Invite",
    description: "Galleries and partners invite collectors through Sushi Software with zero PII touching the platform.",
    icon: ShieldCheck,
  },
  {
    title: "Vet",
    description: "Law firms run HITL workflows (Opus) to complete AML/KYC and keep data within attorney-client privilege.",
    icon: FileCheck2,
  },
  {
    title: "Attest",
    description: "Trusted issuers publish on-chain claims (ERC-3643) so wallets become compliant without exposing identity.",
    icon: Stamp,
  },
  {
    title: "Settle",
    description: "Compliance is enforced at transfer time; buyers stay anonymous, sellers get Instant Pay settlement.",
    icon: Sparkles,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-20 md:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-3 text-center">
          <p className="text-sm font-semibold text-primary">How it works</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Double-blind compliance, end to end
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Invite collectors, run HITL compliance, post attestations on-chain, and enforce rules at transfer time.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="relative flex flex-col gap-3 rounded-2xl border bg-card p-5 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="size-5" />
                </span>
                <div className="text-lg font-semibold">{`${idx + 1}. ${step.title}`}</div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HowItWorksSection };
