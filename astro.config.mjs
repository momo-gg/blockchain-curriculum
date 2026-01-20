// @ts-check
import { execSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightObsidian from 'starlight-theme-obsidian';

import d2 from 'astro-d2';

// Skip D2 generation if the binary is unavailable or explicitly disabled.
let hasD2 = false;
try {
    execSync('d2 --version', { stdio: 'ignore' });
    hasD2 = true;
} catch {
    hasD2 = false;
}

const skipD2Generation =
    process.env.ASTRO_D2_SKIP === '1' || process.env.ASTRO_D2_SKIP === 'true' || !hasD2;

// https://astro.build/config
export default defineConfig({
    site: 'https://solflare-wallet.github.io',
    integrations: [starlight({
        title: 'Onboarding',
        logo: {
            src: './src/assets/solflare-logo-32x32.png',
        },
        description:
            'A comprehensive learning guide for understanding blockchain technology and Solana — from first principles to production deployment.',
        social: [
            {
                label: 'GitHub',
                icon: 'github',
                href: 'https://github.com/solflare-wallet/solana-onboarding',
            },
        ],
        customCss: [
            './src/styles/custom.css',
            '@fontsource-variable/instrument-sans/standard.css',
            '@fontsource-variable/instrument-sans/standard-italic.css',
        ],
        plugins: [
            starlightObsidian({
                graph: false,
                obsidianLink: {
                    enabled: true,
                    features: {
                        markdownLinks: true,
                        wikiLinks: true,
                    },
                },
            }),
        ],
        sidebar: [
            {
                label: 'Getting Started',
                items: [
                    { label: 'Overview', link: '/' },
                    { label: 'Full Curriculum Guide', link: '/curriculum-overview/' },
                ],
            },
            {
                label: 'Part 1: Why Blockchain Exists',
                items: [
                    { label: '1.1 The Trust Problem', link: '/part-1/11-the-trust-problem/' },
                    {
                        label: '1.2 Bitcoin: The First Solution',
                        link: '/part-1/12-bitcoin-the-first-solution/',
                    },
                    {
                        label: "1.3 Bitcoin's Limitations",
                        link: '/part-1/13-bitcoins-limitations/',
                    },
                ],
            },
            {
                label: 'Part 2: Programmable Blockchain',
                items: [
                    {
                        label: '2.1 Ethereum: Code on the Blockchain',
                        link: '/part-2/21-ethereum-code-on-blockchain/',
                    },
                    {
                        label: "2.2 Ethereum's Growing Pains",
                        link: '/part-2/22-ethereums-growing-pains/',
                    },
                    {
                        label: '2.3 Stablecoins: Digital Dollars',
                        link: '/part-2/23-stablecoins/',
                    },
                ],
            },
            {
                label: 'Part 3: Enter Solana',
                items: [
                    {
                        label: "3.1 Solana's Hypothesis",
                        link: '/part-3/31-solanas-hypothesis/',
                    },
                    { label: '3.2 How Solana Works', link: '/part-3/32-how-solana-works/' },
                    {
                        label: '3.3 The Solana Account Model',
                        link: '/part-3/33-solana-account-model/',
                    },
                    {
                        label: '3.4 Validators & Network Architecture',
                        link: '/part-3/34-validators-network/',
                    },
                    { label: '3.5 Staking Mechanics', link: '/part-3/35-staking-mechanics/' },
                    { label: '3.6 MEV on Solana', link: '/part-3/36-mev-on-solana/' },
                    {
                        label: '3.7 Solana vs. The Competition',
                        link: '/part-3/37-solana-vs-competition/',
                    },
                ],
            },
            {
                label: 'Part 4: Building Programs 🔵',
                collapsed: true,
                items: [
                    {
                        label: '4.1 Development Environment Setup',
                        link: '/part-4/41-dev-environment-setup/',
                    },
                    {
                        label: '4.2 Your First Solana Program',
                        link: '/part-4/42-first-solana-program/',
                    },
                    {
                        label: '4.3 Deep Dive: Accounts & PDAs',
                        link: '/part-4/43-accounts-and-pdas/',
                    },
                    {
                        label: '4.4 Cross-Program Invocations (CPIs)',
                        link: '/part-4/44-cross-program-invocations/',
                    },
                    {
                        label: '4.5 Tokens: SPL Token Program',
                        link: '/part-4/45-spl-token-program/',
                    },
                    { label: '4.6 NFTs & Metaplex', link: '/part-4/46-nfts-metaplex/' },
                    {
                        label: '4.7 Token Extensions (Token-2022)',
                        link: '/part-4/47-token-extensions/',
                    },
                    { label: '4.8 Testing Strategies', link: '/part-4/48-testing-strategies/' },
                    {
                        label: '4.9 Security & Common Vulnerabilities',
                        link: '/part-4/49-security-vulnerabilities/',
                    },
                    {
                        label: '4.10 Program Optimization',
                        link: '/part-4/410-program-optimization/',
                    },
                ],
            },
            {
                label: 'Part 5: Client Development 🔵',
                collapsed: true,
                items: [
                    {
                        label: '5.1 Client Architectures',
                        link: '/part-5/51-client-architectures/',
                    },
                    {
                        label: '5.2 @solana/web3.js Deep Dive',
                        link: '/part-5/52-web3js-deep-dive/',
                    },
                    {
                        label: '5.3 Transaction Building',
                        link: '/part-5/53-transaction-building/',
                    },
                    { label: '5.4 Wallet Integration', link: '/part-5/54-wallet-integration/' },
                    {
                        label: '5.5 Frontend Frameworks',
                        link: '/part-5/55-frontend-frameworks/',
                    },
                    {
                        label: '5.6 Real-Time Data & WebSockets',
                        link: '/part-5/56-realtime-websockets/',
                    },
                    {
                        label: '5.7 User Experience & Transaction Friction',
                        link: '/part-5/57-user-experience-friction/',
                    },
                ],
            },
            {
                label: 'Part 6: Infrastructure & Production 🔵',
                collapsed: true,
                items: [
                    { label: '6.1 RPC Providers', link: '/part-6/61-rpc-providers/' },
                    { label: '6.2 Indexing Solutions', link: '/part-6/62-indexing-solutions/' },
                    {
                        label: '6.3 Deployment Strategies',
                        link: '/part-6/63-deployment-strategies/',
                    },
                    {
                        label: '6.4 Monitoring & Observability',
                        link: '/part-6/64-monitoring-observability/',
                    },
                    {
                        label: '6.5 Security Best Practices',
                        link: '/part-6/65-security-practices/',
                    },
                    {
                        label: '6.6 Production Considerations',
                        link: '/part-6/66-production-considerations/',
                    },
                    {
                        label: '6.7 Oracles & Data Feeds',
                        link: '/part-6/67-oracles-data-feeds/',
                    },
                ],
            },
            {
                label: 'Appendices',
                collapsed: true,
                items: [
                    { label: 'A: Glossary', link: '/appendices/appendix-a-glossary/' },
                    {
                        label: 'B: Blockchain Timeline',
                        link: '/appendices/appendix-b-timeline/',
                    },
                    {
                        label: 'C: Platform Comparisons',
                        link: '/appendices/appendix-c-comparisons/',
                    },
                    {
                        label: 'D: Resources & Further Reading',
                        link: '/appendices/appendix-d-resources/',
                    },
                ],
            },
        ],
    }), d2({ skipGeneration: skipD2Generation })],
});
