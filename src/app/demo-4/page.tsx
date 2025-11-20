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
    title: "Sushi Kitchen",
    subtitle: "The Factory (Tech Infrastructure)",
    desc: "Design-led R&D. We build the Sushi Stack—Dockerized, privacy-first AI/agentic workflows (n8n, Qdrant, Python) to run locally.",
    icon: <Cpu className="size-5" />,
    href: "/kitchen",
    tags: ["Docker", "n8n", "Local AI"],
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
  },
  {
    title: "Sushi Legal",
    subtitle: "The Architect (Legal Engineering)",
    desc: "Structural design for compliance-as-code. Dual-domicile schemas (CH/LI/DE) wrap automation in regulatory armor.",
    icon: <Shield className="size-5" />,
    href: "/legal",
    tags: ["Structuring", "Risk", "Governance"],
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "Sushi Law",
    subtitle: "The Network (Human Oracles)",
    desc: "Curated firms acting as human oracles. They verify and attest without exposing PII—keeping workflows simple and defensible.",
    icon: <Network className="size-5" />,
    href: "/law",
    tags: ["Verification", "Attestation", "Trust"],
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    title: "Aegis Core",
    subtitle: "The Product (RegTech Application)",
    desc: "A compliant marketplace/automation layer proving the Sushi architecture—agentic workflows with enforced permissions.",
    icon: <Briefcase className="size-5" />,
    href: "/aegis-core",
    tags: ["RegTech", "Automation", "Compliance"],
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
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
            We design AI automation that’s as simple and intentional as sushi. Design
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
        We keep sophisticated, regulated workflows as simple as sushi—precise,
        intentional, and repeatable. Agentic workflows are on-prem friendly,
        auditable, and fast to deploy.
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

const ThePlatform = () => (
  <section className="w-full py-24 bg-slate-50 border-b border-slate-200">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="mb-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
          The ecosystem architecture
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          A design-led, modular ecosystem for regulated AI. We separate technology,
          legal schema, trusted verification, and applications—so complexity stays
          under the hood.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-24">
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
                <span className="text-xs font-mono uppercase tracking-wide text-slate-400 border border-slate-100 px-2 py-0.5 rounded bg-slate-50">
                  {item.subtitle}
                </span>
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

      <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
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
                industries can’t ship AI because cloud models risk leaks and liability.
              </p>
              <p>
                <strong className="text-white">The Solution:</strong> Sovereign, simple
                AI. We bring the AI to the data with containerized workflows,
                indemnified by design schemas.
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
            Modular rolls of software. Complex AI tools (LLMs, vector DBs) packaged
            to run anywhere—from a laptop to an air-gapped server.
          </p>
        </div>
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
          <div className="size-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-indigo-600">
            <Workflow className="size-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg mb-3">n8n Orchestration</h3>
          <p className="text-slate-600 leading-relaxed">
            The nervous system. Low-code workflows that connect legal logic to AI
            inference and system automation, keeping HITL in the loop.
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

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/10">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-bold text-white text-xl">
              SUSHI<span className="text-slate-500">SOFTWARE</span>
            </span>
          </div>
          <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
            AI automation with the simplicity of sushi. Privacy by default. Sovereignty
            by design.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Ecosystem</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/kitchen" className="hover:text-indigo-400 transition-colors">
                Sushi Kitchen
              </a>
            </li>
            <li>
              <a href="/legal" className="hover:text-indigo-400 transition-colors">
                Sushi Legal
              </a>
            </li>
            <li>
              <a href="/law" className="hover:text-indigo-400 transition-colors">
                Sushi Law
              </a>
            </li>
            <li>
              <a href="/aegis-core" className="hover:text-indigo-400 transition-colors">
                Aegis Core
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                Whitepaper
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                System Status
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-slate-600">
          © 2025 Sushi Software Inc. All Rights Reserved.
        </div>
        <div className="flex gap-6">
          <TerminalIcon className="size-4 hover:text-white cursor-pointer transition-colors" />
          <Lock className="size-4 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  </footer>
);

export default function DemoFourPage() {
  return (
    <main className="flex w-full flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Hero />
      <Explainer />
      <ThePlatform />
      <TechStack />
      <Footer />
    </main>
  );
}
