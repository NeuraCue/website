# HookHub - Product Specification

## Overview

HookHub is a discovery platform for open-source Claude Code hooks. It serves as a central repository
where developers can browse and find community-created hooks to enhance their Claude Code workflows.

## Target Audience

- Developers using Claude Code who want to enhance their workflows
- Hook creators who want to share their work with the community
- Teams looking for standardized hook implementations

## MVP Scope

### Core Functionality

Display a browsable collection of Claude Code hooks with basic filtering and navigation.

### Out of Scope (Future)

- User authentication
- Hook uploads/submissions
- Hook ratings/reviews
- Search functionality
- Hook installation scripts
- User profiles
- Analytics/tracking

## Hook Data Model

Each hook entry contains:

| Field         | Type   | Description                                                                                                                           |
|---------------|--------|---------------------------------------------------------------------------------------------------------------------------------------|
| `name`        | string | Display name of the hook (e.g., "Multi-Agent Observability")                                                                          |
| `category`    | enum   | Hook type - one of: PreToolUse, PostToolUse, Notification, UserPromptSubmit, Stop, SubagentStop, PreCompact, SessionStart, SessionEnd |
| `description` | string | Brief description of what the hook does (1-2 sentences)                                                                               |
| `repoUrl`     | string | Full GitHub repository URL                                                                                                            |
| `author`      | string | Repository owner/author name                                                                                                          |
| `language`    | string | Implementation language (e.g., "Python", "TypeScript", "Shell")                                                                       |

## UI/UX Design

### Home Page Layout

```
┌─────────────────────────────────────────────────────────┐
│                       HookHub                            │
│     Discover Community Claude Code Hooks                 │
│                                                          │
│  [All] [PreToolUse] [PostToolUse] [SessionStart] ...    │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │  Hook 1  │  │  Hook 2  │  │  Hook 3  │              │
│  │  Icon    │  │  Icon    │  │  Icon    │              │
│  │  Name    │  │  Name    │  │  Name    │              │
│  │  Category│  │  Category│  │  Category│              │
│  │  Desc... │  │  Desc... │  │  Desc... │              │
│  │  Author  │  │  Author  │  │  Author  │              │
│  │  Lang    │  │  Lang    │  │  Lang    │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │  Hook 4  │  │  Hook 5  │  │  Hook 6  │              │
│  └──────────┘  └──────────┘  └──────────┘              │
└─────────────────────────────────────────────────────────┘
```

### Hook Card Design

Each card displays:

- Hook name (bold, larger text)
- Category badge (colored pill)
- Description (2-3 lines, truncated)
- Author name with GitHub icon
- Language badge
- "View Repo →" link/button

### Category Filter

Horizontal pill-style filter buttons:

- "All" (default, shows all hooks)
- Individual categories (PreToolUse, PostToolUse, etc.)
- Active state visually distinct
- Click to filter grid to show only that category

### Visual Design

- **Grid**: Responsive (3 columns desktop, 2 tablet, 1 mobile)
- **Spacing**: Generous padding and gaps for readability
- **Colors**:
    - Category badges: Unique color per category
    - Cards: Subtle border, hover effect
- **Typography**: Clean, readable font stack (inherits from Geist)
- **Dark Mode**: Full support using Tailwind's dark mode

## Data Source

### MVP Implementation

Hard-coded array of hook objects in a TypeScript file (`src/data/hooks.ts`), seeded with popular
hooks from:

- disler/claude-code-hooks-mastery
- johnlindquist/claude-hooks
- decider/claude-hooks
- EvanL1/claude-code-hooks
- disler/claude-code-hooks-multi-agent-observability

### Future Iterations

- GitHub API integration to fetch live data
- Database with submission workflow
- Automated discovery via GitHub topics

## Technical Implementation

### Tech Stack

- **Framework**: Next.js 15.4.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Icons**: lucide-react or heroicons

### File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (existing)
│   ├── page.tsx            # Home page with grid (modify)
│   └── globals.css         # Global styles (existing)
├── components/
│   ├── HookCard.tsx        # Individual hook card component
│   ├── CategoryFilter.tsx  # Category filter component
│   └── HookGrid.tsx        # Grid container component
├── data/
│   └── hooks.ts            # Hook data array
└── types/
    └── hook.ts             # TypeScript interfaces
```

### Component Hierarchy

```
page.tsx
├── CategoryFilter
└── HookGrid
    └── HookCard (×N)
```

## User Stories

1. **Browse Hooks**: As a developer, I can view all available hooks in a grid layout
2. **Filter by Category**: As a developer, I can filter hooks by their category to find relevant
   ones
3. **Access Repository**: As a developer, I can click through to the GitHub repository to view
   implementation
4. **Responsive Design**: As a mobile user, I can browse hooks on my phone with an optimized layout
5. **Dark Mode**: As a developer, I can view the site in dark mode

## Acceptance Criteria

- [ ] Home page displays at least 10 hooks in a grid layout
- [ ] Grid is responsive (3/2/1 columns based on screen size)
- [ ] Category filter shows all 9 hook types plus "All" option
- [ ] Clicking a category filters the grid instantly (client-side)
- [ ] Each card displays all required hook information
- [ ] "View Repo" links open GitHub repos in new tab
- [ ] Dark mode works correctly with appropriate colors
- [ ] Page loads quickly (< 1s)
- [ ] No layout shift on initial load
- [ ] All text is readable with sufficient contrast

## Success Metrics (Future)

- Number of unique visitors
- Click-through rate to repositories
- Most popular hook categories
- Time on site

## Roadmap (Post-MVP)

### Phase 2

- Search functionality
- Hook detail pages
- GitHub API integration for live stats (stars, forks)

### Phase 3

- User submissions
- Hook ratings and reviews
- Installation instructions

### Phase 4

- Hook testing/validation
- One-click installation
- Personal hook collections

## Open Questions

1. Should we include hook previews (code snippets)?
2. Do we need a submission form, or start with curated hooks only?
3. Should categories have descriptions/tooltips?
4. Display last updated date from GitHub?

## References

- [Claude Code Hooks Documentation](https://docs.claude.com/en/docs/claude-code/hooks)
- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)
- [claude-hooks GitHub Topic](https://github.com/topics/claude-hooks)
