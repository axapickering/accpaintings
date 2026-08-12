# ACC Paintings

The website for **ACC Paintings** — Aidan's custom pet portraits that blend
anime/cartoon charm with each pet's real likeness.

Built with [Astro](https://astro.build/). It's a fast static site with a
modular, auto-discovering gallery, a "reference photo → painting" carousel on
the home page, pricing/FAQ, and an embeddable commission form.

---

## Adding paintings to the gallery

**This is the part you'll do most often — and it's just dropping image files
into a folder.** No code required.

### Add a painting to the main Gallery page

1. Put the image file into **`src/gallery/`**.
2. Use a `.jpg`, `.jpeg`, `.png`, or `.webp` file.
3. That's it — it appears on the Gallery page automatically. Images are resized
   and optimized for the web on their own, so photos straight from your phone
   are fine.

Name the files however you like (e.g. `bella.jpg`, `2024-milo.jpg`). To
**remove** a painting, delete its file from `src/gallery/`.

#### Optional: give a painting a title/caption

Open **`src/data/gallery-captions.js`** and add a line using the image's file
name. Skipping this is fine — the image just shows with no caption.

```js
export const captions = {
  'bella.jpg': { title: 'Bella', note: 'Acrylic on 8×8 canvas' },
};
```

### Add a "reference photo → painting" pair to the home-page carousel

The home page rotates through before/after pairs (the reference photo Aidan
worked from, next to the finished painting).

1. Put the **painting** in `src/gallery/` (as above).
2. Put its **reference photo(s)** in **`src/gallery/references/`**.
3. Add one entry to **`src/data/carousel.js`**:

```js
export const carousel = [
  { painting: 'bella.jpg', references: ['bella-photo.jpg'], title: 'Bella' },
  // two reference photos are supported too:
  { painting: 'luna-max.jpg', references: ['luna.jpg', 'max.jpg'], title: 'Luna & Max' },
];
```

> The `references/` subfolder is deliberately **not** shown on the main Gallery
> page — reference photos only appear in the carousel.

### Uploading without a code editor (GitHub website)

If you'd rather not use a code editor, you can upload right from GitHub:

1. Go to the repo → open the **`src/gallery`** folder.
2. Click **Add file → Upload files**, drag your images in, and **Commit**.
3. The site rebuilds and updates automatically (once hosting is connected).

---

## The commission form

The Commission page embeds a Google Form. To connect it:

1. In Google Forms: **Send → `< >` (embed) tab → copy the `src` URL**.
2. Paste it into `GOOGLE_FORM_EMBED_URL` near the top of
   **`src/pages/commission.astro`**.

Until it's set, the page shows a friendly placeholder plus Etsy/email/Instagram
links.

---

## Running the site locally

Requires [Node.js](https://nodejs.org/) 18+ (developed on 22).

```bash
npm install       # first time only
npm run dev        # start a local preview at http://localhost:4321
npm run build      # build the production site into dist/
npm run preview    # preview the production build
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with live reload |
| `npm run build` | Builds the static site to `dist/` |
| `npm run preview` | Serves the built `dist/` locally |

---

## Project structure

```
src/
├─ pages/                  # one file per page (URL)
│  ├─ index.astro          # Home
│  ├─ gallery.astro        # Gallery
│  ├─ info.astro           # Info & FAQ (pricing, process, FAQ)
│  └─ commission.astro     # Commission form
├─ components/
│  ├─ Header.astro         # nav bar
│  ├─ Footer.astro         # socials footer
│  ├─ Gallery.astro        # auto-discovering gallery grid + lightbox
│  └─ Carousel.astro       # home-page photo→painting carousel
├─ layouts/
│  └─ Layout.astro         # shared page shell (head, fonts, header/footer)
├─ gallery/                # ← paintings go here
│  └─ references/          # ← reference photos go here
├─ data/
│  ├─ gallery-captions.js  # optional gallery captions
│  └─ carousel.js          # carousel pairings
└─ styles/
   └─ global.css           # site-wide styles / theme colors
public/                    # static files served as-is (favicon, etc.)
```

The `sample-*.jpg` files in `src/gallery/` are placeholders — delete them once
real paintings are added.

---

## Deploying

The site builds to static files (`npm run build` → `dist/`), so it can be
hosted for free on Netlify, Cloudflare Pages, GitHub Pages, or similar, then
pointed at `accpaintings.com`.
