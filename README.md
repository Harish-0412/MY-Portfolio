# Harish K — Portfolio

A responsive React and TypeScript portfolio with an editorial layout inspired by the Percy Jackson Framer reference. The frontend features oversized typography, an interactive grid, scroll reveals, project previews and detail views, research experience, achievements, and certification detail views.

## Run locally

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run typecheck
npm run build
```

## Update content

- Personal information, project descriptions, links, skills, achievements, and credentials: `src/data/portfolio.ts`.
- Page structure and interactions: `src/App.tsx`.
- Main design and responsive styles: `src/App.css` and `src/index.css`.
- The looping motion reel between the hero and Selected Works uses the supplied `gxybd2yBLBRv3ATlrNF36QPi9k4.mp4`. Its still-frame poster is `src/assets/reel-poster.jpg`; Vite imports the video as a build asset so both deployment base paths work. Playback is muted and inline, pauses offscreen or in a hidden tab, and offers a keyboard-accessible pause/play control. With reduced motion enabled, it starts as a still image and plays on request.
- Project previews: `src/components/ProjectArtwork.tsx` and its stylesheet. Odysseus AFK and Recoup use captured landing-page screenshots, and Heimdall uses the supplied landing-page image. Assets are in `src/assets/projects/`. VideoSceneRAG and NammaWay AI retain their labeled product concepts.
- Portrait and original certificate documents: `public/profile.png` and `public/Certificates/`.
- Certificate images for the detail views: `public/Certificates/previews/{credential.id}.png`. PDF previews show the first page; original files remain available from each detail view. The NVIDIA and Microsoft SQL AI certificates use the supplied images.

Each project has a shareable hash URL such as `#project/heimdall`, including projects without a public demo. Project views support keyboard navigation, Escape, and browser history. Heimdall is marked in development and links to its repository; published projects include links to their live sites. The mobile menu supports keyboard focus management, and motion respects the reduced-motion preference.

The seven credentials in Always learning open detail views at URLs such as `#certification/nvidia` and `#certification/microsoft-sql-ai`. A certificate preview sits beside its meaning, skills, and key concepts on desktop, then stacks above the explanation on mobile. Details include document dates where supplied, an original certificate link, and the issuer's official curriculum. Certification views share the project views' keyboard and history behavior; closing a direct certification link returns to `#recognition`.

The existing deployment setup is preserved: production assets use `/MY-Portfolio/` for GitHub Pages and `/` when the `VERCEL` environment variable is present. `npm run build:gh-pages` builds for the existing GitHub Pages workflow.
