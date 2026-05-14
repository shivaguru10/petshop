import type { Category, Product } from "@/types/product";

const livePetCategories: Category[] = ["Dogs", "Birds", "Cats"];

export function isLivePetCategory(category: Category) {
  return livePetCategories.includes(category);
}

const images = {
  labrador:
    "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=900&auto=format&fit=crop",
  husky:
    "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?q=80&w=900&auto=format&fit=crop",
  germanShepherd:
    "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=900&auto=format&fit=crop",
  goldenRetriever:
    "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=900&auto=format&fit=crop",
  beagle:
    "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=900&auto=format&fit=crop",
  cockatiel:
    "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=900&auto=format&fit=crop",
  sunConure:
    "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=900&auto=format&fit=crop",
  loveBird:
    "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=900&auto=format&fit=crop",
  macaw:
    "https://images.unsplash.com/photo-1544923408-75c5cef46f14?q=80&w=900&auto=format&fit=crop",
  africanGrey:
    "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=900&auto=format&fit=crop",
  persianCat:
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=900&auto=format&fit=crop",
  siameseCat:
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=900&auto=format&fit=crop",
  maineCoon:
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=900&auto=format&fit=crop",
  bengalCat:
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=900&auto=format&fit=crop",
  britishShorthair:
    "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=900&auto=format&fit=crop",
  dogFood:
    "https://images.unsplash.com/photo-1601758124096-1fd661873b50?q=80&w=900&auto=format&fit=crop",
  puppy:
    "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=900&auto=format&fit=crop",
  wetFood:
    "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=900&auto=format&fit=crop",
  dryFood:
    "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=900&auto=format&fit=crop",
  grainFree:
    "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=900&auto=format&fit=crop",
  bird:
    "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=900&auto=format&fit=crop",
  birdSeed:
    "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=900&auto=format&fit=crop",
  birdPerch:
    "https://images.unsplash.com/photo-1501706362039-c6e809ea1a80?q=80&w=900&auto=format&fit=crop",
  birdBath:
    "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=900&auto=format&fit=crop",
  hamster:
    "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=900&auto=format&fit=crop",
  smallPet:
    "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=900&auto=format&fit=crop",
  hamsterWheel:
    "https://images.unsplash.com/photo-1591561582301-7ce6588cc286?q=80&w=900&auto=format&fit=crop",
  medicine:
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=900&auto=format&fit=crop",
  vitamins:
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=900&auto=format&fit=crop",
  tablets:
    "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=900&auto=format&fit=crop",
  leash:
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=900&auto=format&fit=crop",
  collar:
    "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=900&auto=format&fit=crop",
  bowl:
    "https://images.unsplash.com/photo-1601758124096-1fd661873b50?q=80&w=900&auto=format&fit=crop",
  toy:
    "https://images.unsplash.com/photo-1600369672770-985fd30004eb?q=80&w=900&auto=format&fit=crop",
  dogCage:
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=900&auto=format&fit=crop",
  carrier:
    "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?q=80&w=900&auto=format&fit=crop",
};

export const categories: { name: Category; image: string; icon: string }[] = [
  { name: "Dogs", image: images.labrador, icon: "paw" },
  { name: "Birds", image: images.cockatiel, icon: "bird" },
  { name: "Cats", image: images.persianCat, icon: "paw" },
  { name: "Dog Food", image: images.dryFood, icon: "bone" },
  { name: "Bird Supplies", image: images.bird, icon: "bird" },
  { name: "Hamster Care", image: images.hamster, icon: "spark" },
  { name: "Pet Medicine", image: images.medicine, icon: "plus" },
  { name: "Accessories", image: images.leash, icon: "leash" },
  { name: "Cages", image: images.dogCage, icon: "home" },
];

export const products: Product[] = [
  {
    id: "labrador-retriever",
    name: "Labrador Retriever",
    brand: "Blits Pets Kennel",
    category: "Dogs",
    material: "Friendly family breed",
    price: 28000,
    discount: 5,
    image: images.labrador,
    description:
      "Friendly Labrador Retriever listing with vaccination record, basic health check, and diet guidance.",
    isBestSeller: true,
    isTrending: true,
    options: ["Male", "Female", "Vaccinated", "Family friendly"],
  },
  {
    id: "siberian-husky",
    name: "Siberian Husky",
    brand: "Blits Pets Kennel",
    category: "Dogs",
    material: "Active northern breed",
    price: 42000,
    discount: 6,
    image: images.husky,
    description:
      "Siberian Husky listing for experienced pet parents, with vaccination record and grooming guidance.",
    isNewArrival: true,
    options: ["Male", "Female", "Vaccinated", "Active breed"],
  },
  {
    id: "german-shepherd",
    name: "German Shepherd",
    brand: "Blits Pets Kennel",
    category: "Dogs",
    material: "Guard and companion breed",
    price: 36000,
    discount: 7,
    image: images.germanShepherd,
    description:
      "German Shepherd listing with basic obedience guidance, vaccination record, and care notes.",
    isBestSeller: true,
    options: ["Male", "Female", "Vaccinated", "Training friendly"],
  },
  {
    id: "golden-retriever",
    name: "Golden Retriever",
    brand: "Blits Pets Kennel",
    category: "Dogs",
    material: "Gentle companion breed",
    price: 38000,
    discount: 5,
    image: images.goldenRetriever,
    description:
      "Golden Retriever listing for families, with health check, vaccination record, and starter feeding advice.",
    options: ["Male", "Female", "Vaccinated", "Gentle breed"],
  },
  {
    id: "beagle",
    name: "Beagle",
    brand: "Blits Pets Kennel",
    category: "Dogs",
    material: "Small active breed",
    price: 30000,
    image: images.beagle,
    description:
      "Beagle listing for active homes, with vaccination record, feeding notes, and basic care guidance.",
    options: ["Male", "Female", "Vaccinated", "Compact breed"],
  },
  {
    id: "cockatiel",
    name: "Cockatiel",
    brand: "Blits Pets Aviary",
    category: "Birds",
    material: "Friendly pet bird",
    price: 4500,
    discount: 5,
    image: images.cockatiel,
    description:
      "Cockatiel listing with basic health check, starter feeding advice, and cage setup guidance.",
    isBestSeller: true,
    options: ["Male", "Female", "Hand-tamed", "Cockatiel"],
  },
  {
    id: "sun-conure",
    name: "Sun Conure",
    brand: "Blits Pets Aviary",
    category: "Birds",
    material: "Colorful companion bird",
    price: 18000,
    discount: 6,
    image: images.sunConure,
    description:
      "Sun Conure listing for experienced bird lovers, with diet and enrichment guidance.",
    isTrending: true,
    options: ["Young", "Pair", "Hand-tamed", "Sun Conure"],
  },
  {
    id: "love-birds",
    name: "Love Birds Pair",
    brand: "Blits Pets Aviary",
    category: "Birds",
    material: "Pair companion birds",
    price: 3500,
    image: images.loveBird,
    description:
      "Love Birds pair listing with feeding notes, cage size guidance, and basic care tips.",
    isNewArrival: true,
    options: ["Pair", "Young", "Love Birds"],
  },
  {
    id: "macaw",
    name: "Blue & Gold Macaw",
    brand: "Blits Pets Aviary",
    category: "Birds",
    material: "Large parrot breed",
    price: 95000,
    discount: 4,
    image: images.macaw,
    description:
      "Macaw listing for experienced homes, with diet, handling, and large-cage guidance.",
    options: ["Young", "Hand-tamed", "Large parrot"],
  },
  {
    id: "african-grey",
    name: "African Grey Parrot",
    brand: "Blits Pets Aviary",
    category: "Birds",
    material: "Intelligent parrot breed",
    price: 85000,
    image: images.africanGrey,
    description:
      "African Grey listing with enrichment, diet, and responsible ownership guidance.",
    options: ["Young", "Hand-tamed", "African Grey"],
  },
  {
    id: "persian-cat",
    name: "Persian Cat",
    brand: "Blits Pets Cattery",
    category: "Cats",
    material: "Long-haired companion breed",
    price: 22000,
    discount: 6,
    image: images.persianCat,
    description:
      "Persian cat listing with vaccination record, grooming notes, and starter feeding guidance.",
    isBestSeller: true,
    options: ["Male", "Female", "Vaccinated", "Persian"],
  },
  {
    id: "siamese-cat",
    name: "Siamese Cat",
    brand: "Blits Pets Cattery",
    category: "Cats",
    material: "Social short-haired breed",
    price: 26000,
    discount: 5,
    image: images.siameseCat,
    description:
      "Siamese cat listing for interactive homes, with health check and care notes.",
    isTrending: true,
    options: ["Male", "Female", "Vaccinated", "Siamese"],
  },
  {
    id: "maine-coon",
    name: "Maine Coon",
    brand: "Blits Pets Cattery",
    category: "Cats",
    material: "Large gentle breed",
    price: 45000,
    discount: 4,
    image: images.maineCoon,
    description:
      "Maine Coon listing with grooming guidance, vaccination record, and feeding notes.",
    options: ["Male", "Female", "Vaccinated", "Maine Coon"],
  },
  {
    id: "bengal-cat",
    name: "Bengal Cat",
    brand: "Blits Pets Cattery",
    category: "Cats",
    material: "Active spotted breed",
    price: 38000,
    image: images.bengalCat,
    description:
      "Bengal cat listing for active homes, with enrichment, diet, and care guidance.",
    isNewArrival: true,
    options: ["Male", "Female", "Vaccinated", "Bengal"],
  },
  {
    id: "british-shorthair",
    name: "British Shorthair",
    brand: "Blits Pets Cattery",
    category: "Cats",
    material: "Calm short-haired breed",
    price: 34000,
    image: images.britishShorthair,
    description:
      "British Shorthair listing with health check, vaccination record, and grooming notes.",
    options: ["Male", "Female", "Vaccinated", "British Shorthair"],
  },
  {
    id: "pedigree-adult-chicken-rice",
    name: "Pedigree Adult Chicken & Vegetables",
    brand: "Pedigree",
    category: "Dog Food",
    material: "Dry dog food",
    price: 1899,
    discount: 12,
    image: images.dryFood,
    description:
      "Popular adult dog food with chicken, vegetables, and daily nutrition for regular feeding.",
    isBestSeller: true,
    isTrending: true,
    options: ["3 kg", "10 kg", "Adult dog food", "Chicken"],
  },
  {
    id: "royal-canin-puppy-mini",
    name: "Royal Canin Mini Puppy Food",
    brand: "Royal Canin",
    category: "Dog Food",
    material: "Puppy kibble",
    price: 2599,
    discount: 8,
    image: images.puppy,
    description:
      "Premium puppy food for small breeds with kibble sized for young dogs.",
    isNewArrival: true,
    options: ["1 kg", "2 kg", "Puppy Food", "Mini breed"],
  },
  {
    id: "drools-focus-adult",
    name: "Drools Focus Adult Super Premium",
    brand: "Drools",
    category: "Dog Food",
    material: "High protein kibble",
    price: 2199,
    discount: 15,
    image: images.dogFood,
    description:
      "High-protein adult dog food for active dogs, available in practical pack sizes.",
    options: ["3 kg", "12 kg", "Adult", "High protein"],
  },
  {
    id: "farmina-nd-lamb-blueberry",
    name: "Farmina N&D Lamb & Blueberry",
    brand: "Farmina N&D",
    category: "Dog Food",
    material: "Grain-free dog food",
    price: 3299,
    discount: 10,
    image: images.grainFree,
    description:
      "Premium grain-free dog food option for pet parents looking for a richer recipe.",
    options: ["2.5 kg", "7 kg", "Grain free", "Lamb"],
  },
  {
    id: "versele-laga-budgie-mix",
    name: "Versele-Laga Budgie Seed Mix",
    brand: "Versele-Laga",
    category: "Bird Supplies",
    material: "Seed mix",
    price: 499,
    discount: 9,
    image: images.birdSeed,
    description:
      "Balanced seed mix for budgies and small birds with clean daily feeding grains.",
    isBestSeller: true,
    options: ["1 kg", "2.5 kg", "Budgie", "Seed Mixes"],
  },
  {
    id: "vitapol-smakers-parrot",
    name: "Vitapol Smakers Parrot Treat",
    brand: "Vitapol",
    category: "Bird Supplies",
    material: "Bird treat stick",
    price: 249,
    discount: 6,
    image: images.birdBath,
    description:
      "Treat stick for parrots and parakeets, useful as an occasional enrichment snack.",
    options: ["Single", "Pack of 2", "Treats"],
  },
  {
    id: "hagen-hari-perch",
    name: "Hagen Hari Natural Perch",
    brand: "Hagen Hari",
    category: "Bird Supplies",
    material: "Natural wood perch",
    price: 599,
    discount: 12,
    image: images.birdPerch,
    description:
      "Natural perch accessory that helps birds grip, rest, and move comfortably in cages.",
    isTrending: true,
    options: ["Small", "Medium", "Perches"],
  },
  {
    id: "vitakraft-bird-mineral-block",
    name: "Vitakraft Mineral Block",
    brand: "Vitakraft",
    category: "Bird Supplies",
    material: "Calcium mineral",
    price: 199,
    image: images.bird,
    description:
      "Mineral block for birds to support beak activity and calcium intake.",
    options: ["Single", "Pack of 3", "Mineral Blocks"],
  },
  {
    id: "versele-laga-hamster-complete",
    name: "Versele-Laga Hamster Complete",
    brand: "Versele-Laga",
    category: "Hamster Care",
    material: "Complete hamster food",
    price: 599,
    discount: 7,
    image: images.hamsterWheel,
    description:
      "Complete food for hamsters with balanced pellets and daily feeding nutrition.",
    isBestSeller: true,
    options: ["500 g", "1.75 kg", "Hamster Food"],
  },
  {
    id: "kaytee-clean-cozy-bedding",
    name: "Kaytee Clean & Cozy Bedding",
    brand: "Kaytee",
    category: "Hamster Care",
    material: "Paper bedding",
    price: 899,
    discount: 10,
    image: images.smallPet,
    description:
      "Soft paper bedding for burrowing, nesting, and comfortable small-pet habitats.",
    isTrending: true,
    options: ["24 L", "49 L", "Bedding"],
  },
  {
    id: "savic-hamster-wheel",
    name: "Savic Rolly Exercise Wheel",
    brand: "Savic",
    category: "Hamster Care",
    material: "Plastic wheel",
    price: 699,
    discount: 11,
    image: images.hamster,
    description:
      "Exercise wheel for daily activity in hamster cages and starter habitats.",
    isNewArrival: true,
    options: ["Small", "Medium", "Exercise Wheels"],
  },
  {
    id: "trixie-ceramic-hideout",
    name: "Trixie Ceramic Small Pet House",
    brand: "Trixie",
    category: "Hamster Care",
    material: "Ceramic hideout",
    price: 749,
    discount: 9,
    image: images.smallPet,
    description:
      "Ceramic hideout that gives hamsters a private resting and nesting corner.",
    options: ["Small", "Medium", "Hideout Houses"],
  },
  {
    id: "virbac-episoothe-shampoo",
    name: "Virbac Episoothe Pet Shampoo",
    brand: "Virbac",
    category: "Pet Medicine",
    material: "Pet shampoo",
    price: 799,
    discount: 10,
    image: images.vitamins,
    description:
      "Pet-care shampoo for coat and skin hygiene. Use as directed on the pack.",
    isBestSeller: true,
    options: ["200 ml", "500 ml", "Skin care"],
  },
  {
    id: "himalaya-liv52-pet",
    name: "Himalaya Liv.52 Pet Supplement",
    brand: "Himalaya",
    category: "Pet Medicine",
    material: "Liquid supplement",
    price: 449,
    discount: 5,
    image: images.vitamins,
    description:
      "Wellness supplement for pets. Follow dosage directions and consult a vet when needed.",
    isTrending: true,
    options: ["100 ml", "200 ml", "Vitamins"],
  },
  {
    id: "beaphar-multi-vit",
    name: "Beaphar Multi-Vit Tablets",
    brand: "Beaphar",
    category: "Pet Medicine",
    material: "Vitamin tablets",
    price: 599,
    discount: 10,
    image: images.tablets,
    description:
      "Daily vitamin support tablets for routine pet wellness. Use as directed.",
    options: ["30 tablets", "60 tablets", "Multivitamin"],
  },
  {
    id: "frontline-plus-dog",
    name: "Frontline Plus Tick & Flea",
    brand: "Frontline",
    category: "Pet Medicine",
    material: "Spot-on treatment",
    price: 999,
    discount: 12,
    image: images.medicine,
    description:
      "Tick and flea spot-on for dogs. Choose size carefully and follow label instructions.",
    options: ["Small dog", "Medium dog", "Large dog"],
  },
  {
    id: "flexi-classic-leash",
    name: "Flexi Classic Retractable Leash",
    brand: "Flexi",
    category: "Accessories",
    material: "Retractable leash",
    price: 1499,
    discount: 14,
    image: images.leash,
    description:
      "Retractable leash for daily walks with controlled freedom and a comfortable grip.",
    isBestSeller: true,
    options: ["Small", "Medium", "Large", "Leashes"],
  },
  {
    id: "trixie-premium-collar",
    name: "Trixie Premium Dog Collar",
    brand: "Trixie",
    category: "Accessories",
    material: "Soft nylon collar",
    price: 399,
    discount: 10,
    image: images.collar,
    description:
      "Adjustable everyday collar with a secure buckle and comfortable nylon webbing.",
    options: ["Small", "Medium", "Large", "Collars"],
  },
  {
    id: "m-pets-steel-bowl",
    name: "M-Pets Stainless Steel Bowl",
    brand: "M-Pets",
    category: "Accessories",
    material: "Stainless steel bowl",
    price: 349,
    discount: 12,
    image: images.bowl,
    description:
      "Durable stainless steel bowl for food or water with a stable base.",
    isNewArrival: true,
    options: ["Small", "Medium", "Large", "Feeding Bowls"],
  },
  {
    id: "kong-classic-dog-toy",
    name: "KONG Classic Dog Toy",
    brand: "KONG",
    category: "Accessories",
    material: "Rubber toy",
    price: 899,
    image: images.toy,
    description:
      "Classic enrichment toy for supervised chewing, fetch, and treat play.",
    options: ["Small", "Medium", "Large", "Toys"],
  },
  {
    id: "savic-dog-residence",
    name: "Savic Dog Residence Cage",
    brand: "Savic",
    category: "Cages",
    material: "Powder-coated metal",
    price: 4999,
    discount: 18,
    image: images.carrier,
    description:
      "Foldable dog cage with tray and secure latch for home training or travel.",
    isNewArrival: true,
    options: ["Small", "Medium", "Large", "Dog Cages"],
  },
  {
    id: "ferplast-bird-cage",
    name: "Ferplast Bird Cage",
    brand: "Ferplast",
    category: "Cages",
    material: "Metal wire cage",
    price: 2799,
    discount: 16,
    image: images.bird,
    description:
      "Bird cage with perches, feeding cups, and a removable cleaning tray.",
    isBestSeller: true,
    options: ["Small", "Medium", "Bird Cages"],
  },
  {
    id: "trixie-hamster-cage",
    name: "Trixie Hamster Habitat Cage",
    brand: "Trixie",
    category: "Cages",
    material: "Plastic and wire cage",
    price: 2199,
    discount: 14,
    image: images.smallPet,
    description:
      "Compact hamster cage with ventilation, bedding depth, and starter accessories.",
    isTrending: true,
    options: ["Starter", "Deluxe", "Hamster Cages"],
  },
  {
    id: "m-pets-travel-carrier",
    name: "M-Pets Travel Pet Carrier",
    brand: "M-Pets",
    category: "Cages",
    material: "Ventilated plastic",
    price: 1599,
    discount: 12,
    image: images.dogCage,
    description:
      "Lightweight pet carrier with ventilation, handle, and secure closure for short trips.",
    options: ["Small", "Medium", "Travel Carriers"],
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getDiscountedPrice(product: Product) {
  return product.discount
    ? Math.round(product.price * (1 - product.discount / 100))
    : product.price;
}

export function filterProducts({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const searchTerms = search?.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return products.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const haystack = [
      product.name,
      product.brand,
      product.category,
      product.material,
      ...product.options,
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch =
      !searchTerms?.length || searchTerms.every((term) => haystack.includes(term));
    return matchesCategory && matchesSearch;
  });
}
