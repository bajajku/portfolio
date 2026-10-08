# Kunal Bajaj portfolio

A dark, experience-first portfolio built with React and TypeScript. Employment history is immediately readable, followed by selected projects, open-source contributions, current learning and technical foundations.

## Development

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run build
npm run lint
npm run preview -- --host 127.0.0.1
```

The static production build is generated in `dist/`. The existing live site is https://bajajku-github-io.vercel.app/. The legacy `npm run deploy` command targets GitHub Pages, which is a separate hosting destination.

## Design decisions

Guidance: [taste-skill](https://github.com/Leonxlnx/taste-skill), including its minimalist guidance. Dials: `DESIGN_VARIANCE: 3`, `MOTION_INTENSITY: 1`, `VISUAL_DENSITY: 5`.

The previous interface mixed 3D backgrounds, theme controls and chat-style presentation with professional content. The first redesign still had decorative panels and oversized editorial copy. The revised brief calls for dark, simple and easy to read, with experience first and no personality section.

The page uses a consistent charcoal palette, self-hosted Geist typography, restrained separators and one pale green interaction accent. Employment details stay expanded. Glass is limited to the navigation backdrop. Project images show actual work; decorative generated imagery would interrupt the requested experience-first reading order. No entry animations or continuous motion are used. Layouts collapse explicitly below 768px.

## Content and evidence

- `src/App.tsx`: experience, page composition, links and native project dialogs.
- `src/content.ts`: project case studies and current learning.
- `public/Kunal_Bajaj_Resume.pdf`: reviewed applied-AI resume from ResumeLab's October 8, 2026 collection.
- `public/images/coda-meeting.webp`: optimized screenshot from Kunal's Coda repository, `meet-main/.github/assets/coda/meeting-with-participants.png`.
- Professional claims are grounded in ResumeLab's profile, reviewed evidence and direct user clarifications. Existing Google platforms are described as existing; the anomaly architecture is described as designed, rather than deployed.
- GPT implementation, inference engineering, agent papers and interpretability are ongoing learning. The personality section is omitted at the user's request.
- AutoMed's precision/recall results and the separate evaluation framework's F1 result are kept distinct. Employer source code and internal data are not included.

## Accessibility and dependencies

Native dialogs support Escape dismissal and focus restoration. A skip link, keyboard focus styles, reduced-motion support and clipboard-failure feedback are included. Fonts, screenshot and resume are hosted with the site. External services load only when visitors follow a link. No analytics, model API, chat simulation or Three.js runtime is included in this portfolio.
