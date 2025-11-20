"use client";

import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Book,
  Cpu,
  Database,
  FileCheck2,
  Landmark,
  Layers,
  Lock,
  Sparkles,
  Stamp,
  Terminal as TerminalIcon,
  Trees,
  Zap,
  ShieldCheck,
} from "lucide-react";

const terminalLines = [
  "> INITIATING SUSHI_STACK_V2...",
  "> LOADING MODULE: JURISDICTION_ROUTER [CH/LI/DE]",
  "> CONNECTING TO QDRANT VECTOR DB...",
  "> ESTABLISHING RELIANCE_REGISTRY LINK...",
  "> STATUS: SYSTEM OPERATIONAL",
  "> WAITING FOR ATTESTATION INPUT...",
  "> DETECTED ASSET: $30T_RWA_MIGRATION",
];

const ecosystemItems = [
  {
    title: "Sushi Kitchen",
    subtitle: "The Factory",
    desc: "R&D Lab & IP Holder. Owns the proprietary 'Sushi Stack' (Docker/n8n/Python) and licenses compliance infrastructure.",
    icon: <Cpu className="size-5" />,
    href: "/kitchen",
  },
  {
    title: "Sushi Legal",
    subtitle: "The Architect",
    desc: "Legal Engineering firm. Owns the dual-domicile schemas (Swiss/Liechtenstein) and reliance letter templates.",
    icon: <Book className="size-5" />,
    href: "/legal",
  },
  {
    title: "Sushi Law",
    subtitle: "The Network",
    desc: "Directory of member firms acting as human oracles. They perform KYC and issue liability-backed attestations.",
    icon: <Trees className="size-5" />,
    href: "/law",
  },
  {
    title: "Aegis Core",
    subtitle: "The Product",
    desc: "Consumer-facing exchange. Double-blind matching of HNW capital to RWA tokens with ERC-3643 enforcement.",
    icon: <Landmark className="size-5" />,
    href: "/aegis-core",
  },
  {
    title: "Aegis Pro",
    subtitle: "The Service",
    desc: "White-glove onboarding for institutional custodians and gallery partners requiring API-level integration.",
    icon: <Zap className="size-5" />,
    href: "/aegis-pro",
  },
];

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % terminalLines.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white py-32 border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div className="flex flex-col gap-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 self-center md:self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-mono font-semibold text-emerald-400 tracking-wider uppercase">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            System Status: Operational
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Compliance
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              As Code.
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-lg mx-auto md:mx-0">
            Sushi Software builds the “Liability Firebreak” infrastructure for the
            $30 Trillion RWA migration. We unite legal engineering with
            containerized logic.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-mono text-slate-500 md:justify-start">
            <span className="border border-white/10 px-2 py-1 rounded bg-white/5">
              ERC-3643
            </span>
            <span className="border border-white/10 px-2 py-1 rounded bg-white/5">
              CH/LI/DE Nexus
            </span>
            <span className="border border-white/10 px-2 py-1 rounded bg-white/5">
              No PII Custody
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="/aegis-core"
              className="inline-flex items-center justify-center rounded bg-emerald-500 px-6 py-3 text-sm font-bold text-black shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-all"
            >
              Deploy The Stack <ArrowRight className="ml-2 size-4" />
            </a>
            <a
              href="/legal"
              className="inline-flex items-center justify-center rounded border border-white/20 bg-transparent px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all"
            >
              View Architecture
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          <div className="relative min-h-[320px] rounded-lg border border-white/10 bg-black/90 p-6 font-mono text-sm shadow-2xl backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-red-500/80" />
                <span className="size-3 rounded-full bg-yellow-500/80" />
                <span className="size-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-slate-500">root@sushi-kitchen:~</span>
            </div>
            <div className="space-y-3 font-mono">
              {terminalLines.map((line, i) => (
                <div
                  key={line}
                  className={`transition-all duration-300 ${
                    i <= idx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  } ${line.includes("LOADING") ? "text-blue-400" : "text-emerald-400"}`}
                >
                  {line}
                </div>
              ))}
              <div className="animate-pulse text-emerald-500 font-bold">_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TheStack = () => (
  <section className="w-full py-20 bg-slate-50 border-b border-slate-200">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
          The Sushi Stack
        </h2>
        <div className="w-16 h-1 bg-emerald-500 mb-4" />
        <p className="text-slate-600 max-w-2xl">
          We do not just write contracts; we deploy infrastructure. The Sushi Stack
          replaces traditional governance with containerized code.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="size-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
            <Activity className="size-5" />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">n8n Orchestration</h3>
          <p className="text-sm text-slate-600 mb-4">
            Visual workflows that generate reliance letters, hash them, and route them
            to cold storage.
          </p>
          <div className="flex gap-2">
            <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
              Node.js
            </span>
            <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
              Webhooks
            </span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="size-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
            <Database className="size-5" />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Qdrant RAG Core</h3>
          <p className="text-sm text-slate-600 mb-4">
            Vector database storing embeddings of global art inventory to power
            double-blind matching.
          </p>
          <div className="flex gap-2">
            <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
              Vector DB
            </span>
            <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
              Python
            </span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
          <div className="size-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
            <Lock className="size-5" />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Chain Gateway</h3>
          <p className="text-sm text-slate-600 mb-4">
            Isolated service using Web3.py to sign transactions and write reliance
            hashes to chain.
          </p>
          <div className="flex gap-2">
            <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
              ERC-3643
            </span>
            <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
              Solidity
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EcosystemCards = () => (
  <section className="w-full py-20 bg-white">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold text-emerald-600 tracking-wide uppercase mb-2">
          The Corporate Architecture
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          One parent. Four specialized entities.
        </h2>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
          Design thinking meets regulated finance to handle the $30T opportunity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ecosystemItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500/30"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex size-10 items-center justify-center rounded-lg bg-slate-50 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  {item.icon}
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400 uppercase">
                  {item.subtitle}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600">
              <span>Access Node</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    {
      title: "Invite",
      desc: "Partners invite collectors; platform never touches PII.",
      icon: <ShieldCheck className="size-5" />,
    },
    {
      title: "Vet",
      desc: "Law firms run HITL workflows to complete AML/KYC.",
      icon: <FileCheck2 className="size-5" />,
    },
    {
      title: "Attest",
      desc: "Trusted issuers post ERC-3643 claims on-chain—anonymous, permissioned.",
      icon: <Stamp className="size-5" />,
    },
    {
      title: "Settle",
      desc: "Compliance enforced at transfer; buyers stay private, sellers get Instant Pay.",
      icon: <Sparkles className="size-5" />,
    },
  ];
  return (
    <section className="w-full bg-slate-50 py-20 border-y border-slate-200">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl mb-4">
            Double-blind mechanics
          </h2>
          <p className="text-slate-600 max-w-2xl">
            The liability firebreak ensures we verify the verifiers, not the users.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  {step.icon}
                </span>
                <div className="text-lg font-bold text-slate-900">{`${i + 1}. ${step.title}`}</div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstantPay = () => (
  <section className="w-full py-20 bg-white">
    <div className="container mx-auto max-w-5xl px-6">
      <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-10 shadow-lg">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-inner">
              <Sparkles className="size-8" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">
                Unit Economics
              </p>
              <h3 className="text-3xl font-bold text-slate-900">
                Instant Pay Settlement
              </h3>
            </div>
          </div>
          <div className="text-slate-600 max-w-md text-sm leading-relaxed border-l-2 border-emerald-200 pl-6">
            Aegis Core advances 98.5% of funds instantly (T+0) while settling T+2
            on the backend, capturing a 1.5% fee and float revenue.
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {["ERC-3643 Gating", "PaymentSplitter", "Atomic Settlement", "No PII Custody"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm"
              >
                {tag}
              </span>
            )
          )}
          <button className="ml-auto inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700">
            Read the Whitepaper <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default function DemoTwoPage() {
  return (
    <main className="flex w-full flex-col items-center overflow-hidden font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Hero />
      <section className="w-full py-8 bg-slate-950 border-b border-white/5 text-center">
        <p className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-4">
          Trusted infrastructure for
        </p>
        <div className="flex justify-center gap-12 opacity-30 grayscale">
          <div className="h-6 w-24 bg-white/20 rounded animate-pulse" />
          <div className="h-6 w-24 bg-white/20 rounded animate-pulse" />
          <div className="h-6 w-24 bg-white/20 rounded animate-pulse" />
          <div className="h-6 w-24 bg-white/20 rounded animate-pulse" />
        </div>
      </section>
      <TheStack />
      <EcosystemCards />
      <HowItWorks />
      <InstantPay />
      <footer className="w-full py-12 bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <TerminalIcon className="size-5 text-emerald-500" />
            <span className="font-bold text-white">
              SUSHI<span className="text-slate-600">SOFTWARE</span>
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Docs
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Status
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              GitHub
            </a>
          </div>
          <div className="font-mono text-xs opacity-50">© 2025 Sushi Kitchen Labs LLC.</div>
        </div>
      </footer>
    </main>
  );
}
