# Kunal Bajaj portfolio

A dark, concise portfolio presenting Kunal as a software engineer focused on applied AI. Employer summaries establish context; capabilities describe how he can contribute; project examples link directly to real work. Detailed chronology and metrics are available in the linked resume.

## Development

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run build
npm run lint
npm run preview -- --host 127.0.0.1
```

The static build is generated in `dist/`. Pushing `main` deploys the existing Vercel project at https://bajajku-github-io.vercel.app/. The legacy `npm run deploy` command targets a separate GitHub Pages destination.

## Design and editorial decisions

Guidance: [taste-skill](https://github.com/Leonxlnx/taste-skill), including minimalist guidance. Dials: `DESIGN_VARIANCE: 3`, `MOTION_INTENSITY: 1`, `VISUAL_DENSITY: 4`.

The user requested a simple dark page, with experience before other content and no personality section. The later editorial direction is an abstract professional introduction, rather than a second resume. The page therefore summarizes three employers, connects skills to four contribution areas and keeps project descriptions brief. Long case studies, bullet lists, numerical results and duplicate timelines were removed. Research articles and deeper project narratives can be added when actual material is ready; no placeholders or unpublished posts are presented as finished work.

Charcoal colors, self-hosted Geist type and quiet separators keep the reading order clear. Glass is limited to the navigation backdrop. The project image is a real screenshot. All multi-column layouts collapse explicitly on mobile. Motion is limited to native scrolling and button feedback, with reduced-motion support.

## Content and evidence

- `src/content.ts`: employer summaries and capabilities.
- `src/App.tsx`: introduction, projects, current exploration and contact.
- Professional claims are grounded in ResumeLab's profile, reviewed repository evidence and direct clarifications, including LoRA, vLLM and VAC guardrails. Skills are described at the scope established by that evidence. No new metrics, ownership, employment scope or results are inferred.
- GPT from scratch, inference study, agent papers and interpretability are presented as current learning.
- The linked resume remains the reviewed applied-AI PDF from ResumeLab's October 8 collection.
- `public/images/coda-meeting.webp` is an optimized real screenshot from Kunal's Coda repository (`meet-main/.github/assets/coda/meeting-with-participants.png`).

## Accessibility and dependencies

A skip link, visible keyboard focus, readable contrast, reduced-motion support and clipboard success/failure feedback are included. Fonts, screenshot and resume are served with the site. External services load only when visitors follow a link. No analytics, model API, chat simulation or Three.js runtime is included in this portfolio.
