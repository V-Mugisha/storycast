# StoryCast

StoryCast is a 3-page accessible microsite for audio and video storytelling. It retells the story of Noah and the Ark in its own words, combining video, audio, captions, and a live synced transcript. Built with semantic HTML5, Sass, and vanilla JavaScript. No frameworks.

## Pages

- **Home** (`index.html`) - introduces StoryCast, highlights the featured story, and links into it.
- **Story** (`story/noah-and-the-ark.html`) - the fully developed story with a captioned video, an audio segment, a live synced transcript, and related stories.
- **About & Accessibility** (`about.html`) - explains the mission, the accessibility features, and how to engage.

```
StoryCast
|-- Home (index.html)
|   `-- links to Story
|-- Story (story/noah-and-the-ark.html)
|   |-- links to Home and About
|   `-- Related stories (teaser cards)
`-- About & Accessibility (about.html)
    `-- links to Home and Story
```

## Project structure

```
storycast/
├── index.html                      Home page
├── about.html                      About & Accessibility page
├── story/
│   └── noah-and-the-ark.html       Story detail page (video + audio + transcript)
├── sass/
│   ├── main.scss                   Entry point: @use imports and @layer order
│   ├── _base.scss                  Reset, global element styles, utilities
│   ├── tokens/
│   │   ├── _index.scss             Forwards colors, typography, spacing
│   │   ├── _colors.scss            Color tokens (AA-checked contrast)
│   │   ├── _typography.scss        Font, size, weight, and measure tokens
│   │   └── _spacing.scss           Spacing, radius, breakpoints, respond() mixin
│   ├── components/
│   │   ├── _buttons.scss           .btn, .btn--primary
│   │   ├── _nav.scss               .site-header, .site-nav, .breadcrumb
│   │   └── _story-card.scss        .story-card (the container-queried component)
│   └── layout/
│       └── _grid.scss              .hero, .stories-grid, .story-layout, .transcript, .site-footer
├── css/
│   └── main.css                    Compiled output (build artifact, do not hand-edit)
├── js/
│   └── main.js                     Progressive enhancement: caption and transcript sync
├── images/                         Story artwork
├── assets/
│   ├── videos/                     Video files
│   ├── audios/                     Audio files
│   └── captions/                   WebVTT (.vtt) caption files
├── package.json                    Scripts and devDependencies
└── .gitignore
```

## Tech stack

- Semantic HTML5.
- Sass with partials, tokens, BEM naming, and cascade layers (`@layer`).
- Responsive layout with CSS Grid and Flexbox.
- Container queries for the `.story-card` component, which adapts to its own box size rather than the viewport.
- Vanilla JavaScript for progressive enhancement only; the site works with JavaScript disabled.

## Running locally

Prerequisites: Node.js and npm.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Develop (watch Sass and serve with browser-sync):

   ```bash
   npm run dev
   ```

3. Build the CSS once (compressed, no source map):

   ```bash
   npm run build
   ```

The compiled `css/main.css` is committed, so you can also open `index.html` directly in a browser without installing anything.

## Accessibility checklist

| Requirement | How it is met |
| --- | --- |
| Captions for video | `<track kind="captions" default>` pointing at `assets/captions/*.vtt` (WCAG SC 1.2.2) |
| Transcripts for media | A full, visible transcript is synced to both the video and the audio (WCAG SC 1.2.3) |
| Semantic structure | `header`, `main`, `nav`, `article`, `section`, `figure`, `aside`, and `footer`; one `h1` per page with a logical heading hierarchy (SC 1.3.1) |
| Keyboard operability | Native links, buttons, and media controls; no non-semantic clickable elements (SC 2.1.1) |
| Visible focus | A global `:focus-visible` ring that meets non-text contrast (SC 2.4.7) |
| Skip link | "Skip to main content" is the first focusable element on every page (SC 2.4.1) |
| Color contrast | Tokens in `_colors.scss` meet at least 4.5:1 for text and 3:1 for UI components (SC 1.4.3) |
| No color-only meaning | The active transcript line uses background, border, and weight, not color alone (SC 1.4.1) |
| Reduced motion | `prefers-reduced-motion` is respected globally and by the transcript scroll (SC 2.3.3) |
| Images | Descriptive `alt` text; decorative and duplicate links use `alt=""` with `aria-hidden` (SC 1.1.1) |
| ARIA | `aria-current`, `aria-label`, and `aria-labelledby` where semantic HTML alone is insufficient |

## Author

Created by Victor Mugisha. Contact: m.victor@alustudent.com
