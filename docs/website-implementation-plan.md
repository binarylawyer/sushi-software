# Website Implementation Plan — Sushi Software / Ecosystem

Goal: Refresh the public site to present Sushi Software as the parent company and hub, while highlighting the ecosystem offerings (Aegis Core RWA product, Sushi Kitchen, Sushi Legal, Sushi Law, Aegis Pro). Ship a strong hero, clear navigation, and messaging aligned to the double-blind RegTech/RWA thesis.

## Background (from docs)
- Problem: Art/RWA markets are illiquid because privacy and compliance clash; galleries fear client poaching; settlement is slow.
- Solution: Double-blind architecture—law firms vet off-chain, issue on-chain attestations (ERC-3643) so collectors stay anonymous while canTransfer enforces compliance.
- Entities: Sushi Kitchen (tech/IP factory), Sushi Legal (compliance-as-code blueprints), Sushi Law (human-oracle network of firms), Aegis Core (marketplace/settlement), Aegis Pro (pro services/advanced tooling as needed).
- Proof points: $24B+ RWA market, 380% growth, institutional validation (BlackRock, JPM); Instant Pay float economics; dual-domicile Swiss/Liechtenstein + US Compliance Fortress.

## Site objectives
- Convey trust and institutional rigor while keeping a design-thinking/systems-thinking edge.
- Make the double-blind flow tangible (Invite → Vet → Attest → Compliant purchase/settle).
- Primary CTAs (placeholder for now): “Talk to Legal Engineering” (law/galleries) and “Explore Aegis Core” (investors/collectors).
- Provide clear entry into each business line (Kitchen, Legal, Law, Aegis Pro) and the Aegis Core page.

## Information architecture
- **Home (Sushi Software)**: Parent-brand hub; bold hero; short thesis; cred logos; “How it works” strip; Instant Pay value; ecosystem tiles (Aegis Core, Kitchen, Legal, Law, Aegis Pro); testimonials; CTA.
- **Aegis Core**: Marketplace/product page; double-blind flow; ERC-3643 allowlist; Instant Pay; NFT Vault model; demo flow.
- **Sushi Kitchen**: Tech/IP hub; Rolls/Combos/Platters; n8n + Qdrant + Python stack; Profiler (RAG) overview; SDK/API note; IP/licensing positioning.
- **Sushi Legal**: Compliance-as-code; dual-domicile (LI Stiftung ↔ CH AG, US C-Corp + DAO LLC); Reliance Letter/MSA; compliance passport; indemnity + SLAs.
- **Sushi Law**: Member-firm network; “Human Oracle” concept; onboarding firms; SLAs/indemnity; invite flow for galleries.
- **Aegis Pro**: Concise pro services/advanced tooling page; clarify differentiation from Aegis Core (services layer, bespoke deployments).
- **Resources/Press**: Whitepapers, case studies, regulatory/regtech updates (can come later).

## Home page upgrades (hero-first)
- **Hero visual**: Cinematic high-trust visual (gallery or vault with HUD overlay) or short looping MP4; dark overlay for legibility.
- **Hero copy**: Parent-brand angle: “Design and systems thinking for compliant RWAs.” Subhead: double-blind compliance + compliant liquidity. CTAs: Explore Aegis Core / Talk to Legal Engineering.
- **How it works**: 4-step strip (Invite → Vet HITL + Opus → Attest on-chain (ERC-3643) → Purchase/Settle + Instant Pay).
- **Instant Pay callout**: ROI math (1.5% fee, ~3-day float, ~180% APR equivalent).
- **Ecosystem tiles**: Cards linking to Aegis Core, Kitchen, Legal, Law, Aegis Pro.
- **Trust signals**: Category marquee (boutique art law firms, regulated custodians, institutional wallets); compliance badges (ERC-3643, AMLD6/FinCEN aware).

## Ecosystem pages (per-entity outlines)
- **Parent (Sushi Software)**: Overarching story; design/systems thinking; bridge to four units; quick proof of capabilities; links to each page.
- **Sushi Kitchen**: Sushi Stack (Dockerized services, n8n orchestration, Qdrant, OCR/Python); Rolls/Combos/Platters; Profiler RAG demo; IP/licensing positioning (Liechtenstein foundation).
- **Sushi Legal**: Dual-domicile diagram; Reliance Letter/MSA overview; compliance passport story; indemnity + SLAs.
- **Sushi Law**: Human Oracle network; design-partner firms; double-blind flow (firm sees PII, platform stays blind); invite pipeline for galleries.
- **Aegis Core**: Marketplace UX; NFT Vault pattern (ERC-721 master + ERC-3643 fractional); canTransfer gating; PaymentSplitter + enforced royalties; My Collection vault (dynamic metadata); Instant Pay lifecycle.
- **Aegis Pro**: Pro services/advanced tooling; bespoke deployments, advisory; differentiation from Aegis Core.

## Visual & UX direction
- Palette: Deep charcoal/ink with electric blue/cyan signal accents; warm off-white secondary.
- Typography: Geist; vary weights/sizing for hierarchy; occasional mono labels for “protocol” feel.
- Motion: Subtle hero parallax/gradient drift; animated “How it works” stepper; carousel for ecosystem tiles.
- Media: Optimized MP4/WebM hero loop or high-res image with gradient overlay; ensure Next/Image remote patterns cover chosen domains.

## Implementation backlog (prioritized)
1) **Content & IA**
   - Update Navbar links: / (Home), /aegis-core, /kitchen, /legal, /law, /aegis-pro, /resources.
   - Add ecosystem overview section on Home with tiles.
   - Refresh copy across hero/sections to align with double-blind and RWA thesis with design/systems-thinking tone.
2) **Hero & media**
   - Swap hero to strong visual/looping video with overlay; adjust CTAs (Explore Aegis Core / Talk to Legal Engineering).
   - Add 4-step “How it works” strip and Instant Pay callout.
3) **Ecosystem pages**
   - Build dedicated pages per outline; reuse shared components for consistency.
   - Add diagram/illustration placeholders for dual-domicile and NFT Vault; plan SVGs later.
4) **Trust & proof**
   - Replace placeholder logos; add compliance badges and short “Why trusted” bullets.
   - Add testimonial quotes mapped to personas (Collector, Gallery, Law Partner).
5) **Technical**
   - Clean CTA copy (fix encoding), fix footer typo, remove unused imports, consolidate duplicate root layout.
   - Ensure Next image remote patterns cover new assets; add MP4 handling; keep performance (lazy load, poster).
   - Set up content config (JSON/YAML) for ecosystem data to avoid hardcoding.
6) **Launch & follow-up**
   - Light QA (lint/build), compress media, ensure mobile hero readability.
   - Plan later: analytics/consent tooling and lead capture (Supabase not needed now).

## Asset & content needs
- Hero media (MP4 or high-res image), ecosystem icons/illustrations, trust logo set, updated copy per page, Instant Pay math block, diagrams (dual-domicile, NFT Vault flow).

## Next actions
- Lock IA and hero concept.
- Select hero media and logo set (or sourced placeholders).
- Implement Navbar/route scaffolding and home hero revamp, then build the ecosystem pages and swap placeholder assets.
