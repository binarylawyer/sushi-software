"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-background via-slate-50 to-background py-28">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      </div>
      <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-6 text-center">
        <span className="rounded-full bg-muted px-4 py-1 text-sm font-semibold text-primary">
          Sushi Software — design + systems thinking for compliant RWAs
        </span>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
          The parent company powering the double-blind marketplace and compliant liquidity stack
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Sushi Software unites Aegis Core, Sushi Kitchen, Sushi Legal, Sushi Law, and Aegis Pro to deliver privacy-first, compliance-enforced transactions for art and RWAs—without ever holding PII.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-6 py-3 text-base"
            asChild
          >
            <a href="/aegis-core">
              Explore Aegis Core
              <ArrowRight className="ml-2 size-4 -rotate-45 transition group-hover:rotate-0" />
            </a>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="rounded-full px-6 py-3 text-base"
            asChild
          >
            <a href="/legal">
              Talk to Legal Engineering
              <ArrowRight className="ml-2 size-4 -rotate-45 transition group-hover:rotate-0" />
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
          <span className="rounded-full bg-muted px-3 py-1">ERC-3643 compliance gating</span>
          <span className="rounded-full bg-muted px-3 py-1">Instant Pay settlement</span>
          <span className="rounded-full bg-muted px-3 py-1">No PII custody</span>
          <span className="rounded-full bg-muted px-3 py-1">Dual-domicile architecture</span>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
