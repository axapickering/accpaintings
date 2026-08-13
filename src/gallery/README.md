# How to add a painting to the gallery

This folder holds every image that shows up on the **Gallery** page.
Adding a new painting is as simple as putting its image file in here.

## The number goes first

Every file starts with a number, then a dash, then any name you like:

```
1-harry.jpg
2-aidans-pets.jpg
...
13-daisy.jpeg
14-bernie.jpeg
```

**The gallery shows the highest number first.** That's how your newest work
ends up at the top of the page — the number is the only thing that decides the
order, so it has to be there.

## To add a painting

1. Look in this folder for the highest number so far (right now that's `14`).
2. Name your file with the **next number up**, then a dash, then whatever you
   want: `15-luna.jpg`.
3. Drop it into this `src/gallery/` folder.
4. Use a `.jpg`, `.jpeg`, `.png`, or `.webp` file.

That's it — it appears at the top of the gallery automatically.

> **If you forget the number**, the painting still shows up, but it goes to the
> very bottom of the page instead of the top. Rename it and it'll jump back up.

## To remove a painting

Delete its image file from this folder. You don't need to renumber anything
afterwards — gaps in the numbering are fine. The order still works if the files
run `3, 7, 8, 14`.

## Careful: two places use the exact file name

If a painting is also in the **home-page carousel**, its file name appears in
`src/data/carousel.js`, and a caption would use it in
`src/data/gallery-captions.js`. Renaming the file without updating those means
the carousel entry **silently disappears** — no error, the slide just stops
showing. If you rename something, search for the old name in those two files.

Note the extension matters too: some paintings are `.jpg` and the newer ones
are `.jpeg`. Copy it exactly.

## To add a title/caption (optional)

Open `src/data/gallery-captions.js` and add a line with the image's full file
name, number and all:

```js
'15-luna.jpg': { title: 'Luna', note: 'Acrylic on 8×8 canvas' },
```

If you skip this, the image just shows with no caption — totally fine.

## Tips

- Photograph paintings straight-on in good, even light.
- Images are automatically resized and optimized for the web, so full-size
  photos straight from your phone are fine.
- Reference photos go in `references/`, not here — that subfolder is only used
  by the home-page carousel and never appears on the Gallery page.
- The hero image on the home page (Juni) lives in `src/images/`, deliberately
  outside this folder, so it isn't repeated in the gallery.
