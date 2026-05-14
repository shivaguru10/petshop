import type { Category } from "@/types/product";

export type ShowcaseItem = {
  name: string;
  image: string;
};

export const showcaseCategories: Category[] = [
  "Dogs",
  "Birds",
  "Cats",
  "Dog Food",
  "Bird Supplies",
  "Hamster Care",
  "Pet Medicine",
  "Accessories",
  "Cages",
];

export const subcategoryShowcases: Record<Category, ShowcaseItem[]> = {
  Dogs: [
    { name: "Labrador", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=700&auto=format&fit=crop" },
    { name: "Husky", image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?q=80&w=700&auto=format&fit=crop" },
    { name: "German Shepherd", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=700&auto=format&fit=crop" },
    { name: "Golden Retriever", image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=700&auto=format&fit=crop" },
  ],
  Birds: [
    { name: "Cockatiel", image: "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=700&auto=format&fit=crop" },
    { name: "Sun Conure", image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=700&auto=format&fit=crop" },
    { name: "Love Birds", image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=700&auto=format&fit=crop" },
    { name: "Macaw", image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14?q=80&w=700&auto=format&fit=crop" },
  ],
  Cats: [
    { name: "Persian", image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=700&auto=format&fit=crop" },
    { name: "Siamese", image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=700&auto=format&fit=crop" },
    { name: "Maine Coon", image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=700&auto=format&fit=crop" },
    { name: "Bengal", image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=700&auto=format&fit=crop" },
  ],
  "Dog Food": [
    { name: "Adult Dog Food", image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=700&auto=format&fit=crop" },
    { name: "Puppy Food", image: "https://images.unsplash.com/photo-1601758177266-bc599de87707?q=80&w=700&auto=format&fit=crop" },
    { name: "Wet Food", image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=700&auto=format&fit=crop" },
    { name: "Grain-Free Meals", image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=700&auto=format&fit=crop" },
  ],
  "Bird Supplies": [
    { name: "Seed Mixes", image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=700&auto=format&fit=crop" },
    { name: "Perches", image: "https://images.unsplash.com/photo-1501706362039-c6e809ea1a80?q=80&w=700&auto=format&fit=crop" },
    { name: "Bird Baths", image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=700&auto=format&fit=crop" },
    { name: "Mineral Blocks", image: "https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=700&auto=format&fit=crop" },
  ],
  "Hamster Care": [
    { name: "Hamster Food", image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=700&auto=format&fit=crop" },
    { name: "Bedding", image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=700&auto=format&fit=crop" },
    { name: "Exercise Wheels", image: "https://images.unsplash.com/photo-1591561582301-7ce6588cc286?q=80&w=700&auto=format&fit=crop" },
    { name: "Hideout Houses", image: "https://images.unsplash.com/photo-1612267168669-679c961c5c47?q=80&w=700&auto=format&fit=crop" },
  ],
  "Pet Medicine": [
    { name: "Tick & Flea Care", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=700&auto=format&fit=crop" },
    { name: "Vitamins", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=700&auto=format&fit=crop" },
    { name: "Wound Care", image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=700&auto=format&fit=crop" },
    { name: "Digestive Support", image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=700&auto=format&fit=crop" },
  ],
  Accessories: [
    { name: "Leashes", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=700&auto=format&fit=crop" },
    { name: "Collars", image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=700&auto=format&fit=crop" },
    { name: "Harness", image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=700&auto=format&fit=crop" },
    { name: "Pet Bed", image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=700&auto=format&fit=crop" },
  ],
  Cages: [
    { name: "Dog Cages", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=700&auto=format&fit=crop" },
    { name: "Bird Cages", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=700&auto=format&fit=crop" },
    { name: "Rabbit Cage", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=700&auto=format&fit=crop" },
    { name: "Travel Carriers", image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?q=80&w=700&auto=format&fit=crop" },
  ],
};

export const testimonials = [
  {
    name: "Syam Kumar",
    role: "Dog Parent",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    text: "Blits Pets made it easy to buy dog food, leashes, and bowls in one order. Everything arrived neatly packed.",
  },
  {
    name: "Shivaguru",
    role: "Bird Owner",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces",
    text: "I found seed mix, perches, and a bird cage without searching across multiple stores.",
  },
  {
    name: "Tilak",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    text: "The pet medicine section is clearly written and practical, with careful descriptions.",
  },
  {
    name: "Meenakshi S.",
    role: "Hamster Parent",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    text: "The hamster bedding, wheel, and habitat options were easy to compare.",
  },
];
