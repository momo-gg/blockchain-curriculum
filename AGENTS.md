# Repository Guidelines

## Project Structure & Module Organization

- `curriculum/` holds all learning modules and appendices in Markdown.
- `curriculum/00-overview.md` is the primary index; it should remain the canonical map.
- Core content lives in `curriculum/part-1-why-blockchain/` through `curriculum/part-6-infrastructure/`.
- Reference material is in `curriculum/appendices/`.
- File naming follows numeric prefixes and kebab-case (example: `curriculum/part-3-enter-solana/3.2-how-solana-works.md`).

## Build, Test, and Development Commands

- No build or test scripts are defined in this repository.
- For local review, render Markdown in your editor or run a preview extension.
- Validate links manually by opening `curriculum/00-overview.md` and traversing “Next” links.

## Coding Style & Naming Conventions

- Use Markdown with consistent heading levels and short, scannable paragraphs.
- Keep line length reasonable for readability; avoid large, dense blocks.
- Use existing callouts and markers (🟢/🟡/🔵, ⚠️, 💡) where the convention already appears.
- Preserve the established folder structure and numeric ordering.

## Testing Guidelines

- There is no automated test suite.
- Treat link integrity and navigation as the “tests” for content changes.
- When updating metrics, add or update ⚠️ data disclaimer callouts where relevant.

## Commit & Pull Request Guidelines

- Commit messages are short, imperative, and topic-focused (example: `Clarify glossary rent terms`).
- PRs should describe the scope of curriculum changes and list any updated modules.
- Include rationale for content changes that affect learning sequence or accuracy.

## Content & Data Freshness

- If you update data or claims, check the “Data Freshness” section in `README.md`.
- Consider updating the “Last Updated” badge when broad updates are made.
- Maintain the progressive-learning intent: “why” before “how.”
