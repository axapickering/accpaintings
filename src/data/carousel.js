// Home-page carousel: pairs each painting with its reference photo(s).
//
// - painting:    file name of the finished painting, from `src/gallery/`
// - references:  one or more reference photos, from `src/gallery/references/`
// - title:       optional label shown with the pair
//
// The carousel rotates through this list. To add a pair, drop the painting in
// src/gallery/ and its reference photo(s) in src/gallery/references/, then add
// an entry here.
//
// Painting file names carry a number prefix (see src/gallery/README.md) — copy
// the name exactly, extension included. Some are .jpg and some are .jpeg.
// Newest pairs go at the top so the carousel opens on recent work.

export const carousel = [
  {
    painting: '14-bernie.jpeg',
    references: ['bernie-ref.jpg', 'bernie-ref-2.jpg'],
    title: 'Bernie',
  },
  {
    painting: '13-daisy.jpeg',
    references: ['daisy-ref.jpeg', 'daisy-ref-2.jpeg'],
    title: 'Daisy',
  },
  {
    painting: '12-karate-cat.jpg',
    references: ['karate-cat-ref.jpg'],
    title: 'Karate Cat',
  },
  {
    painting: '11-tallcat-squishcat.jpg',
    references: ['tall-cat.jpg', 'squish-cat.jpg'],
    title: 'Tall Cat & Squish Cat',
  },
  { painting: '10-liam.jpg', references: ['liam-ref.jpg'], title: 'Liam' },
  { painting: '9-audrey.jpg', references: ['audrey-ref.jpg'], title: 'Audrey' },
  {
    painting: '8-twodogs.jpg',
    references: ['twodogs-ref.jpg'],
    title: 'Two Dogs',
  },
  { painting: '7-seamus.jpg', references: ['seamus-ref.jpg'], title: 'Seamus' },
  {
    painting: '5-black-cat.jpg',
    references: ['black-cat-ref.jpg'],
    title: 'Black Cat',
  },
  {
    painting: '4-fat-tuxedo-cat.jpg',
    references: ['fat-tuxedo-cat-ref.jpg'],
    title: 'Fat Tuxedo Cat',
  },
];
