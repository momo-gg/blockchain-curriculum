# Question Mapping: Ensuring Comprehensive Coverage

This document maps your learning questions to curriculum modules, identifying gaps and ensuring nothing is missed.

---

## Part 1: Blockchain Fundamentals

| Question | Module | Status |
|----------|--------|--------|
| What is a blockchain, really? (notebook analogy) | 1.2 | ✅ Covered |
| How does Bitcoin mining/hashing work? | 1.2 | ✅ Covered |
| What's PoW vs PoS difference? | 1.3, 2.2 | 🔄 Needs expansion |
| What is the blockchain trilemma? | 1.3 | ✅ Covered |
| Why do blockchains need native coins for fees? | 1.2, 2.1 | 🔄 Needs expansion |
| Why is Visa "slower" than Solana if centralized? | 3.1 | ⏳ To be added |
| What is Byzantine Fault Tolerance? (2/3 rule) | 1.1 | 🔄 Needs 2/3 rule detail |
| What prevents wealthy entities from always being leader? | 3.2 | ⏳ To be added |
| How are cheaters detected and slashed? | 2.2, 3.2 | ⏳ To be added |
| Where does "the protocol" actually live? | 1.2 | 🔄 Needs expansion |
| What are blockchain "clients"? | New: 1.4 or 3.2 | ⏳ To be added |
| Can I create my own client? Who funds development? | 3.2 | ⏳ To be added |
| How do P2P networks stay connected? (gossip) | 3.2 | ⏳ To be added |
| How did Solana launch from genesis? | 3.2 | ⏳ To be added |

---

## Part 2: Ethereum (Programmable Blockchain)

| Question | Module | Status |
|----------|--------|--------|
| What are smart contracts? | 2.1 | ⏳ To write |
| What is the EVM? | 2.1 | ⏳ To write |
| What is gas and why? | 2.1, 2.2 | ⏳ To write |
| How does Proof of Stake work? | 2.2 | ⏳ To write |
| What is staking? | 2.2 | ⏳ To write |

---

## Part 3: Enter Solana

| Question | Module | Status |
|----------|--------|--------|
| Why is Solana fast? (Proof of History) | 3.1, 3.2 | ⏳ To write |
| How are leaders chosen? (stake-weighted lottery) | 3.2 | ⏳ To write |
| Does speed fluctuate by leader? | 3.2 | ⏳ To write |
| What are validator costs? (~$50K+/year) | 3.2 | ⏳ To write |
| How are new validators added? | 3.2 | ⏳ To write |
| How does governance work? (SIMDs) | 3.2 | ⏳ To write |
| What is Firedancer? | 3.2 | ⏳ To write |
| What is Alpenglow? | 3.2 | ⏳ To write |
| Multiple concurrent leaders? | 3.2 | ⏳ To write |
| Why was Solana Labs GitHub archived? | 3.2 | ⏳ To write |
| How are features gated and deployed? | 3.2 | ⏳ To write |
| Solana vs competition comparison | 3.4 | ⏳ To write |

---

## Module: Stablecoins (Part 2.3)

| Question | Coverage |
|----------|----------|
| What are stablecoins and why? | Foundation |
| Who owns USDC? Circle/Coinbase relationship | Business context |
| How are stablecoins minted/burned? | Technical |
| What prevents unlimited printing? | Security model |
| Why doesn't USDC exist on all chains? | Cross-chain |
| Why not every country has stablecoin? (CBDCs) | Macro context |
| USDT vs USDC differences | Comparison |
| UST/Luna collapse | Case study |

**Status**: Included as Module 2.3 after Ethereum, before Solana.

---

## Part 4: Building Programs (Engineer Track)

| Question | Module | Status |
|----------|--------|--------|
| How do digital signatures work? (Ed25519) | 4.3 | ⏳ To write |
| Elliptic curve cryptography | 4.3 | ⏳ To write |
| Signing/verification math | 4.3 | ⏳ To write |
| SPL Token program | 4.5 | ⏳ To write |
| Token-2022 extensions | 4.7 | ⏳ To write |
| NFTs and Metaplex | 4.6 | ⏳ To write |

---

## Part 5: Client Development

| Question | Module | Status |
|----------|--------|--------|
| Wallet adapters | 5.2 | ⏳ To write |
| Reading on-chain data | 5.4 | ⏳ To write |
| Transaction UIs | 5.3 | ⏳ To write |

---

## Part 6: Infrastructure & Advanced

| Question | Module | Status |
|----------|--------|--------|
| Running RPC nodes | 6.1 | ⏳ To write |
| Validator operations | 6.2 | ⏳ To write |
| State compression | 6.4 | ⏳ To write |
| Sealevel runtime details | 6.3 or new | ⏳ To write |

---

## New Module Proposals Based on Questions

### Module 3.5: Staking & Validator Economics (covered)
- Staking mechanics (per epoch rewards)
- How to choose where to stake
- Slashing risks
- Liquid staking (mSOL, jitoSOL, bSOL)
- Stake concentration concerns

### Module 3.6: MEV on Solana (covered)
- What is MEV? (supermarket analogy)
- Frontrunning and sandwich attacks
- Is arbitrage good or bad?
- What is Jito?
- How to protect yourself

### Module 5.5: Wallet Security & Architecture
- Hot/cold storage
- Seed management
- Seedless wallets (Phantom's approach)
- MPC vs traditional custody
- Common scams

---

## Curriculum Structure Update

Based on question mapping, recommended structure:

```
Part 1: Why Blockchain Exists (✅ Complete)
  1.1 The Trust Problem
  1.2 Bitcoin: The First Solution
  1.3 Bitcoin's Limitations

Part 2: The Programmable Era
  2.1 Ethereum: Code on the Blockchain
  2.2 Ethereum's Growing Pains (+ PoS deep dive)
  2.3 Stablecoins: Digital Dollars

Part 3: Enter Solana
  3.1 Solana's Hypothesis
  3.2 How Solana Works (expanded for clients, P2P, genesis)
  3.3 The Solana Account Model
  3.4 Validators & Economics
  3.5 Staking Mechanics
  3.6 MEV on Solana
  3.7 Solana vs Competition

Part 4-6: (Engineer track, unchanged)
```

---

## Priority Gaps to Address

### High Priority (Core Understanding)
1. ⚠️ PoW vs PoS comparison needs dedicated section
2. ⚠️ "Where does the protocol live?" needs answer
3. ⚠️ Blockchain clients explanation needed
4. ⚠️ Finality vs throughput (Visa question)

### Medium Priority (Solana Specifics)
1. Staking mechanics module
2. MEV module
3. Validator economics detail
4. Multiple client ecosystem

### Lower Priority (Advanced)
1. Cryptographic deep dives (Ed25519 math)
2. MPC/secret sharing
3. Seedless wallet architecture
