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

## Being found on Google (SEO)

Already in the site:

- Every page has its own title and description in Swahili with the English words people search with (shule /
  school, msingi / primary, sekondari / secondary, Babati, Manyara, Tanzania): `src/lib/seo.ts`. News items use
  their own title and summary.
- `index.html` describes the institution and both schools for search engines (schema.org: name, Bonga - Babati -
  Manyara - TZ address, phones, e-mail, social pages), says where it is (TZ-26 Manyara) and has a plain-text
  version for search engines that do not run JavaScript.
- `pnpm build` writes `sitemap.xml` and `robots.txt` for the address in `VITE_SITE_URL` (`.env.production`,
  now `https://hayatulislamiya.com`). Change it there if the site moves; add a new page to `SITEMAP_PAGES` in
  `vite.config.ts` and to `PAGES` in `src/lib/seo.ts`.
- Sharing a link on WhatsApp / Facebook shows a photo (`public/og-image.jpg`) and the page's summary.

To do once by the owner (these make the biggest difference in Tanzania):

1. **Google Business Profile** for each school (business.google.com): name, "School" category, exact map pin at
   Bonga, phone, opening hours, photos, and this website's address. This is what shows the school on Google Maps
   and in "shule Babati" searches.
2. **Google Search Console** (search.google.com/search-console): add the domain, verify it (a DNS record at the
   domain provider), then submit `https://hayatulislamiya.com/sitemap.xml`.
3. Put the website's address on the schools' Facebook, Instagram, YouTube and WhatsApp Business pages, and ask
   local listings (district education office, school directories) to link to it.
4. Add news regularly (SIS > Website > News): new pages and fresh dates help ranking.
