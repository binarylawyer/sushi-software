“use client”;

import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Code,
  Database,
  Lock,
  Menu,
  X,
} from "lucide-react";

const terminalLines = [
  "> INITIATING SUSHI_STACK_V2...",
  "> LOADING MODULE: JURISDICTION_ROUTER [CH/LI/DE]",
  "> CONNECTING TO QDRANT VECTOR DB...",
  "> ESTABLISHING RELIANCE_REGISTRY LINK...",
  "> STATUS: SYSTEM OPERATIONAL",
  "> WAITING FOR ATTESTATION INPUT...",
];

export default function DemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [activeTerminalLine, setActiveTerminalLine] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      setActiveTerminalLine((prev) => (prev + 1) % terminalLines.length);
    }, 2200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-200 font-mono selection:bg-emerald-900 selection:text-emerald-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 ${
          scrollPos > 50
            ? "bg-black/90 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-lg rounded-sm group-hover:bg-emerald-500 transition-colors">
              S
            </div>
            <span className="font-bold text-xl tracking-tighter">
              SUSHI<span className="text-gray-500">SOFTWARE</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#stack" className="hover:text-emerald-400 transition-colors">
              THE STACK
            </a>
            <a
              href="#products"
              className="hover:text-emerald-400 transition-colors"
            >
              PRODUCTS
            </a>
            <a
              href="#architecture"
              className="hover:text-emerald-400 transition-colors"
            >
              ARCHITECTURE
            </a>
            <a
              href="#contact"
              className="px-4 py-2 border border-white/20 hover:border-emerald-500 hover:text-emerald-400 transition-all rounded-sm"
            >
              ACCESS KITCHEN
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded border border-white/10"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8 text-xl">
          <a href="#stack" onClick={() => setIsMenuOpen(false)}>
            THE STACK
          </a>
          <a href="#products" onClick={() => setIsMenuOpen(false)}>
            PRODUCTS
          </a>
          <a href="#architecture" onClick={() => setIsMenuOpen(false)}>
            ARCHITECTURE
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-emerald-400"
          >
            ACCESS KITCHEN
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-black to-black pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-emerald-400 tracking-widest uppercase">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                System Status: Operational
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                COMPLIANCE <br />
                AS <span className="text-emerald-500">CODE.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                We build the “Liability Firebreak” infrastructure for the $30
                Trillion RWA migration. Dockerized legal logic. Double-blind
                settlements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-white text-black font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 rounded-sm">
                  DEPLOY THE STACK <ArrowRight size={18} />
                </button>
                <button className="px-8 py-4 border border-white/20 hover:border-white transition-colors flex items-center justify-center gap-2 rounded-sm">
                  VIEW GITHUB <Code size={18} />
                </button>
              </div>
            </div>

            {/* Terminal Simulation */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg blur opacity-20"></div>
              <div className="relative bg-black border border-white/10 rounded-lg p-6 font-mono text-sm md:text-base shadow-2xl min-h-[300px] flex flex-col">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-gray-500">
                    root@sushi-kitchen:~
                  </span>
                </div>
                <div className="flex-1 space-y-2">
                  {terminalLines.map((line, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-300 ${
                        index <= activeTerminalLine
                          ? "opacity-100"
                          : "opacity-0"
                      } ${
                        line.includes("ERROR")
                          ? "text-red-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {line}
                    </div>
                  ))}
                  <div className="animate-pulse text-gray-500">_</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Stack Grid */}
      <section id="stack" className="py-24 border-b border-white/5 bg-neutral-950/50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              THE SUSHI STACK
            </h2>
            <div className="w-20 h-1 bg-emerald-500"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-black border border-white/10 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-emerald-400 group-hover:text-white transition-colors">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">n8n Orchestration</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Visual workflow automation generating reliance letters, hashing
                them, and routing them securely.
              </p>
              <div className="flex gap-2 text-xs text-gray-600 font-mono">
                <span className="bg-white/5 px-2 py-1 rounded">Node.js</span>
                <span className="bg-white/5 px-2 py-1 rounded">Webhooks</span>
              </div>
            </div>

            <div className="p-8 bg-black border border-white/10 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:text-white transition-colors">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Qdrant RAG Core</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Vector database storing embeddings of global art inventory to
                power the double-blind matching engine.
              </p>
              <div className="flex gap-2 text-xs text-gray-600 font-mono">
                <span className="bg-white/5 px-2 py-1 rounded">Vector</span>
                <span className="bg-white/5 px-2 py-1 rounded">Python</span>
              </div>
            </div>

            <div className="p-8 bg-black border border-white/10 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:text-white transition-colors">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Chain Gateway</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Isolated Python service using Web3.py to sign transactions and
                write reliance hashes to the blockchain.
              </p>
              <div className="flex gap-2 text-xs text-gray-600 font-mono">
                <span className="bg-white/5 px-2 py-1 rounded">ERC-3643</span>
                <span className="bg-white/5 px-2 py-1 rounded">Solidity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section
        id="architecture"
        className="py-24 border-b border-white/5"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative bg-neutral-900 rounded-xl border border-white/10 p-4 shadow-2xl">
                <div className="aspect-video bg-black rounded border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-4 p-8 opacity-50">
                    <div className="border border-emerald-500/30 rounded flex items-center justify-center text-xs text-emerald-500">
                      Law Firm
                    </div>
                    <div className="border border-white/10 rounded flex items-center justify-center text-xs">
                      Sushi Kitchen (n8n)
                    </div>
                    <div className="border border-white/10 rounded flex items-center justify-center text-xs">
                      Aegis Core API
                    </div>
                    <div className="border border-blue-500/30 rounded flex items-center justify-center text-xs text-blue-500">
                      Gallery
                    </div>
                    <div className="col-span-4 border-t border-dashed border-white/20 mt-4 pt-4 text-center text-xs text-gray-600">
                      BLOCKCHAIN SETTLEMENT LAYER (POLYGON)
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold bg-black px-4 py-2 border border-emerald-500">
                    DOUBLE-BLIND NEXUS
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">THE ENTITY MAP</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not run the exchange. We build the software that makes it
                possible—isolating liability by separating Tech (Kitchen), Rules
                (Legal), and Execution (Core).
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Sushi Kitchen</h4>
                    <p className="text-sm text-gray-500">
                      The Factory. R&D and IP holding.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Sushi Law</h4>
                    <p className="text-sm text-gray-500">
                      The network. Human oracles issuing reliance letters.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-1 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Aegis Core</h4>
                    <p className="text-sm text-gray-500">
                      The product. The liquidity layer.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 bg-emerald-950/10 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">$30T</div>
              <div className="text-xs text-emerald-500 uppercase tracking-widest">
                Addressable RWA Market
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">CH/LI</div>
              <div className="text-xs text-emerald-500 uppercase tracking-widest">
                Dual-Domicile Logic
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">ERC-3643</div>
              <div className="text-xs text-emerald-500 uppercase tracking-widest">
                Standard Compliance
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-xs text-emerald-500 uppercase tracking-widest">
                Proprietary Code
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 bg-black text-gray-600 text-sm border-t border-white/5"
        id="contact"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/10 rounded-sm"></div>
              <span className="font-bold text-gray-400 tracking-tighter">
                SUSHI<span className="text-gray-700">SOFTWARE</span>
              </span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">
                System Status
              </a>
            </div>
            <div className="text-xs">© 2025 Sushi Kitchen Labs LLC. All Rights Reserved.</div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-800 font-mono">
            "TRUST IS A FUNCTION OF VERIFICATION, NOT REPUTATION."
          </div>
        </div>
      </footer>
    </div>
  );
}
