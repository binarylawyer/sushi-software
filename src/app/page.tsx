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
  Workflow,
  Server,
} from "lucide-react";
import { FooterSection } from "@/components/FooterSection";

const terminalLines = [
  "> INITIALIZING SUSHI_OS KERNEL...",
  "> DETECTED ENVIRONMENT: REGULATED_SECTOR",
  "> LOADING MODULE: PRIVACY_PRESERVING_AI [ON-PREM]",
  "> DEPLOYING: DOCKER_COMPOSE_STACK_V2",
  "> ESTABLISHING: LIABILITY_FIREBREAK_PROTOCOL",
  "> STATUS: DATA SOVEREIGNTY RESTORED.",
];

const ecosystemItems = [
  {
    title: "The Factory (Sushi Kitchen)",
    desc: "Design-led R&D building the Sushi Stack—Dockerized, privacy-first agentic workflows (n8n, Qdrant, Python) you can run anywhere.",
    icon: <Cpu className="size-5" />,
    href: "/kitchen",
    tags: ["Docker", "n8n", "Local AI"],
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
  },
  {
    title: "The Architect (Sushi Legal)",
    desc: "Compliance-as-code schemas and liability firebreaks (CH/LI/DE) that keep automation regulator-ready and audit-friendly.",
    icon: <Shield className="size-5" />,
    href: "/legal",
    tags: ["Structuring", "Risk", "Governance"],
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "The Network (Sushi Law)",
    desc: "Curated human oracles verifying and attesting without exposing PII—trusted issuers baked into every workflow.",
    icon: <Network className="size-5" />,
    href: "/law",
    tags: ["Verification", "Attestation", "Trust"],
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "RegTech Apps (Aegis Core / Pro)",
    desc: "Proof points for the stack: compliant marketplaces and automation layers with enforced permissions.",
    icon: <Briefcase className="size-5" />,
    href: "/aegis-core",
    tags: ["RegTech", "Automation", "Compliance"],
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
];

const verticals = [
  {
    title: "Legal Tech",
    icon: <Briefcase className="size-6" />,
    desc: "Agentic research and drafting that respects privilege. Data stays on-prem.",
  },
  {
    title: "Healthcare",
    icon: <Activity className="size-6" />,
    desc: "HIPAA-grade clinical AI; diagnostics and triage with zero cloud exposure.",
  },
  {
    title: "Finance",
    icon: <Lock className="size-6" />,
    desc: "Sovereign automation for funds and family offices—strategies never leak.",
  },
];

const techTags = ["Docker", "Python", "n8n", "Qdrant", "GraphRAG", "LangChain"];

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
            Simplicity of sushi. <br />
            Sovereign AI workflows.
          </h1>

          <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0">
            We design AI automation that’s as precise and intentional as sushi. Design
            thinking + systems thinking turn complex compliance into elegant, on-prem
            agentic workflows—no data leaves your walls.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="/kitchen"
              className="inline-flex items-center justify-center rounded bg-white text-slate-950 px-6 py-3 text-sm font-bold shadow-lg hover:bg-slate-200 transition-all"
            >
              See on-prem demo <ArrowRight className="ml-2 size-4" />
            </a>
            <a
              href="/legal"
              className="inline-flex items-center justify-center rounded border border-white/20 bg-transparent px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all"
            >
              Read security docs
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

const CoreThesis = () => (
  <section className="w-full bg-slate-900 text-white py-16 border-b border-white/10">
    <div className="container max-w-5xl px-6 mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-indigo-300">
          Core Thesis
        </p>
        <h2 className="text-3xl font-bold">Why regulated teams stall on AI</h2>
        <p className="text-slate-300 max-w-3xl mx-auto">
          Public cloud AI risks leaks and liability. We bring AI to the data, wrap it in
          legal/compliance by design, and keep workflows agentic + auditable.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "The Problem",
            desc: "Sensitive data can’t leave your premise. Cloud AI violates privilege, HIPAA, and regulatory mandates.",
          },
          {
            title: "The Solution",
            desc: "On-prem, containerized AI + compliance schemas + human-oracle attestations. Simplicity of sushi, rigor of regulated industries.",
          },
          {
            title: "The Result",
            desc: "Deploy agentic workflows in days, not months. No PII custody by the platform; liability stays where it belongs.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
            <p className="text-sm text-slate-200 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <a
          href="/contact-sales"
          className="inline-flex items-center justify-center rounded bg-white text-slate-900 px-5 py-3 text-sm font-bold shadow hover:bg-slate-100 transition"
        >
          Talk to a solutions architect <ArrowRight className="ml-2 size-4" />
        </a>
      </div>
    </div>
  </section>
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
        Sophisticated, regulated workflows made simple—precise, intentional, repeatable.
        Agentic flows are on-prem friendly, auditable, and fast to deploy.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Bring AI to the data",
            desc: "Containers and on-prem deployment keep data sovereign. Minimal setup; maximal control.",
          },
          {
            title: "Craft the workflows",
            desc: "Agentic flows, HITL checkpoints, and policy-as-code keep humans in control and audits simple.",
          },
          {
            title: "Enforce in code",
            desc: "Attestations, claims, and permissions built into automation for compliance-grade reliability.",
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

const TechSpecBar = () => (
  <section className="w-full bg-slate-950 text-slate-200 py-6 border-b border-white/10">
    <div className="container mx-auto max-w-6xl px-6 flex flex-wrap items-center gap-3 justify-center text-xs font-mono uppercase tracking-[0.2em]">
      <span className="text-indigo-300">Built with:</span>
      {techTags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-100"
        >
          {tag}
        </span>
      ))}
    </div>
  </section>
);

const Ecosystem = () => (
  <section className="w-full py-24 bg-slate-50 border-b border-slate-200">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="mb-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
          The ecosystem architecture
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Modular, design-led, and compliance-ready. Technology, legal schemas, trusted
          verification, and applications—so complexity stays under the hood.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {ecosystemItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-500/20 transition-all group relative overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 p-16 opacity-5 blur-2xl rounded-full ${item.bgColor.replace(
                "/10",
                ""
              )}`}
            />

            <div
              className={`mt-1 size-12 shrink-0 rounded-xl flex items-center justify-center ${item.bgColor} ${item.color}`}
            >
              {item.icon}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 bg-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-48 bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <TerminalIcon className="text-indigo-400 size-6" />
              Why we exist
            </h3>
            <div className="space-y-6 font-light text-slate-300 leading-relaxed text-lg">
              <p>
                <strong className="text-white">The Problem:</strong> Regulated
                industries stall on AI because cloud models risk leaks and liability.
              </p>
              <p>
                <strong className="text-white">The Solution:</strong> Simplicity of sushi
                applied to sovereign AI: containerized workflows, legal schemas, trusted
                attestations—deployable in days.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-6">
              Target Verticals
            </h4>
            <div className="space-y-4">
              {verticals.map((v) => (
                <div
                  key={v.title}
                  className="bg-white/5 rounded-xl p-5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-all cursor-default"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-indigo-400">{v.icon}</div>
                    <div className="font-bold">{v.title}</div>
                  </div>
                  <p className="text-sm text-slate-400">{v.desc}</p>
                </div>
              ))}
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
      <p className="text-indigo-600 font-bold tracking-wide uppercase text-xs mb-3">
        The Engine Room
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">
        Powered by the Sushi Stack
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
          <div className="size-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-blue-600">
            <Server className="size-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-3">
            Dockerized Microservices
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Modular rolls of software. Complex AI tools (LLMs, vector DBs) packaged to run
            anywhere—from a laptop to an air-gapped server.
          </p>
        </div>
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
          <div className="size-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-indigo-600">
            <Workflow className="size-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-3">n8n Orchestration</h3>
          <p className="text-slate-600 leading-relaxed">
            The nervous system. Low-code workflows connecting legal logic to AI inference
            and system automation, with humans in the loop.
          </p>
        </div>
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
          <div className="size-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-emerald-600">
            <Database className="size-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-3">Qdrant & GraphRAG</h3>
          <p className="text-slate-600 leading-relaxed">
            The brain. Advanced vector search and RAG powering Profiler and agentic
            discovery over millions of private documents.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ProductsServices = () => (
  <section className="w-full py-16 bg-slate-50 border-t border-slate-200">
    <div className="container max-w-6xl px-6 mx-auto">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">
          Products & Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Beyond a single app: the full Sushi portfolio
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          RegTech, agentic automation, and compliance design systems for legal, healthcare,
          finance, and more.
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
          Why we keep it simple
        </p>
        <h3 className="text-3xl font-bold text-slate-900">
          Complex regulation, elegant delivery
        </h3>
        <p className="text-slate-600">
          Design thinking reduces friction; systems thinking ensures reliability. We
          package AI automation so regulated teams can deploy fast without adding risk.
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
          We’ll tailor a design + systems walkthrough for your team—legal, healthcare,
          finance, or beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/contact-sales"
            className="inline-flex items-center justify-center rounded bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow hover:bg-indigo-500 transition"
          >
            Talk to a solutions architect
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

export default function Home() {
  return (
    <main className="flex w-full flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Hero />
      <CoreThesis />
      <Explainer />
      <TechSpecBar />
      <Ecosystem />
      <TechStack />
      <ProductsServices />
      <ProofCTA />
      <FooterSection />
    </main>
  );
}
