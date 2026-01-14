# Appendix C: Comparative Notes (Solana-Focused)

High-level comparisons only. For current metrics, use the source links below (as of those sources).

---

## Solana vs Ethereum (Conceptual)

- **Design trade-off**: Solana optimizes for high throughput and fast confirmations; Ethereum optimizes for broad node accessibility and a large ecosystem.
- **Execution model**: Solana separates code and data for parallelism; Ethereum uses contract storage with sequential execution.
- **Scaling strategy**: Solana focuses on L1 performance; Ethereum relies on L2 rollups for scale.

## Solana vs L2s (Conceptual)

- **Composability**: Solana keeps composability on one L1; L2s fragment liquidity and execution across rollups.
- **Latency**: Solana targets low-latency confirmations; L2 latency varies by rollup and settlement rules.

## Solana vs Other L1s (Conceptual)

- **Execution**: Solana uses Sealevel parallelism; other L1s use different concurrency models (e.g., optimistic parallel execution).
- **Clients**: Solana is moving toward multiple validator clients to reduce single-client risk.

---

## Sources for Current Metrics

- Solana performance and validator stats (as of [Solana Beach](https://solanabeach.io) and [Validators.app](https://www.validators.app/))
- Solana commitment definitions (as of [docs.solanalabs.com/consensus/commitments](https://docs.solanalabs.com/consensus/commitments))
- Solana validator requirements (as of [docs.anza.xyz/operations/requirements](https://docs.anza.xyz/operations/requirements))
- Ethereum and L2 metrics (as of [l2beat.com](https://l2beat.com))
- DeFi and TVL metrics (as of [defillama.com](https://defillama.com))

