# Hayatul Islamiya Complex – official website

The public website of the institution that runs Hayatul Islamiya Primary School and Hayatul Islamiya Secondary
School (O-Level and A-Level), Bonga, Babati – Manyara. Pages are in Swahili.

Built with React 19, TypeScript, Vite 7 and Tailwind CSS 4. Packages are installed with **pnpm** (not npm).

## Run it

```bash
pnpm install
pnpm dev          # http://localhost:5174, /api goes to the local API (http://127.0.0.1:8000)
pnpm build        # type-check and build into dist/
pnpm deploy       # build and publish to Firebase hosting
```

To use another API while developing: `API_PROXY=https://api.example.com pnpm dev`.
Production uses `VITE_API_URL` in `.env.production` (`https://api.hayatulislamiya.com`).

## What comes from the school system (SIS)

The website reads these from the HISMS API (`/api/website/`, no login). Staff change them in the SIS under
**Website** (permission `manage_website`, admins by default):

| On the website | Changed in the SIS |
|---|---|
| Slideshow on the home page (shows the built-in photos until pictures are uploaded) | Website > Slideshow |
| News (Habari) | Website > News |
| Joining forms for Primary, O-Level and A-Level (PDF downloads) | Website > Joining forms |

Everything else (about, schools, health centre, contacts) is in the code: facts in `src/lib/site.ts`.

## Folders

| Path | What |
|---|---|
| `src/pages/` | One file per page (loaded on demand) |
| `src/components/` | Header, footer, slideshow, joining forms, news card, page blocks |
| `src/lib/api.ts` | Reading the API |
| `src/lib/site.ts` | Contacts, menu, subjects, A-Level combinations |
| `src/assets/images/` | Photos, WebP, at most 1600 px wide |
| `src/index.css` | Colours (`@theme`) and shared classes (`btn-*`, `card`, `container-page`) |

## Rules

- Pictures: save as WebP, at most 1600 px wide (a phone photo of 3 MB becomes about 100 KB). Large files make
  the site slow and the repository heavy.
- Works on phones, tablets and computers: check 360, 768 and 1280 wide, and no sideways scrolling.
- Use the colour names from `src/index.css` (`brand`, `accent`, `ink`, `muted`, `line`...), not raw colours.
