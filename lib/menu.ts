export type MenuItem = {
  category: string;
  name: string;
  description: string;
  price: number;
  badge?: string;
  imageId: number;
  featured?: boolean;
};

export const categories = [
  "Espresso Drinks",
  "Cold Drinks",
  "Loose Leaf Tea",
  "Pastries",
  "Sandwiches",
] as const;

export type Category = (typeof categories)[number];

export function localImageUrl(id: number, variant: "hero" | "card" | "thumb" = "card"): string {
  return `/images/${id}-${variant}.webp`;
}

export const categoryImages: Record<Category, number> = {
  "Espresso Drinks": 9249368,
  "Cold Drinks": 2775860,
  "Loose Leaf Tea": 7364044,
  "Pastries": 19296861,
  "Sandwiches": 3957501,
};

export const menuItems: MenuItem[] = [
  // ── Espresso Drinks ────────────────────────────────────────────────────
  {
    category: "Espresso Drinks",
    name: "Espresso",
    description: "A single or double shot of our signature dark-roast espresso — bright acidity with a lingering chocolatey finish.",
    price: 3.50,
    badge: "House Favorite",
    imageId: 1233528,   // ✓ espresso shot in glass demitasse with crema
  },
  {
    category: "Espresso Drinks",
    name: "Americano",
    description: "Two shots of espresso stretched with hot water to reveal the full complexity of the bean.",
    price: 4.00,
    imageId: 1235706,   // ✓ dark dramatic coffee pour into cup
  },
  {
    category: "Espresso Drinks",
    name: "Cappuccino",
    description: "Equal thirds of espresso, steamed milk, and velvety microfoam — classic and uncompromising.",
    price: 4.75,
    badge: "Popular",
    imageId: 9249368,   // ✓ overhead cappuccino with heart latte art
    featured: true,
  },
  {
    category: "Espresso Drinks",
    name: "Flat White",
    description: "A double ristretto pulled tight over a thin ribbon of silky steamed whole milk.",
    price: 5.00,
    badge: "House Favorite",
    imageId: 312418,    // ✓ navy ceramic cup with tulip latte art
  },
  {
    category: "Espresso Drinks",
    name: "Cortado",
    description: "One part espresso cut with one part warm milk to temper the acidity without losing intensity.",
    price: 4.50,
    imageId: 2396220,   // ✓ cappuccino in white cup on saucer
  },
  {
    category: "Espresso Drinks",
    name: "Latte",
    description: "Two shots of espresso with generous steamed milk and a delicate layer of foam.",
    price: 5.25,
    badge: "Popular",
    imageId: 2159156,   // ✓ barista pouring latte art
  },
  {
    category: "Espresso Drinks",
    name: "Vanilla Bean Latte",
    description: "Our classic latte sweetened with real Madagascar vanilla bean syrup.",
    price: 5.75,
    badge: "Popular",
    imageId: 12703064,  // ✓ overhead latte with art
  },
  {
    category: "Espresso Drinks",
    name: "Caramel Brûlée Latte",
    description: "Espresso and steamed milk swirled with house-made caramel sauce and a torched sugar top.",
    price: 6.25,
    badge: "Seasonal",
    imageId: 2775827,   // ✓ barista at La Marzocca espresso machine
  },
  {
    category: "Espresso Drinks",
    name: "Oat Milk Latte",
    description: "Double espresso over creamy oat milk — naturally sweet and dairy-free.",
    price: 5.75,
    badge: "Popular",
    imageId: 2074127,   // ✓ milk poured into coffee
  },
  {
    category: "Espresso Drinks",
    name: "Mocha",
    description: "Rich espresso blended with Valrhona dark chocolate and steamed milk — topped with cocoa dust.",
    price: 5.75,
    imageId: 6205779,   // ✓ barista crafting latte art
  },
  {
    category: "Espresso Drinks",
    name: "Honey Lavender Latte",
    description: "Espresso with lavender-infused honey syrup and lightly foamed oat milk.",
    price: 6.00,
    badge: "New",
    imageId: 32053480,  // ✓ elegant latte art, minimalist
    featured: true,
  },
  {
    category: "Espresso Drinks",
    name: "Cardamom Rose Macchiato",
    description: "A layered espresso macchiato with cardamom simple syrup and a touch of rosewater.",
    price: 6.00,
    badge: "House Favorite",
    imageId: 373639,    // ✓ barista holding small latte art cup
  },
  {
    category: "Espresso Drinks",
    name: "Hazelnut Cortado",
    description: "Our cortado finished with a small pour of house-toasted hazelnut syrup.",
    price: 5.25,
    imageId: 324028,    // ✓ espresso machine with two cups on drip tray
  },
  {
    category: "Espresso Drinks",
    name: "Dirty Chai Latte",
    description: "A double shot of espresso poured into a spiced masala chai with steamed oat milk.",
    price: 6.50,
    badge: "Popular",
    imageId: 6802983,   // ✓ milky coffee in grey mug, cosy table setting
  },

  // ── Cold Drinks ────────────────────────────────────────────────────────
  {
    category: "Cold Drinks",
    name: "Cold Brew",
    description: "Steeped for 18 hours in cold water — smooth, low-acid, and boldly concentrated.",
    price: 5.00,
    badge: "Popular",
    imageId: 10738363,  // ✓ glass of cold coffee (17576001 was corrupted)
  },
  {
    category: "Cold Drinks",
    name: "Nitro Cold Brew",
    description: "Our cold brew infused with nitrogen on tap for a creamy cascading pour with zero added sugar.",
    price: 5.75,
    badge: "House Favorite",
    imageId: 2775860,   // ✓ cold brew in clear glass
    featured: true,
  },
  {
    category: "Cold Drinks",
    name: "Iced Latte",
    description: "Double espresso over ice with cold milk — simple and refreshing.",
    price: 5.25,
    badge: "Popular",
    imageId: 8605616,   // ✓ overhead creamy iced coffee with ice
  },
  {
    category: "Cold Drinks",
    name: "Iced Vanilla Latte",
    description: "Iced latte sweetened with real vanilla bean syrup and poured over hand-cracked ice.",
    price: 5.75,
    imageId: 34170574,  // ✓ iced coffee pitcher
  },
  {
    category: "Cold Drinks",
    name: "Iced Mocha",
    description: "Espresso and Valrhona chocolate over ice with cold whole milk and a float of cream.",
    price: 6.00,
    imageId: 10738363,  // ✓ layered iced coffee in glass
  },
  {
    category: "Cold Drinks",
    name: "Iced Caramel Latte",
    description: "Double espresso over ice with cold oat milk and a long drizzle of sea-salt caramel.",
    price: 6.25,
    badge: "Popular",
    imageId: 34170574,  // ✓ iced coffee (8605859 was corrupted)
  },
  {
    category: "Cold Drinks",
    name: "Brown Sugar Oat Shaker",
    description: "Espresso shaken over ice with brown sugar syrup and cinnamon — poured over oat milk.",
    price: 6.50,
    badge: "New",
    imageId: 5946967,   // ✓ hand stirring layered iced coffee with black straw
  },
  {
    category: "Cold Drinks",
    name: "Iced Matcha Latte",
    description: "Ceremonial-grade matcha whisked smooth and poured over cold oat milk and ice.",
    price: 6.00,
    badge: "House Favorite",
    imageId: 5946969,   // ✓ iced matcha latte (2227126 was corrupted)
    featured: true,
  },
  {
    category: "Cold Drinks",
    name: "Sparkling Citrus Cold Brew",
    description: "Cold brew topped with sparkling water and a long twist of orange peel.",
    price: 5.75,
    badge: "Seasonal",
    imageId: 24039577,  // ✓ iced coffee with orange juice — sparkling citrus cold brew
  },
  {
    category: "Cold Drinks",
    name: "Hibiscus Lemonade",
    description: "House-brewed hibiscus tea shaken with fresh lemon juice and a touch of honey.",
    price: 4.75,
    badge: "Popular",
    imageId: 1417945,   // ✓ clear glass of herbal drink with leaf garnish
  },
  {
    category: "Cold Drinks",
    name: "Strawberry Basil Refresher",
    description: "Muddled strawberry and fresh basil stirred with sparkling water and a splash of lime.",
    price: 5.50,
    badge: "New",
    imageId: 102444,    // ✓ strawberry sparkling water with mint in mason jar
  },
  {
    category: "Cold Drinks",
    name: "Mango Passionfruit Fizz",
    description: "Tropical mango and passionfruit purée topped with sparkling water and mint.",
    price: 5.50,
    badge: "Seasonal",
    imageId: 5817518,   // ✓ mango passionfruit cocktail with mint
  },

  // ── Loose Leaf Tea ─────────────────────────────────────────────────────
  {
    category: "Loose Leaf Tea",
    name: "Earl Grey Supreme",
    description: "Whole-leaf black tea with bergamot oil and a hint of lavender — bright and floral.",
    price: 4.25,
    badge: "House Favorite",
    imageId: 1793034,   // ✓ glass pour-over carafe and teacup, premium tea prep
    featured: true,
  },
  {
    category: "Loose Leaf Tea",
    name: "English Breakfast",
    description: "A robust full-bodied blend of Assam and Ceylon leaves — made for mornings.",
    price: 4.00,
    badge: "Popular",
    imageId: 1187317,   // ✓ red ceramic cup with warm tea — classic English breakfast
  },
  {
    category: "Loose Leaf Tea",
    name: "Jasmine Pearl Green",
    description: "Hand-rolled green tea pearls scented with fresh jasmine blossoms over multiple nights.",
    price: 5.00,
    badge: "House Favorite",
    imageId: 6660468,   // ✓ woman with kettle (7525675 was corrupted)
  },
  {
    category: "Loose Leaf Tea",
    name: "Peppermint",
    description: "Pure whole-leaf peppermint grown in the Pacific Northwest — cooling and intensely fresh.",
    price: 4.00,
    badge: "Popular",
    imageId: 34178500,  // ✓ dried flowers and herbs
  },
  {
    category: "Loose Leaf Tea",
    name: "Chamomile Honey",
    description: "Egyptian chamomile flowers with a golden honey finish — our most calming cup.",
    price: 4.25,
    imageId: 1793034,   // ✓ rustic mug with dried chamomile flowers
  },
  {
    category: "Loose Leaf Tea",
    name: "Oolong Milk Tea",
    description: "A creamy Taiwanese-style oolong steeped strong and served with warm milk on the side.",
    price: 5.50,
    badge: "New",
    imageId: 5946965,   // ✓ milk being poured into iced tea glass
  },
  {
    category: "Loose Leaf Tea",
    name: "Rooibos Vanilla Chai",
    description: "South African rooibos blended with warming chai spices and a whisper of vanilla.",
    price: 4.75,
    badge: "Popular",
    imageId: 1793034,   // ✓ mug with dried herbs and flowers
  },
  {
    category: "Loose Leaf Tea",
    name: "Hibiscus Berry Tisane",
    description: "Tart hibiscus flowers with dried blueberry and rose hip — vibrant ruby red, caffeine-free.",
    price: 4.50,
    badge: "Seasonal",
    imageId: 1417945,   // ✓ clear glass cup of herbal tea with leaf garnish
  },
  {
    category: "Loose Leaf Tea",
    name: "Sencha Morning",
    description: "A grassy Japanese green tea with a clean umami depth — served in a small glass teapot.",
    price: 4.75,
    imageId: 5946971,   // ✓ iced matcha green latte in tall glass
  },
  {
    category: "Loose Leaf Tea",
    name: "Lemon Ginger Turmeric",
    description: "Invigorating blend of lemon myrtle, ginger root, and turmeric — naturally anti-inflammatory.",
    price: 4.75,
    badge: "New",
    imageId: 34178500,  // ✓ dried botanical herbs and flowers
  },
  {
    category: "Loose Leaf Tea",
    name: "White Peony (Bai Mu Dan)",
    description: "Delicately sweet whole-leaf white tea with a honeysuckle finish — rare and unhurried.",
    price: 6.00,
    badge: "House Favorite",
    imageId: 2074130,   // ✓ overhead cafe table with multiple tea cups
  },

  // ── Pastries ───────────────────────────────────────────────────────────
  {
    category: "Pastries",
    name: "Butter Croissant",
    description: "Laminated with 81 layers of European cultured butter — shatteringly crisp and pull-apart soft.",
    price: 4.00,
    badge: "Popular",
    imageId: 1131379,   // ✓ flat-lay croissant (41298 was 404)
  },
  {
    category: "Pastries",
    name: "Almond Croissant",
    description: "Day-old croissant soaked in orange syrup and filled with frangipane — toasted almond top.",
    price: 4.75,
    badge: "House Favorite",
    imageId: 19296861,  // ✓ close-up croissant
    featured: true,
  },
  {
    category: "Pastries",
    name: "Pain au Chocolat",
    description: "Buttery croissant dough wrapped around two batons of 70% Valrhona dark chocolate.",
    price: 4.50,
    badge: "Popular",
    imageId: 1775032,   // ✓ assorted baked breads flat-lay
  },
  {
    category: "Pastries",
    name: "Kouign-Amann",
    description: "A Breton pastry of caramelized laminated dough — crackling sugar crust and honeyed interior.",
    price: 5.25,
    badge: "House Favorite",
    imageId: 3892469,   // ✓ close-up caramelized pastry
    featured: true,
  },
  {
    category: "Pastries",
    name: "Cardamom Morning Bun",
    description: "Croissant dough rolled with brown sugar, orange zest, and ground cardamom — dusted in sugar.",
    price: 5.00,
    badge: "New",
    imageId: 29156078,  // ✓ elegant pastry (3692 was 404)
  },
  {
    category: "Pastries",
    name: "Blueberry Lemon Muffin",
    description: "Loaded with wild Maine blueberries and a bright lemon glaze over a crisp domed top.",
    price: 3.75,
    badge: "Popular",
    imageId: 20179572,  // ✓ baked goods (4279 was 404)
  },
  {
    category: "Pastries",
    name: "Double Chocolate Muffin",
    description: "Deep dark cocoa batter studded with Valrhona chocolate chips — rich without being sweet.",
    price: 3.75,
    imageId: 1775034,   // ✓ powdered pastry baked good
  },
  {
    category: "Pastries",
    name: "Classic Cinnamon Roll",
    description: "Soft-proofed overnight dough with brown sugar filling and a thick cream cheese glaze.",
    price: 5.50,
    badge: "Popular",
    imageId: 5964505,   // ✓ cinnamon rolls from tray
  },
  {
    category: "Pastries",
    name: "Lemon Poppy Seed Scone",
    description: "A tender triangular scone with lemon zest throughout and a drizzled lemon icing.",
    price: 3.75,
    imageId: 20179572,  // ✓ sugared pastries on a tray
  },
  {
    category: "Pastries",
    name: "Banana Walnut Bread",
    description: "Moist one-banana loaf with toasted walnuts and a dark caramel crumb top.",
    price: 3.50,
    imageId: 1775035,   // ✓ rustic seeded loaf on light background
  },
  {
    category: "Pastries",
    name: "Tahini Chocolate Chip Cookie",
    description: "A thick chewy cookie with earthy tahini and Guittard chocolate chips — sprinkled with flaked salt.",
    price: 4.25,
    badge: "New",
    imageId: 13119734,  // ✓ pastry at coffee counter
  },
  {
    category: "Pastries",
    name: "Pistachio Rose Financier",
    description: "A small French almond-butter cake with pistachio paste and a rosewater glaze.",
    price: 4.50,
    badge: "Seasonal",
    imageId: 29156078,  // ✓ elegant pastry at cafe
  },

  // ── Sandwiches ─────────────────────────────────────────────────────────
  {
    category: "Sandwiches",
    name: "Smoked Salmon & Cream Cheese Bagel",
    description: "Everything bagel with house-whipped cream cheese, wild smoked salmon, capers, and thin-sliced red onion.",
    price: 13.50,
    badge: "Popular",
    imageId: 3957501,   // ✓ cream cheese and smoked salmon bagel
  },
  {
    category: "Sandwiches",
    name: "Avocado & Soft Egg Tartine",
    description: "Thick sourdough toast with smashed avocado, a jammy soft-boiled egg, chili flake, and microgreens.",
    price: 12.00,
    badge: "House Favorite",
    imageId: 31126255,  // ✓ avocado toast with lemon
    featured: true,
  },
  {
    category: "Sandwiches",
    name: "Turkey & Brie Pressed",
    description: "Thinly sliced turkey and triple-crème brie pressed with whole-grain mustard and sliced green apple on levain.",
    price: 13.00,
    badge: "Popular",
    imageId: 17498978,  // ✓ baguette sandwich
  },
  {
    category: "Sandwiches",
    name: "Caprese Ciabatta",
    description: "Fresh mozzarella, ripe heirloom tomato, and fresh basil with a basil pesto and balsamic glaze on ciabatta.",
    price: 11.50,
    imageId: 30925490,  // ✓ caprese sandwich on ciabatta with mozzarella, tomato, lettuce
  },
  {
    category: "Sandwiches",
    name: "Prosciutto & Fig Flatbread",
    description: "House flatbread with fig jam, thinly sliced prosciutto di Parma, arugula, and shaved Parmigiano.",
    price: 14.00,
    badge: "House Favorite",
    imageId: 3616956,   // ✓ savory food on wooden board
  },
  {
    category: "Sandwiches",
    name: "Grilled Cheese & Tomato Soup",
    description: "Three-cheese blend on thick pullman bread griddled in butter — served with a small cup of roasted tomato soup.",
    price: 12.00,
    badge: "Popular",
    imageId: 33706245,  // ✓ grilled cheese sandwich with tomato soup
  },
  {
    category: "Sandwiches",
    name: "Roasted Veggie Wrap",
    description: "Seasonal roasted vegetables with herbed goat cheese, baby spinach, and lemon tahini in a whole wheat wrap.",
    price: 11.00,
    badge: "New",
    imageId: 1640777,   // ✓ roasted mixed vegetables with quinoa
  },
  {
    category: "Sandwiches",
    name: "Egg & Aged Cheddar Croissant",
    description: "A fluffy folded egg and aged white cheddar tucked into a warm butter croissant with chives.",
    price: 10.50,
    badge: "Popular",
    imageId: 4397295,   // ✓ toast with poached egg and microgreens on ceramic plate
  },
  {
    category: "Sandwiches",
    name: "BLT on Sourdough",
    description: "Thick-cut applewood smoked bacon, heirloom tomato, butter lettuce, and lemon aioli on toasted sourdough.",
    price: 12.50,
    imageId: 4109507,   // ✓ breakfast plate with bacon, tomato, and greens
  },
  {
    category: "Sandwiches",
    name: "Mushroom & Gruyère Melt",
    description: "Sautéed wild mushrooms with caramelized onion and melted Gruyère on rye — pressed until golden.",
    price: 12.00,
    badge: "House Favorite",
    imageId: 13427800,  // ✓ toasted bread with mushrooms and melted cheese
  },
];
