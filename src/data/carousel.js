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
  { painting: 'audrey.jpg', references: ['audrey-ref.jpg'], title: 'Audrey' },
  { painting: 'liam.jpg', references: ['liam-ref.jpg'], title: 'Liam' },
  { painting: 'seamus.jpg', references: ['seamus-ref.jpg'], title: 'Seamus' },
  {
    painting: 'tallcat-squishcat.jpg',
    references: ['tall-cat.jpg', 'squish-cat.jpg'],
    title: 'Tall Cat & Squish Cat',
  },
  {
    painting: 'karate-cat.jpg',
    references: ['karate-cat-ref.jpg'],
    title: 'Karate Cat',
  },
  {
    painting: 'black-cat.jpg',
    references: ['black-cat-ref.jpg'],
    title: 'Black Cat',
  },
  {
    painting: 'fat-tuxedo-cat.jpg',
    references: ['fat-tuxedo-cat-ref.jpg'],
    title: 'Fat Tuxedo Cat',
  },
  {
    painting: 'alisons-dogs.jpg',
    references: ['alisons-dogs-ref.jpg'],
    title: "Alison's Dogs",
  },
  {
    painting: 'twodogs.jpg',
    references: ['twodogs-ref.jpg'],
    title: 'Two Dogs',
  },
];
