# Solana Onboarding Curriculum

> **A comprehensive learning guide for understanding blockchain technology and Solana — from first principles to production deployment.**

[![Curriculum Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](./curriculum/00-overview.md)
[![Last Updated](https://img.shields.io/badge/updated-January%202025-green.svg)](#)
[![License](https://img.shields.io/badge/license-Internal-lightgrey.svg)](#)

---

## Overview

This curriculum answers **"Why?"** before **"How?"** — building understanding progressively from the problems that led to Bitcoin, through Ethereum's innovations, to Solana's unique architecture and development ecosystem.

### What Makes This Different

| Traditional Tutorials       | This Curriculum                                  |
| --------------------------- | ------------------------------------------------ |
| Jump straight to code       | Build conceptual foundation first                |
| Assume blockchain knowledge | Start from trust problem                         |
| Single audience             | Three audience tracks (General, PM/EM, Engineer) |
| Scattered resources         | Progressive, interconnected modules              |
| Focus on syntax             | Focus on mental models                           |

---

## Quick Start

### Choose Your Track

| Track              | Time        | Who Should Take It             | Start Here                                                                                                        |
| ------------------ | ----------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| **Fast Track**     | 2-3 hours   | Executives, stakeholders       | [1.1 The Trust Problem](https://solflare-wallet.github.io/part-1/11-the-trust-problem/) (green sections only)     |
| **PM/EM Track**    | 6-8 hours   | Product & Engineering Managers | [1.1 The Trust Problem](https://solflare-wallet.github.io/part-1/11-the-trust-problem/) (green + yellow sections) |
| **Engineer Track** | 20-30 hours | Software Engineers             | [1.1 The Trust Problem](https://solflare-wallet.github.io/part-1/11-the-trust-problem/) (all sections + projects) |

### Content Markers

Throughout the curriculum, you'll encounter these markers:

| Marker | Meaning                                       |
| ------ | --------------------------------------------- |
| 🟢      | General understanding — for everyone          |
| 🟡      | PM/EM depth — contributor-level knowledge     |
| 🔵      | Engineer depth — builder-level implementation |

---

## Project Structure

Two content sources are maintained:
- `src/content/docs/` powers the Starlight documentation site.
- `curriculum/` remains the canonical curriculum map for GitHub/Notion reading and sequencing.

Keep the module order and titles in sync between these directories when you change structure.

```
src/content/docs/
├── index.mdx                      # Site landing page (Overview)
├── curriculum-overview/           # Full curriculum guide
├── part-1/                        # Part 1: Why Blockchain
├── part-2/                        # Part 2: Programmable Blockchain
├── part-3/                        # Part 3: Enter Solana
├── part-4/                        # Part 4: Building Programs
├── part-5/                        # Part 5: Client Development
├── part-6/                        # Part 6: Infrastructure
└── appendices/                    # Reference materials

curriculum/
├── 00-overview.md                 # Canonical curriculum map
│
├── part-1-why-blockchain/         # Foundation: The problems blockchain solves
│   ├── 1.1-the-trust-problem.md
│   ├── 1.2-bitcoin-the-first-solution.md
│   └── 1.3-bitcoins-limitations.md
│
├── part-2-programmable-blockchain/ # Ethereum's innovations
│   ├── 2.1-ethereum-code-on-blockchain.md
│   ├── 2.2-ethereums-growing-pains.md
│   └── 2.3-stablecoins.md
│
├── part-3-enter-solana/           # Solana's architecture
│   ├── 3.1-solanas-hypothesis.md
│   ├── 3.2-how-solana-works.md
│   ├── 3.3-solana-account-model.md
│   ├── 3.4-validators-network.md
│   ├── 3.5-staking-mechanics.md
│   ├── 3.6-mev-on-solana.md
│   └── 3.7-solana-vs-competition.md
│
├── part-4-building-programs/      # On-chain development 🔵
│   ├── 4.1-dev-environment-setup.md
│   ├── 4.2-first-solana-program.md
│   ├── 4.3-accounts-and-pdas.md
│   ├── 4.4-cross-program-invocations.md
│   ├── 4.5-spl-token-program.md
│   ├── 4.6-nfts-metaplex.md
│   ├── 4.7-token-extensions.md
│   ├── 4.8-testing-strategies.md
│   ├── 4.9-security-vulnerabilities.md
│   └── 4.10-program-optimization.md
│
├── part-5-client-development/     # Client-side development 🔵
│   ├── 5.1-client-architectures.md
│   ├── 5.2-web3js-deep-dive.md
│   ├── 5.3-transaction-building.md
│   ├── 5.4-wallet-integration.md
│   ├── 5.5-frontend-frameworks.md
│   └── 5.6-realtime-websockets.md
│
├── part-6-infrastructure/         # Production operations 🔵
│   ├── 6.1-rpc-providers.md
│   ├── 6.2-indexing-solutions.md
│   ├── 6.3-deployment-strategies.md
│   ├── 6.4-monitoring-observability.md
│   ├── 6.5-security-practices.md
│   └── 6.6-production-considerations.md
│
└── appendices/                    # Reference materials
    ├── appendix-a-glossary.md
    ├── appendix-b-timeline.md
    ├── appendix-c-comparisons.md
    └── appendix-d-resources.md
```

Starlight slugs remove dots from filenames, so `1.1-the-trust-problem.md` is published at `/part-1/11-the-trust-problem/`.

---

## Learning Paths

### Path 1: Fast Track (Executive Understanding)
**Time: 2-3 hours** | **Audience: Leadership, Stakeholders**

```
1.1 Trust Problem → 1.2 Bitcoin → 2.1 Ethereum → 3.1 Solana Hypothesis → 3.2 How Solana Works
```

Read only 🟢 **General** sections. You'll understand:
- Why blockchain technology exists
- What problems it solves
- How Solana differs from competitors
- Key terminology for informed conversations

### Path 2: PM/EM Track (Contributor Understanding)
**Time: 6-8 hours** | **Audience: Product & Engineering Managers**

```
Parts 1-3 Complete (🟢 + 🟡 sections)
```

You'll be able to:
- Evaluate technical proposals and trade-offs
- Debug high-level architectural issues
- Review PRs and design documents
- Communicate effectively with engineers

### Path 3: Engineer Track (Builder Understanding)
**Time: 20-30 hours** | **Audience: Software Engineers**

```
Parts 1-6 Complete (all sections + mini-projects)
```

You'll be able to:
- Write production Solana programs
- Build full-stack dApps
- Deploy and monitor infrastructure
- Implement security best practices

---

## Documentation Site

This repository uses [Starlight](https://starlight.astro.build/) with the [Obsidian theme](https://fevol.github.io/starlight-theme-obsidian/) to render `src/content/docs/` as a documentation site.

### Local Development

```bash
npm install
npm run dev
```

### Editing Docs

- Edit files in `src/content/docs/`.
- Frontmatter is required on each page:

```markdown
---
title: "Your Page Title"
description: "Brief description of the content"
---
```

- Update the `sidebar` in `astro.config.mjs` when adding or reordering pages.

### Styling

Custom styles live in `src/styles/custom.css`.

### Deployment

Pushing to `main` triggers GitHub Actions and deploys to GitHub Pages.

### Troubleshooting

- **Build fails**: `rm -rf node_modules package-lock.json dist .astro && npm install && npm run dev`
- **Duplicate content IDs**: `npm run dev -- --force` (clears the content cache)
- **Broken links**: ensure dotless slugs in URLs (e.g., `/part-1/11-the-trust-problem/`)

### Linting and Formatting

- `npm run lint` checks ESLint rules.
- `npm run format` applies Prettier formatting.
- `npm run format:check` verifies Prettier formatting.

---

## How to Use This Curriculum

### Reading on GitHub

Each module is a self-contained Markdown file in `curriculum/`. Use `curriculum/00-overview.md` as the canonical map.

### Reading on the Docs Site

Navigate with the Starlight sidebar and built-in pagination. The site publishes dotless slugs (e.g., `/part-1/11-the-trust-problem/`).

### Migrating to Notion

This curriculum is designed for easy Notion import:

1. Import Markdown files to Notion
2. Section headers become toggle blocks
3. Code blocks render with syntax highlighting
4. Tables convert automatically
5. Callouts (blockquotes) become Notion callouts

**Recommended Notion Structure:**
```
Solana Curriculum (Database)
├── Part 1: Why Blockchain (Page)
│   ├── 1.1 The Trust Problem (Sub-page)
│   ├── 1.2 Bitcoin (Sub-page)
│   └── ...
├── Part 2: Programmable Blockchain (Page)
└── ...
```

### Self-Assessment

Each module ends with **"Check Your Understanding"** sections containing:
- [ ] Conceptual questions
- [ ] Practical exercises
- [ ] Discussion prompts

Track your progress by checking off completed items.

---

## Content Conventions

| Symbol                    | Meaning                                   |
| ------------------------- | ----------------------------------------- |
| 💡 **Key Insight**         | Important conceptual understanding        |
| ⚠️ **Warning/Disclaimer**  | Critical caveats or data freshness notes  |
| 🔧 **Technical Detail**    | Implementation specifics (🔵 Engineer)     |
| 📊 **Business Context**    | Strategic implications (🟡 PM/EM)          |
| ✅ **Check Understanding** | Self-assessment questions                 |
| > 💡 **ELI5**              | "Explain Like I'm 5" simplified analogies |

---

## Data Freshness

This curriculum was last updated in **January 2026**. Certain metrics evolve rapidly:

| Data Type         | Verify At                                     |
| ----------------- | --------------------------------------------- |
| TPS / Performance | [Solana Beach](https://solanabeach.io)        |
| Validator Counts  | [Validators.app](https://www.validators.app/) |
| Network Status    | [Solana Status](https://status.solana.com)    |

Look for ⚠️ **Data Disclaimer** callouts in modules with volatile statistics.

---

## Prerequisites

### For General/PM Track
- Basic understanding of software and the internet
- No coding experience required

### For Engineer Track
- Proficiency in at least one programming language
- Comfort with command-line tools
- Basic understanding of web development
- Familiarity with TypeScript/JavaScript (helpful but not required)

---

## Contributing

### Reporting Issues
- Outdated information
- Broken links
- Unclear explanations
- Missing topics

### Suggesting Improvements
- Additional ELI5 explanations
- New mini-projects
- Updated code examples
- Additional resources

---

## Module Dependency Graph

```
                    ┌─────────────┐
                    │ 1.1 Trust   │
                    │   Problem   │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │ 1.2 Bitcoin │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │ 1.3 Bitcoin │
                    │ Limitations │
                    └──────┬──────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
  ┌──────▼──────┐   ┌──────▼──────┐   ┌──────▼──────┐
  │ 2.1 Ethereum│   │ 2.2 Growing │   │    2.3      │
  │   Code      │──▶│   Pains     │──▶│ Stablecoins │
  └─────────────┘   └─────────────┘   └──────┬──────┘
                                             │
                    ┌────────────────────────┘
                    │
         ┌──────────▼───────────┐
         │   PART 3: SOLANA     │
         │  (7 interconnected   │
         │      modules)        │
         └──────────┬───────────┘
                    │
    ┌───────────────┼───────────────┐
    │               │               │
┌───▼───┐      ┌────▼────┐     ┌────▼────┐
│ Part 4│      │ Part 5  │     │ Part 6  │
│Program│─────▶│ Client  │────▶│  Infra  │
│  Dev  │      │   Dev   │     │         │
└───────┘      └─────────┘     └────┬────┘
                                    │
                            ┌───────▼───────┐
                            │  Appendices   │
                            │   A, B, C, D  │
                            └───────────────┘
```

---

## Get Started

**Ready to begin?**

→ **[Start with 1.1: The Trust Problem](https://solflare-wallet.github.io/part-1/11-the-trust-problem/)**

Or jump to the **[Full Curriculum Overview](https://solflare-wallet.github.io/curriculum-overview/)** for detailed navigation.
