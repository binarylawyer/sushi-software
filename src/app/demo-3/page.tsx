"use client";

import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Briefcase,
  Cpu,
  Database,
  Layers,
  Lock,
  Network,
  Shield,
  Terminal as TerminalIcon,
} from "lucide-react";

const terminalLines = [
  "> INITIALIZING SUSHI_OS KERNEL...",
  "> LOADING MODULE: PRIVACY_PRESERVING_AI [ON-PREM]",
  "> DETECTED SECTOR: LEGAL_TECH... HEALTHCARE... FINANCE...",
  "> DEPLOYING: DOCKER_COMPOSE_STACK_V2",
  "> ESTABLISHING: LIABILITY_FIREBREAK_PROTOCOL",
  "> STATUS: SOVEREIGNTY RESTORED.",
];

const ecosystemItems = [
  {
    title: "Sushi Kitchen",
    subtitle: "The Factory",
    desc: "Design-led R&D and IP holder. Builds the Sushi Stack—Dockerized, privacy-first AI/agentic workflows packaged for any environment.",
    icon: <Cpu className="size-5" />,
    href: "/kitchen",
    tags: ["Docker", "n8n", "Python"],
  },
  {
    title: "Sushi Legal",
    subtitle: "The Architect",
    desc: "Designs compliance-as-code schemas (Swiss/Liechtenstein/Delaware) so sophisticated AI remains simple, auditable, and regulator-ready.",
    icon: <Shield className="size-5" />,
    href: "/legal",
    tags: ["Structuring", "Compliance", "Risk"],
  },
  {
    title: "Sushi Law",
    subtitle: "The Network",
    desc: "Curated human-oracle network. Verifies and attests without exposing PII—keeping workflows elegant and liability contained.",
    icon: <Network className="size-5" />,
    href: "/law",
    tags: ["Verification", "Attestation", "Trust"],
  },
  {
    title: "Aegis Core",
    subtitle: "The Flagship Product",
    desc: "RegTech product demonstrating the stack: compliant marketplaces and agentic automation built with the simplicity of sushi.",
    icon: <Briefcase className="size-5" />,
    href: "/aegis-core",
    tags: ["RegTech", "Automation", "Compliance"],
  },
];

const verticals = [
  {
    title: "Legal Tech",
    icon: <Briefcase className="size-6" />,
    desc: "AI research tools respecting privilege. Data stays on-prem.",
  },
  {
    title: "Healthcare",
    icon: <Activity className="size-6" />,
    desc: "HIPAA-grade clinical AI. Patient data never leaves your control.",
  },
  {
    title: "Finance",
    icon: <Lock className="size-6" />,
    desc: "Sovereign automation for funds and family offices without leaking strategy.",
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
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-indigo-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-600/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div className="flex flex-col gap-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 self-center md:self-start rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-mono font-semibold text-indigo-400 tracking-wider uppercase">
            <div className="size-2 rounded-full bg-indigo-500 animate-pulse" />
            Sushi Software Platform v2.0
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Sovereign AI
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Infrastructure.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0">
            We design and ship agentic AI workflows with the simplicity of sushi.
            Design thinking + systems thinking turn complex compliance into elegant,
            on-prem automation for legal, healthcare, and finance.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="/kitchen"
              className="inline-flex items-center justify-center rounded bg-white text-slate-950 px-6 py-3 text-sm font-bold shadow-lg hover:bg-slate-200 transition-all"
            >
              Explore The Kitchen <ArrowRight className="ml-2 size-4" />
            </a>
            <a
              href="/aegis-core"
              className="inline-flex items-center justify-center rounded border border-white/20 bg-transparent px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all"
            >
              View Aegis Core
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000" />
          <div className="relative min-h-[320px] rounded-lg border border-white/10 bg-black/90 p-6 font-mono text-sm shadow-2xl backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-red-500/80" />
                <span className="size-3 rounded-full bg-yellow-500/80" />
                <span className="size-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-slate-500">root@sushi-software:~</span>
            </div>
            <div className="space-y-3 font-mono">
              {terminalLines.map((line, i) => (
                <div
                  key={line}
                  className={`transition-all duration-300 ${
                    i <= idx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  } ${line.includes("LOADING") ? "text-indigo-400" : "text-emerald-400"}`}
                >
                  {line}
                </div>
              ))}
              <div className="animate-pulse text-indigo-500 font-bold">_</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ThePlatform = () => (
  <section className="w-full py-24 bg-slate-50 border-b border-slate-200">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
              One platform. Four entities.
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mb-6" />
            <p className="text-lg text-slate-600">
              A design-led, modular ecosystem for regulated AI. We keep the
              simplicity of sushi while solving privacy/transparency across industries.
            </p>
          </div>

          <div className="grid gap-6">
            {ecosystemItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="mt-1 size-10 shrink-0 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <span className="text-xs font-mono uppercase tracking-wide text-slate-400">
                      {item.subtitle}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium bg-slate-100 text-slate-500 px-2 py-1 rounded border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-white h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TerminalIcon className="text-indigo-400 size-5" />
              The Core Thesis
            </h3>
            <div className="space-y-6 font-light text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">The Problem:</strong> Regulated
                industries are blocked from public cloud models because of privacy
                laws and liability risk.
              </p>
              <p>
                <strong className="text-white">The Solution:</strong> We bring the AI
                to the data, not the data to the AI. Sushi Kitchen’s on-prem stack +
                Sushi Legal’s liability frameworks create safe harbors for innovation.
              </p>
              <p>
                <strong className="text-white">The Result:</strong> Firms run AI on
                sensitive data (case files, patient records, strategies) without data
                leaving their control.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-4">
                Target Verticals
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {verticals.map((v) => (
                  <div
                    key={v.title}
                    className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="text-indigo-400 mb-2">{v.icon}</div>
                    <div className="font-bold text-sm">{v.title}</div>
                    <div className="text-xs text-slate-400 mt-1">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TechStack = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto max-w-5xl px-6 text-center">
      <p className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">
        The Engine Room
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
        Powered by the Sushi Stack
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
          <div className="size-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-blue-600">
            <Layers className="size-6" />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Dockerized Microservices</h3>
          <p className="text-sm text-slate-600">
            Modular rolls of software. Agentic workflows and AI tools packaged into
            deployable containers that run anywhere with minimal setup.
          </p>
        </div>
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
          <div className="size-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-indigo-600">
            <Activity className="size-6" />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">n8n Orchestration</h3>
          <p className="text-sm text-slate-600">
            The nervous system. Low-code workflows connecting legal logic to AI
            inference and systems automation.
          </p>
        </div>
        <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
          <div className="size-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-4 text-emerald-600">
            <Database className="size-6" />
          </div>
          <h3 className="font-bold text-slate-900 mb-2">Qdrant & GraphRAG</h3>
          <p className="text-sm text-slate-600">
            The brain. Advanced vector search and RAG powering Profiler and agentic
            discovery engines.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="size-8 bg-indigo-600 rounded-sm flex items-center justify-center text-white font-bold">
          S
        </div>
        <span className="font-bold text-white text-lg">
          SUSHI<span className="text-slate-500">SOFTWARE</span>
        </span>
      </div>
      <div className="flex gap-8 text-sm font-medium">
        <a href="/kitchen" className="hover:text-white transition-colors">
          Sushi Kitchen
        </a>
        <a href="/legal" className="hover:text-white transition-colors">
          Sushi Legal
        </a>
        <a href="/aegis-core" className="hover:text-white transition-colors">
          Aegis Core
        </a>
        <a href="#" className="hover:text-white transition-colors">
          GitHub
        </a>
      </div>
      <div className="text-xs text-slate-600">© 2025 Sushi Software Inc. All Rights Reserved.</div>
    </div>
  </footer>
);

const Explainer = () => (
  <section className="w-full bg-white py-16 border-y border-slate-200">
    <div className="container max-w-6xl px-6 mx-auto text-center space-y-4">
      <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">
        The simplicity of sushi
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Design thinking + systems thinking → elegant AI automation
      </h2>
      <p className="text-slate-600 max-w-3xl mx-auto">
        We keep sophisticated, regulated workflows as simple as sushi—concise, intentional,
        and repeatable. AI agentic workflows are packaged, on-prem friendly, and auditable.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Bring AI to the data",
            desc: "On-prem/edge containers. No PII leaves. Minimal setup for maximal control.",
          },
          {
            title: "Design the workflows",
            desc: "Agentic flows and HITL checkpoints; policy as code; clear audit trails.",
          },
          {
            title: "Enforce in code",
            desc: "Attestations, claims, and permissions baked into automation for compliance-grade reliability.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProductsServices = () => (
  <section className="w-full py-16 bg-slate-50 border-b border-slate-200">
    <div className="container max-w-6xl px-6 mx-auto">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">
          Products & Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Beyond Aegis: the full Sushi portfolio
          </h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          RegTech, agentic automation, and compliance design systems for legal, healthcare, finance,
          and more.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Agentic Workflows",
            desc: "AI agents + HITL checkpoints delivered through n8n orchestration and containerized services.",
          },
          {
            title: "Compliance Design System",
            desc: "Blueprints, schemas, and liability firebreaks to keep automation audit-ready.",
          },
          {
            title: "RegTech Products",
            desc: "Aegis Core, bespoke deployments, and verticalized solutions built on the Sushi Stack.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProofCTA = () => (
  <section className="w-full py-16 bg-white border-t border-slate-200">
    <div className="container max-w-6xl px-6 mx-auto grid gap-10 md:grid-cols-2 items-center">
      <div className="space-y-3">
        <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">
          Why we stay simple
        </p>
        <h3 className="text-3xl font-bold text-slate-900">
          Complex regulation, simple delivery
        </h3>
        <p className="text-slate-600">
          Design thinking reduces friction; systems thinking ensures reliability. We package AI
          automation so regulated teams can deploy fast without adding risk.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-700">
          <span className="rounded-full bg-slate-100 px-3 py-1">On-prem friendly</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">No PII custody</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Audit-ready</span>
          <span className="rounded-full bg-slate-100 px-3 py-1">Agentic + HITL</span>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h4 className="text-xl font-bold text-slate-900 mb-3">Ready to see the stack?</h4>
        <p className="text-sm text-slate-600 mb-6">
          We’ll tailor a design + systems walkthrough for your team and vertical—legal, healthcare, finance, or beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/contact-sales"
            className="inline-flex items-center justify-center rounded bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow hover:bg-indigo-500 transition"
          >
            Book a session
          </a>
          <a
            href="/kitchen"
            className="inline-flex items-center justify-center rounded border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100 transition"
          >
            Explore Sushi Stack
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default function DemoThreePage() {
  return (
    <main className="flex w-full flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Hero />
      <Explainer />
      <ThePlatform />
      <TechStack />
      <ProductsServices />
      <ProofCTA />
      <Footer />
    </main>
  );
}
