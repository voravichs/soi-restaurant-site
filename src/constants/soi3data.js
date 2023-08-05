import images from './images';

const appetizer = [
  {
    id: 'a1',
    title: 'Crab Rangoon (5 pcs)',
    price: 7,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Crabstick and cream cheese filling inside crispy wonton wrappers.',
    image: images.thai,
  },
  {
    id: 'a2',
    title: 'Egg Roll (4 pcs)',
    price: 6,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Veggie Crispy Roll.',
    image: images.thai,
  },
  {
    id: 'a3',
    title: 'Edamame',
    price: 6,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Steamed soybean pods seasoned with salt.',
    image: images.thai,
  },
  {
    id: 'a4',
    title: 'Pork Dumplings (5 pcs)',
    price: 8,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Steamed dumpling served with ginger soy dip.',
    image: images.thai,
  },
  {
    id: 'a5',
    title: 'Shrimp Dumpling (5 pcs.)',
    price: 10,
    category: 'Appetizers',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Steamed shrimp dumpling served with spicy ginger soy dip.',
    image: images.thai,
  },
  {
    id: 'a6',
    title: 'Fresh Rolls',
    price: 7,
    category: 'Appetizers',
    spicy: 0,
    choice: true,
    choices: ['Chicken', 'Vegetarian'],
    description: 'Steamed vermicelli, chicken, lettuce, carrot, cucumber, basil leaf wrapped in rice paper served with sweet sauce, ground peanuts.',
    image: images.thai,
  },
  {
    id: 'a7',
    title: 'Mussels',
    price: 10,
    category: 'Appetizers',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Steamed mussels with lemongrass and sweet basil leaves served with spicy and sour Thai sauce.',
    image: images.thai,
  },
  {
    id: 'a8',
    title: 'Thai Sausage',
    price: 8,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Sour pork sausage served with Thai chili, whole peanut, cucumber, and lettuce.',
    image: images.thai,
  },
  {
    id: 'a9',
    title: 'Crying Tiger',
    price: 15,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Grilled steak with spicy dipping sauce.',
    image: images.thai,
  },
  {
    id: 'a10',
    title: 'BBQ Pork Bun (2 pcs)',
    price: 7,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Steamed buns stuffed with roast char siu pork.',
    image: images.thai,
  },
  {
    id: 'a11',
    title: 'Crispy Pork Belly',
    price: 12,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Marinated pork belly serve crispy with sweet ginger soy dip.',
    image: images.thai,
  },
];

const ricemeat = [
  {
    id: 'rm1',
    title: 'Khao Nah Ped',
    price: 18,
    category: 'RiceMeat',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Roast duck over rice, Bok Choy, pickled ginger on top with ginger gravy sauce.',
    image: images.thai,
  },
  {
    id: 'rm2',
    title: 'Khao Man Gai',
    price: 14,
    category: 'RiceMeat',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Rice and moist chicken served with tangy ginger sauce and a cup of clear soup.',
    image: images.thai,
  },
  {
    id: 'rm3',
    title: 'Khao Moo Krob',
    price: 15,
    category: 'RiceMeat',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Rice and crispy pork belly, cucumber, boiled egg on top with gravy sweet and sour sauce.',
    image: images.thai,
  },
  {
    id: 'rm4',
    title: 'Shrimp and Chicken Pumpkin Curry',
    price: 15,
    category: 'RiceMeat',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Rice and pumpkin, bell pepper, basil in red curry sauce.',
    image: images.thai,
  },
];

const salad = [
  {
    id: 'sal1',
    title: 'House Salad',
    price: 7,
    category: 'Salad',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Served with homemade ginger dressing.',
    image: images.thai,
  },
  {
    id: 'sal2',
    title: 'Nam Tok',
    price: 15,
    category: 'Salad',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Grilled sliced beef mixed with spicy lime juice, chili powder, roasted rice, red onion, cilantro, and scallion. Spicy.',
    image: images.thai,
  },
  {
    id: 'sal3',
    title: 'Pla Goong',
    price: 15,
    category: 'Salad',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Spicy shrimp salad with lemongrass, red onion, and kaffir lime leaf.',
    image: images.thai,
  },
  {
    id: 'sal4',
    title: 'Woonsen Salad',
    price: 15,
    category: 'Salad',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Clear noodles, ground chicken, shrimp, onion, scallion, cilantro with spicy house lime dressing.',
    image: images.thai,
  },
  {
    id: 'sal5',
    title: 'Larb E-San',
    price: 13,
    category: 'Salad',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Minced chicken mixed with spicy lime juice, chili powder, roasted rice, red onion, cilantro, and scallion.',
    image: images.thai,
  },
  {
    id: 'sal6',
    title: 'Papaya Salad',
    price: 12,
    category: 'Salad',
    spicy: 2,
    choice: true,
    choices: ['Thai Style', 'Laos Style'],
    description: '[Thai]: Sweet and sour with peanut. [Laos]: Spicy and sour and pickled crab.',
    image: images.thai,
  },
  {
    id: 'sal7',
    title: 'Seaweed Salad',
    price: 8,
    category: 'Salad',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Japanese seaweed sprinkled with sesame seeds.',
    image: images.thai,
  },
]

const specials = [
  {
    id: 's1',
    title: 'Ramen Chashu Pork',
    price: 15,
    category: 'Special',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Ramen noodle with miso soup base, slow cook pork belly, boiled egg, sesame seed, and scallion.',
    image: images.thai,
  },
  {
    id: 's2',
    title: 'Spicy Ramen',
    price: 15,
    category: 'Special',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Chashu in a spicy version. Ramen noodle with miso soup base, slow cook pork belly, boiled egg, sesame seed, and scallion.',
    image: images.thai,
  },
  {
    id: 's3',
    title: 'Tom Yum Goong',
    price: 18,
    category: 'Special',
    spicy: 2,
    choice: true,
    choices: ['Noodle'],
    description: 'Noodles in spicy and sour broth, jumbo shrimp, boiled egg, bean sprout, ground peanut, cilantro, and scallion.',
    image: images.thai,
  },
  {
    id: 's4',
    title: 'Duck Noodle',
    price: 18,
    category: 'Special',
    spicy: 0,
    choice: true,
    choices: ['Noodle'],
    description: 'Noodles with marinated duck, bean sprout, crispy garlic, scallion, and cilantro.',
    image: images.thai,
  },
  {
    id: 's5',
    title: 'Khao Soi',
    price: 16,
    category: 'Special',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Ramen noodle, chicken, crunchy wonton in a curry stock, red onion, pickled cabbage, crispy garlic, scallion, and cilantro.',
    image: images.thai,
  },
  {
    id: 's6',
    title: 'Kimchi Noodle',
    price: 16,
    category: 'Special',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Spicy & sour ramen noodle, tofu, crispy pork belly, boiled egg, scallion, and sesame seeds.',
    image: images.thai,
  },
  {
    id: 's7',
    title: 'Beef Boat Noodle',
    price: 15,
    category: 'Special',
    spicy: 1,
    choice: true,
    choices: ['Noodle'],
    description: 'Noodles with beef tender, meat balls, bean sprout, scallion, and cilantro.',
    image: images.thai,
  },
  {
    id: 's8',
    title: 'Yen Ta Fo',
    price: 15,
    category: 'Special',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Wide noodle in a traditional Thai seafood pink soup, fish ball, fried tofu, crispy wonton skin, crispy garlic, scallion, and cilantro.',
    image: images.thai,
  },
  {
    id: 's9',
    title: 'Wonton Noodle Soup',
    price: 15,
    category: 'Special',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Egg noodles, chicken, the dumpling, cabbage napa, crispy garlic, cilantro and scallion.',
    image: images.thai,
  },
  {
    id: 's9',
    title: 'Spicy Nam Ngaew',
    price: 15,
    category: 'Special',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Northern thai style rice noodle with pork rib, garlic, red onion, pickled cabbage, lime, cilantro, and scallion.',
    image: images.thai,
  },
]

const noodle = [
  {
    id: 'n1',
    title: 'Aunty Noodle',
    price: 12,
    category: 'Noodle',
    spicy: 0,
    choice: true,
    choices: ['Noodle', 'Protein'],
    description: '30 years Aunty recipe clear soup stock recommended with pork, bean sprout, crispy garlic, scallion, and cilantro.',
    image: images.thai,
  },
  {
    id: 'n2',
    title: 'Tom Yum Noodle',
    price: 14,
    category: 'Noodle',
    spicy: 2,
    choice: true,
    choices: ['Noodle', 'Protein'],
    description: 'Spicy and sour soup stock, bean sprout, ground peanut, crispy garlic, scallion and cilantro.',
    image: images.thai,
  },
  {
    id: 'n3',
    title: 'Lek Heng',
    price: 12,
    category: 'Noodle',
    spicy: 1,
    choice: true,
    choices: ['Noodle', 'Protein'],
    description: 'Another way to have noodles without soup stock, is a dry style noodle, bean sprout, peanut, ground garlic, crispy wonton skin, scallion, and cilantro. ',
    image: images.thai,
  },
]

const dessert = [
  {
    id: 'des1',
    title: 'Mango & Sweet Sticky Rice',
    price: 8,
    category: 'Dessert',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
    image: images.thai,
  },
  {
    id: 'des2',
    title: 'Thai Custard & Sweet Sticky Rice',
    price: 8,
    category: 'Dessert',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
    image: images.thai,
  },
  {
    id: 'des3',
    title: 'Mango & Ice Cream',
    price: 8,
    category: 'Dessert',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
    image: images.thai,
  },
]

const drinks = [
  {
    id: 'd1',
    title: 'Thai Iced Coffee',
    price: 4,
    category: 'Drink',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
    image: images.thai,
  },
  {
    id: 'd2',
    title: 'Thai Iced Tea',
    price: 4,
    category: 'Drink',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
    image: images.thai,
  },
  {
    id: 'd3',
    title: 'Fountain Drink/Pop',
    price: 3,
    category: 'Drink',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
    image: images.thai,
  },
  {
    id: 'd4',
    title: 'Hot Tea',
    price: 3,
    category: 'Drink',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
    image: images.thai,
  },
  {
    id: 'd5',
    title: 'Unsweetened Thai Iced Tea',
    price: 3,
    category: 'Drink',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
    image: images.thai,
  },
]

const sides = [
  {
    id: 's1',
    title: 'White Rice',
    price: 3,
    category: 'Side',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
    image: images.thai,
  },
  {
    id: 's2',
    title: 'Sticky Rice',
    price: 3,
    category: 'Side',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
    image: images.thai,
  },
]

const soi3data = {
  appetizer,
  ricemeat,
  salad,
  specials,
  noodle,
  dessert,
  drinks,
  sides,
}

export default soi3data;
