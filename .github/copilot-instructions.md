# FDM Monster Docs Development Instructions

## Docusaurus Project (Node + Yarn)

### Build & Validation Policy

**IMPORTANT: Do not automatically run build or typecheck commands after making changes.**

- The user will report problems when needed and explicitly request builds
- Only run `yarn build` or validation commands when the user asks for it
- Focus on making the requested changes efficiently without validation overhead

### Available Commands (Use Only When Requested)

```powershell
# Build for production (only when user requests)
yarn build

# Start development server (only when user requests)
yarn start

# Serve production build locally
yarn serve
```

### Project Structure

- **Docusaurus documentation site** for FDM Monster
- **Dark mode focused** design with modern UI
- **Key directories:**
  - `src/pages/` - Main pages (index.tsx)
  - `src/components/` - React components
  - `docs/` - Documentation content
  - `blog/` - Blog posts
  - `static/` - Static assets

### Design System

**Color Palette:**

- Primary: `#ef4444` (red)
- Secondary: `#3b82f6` (blue)
- Dark backgrounds: `#1a1a2e`, `#16213e`, `#0f3460`
- Text: `#ffffff` (primary), `#a0aec0` (secondary)

**Design Principles:**

- Modern, dark-mode first interface
- Glassmorphism effects with backdrop blur
- Smooth animations and transitions
- Card-based layouts with hover effects
- Responsive grid systems

### Code Style

- Use TypeScript/TSX for components
- CSS Modules for styling (`.module.css`)
- Semantic HTML and accessibility
- Mobile-first responsive design

### Workflow

1. Make requested changes
1. **Wait for user to request validation** - don't auto-build
1. User will report issues if problems occur
1. Only run commands when explicitly asked

---

*This prevents unnecessary builds and allows for faster iteration during development.*
