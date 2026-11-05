# Diyas Tuglukov — portfolio

A bilingual, dependency-free portfolio. English is the default; the selected language and motion preference persist locally.

## Run locally

From this directory:

```sh
npm start
```

Open http://127.0.0.1:4173. Stop the server with Ctrl+C.

The complete deployable site is in `dist/`. It can be served on any static host. No build step or API keys are required. Fonts, illustrations, and PDFs are self-hosted.

## Files

- `dist/index.html`: semantic page structure and initial English content.
- `dist/styles.css`: responsive composition, design tokens, and motion preferences.
- `dist/app.js`: Russian translations, case studies, canvas artwork, and interactions.
- `dist/assets/`: three conceptual SVG project illustrations, local fonts with licenses, original résumé and letters.
- `.openai/hosting.json`: Sites identity and static deployment configuration.

## Content sources

Professional claims come from the résumé updated September 22, 2026 and the xVenture recommendation dated September 27, 2026. The experience section uses the internship period stated in the recommendation: August 1–September 27, 2026. The résumé lists a broader AI Startify period beginning July 2026; these dates may describe different engagements and should be reconciled with the owner before changing them.

Repository links were verified through the public GitHub profile https://github.com/fenzit. SVG illustrations are conceptual studies, not product screenshots. The English recommendation excerpt is a translation of the Russian source. The original documents are linked for reference.

The user approved displaying email, Telegram, GitHub, Almaty, and the original résumé PDF, including the personal information already in that file. Do not broaden publication to additional personal details without the owner's instruction.

## Accessibility and interaction

Native links/buttons and a modal dialog with focus return, keyboard dismissal, visible focus, a skip link, a motion pause control, and support for `prefers-reduced-motion`. Canvas is decorative and pauses when outside the viewport or the tab is hidden. Layouts adapt at 390px, 760px, 1100px, and 1600px.

## Hosting

The initial Sites deployment is private to the owner. Changing it to public is a separate access-setting action; a private URL cannot yet serve as a public recruiter link.
