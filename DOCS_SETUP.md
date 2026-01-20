# Starlight Documentation Setup

This repository now uses [Starlight](https://starlight.astro.build/) with the [Obsidian theme](https://fevol.github.io/starlight-theme-obsidian/) to serve the Solana onboarding curriculum as interactive documentation.

## 🎯 What Was Done

1. **Starlight Installation**: Initialized Astro with Starlight in the root directory
2. **Obsidian Theme**: Installed and configured `starlight-theme-obsidian` for a familiar note-taking experience
3. **Content Migration**: Moved all curriculum markdown files from `curriculum/` to `src/content/docs/` with proper structure
4. **Frontmatter Addition**: Added Starlight-compatible frontmatter (title, description) to all markdown files
5. **Navigation Structure**: Created comprehensive sidebar navigation matching the curriculum structure
6. **Custom Styling**: Added custom CSS for audience track markers (🟢 🟡 🔵)
7. **GitHub Actions**: Configured automatic deployment to GitHub Pages

## 📁 Project Structure

```
solana-onboarding/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions deployment workflow
├── curriculum/                 # Original markdown files (kept for reference)
├── src/
│   ├── assets/                # Static assets
│   ├── content/
│   │   └── docs/              # All documentation content
│   │       ├── curriculum-overview/  # Full curriculum guide
│   │       ├── part-1/        # Part 1: Why Blockchain
│   │       ├── part-2/        # Part 2: Programmable Blockchain
│   │       ├── part-3/        # Part 3: Enter Solana
│   │       ├── part-4/        # Part 4: Building Programs
│   │       ├── part-5/        # Part 5: Client Development
│   │       ├── part-6/        # Part 6: Infrastructure
│   │       └── appendices/    # Reference materials
│   ├── styles/
│   │   └── custom.css         # Custom styling for audience markers
│   └── content.config.ts      # Content collections configuration
├── astro.config.mjs           # Astro/Starlight configuration
├── package.json               # Dependencies
└── tsconfig.json              # TypeScript configuration
```

## 🚀 Local Development

### Prerequisites
- Node.js 20 or higher
- npm

### Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
# Site will be available at http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Editing Documentation

### Adding or Editing Content

1. Navigate to the file in `src/content/docs/`
2. Edit the markdown content
3. Ensure proper frontmatter is present (Starlight renders the title as the page heading):

```markdown
---
title: "Your Page Title"
description: "Brief description of the content"
---

Your content here...
```

If you change module order or navigation, keep `curriculum/00-overview.md` in sync since it remains the canonical curriculum map.

### Adding New Pages

1. Create a new `.md` file in the appropriate `src/content/docs/` directory
2. Add frontmatter at the top
3. Update `astro.config.mjs` sidebar configuration if needed

Example:
```javascript
{
  label: 'Part 1: Why Blockchain Exists',
  items: [
    { label: '1.1 The Trust Problem', link: '/part-1/11-the-trust-problem/' },
    { label: 'Your New Page', link: '/part-1/new-page/' }, // Add here
  ],
},
```

## 🎨 Customization

### Styling

Custom styles are in `src/styles/custom.css`. The file includes:
- Audience track color coding (🟢 General, 🟡 PM/EM, 🔵 Engineer)
- Enhanced callout boxes
- Code block styling
- Table improvements

### Configuration

Main configuration is in `astro.config.mjs`:
- **Site URL**: `site: 'https://solflare-wallet.github.io'`
- **Title**: `title: 'Solana Onboarding Curriculum'`
- **Sidebar**: Complete navigation structure

## 🌐 Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup Requirements:**
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch

The workflow (`.github/workflows/deploy.yml`) will:
1. Install dependencies
2. Build the static site
3. Deploy to GitHub Pages

Your site will be available at:
```
https://solflare-wallet.github.io/
```

### Manual Deployment

```bash
# Build the site
npm run build

# The static site will be in the `dist/` directory
# Deploy the contents of `dist/` to your hosting provider
```

## 🔧 Troubleshooting

### Build Fails

1. **Check Node.js version**: Ensure you're using Node 20+
   ```bash
   node --version
   ```

2. **Clear cache and rebuild**:
   ```bash
   rm -rf node_modules package-lock.json dist .astro
   npm install
   npm run build
   ```

3. **Check for syntax errors**: Look for missing frontmatter or invalid markdown syntax

### Links Not Working

- Ensure internal links match the content slug format (e.g., `/part-1/11-the-trust-problem/`)
- Use trailing slashes for internal links to avoid double-redirects
- Prefer relative links within markdown: `[Link Text](../other-page/)`

### Duplicate Content ID Warnings

If you see warnings like `Duplicate id "part-1/11-the-trust-problem"` during `npm run dev`, clear the content cache and restart:

```bash
npm run dev -- --force
```

You can also remove `.astro/` and run `npm run dev` again.

### Styles Not Applying

- Check that `src/styles/custom.css` is properly imported in `astro.config.mjs`
- Clear browser cache or use incognito mode
- Rebuild the site: `npm run build`

## 📚 Features

### Obsidian Theme Features

- **Wikilinks**: Support for `[[page]]` style links
- **Graph View**: Visual navigation graph of page relationships
- **Familiar UI**: Note-taking interface similar to Obsidian

### Starlight Features

- **Built-in Search**: Powered by Pagefind
- **Dark Mode**: Automatic theme switching
- **Mobile Responsive**: Optimized for all screen sizes
- **Fast Performance**: Static site generation with Astro
- **SEO Optimized**: Built-in SEO best practices

## 🤝 Contributing

When adding or updating documentation:

1. Edit files in `src/content/docs/`
2. Test locally with `npm run dev`
3. Build and verify with `npm run build`
4. Commit and push to trigger deployment

## 📖 Resources

- [Starlight Documentation](https://starlight.astro.build/)
- [Obsidian Theme Plugin](https://fevol.github.io/starlight-theme-obsidian/)
- [Astro Documentation](https://docs.astro.build/)
- [Markdown Guide](https://www.markdownguide.org/)

## ⚙️ Configuration Reference

### astro.config.mjs Key Settings

```javascript
export default defineConfig({
  site: 'https://solflare-wallet.github.io',  // Your GitHub Pages URL
  integrations: [
    starlight({
      title: 'Solana Onboarding Curriculum',  // Site title
      description: '...',                      // Site description
      social: [...],                           // Social links
      plugins: [starlightObsidian(...)],      // Obsidian theme
      sidebar: [...]                           // Navigation structure
    })
  ]
});
```

### package.json Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

---

**Questions or Issues?**

Check the [Starlight documentation](https://starlight.astro.build/) or open an issue in this repository.
