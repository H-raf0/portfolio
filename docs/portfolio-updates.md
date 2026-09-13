# Portfolio image and language guide

The existing painted background, figure, serif/mono typography, gold frames,
Roman numerals, chartreuse accents, chapter structure, and responsive grid remain.
The image mount is now **4:3** instead of 4:5 so application screenshots are easier
to see. The mount reserves its size before loading and also contains the numbered
fallback, so failed or delayed images do not move the surrounding content.

## Exactly where to put project images

All six images are already included. Replace the file at the matching path below
to use a newer screenshot. These are filesystem paths relative to the repository
root; the browser URL omits `public`.

| Project | File to replace | Included image size | Recommended replacement |
| --- | --- | --- | --- |
| OCULA | `public/assets/marginalia/projects/ocula.webp` | 1188 × 582 | 1600 × 1200, 4:3, WebP |
| Incremental Game API | `public/assets/marginalia/projects/incremental-game.webp` | 840 × 900 | 1600 × 1200, 4:3, WebP |
| Labyrinthe 2D | `public/assets/marginalia/projects/labyrinth-2d.webp` | 562 × 450 | 1600 × 1200, 4:3, WebP |
| Collaborative Game of Life | `public/assets/marginalia/projects/life-game.webp` | 1400 × 697 | 1600 × 1200, 4:3, WebP |
| 2D Platformer Prototype | `public/assets/marginalia/projects/unity-platformer.webp` | 780 × 365 | 1600 × 1200, 4:3, WebP |
| Rabbit Population Simulation | `public/assets/marginalia/projects/rabbit-simulation.webp` | 1600 × 793 | 1600 × 1200, 4:3, WebP |

**1600 × 1200 is an export target, not a requirement to enlarge small originals.**
Keep a source at its native size when it is smaller. An 800 × 600 image is also
adequate for standard-density cards. The supplied images preserve their source
proportions and total approximately 245 KiB. No animated videos or GIFs are shipped.

For detailed interfaces and plots, preserve the whole screenshot and use `contain`;
the existing dark canvas becomes a gallery mat. A 4:3 export fills that area exactly.
Use `cover` for artwork or a deliberately composed cover that tolerates cropping.
The maze currently uses `cover`; the other entries use `contain` to preserve UI
controls, consoles, and graph axes. Avoid burning portfolio titles or labels into
the image: the existing plaques and descriptions already provide those in EN/FR.

Aim for about 80–250 KB per new image. WebP is recommended; PNG is suitable for
very sharp diagrams when its size is reasonable. JPG and AVIF also work with the
appropriate filename and `thumb` extension. Keep important content away from the
outer edges because the hover effect zooms the image slightly.

## Code locations

`src/marginalia/data/works.js` defines every image. Each project has:

```js
thumb: "/assets/marginalia/projects/ocula.webp",
imageAlt: "A concise English description of the actual screenshot.",
imageAltFr: "Une description concise en français de la capture réelle.",
imageWidth: 1600,
imageHeight: 1200,
imageFit: "contain", // or "cover"
// imagePosition: "center", // optional, e.g. "50% 35%" for a cover crop
```

When replacing a file, also update its intrinsic `imageWidth` / `imageHeight` and
both alt descriptions if the subject changes. Keep its path unchanged to avoid
needing other code edits. To explicitly use the numbered fallback, set `thumb` to
`null`. A missing file, corrupt image, or network error also activates the fallback.

`src/marginalia/components/Work.jsx` handles loading, errors, lazy loading, async
decoding, and localized alt text. `Work.css` defines the reserved 4:3 mount,
gold frame, plaque, image fade-in, and hover/focus zoom. The existing 3 / 2 / 1
column breakpoints remain. Motion is disabled when reduced motion is requested.

## Image provenance

These are images of the actual projects, extracted from the owner's publicly
linked recordings and repository output. They are not AI-generated interface mockups.
Browser chrome and recording sidebars were cropped where possible. Keep the
original project and any third-party asset credits when reusing images elsewhere.

| Image | Source and preparation |
| --- | --- |
| OCULA | [Demo linked by the OCULA README](https://github.com/user-attachments/assets/3f2b2043-e3de-4334-8ad1-16ad4449523b), frame at about 97.46 s; application area cropped to 1188 × 582. |
| Incremental Game API | [Client demo linked by the README](https://drive.google.com/file/d/16LysV0LNoWsGCyy_PP92Z3JF8Q2hkecP/view), public video poster; black side bars removed. This shows the client login/request console, not an API administration UI. |
| Labyrinthe 2D | [Gameplay GIF](https://github.com/H-raf0/jeu-de-labyrinthe-2d/blob/HEAD/assets/demo/gameplay.gif), frame 100; side bars removed. |
| Collaborative Game of Life | [Demo linked by the README](https://github.com/user-attachments/assets/02b51196-7712-404b-9e08-a60ad343a547), frame at about 52.88 s; browser chrome cropped and width reduced to 1400 px. |
| 2D Platformer Prototype | [Gameplay GIF](https://github.com/H-raf0/Unity2DGamePlatformer/blob/HEAD/myGameGIf.gif), frame 100. |
| Rabbit Population Simulation | [Population chart](https://github.com/H-raf0/rabbit-simulation/blob/HEAD/01_population_over_time.png), reduced to 1600 px wide with axes and legend preserved. |

The captures retain text from the original applications/plots. Portfolio text and
image alternatives translate, but text baked into a screenshot is not changed.
Higher-resolution captures, a gameplay/progression shot for Incremental Game, and
a clearer zoomed-in Game of Life pattern would be useful future asset replacements.

## CV and LinkedIn

The header CV link is now a gold button with a download icon, a gentle lift on
hover/focus, and a minimum 46 px height. It remains visible on mobile. The CV entry
under Education receives a matching gold accent and icon.

The PDF is already present at:
`public/assets/marginalia/CV_Achraf_EL_ALLALI_Dev_Stage.pdf`.
Both languages download this existing document. Translating the PDF itself is a
separate content task; there is no separate English CV file in this repository.
Its URL is configured in `config.jsx` (`hero.topRight`) and `data/press.js`.

The full-profile link already pointed to
[Achraf's LinkedIn profile](https://www.linkedin.com/in/achraf-el-allali).
It now includes a clickable LinkedIn icon within the same link, with an explicit
localized accessible name, keyboard focus, and matching hover treatment. The
profile URL is `SITE.writing.archiveHref` in `src/marginalia/config.jsx`.

**No URL or icon asset is required from you.** Only provide a replacement LinkedIn
URL if the existing one is incorrect. The inline icons live in
`src/marginalia/components/Icons.jsx`; no icon library, font, or external request is
needed. Other existing LinkedIn links remain in `config.jsx`, `data/press.js`, and
`data/socials.js` if your profile URL changes later.

## EN / FR behavior and editing translations

The switcher appears in the header and footer, with the same state in both places.
Its buttons have full accessible names, 44 px targets, visible keyboard focus,
`aria-pressed` selection, and a persistent underline so selection is not color-only.

Selection precedence on load:

1. A valid `?lang=en` or `?lang=fr` URL parameter.
2. The saved `portfolio-language` value in localStorage.
3. English, preserving the original default.

Switching updates the page without reloading or remounting the sections. The
contact draft and existing reveal state stay intact. The selected language is
written to the URL and localStorage; other query parameters and the section hash
are preserved. Anchor navigation and reloads retain the selection. Back/forward
navigation reads the current URL preference. If storage is blocked, the switcher
still works in memory and through the URL.

Translations include headings, introductory text, project titles/descriptions and
non-brand tags, experience, skills, education, dates, contact labels/placeholders,
email subject/body, confirmation copy, footer credits, accessibility labels,
document title/description, and `<html lang>`. Technology names, personal names,
addresses, and the official course title remain proper names.

Edit English site copy in the original `config.jsx` and `data/*.js` files. Edit
French content and shared UI text in `src/marginalia/i18n/content.jsx`.
`LanguageProvider.jsx` manages selection; `context.js` exposes `useLanguage()`;
`LanguageSwitcher.jsx` and its stylesheet render the controls. Translation uses
React's existing context API and adds no runtime dependencies or network requests.

On language changes, headers, hero copy, and project metadata fade in over 220 ms
without moving or remounting the page. Reduced-motion users receive an immediate
text update and no added transitions. A short polite status announces the language.

## Related fixes and deferred observations

Implemented because they affect the requested accessibility/responsiveness:

- Added clear scoped keyboard-focus outlines for links, buttons, and form fields.
- Made translated project plaques wrap inside their frames.
- Contained the decorative figure's mobile overflow, which created horizontal scrolling.
- Strengthened the hero card's dark backing/text contrast over the painting.
- Removed hidden section-index links from keyboard navigation while the index is invisible.
- Made section-index navigation respect reduced motion and preserve the section hash.
- Allowed long contact addresses and education links to fit narrow screens.
- Renamed “Working hours” to “Availability” because the content describes availability,
  not office hours; corrected the displayed PDF size to approximately 243 KiB.

Deferred to avoid unrelated changes:

- The background painting is approximately 7.7 MB. A carefully compared WebP/AVIF
  version would make a larger loading-speed improvement than further compressing
  these already-small project images.
- Some unused historical section-specific CSS remains beside the shared
  `ChapterHeader` styles. Cleaning it up can be a separate maintenance pass.
- Content is client-rendered. Separate static localized pages could improve
  multilingual SEO if that becomes a priority.
- Navigation lists Projects before About, while the page renders About first.
  The existing chapter order and numerals were preserved.
- `npm audit` on the unchanged lockfile reports seven vulnerable dependencies
  (five high, one moderate, one low), including Vite and build-tool dependencies.
  A dependency update should be reviewed separately; no automatic audit fix was run.

No background asset conversion, deployment change, project content expansion,
license change, or new runtime dependency was included.

## Verification

- `npm run lint`, `npm run build`, and `git diff --check` passed.
- The production build was checked in Chromium at 320, 390, 768, 1024, and 1440 px,
  in both EN and FR. The CV was visible, all six images loaded, and the page had no
  horizontal overflow.
- Browser checks covered keyboard activation/focus, translated headings/dates/meta,
  hash navigation, refresh persistence, blocked localStorage, contact-draft
  preservation, the actual PDF response, and the LinkedIn destination/icon.
- All six image requests were deliberately failed; each displayed its original
  Roman-numeral fallback in the same reserved 4:3 area.
- Normal and reduced-motion interactions passed with no uncaught browser errors.
- `package.json` and `package-lock.json` are unchanged. Browser/image-processing
  tools were temporary review tools, not application dependencies.
