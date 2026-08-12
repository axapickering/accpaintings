// Home-page carousel: pairs each painting with its reference photo(s).
//
// - painting:    file name of the finished painting, from `src/gallery/`
// - references:  one or more reference photos, from `src/gallery/references/`
// - title:       optional label shown with the pair
//
// The carousel rotates through this list. To add a pair, drop the painting in
// src/gallery/ and its reference photo(s) in src/gallery/references/, then add
// an entry here.

export const carousel = [
  { painting: 'sample-01.jpg', references: ['ref-01.jpg'], title: 'Bella' },
  { painting: 'sample-02.jpg', references: ['ref-02.jpg'], title: 'Milo' },
  {
    painting: 'sample-03.jpg',
    references: ['ref-03a.jpg', 'ref-03b.jpg'],
    title: 'Luna & Max',
  },
  { painting: 'sample-04.jpg', references: ['ref-04.jpg'], title: 'Poppy' },
  { painting: 'sample-05.jpg', references: ['ref-05.jpg'], title: 'Ziggy' },
  { painting: 'sample-06.jpg', references: ['ref-06.jpg'], title: 'Coco' },
];
