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

1. Name the file with the **next number up** from the highest one already in
   `src/gallery/`, then a dash, then any name you like — `15-luna.jpg`.
2. Put it into **`src/gallery/`**.
3. Use a `.jpg`, `.jpeg`, `.png`, or `.webp` file.
4. That's it — it appears at the top of the Gallery page automatically. Images
   are resized and optimized for the web on their own, so photos straight from
   your phone are fine.

**The number prefix is what orders the gallery** — highest number first, so the
newest painting leads the page. A file with no number still shows up, but it
sinks to the bottom. Gaps are fine after a deletion; no renumbering needed.

To **remove** a painting, delete its file from `src/gallery/`.

> Renaming an existing painting? Its file name may also appear in
> `src/data/carousel.js` and `src/data/gallery-captions.js`. A carousel entry
> pointing at a name that no longer exists **silently vanishes from the home
> page** — no error, the slide just stops appearing. Search both files for the
> old name.

#### Optional: give a painting a title/caption

Open **`src/data/gallery-captions.js`** and add a line using the image's file
name. Skipping this is fine — the image just shows with no caption.

Use the full file name, number prefix and all:

```js
export const captions = {
  '15-luna.jpg': { title: 'Luna', note: 'Acrylic on 8×8 canvas' },
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
  { painting: '15-luna.jpg', references: ['luna-ref.jpg'], title: 'Luna' },
  // two reference photos are supported too:
  { painting: '16-luna-max.jpeg', references: ['luna.jpg', 'max.jpg'], title: 'Luna & Max' },
];
```

Copy the painting's file name **exactly** — number prefix included, and with
the right extension. Some paintings are `.jpg` and the newer ones are `.jpeg`;
a mismatch makes the slide disappear without any error.

New pairs go at the **top** of the list so the carousel opens on recent work.
Reference photos don't need a number — only paintings do.

> The `references/` subfolder is deliberately **not** shown on the main Gallery
> page — reference photos only appear in the carousel.

### Uploading without a code editor (GitHub website)

If you'd rather not use a code editor, you can upload right from GitHub:

1. Go to the repo → open the **`src/gallery`** folder.
2. Click **Add file → Upload files**, drag your images in, and **Commit**.
3. The site rebuilds and updates automatically (once hosting is connected).

---

## The commission form

The Commission page uses a built-in step-by-step form
(`src/components/CommissionForm.astro`): number of pets → canvas size → shipped
or pickup → price, contact details, and send. Submissions are emailed to
`accpaintings@gmail.com` through [Web3Forms](https://web3forms.com), using the
access key set near the top of that component. The key is safe to keep in the
repo — it only routes to the address the account was registered with.

If prices change, edit the `PRICES` table in the `<script>` block at the bottom
of the same file. The home page has its own copy of the numbers in
`src/components/PriceCalculator.astro`, so **update both** or they'll disagree.

### Why the form doesn't take photo uploads

It used to. Web3Forms only accepts file attachments on a **paid PRO plan** — on
the free plan it rejects the *entire* submission, so every request failed and
nothing arrived. The form now sends text only, and the success screen asks the
customer to reply to the confirmation email with their photos (which also
preserves full resolution, rather than squeezing under a 5 MB cap).

To take photos in the form again, either subscribe to Web3Forms PRO and restore
the `<input type="file" name="attachment">` field, or move uploads to a
Cloudflare Pages Function backed by R2 storage.

If Web3Forms is ever unreachable, the form falls back to opening a pre-filled
email to Aidan rather than showing a dead end — so a request is never lost.

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
├─ gallery/                # ← paintings go here, named 1-name.jpg, 2-name.jpg…
│  └─ references/          # ← reference photos go here (no number needed)
├─ images/                 # site images that are NOT gallery paintings
│  └─ juni.png             # home-page hero
├─ data/
│  ├─ gallery-captions.js  # optional gallery captions
│  └─ carousel.js          # carousel pairings
└─ styles/
   └─ global.css           # site-wide styles / theme colors
public/                    # static files served as-is (favicon, etc.)
```

Note that `src/images/` is separate from `src/gallery/` on purpose: everything
in `src/gallery/` is published to the Gallery page automatically, so the hero
image lives outside it to avoid showing up twice.

---

## Deploying

The site is live at **https://www.accpaintings.com**, hosted free on
**Cloudflare Pages** and built from this repo.

**You don't deploy manually.** Every push to `main` triggers a rebuild, and the
new version is live a couple of minutes later. That includes uploading images
through the GitHub website — commit the files and the site updates itself.

| Setting | Value |
| --- | --- |
| Host | Cloudflare Pages (project `accpaintings`) |
| Build command | `npm run build` |
| Output directory | `dist` |
| Preview URL | `accpaintings.pages.dev` |

### DNS

DNS is **not** managed by Cloudflare — it stays with the domain registrar:

- `www` is a CNAME pointing at `accpaintings.pages.dev`
- the bare `accpaintings.com` uses the registrar's URL forwarding to 301-redirect
  to `https://www.accpaintings.com`

The apex is a redirect rather than a record because DNS doesn't allow a CNAME
on a root domain. `www` is the canonical hostname, which is also what
`astro.config.mjs` declares in `site` — keep the two in agreement.

### Checking a deploy

The Cloudflare dashboard shows build logs under the project's **Deployments**
tab. A red build there means the site kept serving the previous version, so a
broken build never takes the live site down.
