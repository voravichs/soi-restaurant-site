import images from './images';

const wines = [
  {
    title: 'Crab Rangoon (5 pcs.)',
    price: '$7',
    // tags: 'AU | Bottle', Place holders to indicate spiciness (icon)
  },
  {
    title: 'EGG Rolls (4 pcs.)',
    price: '$7',
    // tags: 'AU | Bottle',
  },
  {
    title: 'Chicken Satay (4 pcs.)',
    price: '$8',
    // tags: 'FR | 750 ml',
  },
  {
    title: 'Moo Ping (4 pcs.)',
    price: '$8',
    // tags: 'CA | 750 ml',
  },
  {
    title: 'Pork Dumpling (5 pcs.)',
    price: '$8',
    // tags: 'CA | 750 ml',
  },
  {
    title: 'Wings (5 pcs.)',
    price: '$12',
    // tags: 'CA | 750 ml',
  },
  {
    title: 'Sweater Shrimp (4 pcs.)',
    price: '$7',
    // tags: 'CA | 750 ml',
  },
  {
    title: 'Crispy Pork Belly (5 pcs.)',
    price: '$12',
    // tags: 'CA | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Pad Thai',
    price: '$15',
    // tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: 'Fiery Pad Thai',
    price: '$15',
    // tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Pad Kee Mao',
    price: '$10',
    // tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Pad Woon Sen',
    price: '$31',
    // tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Pad See U',
    price: '$26',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'Lion City Noodles',
    price: '$26',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'Bangkok Lo Mein',
    price: '$26',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'Rad Nah',
    price: '$15',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
