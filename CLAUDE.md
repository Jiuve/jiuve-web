# CLAUDE.md - Jiuve Website Project

## Project Overview

**Jiuve** is a professional corporate website for an AI solutions company specializing in custom AI implementations for mid-sized businesses and corporations. Unlike traditional consulting firms, Jiuve provides full-service AI solutions from brainstorming to deployment, including hands-on software development and hardware integration.

### Core Services
1. **Logistics Management AI** - Supply chain optimization, routing, and inventory management
2. **AI Agent Integration** - Workflow automation and intelligent assistants
3. **Analytics Solutions with AI** - Data transformation and predictive modeling

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm
- **Deployment Target**: Vercel (planned)

### Key Dependencies
```json
{
  "next": "^16.0.1",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "@tailwindcss/postcss": "^4.1.17",
  "tailwindcss": "^4.1.17",
  "typescript": "^5.9.3"
}
```

## Project Structure

```
jiuve-web/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with metadata
│       ├── page.tsx             # Home page (design system demo)
│       └── globals.css          # Global styles + design system
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS with Tailwind plugin
├── ProductRequirements.md       # Complete PRD document
└── package.json                 # Dependencies and scripts
```

## Design System

The project uses Tailwind CSS v4's `@theme` directive for a CSS-based design system. All design tokens are defined in `src/app/globals.css`.

### Color Palette (Dark Modern Theme)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | #0F172A | Main text, headers, primary elements |
| `--color-secondary` | #1E293B | Secondary text, borders, subtle elements |
| `--color-accent` | #06B6D4 | Primary CTA buttons, links, highlights |
| `--color-highlight` | #8B5CF6 | Secondary accents, hover states |
| `--color-background` | #FFFFFF | Page background |
| `--color-text` | #0F172A | Body text |
| `--color-border` | #E2E8F0 | Standard borders |
| `--color-border-light` | #CBD5E1 | Light borders |
| `--color-background-subtle` | #F8FAFC | Subtle backgrounds |
| `--color-error` | #EF4444 | Error states |
| `--color-success` | #10B981 | Success states |

### Typography Scale (Mobile-First)

**Font Stack**: System fonts (system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, etc.)

| Element | Mobile | Desktop (1024px+) | Desktop (1280px+) | Weight | Line Height |
|---------|--------|-------------------|-------------------|--------|-------------|
| H1 | 32px | 48px | 60px | 700 | 1.2 |
| H2 | 28px | 36px | 48px | 700 | 1.3 |
| H3 | 24px | 28px | 36px | 600 | 1.3 |
| H4 | 18px | 20px | 24px | 600 | 1.4 |
| Body | 16px | 16px | 16px | 400 | 1.6 |
| Small | 14px | 14px | 14px | 400 | 1.5 |

**Font Weight Variables**:
- `--font-weight-normal`: 400
- `--font-weight-medium`: 500
- `--font-weight-semibold`: 600
- `--font-weight-bold`: 700

### Spacing System (8px Grid)

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | 4px | Tight spacing, icon gaps |
| `--spacing-sm` | 8px | Small gaps, button padding |
| `--spacing-md` | 16px | Default spacing between elements |
| `--spacing-lg` | 24px | Section padding, larger gaps |
| `--spacing-xl` | 32px | Section margins |
| `--spacing-2xl` | 48px | Large section spacing |
| `--spacing-3xl` | 64px | Section breaks |
| `--spacing-4xl` | 96px | Major section divisions |

### Border Radius

- `--radius-sm`: 4px
- `--radius-md`: 6px
- `--radius-lg`: 8px
- `--radius-xl`: 12px

### Shadows

- `--shadow-subtle`: 0 1px 3px rgba(0, 0, 0, 0.1)
- `--shadow-elevated`: 0 4px 12px rgba(0, 0, 0, 0.1)
- `--shadow-focus`: 0 0 0 2px rgba(6, 182, 212, 0.2)

### Transitions

- `--transition-fast`: 200ms ease
- `--transition-base`: 300ms ease

## Usage Examples

### Using Design Tokens

```tsx
// In components, use CSS custom properties
<div style={{ backgroundColor: 'var(--color-accent)' }}>
  Content
</div>

// Or via Tailwind utilities
<div className="text-xl font-semibold">
  Content
</div>
```

### Typography

```tsx
// Headings automatically styled via globals.css
<h1>Heading 1</h1>  // 32px mobile → 60px desktop
<h2>Heading 2</h2>  // 28px mobile → 48px desktop

// Body text
<p className="text-base">Body text</p>
<p className="text-sm">Small text</p>
```

### Buttons (PRD Specification)

```tsx
// Primary Button
<button
  className="px-8 py-3 rounded-md font-semibold text-white hover:scale-105"
  style={{
    backgroundColor: 'var(--color-accent)',
    transition: 'var(--transition-fast)'
  }}
>
  Get Started
</button>

// Secondary Button
<button
  className="px-8 py-3 rounded-md font-semibold border-2"
  style={{
    borderColor: 'var(--color-secondary)',
    color: 'var(--color-primary)'
  }}
>
  Learn More
</button>
```

## Development Workflow

### Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Development Server

```bash
npm run dev
```

Visit http://localhost:3000 to see the application.

### Building

```bash
npm run build
```

The build process:
1. Compiles TypeScript
2. Processes Tailwind CSS
3. Optimizes for production
4. Generates static pages where possible

## Git Workflow

### Branch Naming Convention

Branches must follow the pattern: `claude/<description>-<session-id>`

Example: `claude/next-js-init-011CUxhe8yZuB2pWGer21E3y`

### Current Branch

`claude/next-js-init-011CUxhe8yZuB2pWGer21E3y`

### Commit Guidelines

- Write clear, descriptive commit messages
- Include context about what changed and why
- Reference PRD sections when applicable
- Use imperative mood ("Add feature" not "Added feature")

## Design Philosophy

Inspired by modern SaaS companies:
- **Stripe**: Clean, professional aesthetics
- **Linear**: Sharp typography and spacing
- **Vercel**: Minimalistic, content-focused design

### Principles

1. **Clean and Modern** - Professional without being corporate
2. **Mobile-First** - Responsive design starting from mobile
3. **Content-Focused** - Clear hierarchy and generous whitespace
4. **Performance** - Fast loading, optimized assets
5. **Accessible** - WCAG 2.1 Level AA compliance (target)

## Responsive Breakpoints

| Device | Breakpoint | Priority |
|--------|------------|----------|
| Mobile | < 640px | High |
| Tablet | 640px - 1024px | High |
| Desktop | > 1024px | High |
| Large Desktop | > 1280px | Medium |

## Key Architectural Decisions

### Why Tailwind CSS v4?

- **CSS-First Configuration**: Using `@theme` directive for better IDE support and type safety
- **Performance**: Smaller bundle sizes with v4's new engine
- **Modern**: Latest features and best practices
- **Developer Experience**: Better autocomplete and error messages

### Why Next.js App Router?

- **Modern React**: Server Components by default
- **Performance**: Automatic code splitting and optimization
- **SEO**: Built-in meta tag support and server-side rendering
- **File-based Routing**: Intuitive project structure

### Why TypeScript Strict Mode?

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Maintainability**: Self-documenting code
- **Team Collaboration**: Clear contracts between components

## Performance Targets (PRD Section 6.3)

| Metric | Target |
|--------|--------|
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Time to Interactive (TTI) | < 3.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Lighthouse Score (Performance) | > 90 |

## Accessibility Requirements

- **WCAG 2.1 Level AA** compliance
- Minimum color contrast ratio: 4.5:1 for normal text
- Keyboard navigation support
- Screen reader compatibility
- Alt text for all images
- ARIA labels where appropriate
- Focus indicators on interactive elements

## Planned Pages (PRD Section 4.1)

1. **Main Page (Home)** - `/`
   - Hero Section
   - What Makes Us Different
   - Our Services (3 cards)
   - Our Approach/Values (5 values)
   - Call-to-Action
   - Footer

2. **Contact Page** - `/contact`
   - Contact form (email, phone, message)
   - Form submission to: chunkiet@jiuve.com

3. **About Us Page** - `/about`
   - Founder information
   - Achievements
   - Company values
   - Mission statement

## Current Status

### Completed (Phase 1)
- ✅ Task 1.1: Initialize Next.js project
- ✅ Task 1.2: Set up Tailwind CSS with complete design system
- ✅ Design system implementation (all tokens)
- ✅ TypeScript configuration
- ✅ ESLint configuration
- ✅ Build verification

### Next Steps (Phase 1)
- ⏳ Task 1.3: Configure deployment on Vercel
- ⏳ Task 1.4: Create component structure
- ⏳ Task 1.5: Implement remaining design system components

### Future Phases
- Phase 2: Main Page Development
- Phase 3: Contact Page Development
- Phase 4: About Us Page Development
- Phase 5: Polish and Optimization
- Phase 6: Testing and Launch

## Important Files

- **ProductRequirements.md** - Complete product requirements and specifications
- **tasks.md** - Detailed task breakdown for all phases
- **package.json** - Dependencies and scripts
- **src/app/globals.css** - Design system and global styles
- **src/app/layout.tsx** - Root layout and metadata
- **tailwind.config.ts** - Tailwind configuration
- **tsconfig.json** - TypeScript configuration

## Contact Information

- **Company Email**: chunkiet@jiuve.com
- **Project Type**: Corporate Website
- **Target Audience**: Mid-sized businesses and corporations

## Notes for AI Assistants

1. **Design System**: All design tokens are in `globals.css` using CSS custom properties. Use these variables instead of hardcoding values.

2. **Responsive Design**: Always start mobile-first, then enhance for larger screens.

3. **Component Development**: When creating new components, follow the PRD specifications in Section 7 (Design Specifications).

4. **Typography**: Heading sizes are automatically responsive via media queries in `globals.css`. No need to add responsive classes.

5. **Colors**: Use CSS custom properties (`var(--color-*)`) for consistency.

6. **Spacing**: Follow the 8px grid system using the spacing tokens.

7. **Accessibility**: Always include proper semantic HTML, ARIA labels, and keyboard navigation.

8. **Performance**: Optimize images, use lazy loading, and follow Next.js best practices.

9. **Git**: Remember to commit and push to branches with the correct session ID suffix.

10. **PRD Reference**: Always consult `ProductRequirements.md` for detailed specifications before implementing features.

---

**Last Updated**: November 9, 2025
**Current Phase**: Phase 1 - Setup and Foundation
**Branch**: claude/next-js-init-011CUxhe8yZuB2pWGer21E3y
