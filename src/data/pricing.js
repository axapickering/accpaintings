// Single source of truth for commission pricing.
//
// Every price on the site reads from this file:
//   - the pricing table on the Info page       (src/pages/info.astro)
//   - the price finder on the home page        (src/components/PriceCalculator.astro)
//   - the commission form                      (src/components/CommissionForm.astro)
//
// Change a number here once and all three update together. They each used to
// keep their own copy, which meant a price change could leave the Info page
// quoting one number while the form charged another — with no error to catch it.
//
// TO CHANGE A PRICE: edit the `shipped` / `pickup` numbers below. That's it.

export const tiers = [
  {
    pets: 1,
    shipped: 75,
    pickup: 60,
    // A single pet fits either canvas, so the customer picks. Same price both
    // ways — that's why the commission form shows a canvas step only for 1 pet.
    canvas: [
      { size: '8×8', note: 'Square' },
      { size: '8×10', note: 'Portrait — same price' },
    ],
  },
  { pets: 2, shipped: 125, pickup: 110, canvas: [{ size: '8×10' }] },
  { pets: 3, shipped: 175, pickup: 160, canvas: [{ size: '10×20' }] },
  { pets: 4, shipped: 225, pickup: 210, canvas: [{ size: '10×20' }] },
];

export const delivery = {
  shipped: { label: 'Shipped', note: 'Includes shipping & packaging' },
  pickup: { label: 'Local pickup', note: 'Capitol Hill, Seattle' },
};

export const tierFor = (pets) => tiers.find((t) => t.pets === pets);

export const petWord = (pets) => (pets === 1 ? 'pet' : 'pets');

// Canvas sizes are stored compactly ('8×10'); this expands them for display.
// '8×10' → '8" × 10"'
export const inches = (size) =>
  size
    .split('×')
    .map((n) => `${n.trim()}"`)
    .join(' × ');

// Compact form, for chips and summaries: '8×8 or 8×10'
export const canvasShort = (pets) =>
  tierFor(pets)
    .canvas.map((c) => c.size)
    .join(' or ');

// Long form, for the Info page table: '8" × 8" or 8" × 10"'
export const canvasLong = (pets) =>
  tierFor(pets)
    .canvas.map((c) => inches(c.size))
    .join(' or ');

// True when the customer chooses the canvas rather than it being fixed.
export const canvasIsChoice = (pets) => tierFor(pets).canvas.length > 1;

// Buttons for "how many pets", derived so adding a tier above adds a button.
export const petOptions = tiers.map((t) => ({
  n: t.pets,
  label: petWord(t.pets),
}));
