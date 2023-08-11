const appetizer = [
  {
    id: 'a1',
    title: 'Crab Rangoon (5 pcs.)',
    price: 7,
    altprice: 7,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Crabstick and cream cheese filling inside crispy wonton wrappers.',
  },
  {
    id: 'a2',
    title: 'Egg Rolls (4 pcs.)',
    price: 7,
    altprice: 7,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Crispy vegetables rolls served with sweet & sour sauce.',
  },
  {
    id: 'a3',
    title: 'Chicken Satay (4 pcs.)',
    price: 8,
    altprice: 8,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Grilled marinated chicken on skewers served with peanut sauce on the side.',
  },
  {
    id: 'a4',
    title: 'Moo Ping (4 pcs.)',
    price: 8,
    altprice: 8,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Marinated grilled pork on a stick, served with sweet chili sauce',
  },
  {
    id: 'a5',
    title: 'Pork Dumpling (5 pcs.)',
    price: 8,
    altprice: 8,
    category: 'Appetizers',
    spicy: 0,
    choice: true,
    choices: ['Steamed', 'Deep-Fried'],
    description: 'Choose either steamed or deep-fried served with ginger soy dip.',
  },
  {
    id: 'a6',
    title: 'Wings (5 pcs.)',
    price: 12,
    altprice: 12,
    category: 'Appetizers',
    spicy: 2,
    choice: true,
    choices: ['Crispy', 'Spicy'],
    description: 'Choose crispy or spicy fish sauce.',
  },
  {
    id: 'a7',
    title: 'Sweater Shrimp (4 pcs.)',
    price: 7,
    altprice: 7,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Marinated shrimp wrapped in spring roll skin served with sweet & sour sauce.',
  },
  {
    id: 'a8',
    title: 'Crispy Pork Belly (5 pcs.)',
    price: 12,
    altprice: 12,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Marinated prok belly sprinkled with sesame seed, crispy onion and garlic served with spicy sauce.',
  },
  {
    id: 'a9',
    title: 'Street Ball (5 pcs.)',
    price: 10,
    altprice: 10,
    category: 'Appetizers',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Chicken, roasted rice, onion, kaffir lime leaf served with spicy lime sauce.',
  },
  {
    id: 'a10',
    title: 'Edamame',
    price: 6,
    altprice: 6,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Steamed soybean seasoned with salt',
  },
  {
    id: 'a11',
    title: 'Sauna Mussels',
    price: 12,
    altprice: 12,
    category: 'Appetizers',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Steamed mussels with lemongrass and sweet basil leafs served with spicy Thai garlic sauce.',
  },
  {
    id: 'a12',
    title: 'Fresh Rolls',
    price: 7,
    altprice: 7,
    category: 'Appetizers',
    spicy: 0,
    choice: true,
    choices: ['Chicken','Vegetarian'],
    description: 'Steamed vermicelli, grilled chicken, lettuce, carrot, cucumber, basil leaf wrapped in rice paper served with homemade sweet sauce, ground peanuts. Can be made vegetarian.',
  },
  {
    id: 'a13',
    title: 'Sampler',
    price: 15,
    altprice: 15,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Combination of (2) Egg Rolls, (2) Sweater Shrimp, (2) Crab Rangoon, and (3) Pork Dumplings served with ginger soy dip and sweet & sour sauce.',
  },
];

const soup = [
  {
    id: 'so1',
    title: 'Tom Kha Soup',
    price: '7 (Pot $18)',
    altprice: '7 (Pot $18)',
    category: 'Soup',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Coconut milk soup with galangal root, mushroom, tomatoes, scallion, cilantro, choice of meat.',
  },
  {
    id: 'so2',
    title: 'Tom Yum Soup',
    price: '7 (Pot $18)',
    altprice: '7 (Pot $18)',
    category: 'Soup',
    spicy: 1,
    choice: true,
    choices: ['Chicken','Shrimp'],
    description: 'Spicy & sour soup, mushrooms, tomatoes, scallion, cilantro and choice of meat.',
  },
  {
    id: 'so3',
    title: 'Miso Soup',
    price: 7,
    altprice: 7,
    category: 'Soup',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'A healthy traditional Japanese soup with tofu, seaweed and scallion.',
  },
];

const salad = [
  {
    id: 'sal1',
    title: 'Larb E-San',
    price: 13,
    altprice: 13,
    category: 'Salad',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Lettuce wraps, minced chicken mixed with red onion, lemongrass, cilantro, roasted rice in a spicy lime dressing.',
  },
  {
    id: 'sal2',
    title: 'Papaya Salad',
    price: 12,
    altprice: 12,
    category: 'Salad',
    spicy: 2,
    choice: true,
    choices: ['Thai Style','Laos Style'],
    description: 'Thai style, sweet & sour with peanut or Laos style, spicy & sour with salted crab.',
  },
  {
    id: 'sal3',
    title: 'Neua Nam Tok',
    price: 15,
    altprice: 15,
    category: 'Salad',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Grilled sliced beef mixed with lime juice, chili powder, roasted rice, red onion, kaffir lime leaf. Very delicious!',
  },
  {
    id: 'sal4',
    title: 'Woon Sen Salad',
    price: 15,
    altprice: 15,
    category: 'Salad',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Clear noodles, ground chicken, shrimp, onion, scallion, cilantro with spicy house lime dressing.',
  },
]

const unique = [
  {
    id: 'u1',
    title: 'Pla Rad Pik',
    price: 20,
    altprice: 20,
    category: 'Unique',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Crispy tilapia top with sweet chili sauce.',
  },
  {
    id: 'u2',
    title: 'Mango Chicken',
    price: 15,
    altprice: 15,
    category: 'Unique',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Sliced chicken stir-fried in our chef\'s special sweet and sour sauce with slieced mango, peppers, and onion.',
  },
  {
    id: 'u3',
    title: 'Chili Tamarind Chicken',
    price: 14,
    altprice: 14,
    category: 'Unique',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Crispy chicken coated with spicy tamarind sauce served on bed of steamed vegetables.',
  },
  {
    id: 'u4',
    title: "Soi 2's Company Dish ",
    price: 15,
    altprice: 15,
    category: 'Unique',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'A classic combination of shrimp, chicken and beef sauteed with mix vegetables in a delicate sauce, sprinkled with sesame seed.',
  },
  {
    id: 'u5',
    title: 'Basil Duck',
    price: 18,
    altprice: 18,
    category: 'Unique',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Boneless duck is fried crispy with onion, bell in a spicy Thai basil sauce.',
  },
  {
    id: 'u6',
    title: 'Combination Seafood',
    price: 18,
    altprice: 18,
    category: 'Unique',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Calamari, shrimp, mussels, scallops, basil, onion, bell, scallions with sweet chili sauce.',
  },
  {
    id: 'u7',
    title: 'Street Steak',
    price: 22,
    altprice: 22,
    category: 'Unique',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Marinated steak with garlic sauce, mix veggie, served with house spicy sauce.',
  },
]

const mom = [
  {
    id: 'mom1',
    title: 'Larb Mae Janla',
    price: 15,
    altprice: 15,
    category: 'Mom',
    spicy: 3,
    choice: false,
    choices: [],
    description: 'This is my original home town food, mince chicken with a spicy herb paste, served with lettuce and cucumber.',
  },
  {
    id: 'mom2',
    title: 'Gaeng Hang Lay',
    price: 15,
    altprice: 15,
    category: 'Mom',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Very delicious pork belly slow cook Northern style curry, ginger, garlic, tamarind. You must try!',
  },
]

const veg = [
  {
    id: 'v1',
    title: 'Eggplant',
    price: 14,
    altprice: 14,
    category: 'Veggie',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Stir fried eggplant, pepper, onion with homemade brown sauce and a taste of sweet basil leaf.',
  },
  {
    id: 'v2',
    title: 'Vegetable Bouquet',
    price: 13,
    altprice: 13,
    category: 'Veggie',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Golden fried tofu on a bed of steamed assorted vegetables and served with side of peanut sauce.',
  },
  {
    id: 'v3',
    title: 'Crispy Mock Duck',
    price: 15,
    altprice: 15,
    category: 'Veggie',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'A good source of protein. Choose between red curry or Gra Pow sauce.',
  },
]

const dessert = [
  {
    id: 'des1',
    title: 'Mango & Sticky Rice',
    price: 8,
    altprice: 8,
    category: 'Dessert',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 'des2',
    title: 'Thai Custard & Sticky Rice',
    price: 8,
    altprice: 8,
    category: 'Dessert',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 'des3',
    title: 'Tapioca & Taro',
    price: 8,
    altprice: 8,
    category: 'Dessert',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
]

const noodlesoup = [
  {
    id: 'ns1',
    title: 'Duck Noodles',
    price: 18,
    altprice: 18,
    category: 'Noodle Soup',
    spicy: 0,
    choice: true,
    choices: ['Rice Noodle', 'Ramen Noodle'],
    description: 'Bean sprout, crispy garlic, scallion, cilantro in a slow cook duck broth.',
  },
  {
    id: 'ns2',
    title: 'Lek Heng Tom Yum',
    price: 14,
    altprice: 14,
    category: 'Noodle Soup',
    spicy: 1,
    choice: true,
    choices: ['Rice Noodle', 'Ramen Noodle'],
    description: 'Ground chicken, peanut, bean sprout, crispy garlic, fried wonton skin, scallion, cilantro.',
  },
  {
    id: 'ns3',
    title: 'Khao Soi',
    price: 16,
    altprice: 16,
    category: 'Noodle Soup',
    spicy: 1,
    choice: true,
    choices: ['Chicken', 'Beef'],
    description: 'Northern-style Ramen noodle soup prepared with beef or chicken, crunchy wontons, pickled cabbage, red onion, crispy onion, crispy garlic, cilantro and scallion in a curry stock.',
  },
  {
    id: 'ns4',
    title: 'Thai Beef Soup',
    price: 15,
    altprice: 15,
    category: 'Noodle Soup',
    spicy: 0,
    choice: true,
    choices: ['Rice Noodle', 'Ramen Noodle'],
    description: 'Tender beef, meat balls, bean sprouts, cilantro, scallion, crispy garlic.',
  },
  {
    id: 'ns5',
    title: 'Tom Yum Talay Noodles',
    price: 18,
    altprice: 18,
    category: 'Noodle Soup',
    spicy: 2,
    choice: true,
    choices: ['Rice Noodle', 'Ramen Noodle'],
    description: 'A spicy Tom Yum broth with minced chicken, seafood, bean sprouts, ground peanut, cilantro and scallion.',
  },
]

const curry = [
  {
    id: 'c1',
    title: 'Red Curry',
    price: 15,
    altprice: 15,
    category: 'Curry',
    spicy: 2,
    choice: true,
    choices: ['Protein'],
    description: 'Bell pepper, egg plant, basil.',
  },
  {
    id: 'c2',
    title: 'Gaeng Sub Pa Rod',
    price: 15,
    altprice: 15,
    category: 'Curry',
    spicy: 1,
    choice: true,
    choices: ['Protein'],
    description: 'Bell, pineapples, basil.',
  },
  {
    id: 'c3',
    title: 'Massaman Curry',
    price: 15,
    altprice: 15,
    category: 'Curry',
    spicy: 1,
    choice: true,
    choices: ['Protein'],
    description: 'Potato, onion, carrots, cinnamon, peanut.',
  },
  {
    id: 'c4',
    title: 'Green Curry',
    price: 15,
    altprice: 15,
    category: 'Curry',
    spicy: 1,
    choice: true,
    choices: ['Protein'],
    description: 'Bamboo shoots, egg plant, bell, basil.',
  },
  {
    id: 'c5',
    title: 'Mango Curry',
    price: 15,
    altprice: 15,
    category: 'Curry',
    spicy: 1,
    choice: true,
    choices: ['Protein'],
    description: 'Mango, onions, carrots, tomatoes.',
  },
  {
    id: 'c6',
    title: 'Kha Ree Curry',
    price: 15,
    altprice: 15,
    category: 'Curry',
    spicy: 1,
    choice: true,
    choices: ['Protein'],
    description: 'Potato, onion, carrots.',
  },
  {
    id: 'c7',
    title: 'Panang Curry',
    price: 15,
    altprice: 15,
    category: 'Curry',
    spicy: 1,
    choice: true,
    choices: ['Protein'],
    description: 'Bell pepper, basil & kaffir lime leaf.',
  },
]

const noodle = [
  {
    id: 'n1',
    title: 'Pad Thai',
    price: 10,
    altprice: 15,
    category: 'Noodle',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'Choice of meat stir-fried with rice noodles, eggs, scallions, bean sprouts, peanuts.',
  },
  {
    id: 'n2',
    title: 'Fiery Pad Thai',
    price: 15,
    altprice: 15,
    category: 'Noodle',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Spicy version of traditional Pad Thai, with chicken and shrimp, egg, onion, carrots, peppers, and basil.',
  },
  {
    id: 'n3',
    title: 'Pad Kee Mao',
    price: 10,
    altprice: 15,
    category: 'Noodle',
    spicy: 2,
    choice: true,
    choices: ['Protein'],
    description: 'Wide noodles with your choice of meat, egg, onion, carrots, bell, basil leaf with spicy basil sauce.',
  },
  {
    id: 'n4',
    title: 'Pad Woon Sen',
    price: 10,
    altprice: 15,
    category: 'Noodle',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'A healthy dish of glass noodles sauteed with a homemade sauce, egg and mix veggies.',
  },
  {
    id: 'n5',
    title: 'Pad See U',
    price: 10,
    altprice: 15,
    category: 'Noodle',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'Choice of meat stir-fried with wide noodles, eggs, broccoli, carrots in a sweet dark soy sauce.',
  },
  {
    id: 'n6',
    title: 'Lion City Noodles',
    price: 10,
    altprice: 15,
    category: 'Noodle',
    spicy: 2,
    choice: true,
    choices: ['Protein'],
    description: 'Vermicelli noodles stir fried with Tahi spicy sauce, egg, seasoned with curry powder, carrots, peas, sprouts, onion and scallions, with choice of meat.',
  },
  {
    id: 'n7',
    title: 'Bangkok Lo Mein',
    price: 10,
    altprice: 15,
    category: 'Noodle',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'Egg Noodle stir fried with mixed veggies in brown homemade sauce, with choice of meat.',
  },
  {
    id: 'n8',
    title: 'Rad Nah',
    price: 15,
    altprice: 15,
    category: 'Noodle',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'Wide rice noodles, your choice of meat, broccoli and carrots in a gravy sauce.',
  },
]

const wok = [
  {
    id: 'w1',
    title: 'Gra Pow',
    price: 15,
    altprice: 15,
    category: 'Wok',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Minced chicken, basil, bell pepper, onion stir fried in a spicy Thai basil sauce. Served with fried egg on the top.',
  },
  {
    id: 'w2',
    title: 'Ginger',
    price: 10,
    altprice: 15,
    category: 'Wok',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'Stir fry with ginger sauce, onion, red bell peppers, shiitake mushroom and scallions.',
  },
  {
    id: 'w3',
    title: 'Pad Pak',
    price: 10,
    altprice: 15,
    category: 'Wok',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'Choice of meat with mixed vegetable wok in a homemade gravy sauce.',
  },
  {
    id: 'w4',
    title: 'Garlic Sauce',
    price: 10,
    altprice: 15,
    category: 'Wok',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'Choice of meat, onion, black pepper and cilantro.',
  },
  {
    id: 'w5',
    title: 'Cashew Nut',
    price: 10,
    altprice: 15,
    category: 'Wok',
    spicy: 1,
    choice: true,
    choices: ['Protein'],
    description: 'Choice of meat, onion, peppers, carrot, cashew nut, scallion, sweet chili sauce.',
  },
  {
    id: 'w6',
    title: 'Sweet & Sour',
    price: 10,
    altprice: 15,
    category: 'Wok',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'Choice of meat, bell pepper, onion, cucumber, tomatoes, pineapples, and scallion.',
  },
  {
    id: 'w7',
    title: 'Pad Ped',
    price: 10,
    altprice: 15,
    category: 'Wok',
    spicy: 3,
    choice: true,
    choices: ['Protein'],
    description: 'Choice of meat wok with spicy chili sauce, bell pepper, bamboo shoot, onion, basil and kaffir lime leaf.',
  },
]

const friedrice = [
  {
    id: 'f1',
    title: 'Thai Fried Rice',
    price: 10,
    altprice: 15,
    category: 'Fried Rice',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'Egg, onion, scallions, choice of meat.',
  },
  {
    id: 'f2',
    title: 'Green Fried Rice',
    price: 10,
    altprice: 15,
    category: 'Fried Rice',
    spicy: 1,
    choice: true,
    choices: ['Protein'],
    description: 'Green curry, coconut milk, egg, eggplant, bell, basil leaf.',
  },
  {
    id: 'f3',
    title: 'Pineapple Fried Rice',
    price: 10,
    altprice: 15,
    category: 'Fried Rice',
    spicy: 0,
    choice: true,
    choices: ['Protein'],
    description: 'Curry fried rice, egg, pineapple, raisin, cashew, scallions, your choice of meat.',
  },
  {
    id: 'f4',
    title: 'Spicy Basil Fried Rice',
    price: 10,
    altprice: 15,
    category: 'Fried Rice',
    spicy: 2,
    choice: true,
    choices: ['Protein'],
    description: 'Egg, bell, onion and basil leaf in a spicy basil sauce, your choice of meat.',
  },
  {
    id: 'f5',
    title: 'Combo Fried Rice',
    price: 15,
    altprice: 15,
    category: 'Fried Rice',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Combination fried rice with Chicken, Beef, and Shrimp, egg, tomatoes, onion, broccoli and scallions.',
  },
  {
    id: 'f6',
    title: 'Mango Fried Rice',
    price: 10,
    altprice: 15,
    category: 'Fried Rice',
    spicy: 1,
    choice: true,
    choices: ['Protein'],
    description: 'Choice of meat, egg, onion, mango, broccoli, scallion in a sweet & spicy sauce.',
  },
  {
    id: 'f7',
    title: 'Crab Fried Rice',
    price: 18,
    altprice: 18,
    category: 'Fried Rice',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Crab meat, egg, pea, carrot, scallion.',
  },
  {
    id: 'f8',
    title: 'Street Fried Rice',
    price: 18,
    altprice: 18,
    category: 'Fried Rice',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Spicy & sour fried rice, shrimps, egg, onion, lemongrass, kaffir lime leaf and cilantro.',
  },
]

const drinks = [
  {
    id: 'd1',
    title: 'Thai Iced Coffee',
    price: 4,
    altprice: 4,
    category: 'Drink',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 'd2',
    title: 'Thai Iced Tea',
    price: 4,
    altprice: 4,
    category: 'Drink',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 'd3',
    title: 'Fountain Drink',
    price: 3,
    altprice: 3,
    category: 'Drink',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 'd4',
    title: 'Hot Tea',
    price: 3,
    altprice: 3,
    category: 'Drink',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 'd5',
    title: 'Unsweetened Thai Iced Tea',
    price: 3,
    altprice: 3,
    category: 'Drink',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
]

const sides = [
  {
    id: 's1',
    title: 'White Rice',
    price: 3,
    altprice: 3,
    category: 'Side',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 's2',
    title: 'Brown Rice',
    price: 3,
    altprice: 3,
    category: 'Side',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 's3',
    title: 'Sticky Rice',
    price: 3,
    altprice: 3,
    category: 'Side',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 's4',
    title: 'Fried Rice',
    price: 5,
    altprice: 5,
    category: 'Side',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 's5',
    title: 'Peanut Sauce',
    price: 0.5,
    altprice: 0.5,
    category: 'Side',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 's6',
    title: 'Sweet Chili Sauce',
    price: 0.5,
    altprice: 0.5,
    category: 'Side',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 's7',
    title: 'Hot Sauce',
    price: 0.5,
    altprice: 0.5,
    category: 'Side',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
  {
    id: 's8',
    title: 'Thai Chili Fish Sauce',
    price: 1,
    altprice: 1,
    category: 'Side',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Lorem Ipsum',
  },
]

const featured = [
  {
    id: 'a13',
    title: 'Sampler',
    price: 15,
    altprice: 15,
    category: 'Appetizers',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Combination of (2) Egg Rolls, (2) Sweater Shrimp, (2) Crab Rangoon, and (3) Pork Dumplings served with ginger soy dip and sweet & sour sauce.',
  },
  {
    id: 'so2',
    title: 'Tom Yum Soup',
    price: '7 (Pot 18)',
    altprice: '7 (Pot 18)',
    category: 'Soup',
    spicy: 1,
    choice: true,
    choices: ['Chicken','Shrimp'],
    description: 'Spicy & sour soup, mushrooms, tomatoes, scallion, cilantro and choice of meat.',
  },
  {
    id: 'sal2',
    title: 'Papaya Salad',
    price: 12,
    altprice: 12,
    category: 'Salad',
    spicy: 2,
    choice: true,
    choices: ['Thai Style','Laos Style'],
    description: 'Thai style, sweet & sour with peanut or Laos style, spicy & sour with salted crab.',
  },
  {
    id: 'u2',
    title: 'Mango Chicken',
    price: 15,
    altprice: 15,
    category: 'Unique',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Sliced chicken stir-fried in our chef\'s special sweet and sour sauce with slieced mango, peppers, and onion.',
  },
  {
    id: 'mom1',
    title: 'Larb Mae Janla',
    price: 15,
    altprice: 15,
    category: 'Mom',
    spicy: 3,
    choice: false,
    choices: [],
    description: 'This is my original home town food, mince chicken with a spicy herb paste, served with lettuce and cucumber.',
  },
  {
    id: 'ns1',
    title: 'Duck Noodles',
    price: 18,
    altprice: 18,
    category: 'Noodle Soup',
    spicy: 0,
    choice: true,
    choices: ['Rice Noodle', 'Ramen Noodle'],
    description: 'Bean sprout, crispy garlic, scallion, cilantro in a slow cook duck broth.',
  },
  {
    id: 'c1',
    title: 'Red Curry',
    price: 15,
    altprice: 15,
    category: 'Curry',
    spicy: 2,
    choice: true,
    choices: ['Protein'],
    description: 'Bell pepper, egg plant, basil.',
  },
  {
    id: 'n2',
    title: 'Fiery Pad Thai',
    price: 15,
    altprice: 15,
    category: 'Noodle',
    spicy: 1,
    choice: false,
    choices: [],
    description: 'Spicy version of traditional Pad Thai, with chicken and shrimp, egg, onion, carrots, peppers, and basil.',
  },
  {
    id: 'w1',
    title: 'Gra Pow',
    price: 15,
    altprice: 15,
    category: 'Wok',
    spicy: 2,
    choice: false,
    choices: [],
    description: 'Minced chicken, basil, bell pepper, onion stir fried in a spicy Thai basil sauce. Served with fried egg on the top.',
  },
  {
    id: 'f5',
    title: 'Combo Fried Rice',
    price: 15,
    altprice: 15,
    category: 'Fried Rice',
    spicy: 0,
    choice: false,
    choices: [],
    description: 'Combination fried rice with Chicken, Beef, and Shrimp, egg, tomatoes, onion, broccoli and scallions.',
  },
]

const soi2data = {
  appetizer,
  soup,
  salad,
  unique,
  mom,
  veg,
  dessert,
  noodlesoup,
  curry,
  noodle,
  wok,
  friedrice,
  drinks,
  sides,
  featured,
}

if (require.main === module) {
  const fs = require('fs');
  fs.writeFileSync('soi2data.json', JSON.stringify(soi2data, null, 2));
}
