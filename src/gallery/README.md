# How to add a painting to the gallery

This folder holds every image that shows up on the **Gallery** page.
Adding a new painting is as simple as putting its image file in here.

## To add a painting
1. Drop the image file into this `src/gallery/` folder.
2. Use a `.jpg`, `.jpeg`, `.png`, or `.webp` file.
3. That's it — it appears in the gallery automatically, newest handling is by
   file name, so name them however you like (e.g. `bella.jpg`, `2024-milo.jpg`).

## To remove a painting
Delete its image file from this folder.

## To add a title/caption (optional)
Open `src/data/gallery-captions.js` and add a line with the image's file name.
If you skip this, the image just shows with no caption — totally fine.

## Tips
- Photograph paintings straight-on in good, even light.
- Images are automatically resized and optimized for the web, so full-size
  photos straight from your phone are fine.
- The `sample-*.jpg` files are placeholders — delete them once you've added
  real paintings.
