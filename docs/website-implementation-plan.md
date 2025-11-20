# Website Implementation Plan – Sushi / Aegis Core

Goal: refresh the public site to reflect the Sushi ecosystem (Kitchen, Legal, Law) and the Aegis Core double‑blind marketplace, with a stronger hero, clear ecosystem pages, and messaging aligned to the RegTech/RWA thesis outlined in the provided docs.

## Background (from docs)
- Problem: art/RWA market is illiquid because privacy and compliance conflict; galleries fear client poaching; settlement is slow.
- Solution: double‑blind architecture—law firms vet off‑chain, issue on‑chain attestations (ERC‑3643) so collectors stay anonymous while canTransfer enforces compliance.
- Entities: Sushi Kitchen (tech/IP “factory”), Sushi Legal (compliance-as-code blueprints), Sushi Law (human-oracle network of firms), Aegis Core (consumer-facing marketplace/settlement).
- Proof points: $24B+ RWA market, 380% growth, institutional validation (BlackRock, JPM); Instant Pay float economics; dual-domicile Swiss/Liechtenstein + US Compliance Fortress.

## Site objectives
- Convey trust and institutional rigor while keeping the Sushi brand edge.
- Make the double‑blind flow tangible (invite → vet → attest → compliant purchase).
- Drive two CTAs: “Talk to Legal Engineering” (law firms/galleries) and “Explore Aegis Core” (investors/collectors).
- Provide clear entry into each business line (Kitchen, Legal, Law) and the Aegis Core marketplace page.

## Information architecture
- **Home**: bold hero, short thesis, cred logos, “How it works” (double‑blind steps), Instant Pay value, ecosystem tiles (Kitchen/Legal/Law/Aegis), testimonials, CTA.
- **Aegis Core**: marketplace/product page; covers double‑blind, ERC‑3643 allowlist, Instant Pay, NFT Vault model, demo flow.
- **Sushi Kitchen**: tech/IP hub; Rolls/Combos/Platters, n8n + Qdrant + Python stack, Profiler (RAG) overview, SDK/API mention.
- **Sushi Legal**: compliance-as-code; dual-domicile, liability firebreak, Reliance Letter/MSA, compliance passport.
- **Sushi Law**: network of member firms; “Human Oracle” concept, onboarding law firms, SLAs/indemnity, invite flow for galleries.
- **Resources/Press** (optional later): whitepapers, case studies, regulatory updates.

## Home page upgrades (hero-first)
- **Hero visual**: replace current text-only hero with a cinematic visual (e.g., high-contrast art vault or gallery scene with an overlaid compliance HUD), or a short looping MP4 background; keep headline legible with dark overlay.
- **Hero copy**: “The double‑blind marketplace for regulated art & RWAs” + subcopy about privacy + on-chain compliance; CTA buttons for “Explore Aegis Core” and “Talk to Legal”.
- **How it works**: 4-step strip (Invite → Vet (HITL + Opus) → Attest on-chain (ERC‑3643) → Purchase/Settle + Instant Pay).
- **Instant Pay callout**: ROI math (1.5% fee, ~3-day float, 180% APR equivalent) as a highlight block.
- **Ecosystem tiles**: four cards with concise descriptions + deep links to each page.
- **Trust signals**: replace placeholder logos with target firms/categories (e.g., “Boutique art law firms”, “Regulated custodians”, “Institutional wallets”); include compliance badges (ERC‑3643, AMLD6/FinCEN aware).

## Ecosystem pages (per-entity outlines)
- **Sushi Kitchen**: describe the Sushi Stack (Dockerized microservices, n8n orchestration, Qdrant, OCR/Python); show Rolls/Combos/Platters; Profiler RAG demo; IP/licensing positioning (Liechtenstein foundation).
- **Sushi Legal**: dual‑domicile diagram (LI Stiftung ↔ CH AG, US C‑Corp + DAO LLC); Reliance Letter/MSA overview; compliance passport story; indemnity + SLAs.
- **Sushi Law**: “Human Oracle” network; onboarding 3–5 design-partner firms; double‑blind flow (law firm sees PII, platform stays blind); invite pipeline for galleries.
- **Aegis Core**: marketplace UX, NFT Vault pattern (ERC‑721 master + ERC‑3643 fractional), canTransfer gating, PaymentSplitter + enforced royalties, My Collection vault with dynamic metadata, Instant Pay lifecycle.

## Visual & UX direction
- Palette: stay minimal but elevate with deep charcoal + accent blue/cyan for “signal”; warm off-white backgrounds for contrast.
- Typography: keep Geist but vary weight/size for hierarchy; consider accent monospaced labels for “protocol” feel.
- Motion: subtle hero parallax/gradient drift; animated stepper for “How it works”; carousel for ecosystem tiles.
- Media: prefer optimized MP4/WebM hero loop or high-res Image with gradient overlay; ensure Next/Image remote patterns allow chosen domains.

## Implementation backlog (prioritized)
1) **Content & IA**
   - Update Navbar links to new pages: /aegis-core, /kitchen, /legal, /law, /resources.
   - Add ecosystem overview section to Home with links.
   - Refresh copy across hero/sections to align with double‑blind and RWA thesis.
2) **Hero & media**
   - Swap hero to strong visual/looping video with overlay; adjust CTA buttons (Explore Aegis Core / Talk to Legal).
   - Add 4-step “How it works” strip and Instant Pay callout.
3) **Ecosystem pages**
   - Build dedicated pages with tailored sections per outline above; reuse shared components for consistency.
   - Add diagram/illustration placeholders for dual‑domicile and NFT Vault; plan to replace with SVGs.
4) **Trust & proof**
   - Replace placeholder logos; add compliance badges and short “Why trusted” bullets.
   - Add testimonial quotes mapped to personas (Collector, Gallery, Law Partner).
5) **Technical**
   - Clean CTA copy (fix encoding), fix footer typo, remove unused imports, consolidate duplicate root layout.
   - Ensure Next image remote patterns cover new assets; add MP4 handling; keep performance (lazy load, poster).
   - Set up content config (JSON/YAML) for ecosystem data to avoid hardcoding.
6) **Launch & follow-up**
   - Light QA (lint/build), compress media, ensure mobile hero readability.
   - Plan a follow-on phase for analytics/consent tooling and form capture for leads.

## Asset & content needs
- Hero media (MP4 or high-res image), ecosystem icons/illustrations, trust logo set, updated copy for each page, Instant Pay math block, diagrams (dual-domicile, NFT Vault flow).

## Next actions
- Approve the IA and hero concept.
- Gather/select hero media and logo set.
- Implement Navbar/route scaffolding and home hero revamp, then build the four ecosystem pages and swap placeholder assets.
