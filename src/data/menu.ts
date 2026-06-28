/**
 * Menu data — sourced from Antonio's live GetSauce ordering menu.
 * Edit here and it updates the relevant pages automatically.
 * Bakery items (sourdough, breakfast, desserts) are Izzy's in-house items.
 */

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  tag?: 'Signature' | 'House-made' | 'Popular' | 'Seasonal';
}

export interface MenuSection {
  title: string;
  note?: string;
  items: MenuItem[];
}

/* ===================== ANTONIO'S DELI MENU ===================== */

/* ---- Lasagnas (XL, family-sized) ---- */
const lasagnas: MenuSection = {
  title: 'Famous Lasagnas',
  note: 'XL servings of our in-house lasagna, made fresh.',
  items: [
    { name: 'Meat Lasagna', description: 'Our famous in-house lasagna made with beef and pork', price: '$17.99', tag: 'Signature' },
    { name: 'Cheese Lasagna', description: 'Layers of pasta with a blend of melted cheeses and rich tomato sauce', price: '$17.99' },
    { name: 'Spinach Lasagna', description: 'XL serving made fresh with all fresh ingredients', price: '$17.99' },
    { name: 'Veggie Lasagna', description: 'Made with fresh seasonal sautéed vegetables', price: '$17.99' },
  ],
};

/* ---- Hot Lunches & Dinners ---- */
const hotDinners: MenuSection = {
  title: 'Hot Lunches & Dinners',
  note: 'Cooked fresh daily.',
  items: [
    { name: 'Chicken Fettuccine Alfredo', description: 'Grilled chicken breast and fettuccine in a homemade creamy Alfredo, parmesan', price: '$16.99', tag: 'Popular' },
    { name: 'Chicken Parm Dinner', description: 'Breaded chicken breast, marinara, melted cheese, side of pasta', price: '$15.99' },
    { name: 'Eggplant Parm Dinner', description: 'Breaded eggplant, marinara and cheese, side of pasta', price: '$15.99' },
    { name: 'Baked Shells', description: 'Shell pasta filled with ricotta, topped with marinara and baked cheeses', price: '$15.99' },
    { name: 'Eggplant Towers', description: 'Layered eggplant with ricotta and herbs, balsamic reduction', price: '$10.99' },
    { name: 'Penne alla Vodka', description: 'Penne in a creamy tomato-vodka sauce, parmesan', price: '$12.99' },
    { name: 'Sautéed Sausage, Peppers & Onions', description: 'House sausage with bell peppers and onions', price: '$12.99', tag: 'House-made' },
    { name: 'Spaghetti & Meatballs', description: 'Classic spaghetti and meatballs in homemade marinara', price: '$15.99' },
    { name: 'Spaghetti & Sausage', description: 'Spaghetti with Italian sausage links in tomato sauce', price: '$13.99' },
    { name: 'Cheese Ravioli in Marinara', description: 'Cheese-filled ravioli with house marinara', price: '$13.99' },
    { name: 'Meat Ravioli in Marinara', description: 'Seasoned beef ravioli with marinara', price: '$14.99' },
    { name: 'Small Spaghetti with Marinara', description: 'Spaghetti with homemade marinara', price: '$9.99' },
  ],
};

/* ---- Soups ---- */
const soups: MenuSection = {
  title: 'Soups',
  items: [
    { name: 'Chicken Noodle', description: 'Hearty chicken broth, tender noodles and vegetables', price: '$9.00' },
    { name: 'Chicken Tortilla', description: 'Seasoned broth, chicken, vegetables, crispy tortilla strips', price: '$9.00' },
  ],
};

/* ---- Salads ---- */
const salads: MenuSection = {
  title: 'Salads',
  note: 'Add grilled or breaded chicken to any salad.',
  items: [
    { name: 'The Sicilian', description: 'Grilled chicken, romaine, mozzarella, avocado, toasted almonds, tomatoes, balsamic', price: '$15.99' },
    { name: 'The Bari', description: 'Breaded chicken cutlet, romaine, tomatoes, Gaeta olives, red onion, roasted peppers, shaved Parmigiano, balsamic', price: '$15.99' },
    { name: 'The Tuscano (Antipasto)', description: 'Romaine, tomatoes, black olives, Genoa salami, provolone, artichokes, roasted peppers, Italian dressing', price: '$15.99', tag: 'Popular' },
    { name: 'The Campania', description: 'Romaine, walnuts, green apple, craisins, gorgonzola, raspberry-walnut vinaigrette', price: '$14.95' },
    { name: 'Trio Salad', description: 'Egg, chicken and tuna on a house salad', price: '$14.95' },
    { name: 'The Milano', description: 'Mixed greens, sliced pears, gorgonzola, toasted pecans, honey mustard', price: '$13.99' },
    { name: 'Chef Salad', description: 'Mixed greens, ham, turkey, tomatoes, cucumbers, hard-boiled egg', price: '$13.99' },
    { name: 'The Alitalia (Caprese)', description: 'Romaine, tomatoes, fresh mozzarella, basil, oil and balsamic', price: '$12.99' },
    { name: 'Greek Salad', description: 'Lettuce, tomatoes, cucumbers, red onions, black olives, feta', price: '$11.99' },
    { name: 'Blue Cheese & Blueberry', description: 'Lettuce, cherry tomatoes, cucumber, red onions, blueberries, blue cheese', price: '$11.99' },
    { name: 'Strawberry & Feta', description: 'Spinach, strawberries, feta, cherry tomatoes, red onion, cucumber', price: '$10.99' },
    { name: 'Wedge Salad', description: 'Iceberg, blue cheese, bacon, tomato, red onion', price: '$10.99' },
    { name: 'Large House Salad', description: 'Lettuce, cherry tomatoes, cucumbers, carrots, red onion', price: '$10.99' },
    { name: 'Large Caesar', description: 'Romaine, croutons, parmesan, Caesar dressing', price: '$11.99' },
    { name: 'Caesar Side Salad', price: '$6.99' },
    { name: 'Small House Salad', price: '$6.99' },
  ],
};

/* ---- Sides ---- */
const sides: MenuSection = {
  title: 'Sides & By the Pound',
  items: [
    { name: 'Meatballs', description: 'Savory meatballs in tomato sauce with melted cheese', price: '$8.99' },
    { name: 'Chicken Salad', description: 'Freshly tossed greens with seasoned chicken', price: '$8.99' },
    { name: 'Cranberry & Pecan Chicken Salad', price: '$8.99' },
    { name: 'Egg Salad', description: '1/2 pound, boiled egg with light mayo', price: '$8.99' },
    { name: 'Loaded Egg Salad', description: 'Boiled eggs, mayo, herbs and spices', price: '$8.99' },
    { name: 'Tuna Scoop', description: '1/2 pound tuna with light mayo and celery', price: '$8.99' },
    { name: 'Tuna Mac', description: 'Tuna, macaroni, celery, peas, mayo', price: '$8.99' },
    { name: 'Roasted Red Peppers', description: 'With garlic, olive oil and Italian herbs', price: '$6.99' },
    { name: 'Artichokes', description: 'Baby artichokes with Parmigiano-Reggiano, lemon and arugula', price: '$6.99' },
    { name: 'Mayo Macaroni Salad', price: '$4.99' },
    { name: 'Italian Veggie Macaroni Salad', description: 'Broccoli, peppers, olives, cheese, Italian dressing', price: '$4.99' },
    { name: 'Orzo Salad', price: '$4.99' },
    { name: 'Potato Salad', price: '$4.99' },
    { name: 'Coleslaw', price: '$4.99' },
    { name: 'Sliced Vine-Ripe Tomatoes', price: '$4.99' },
    { name: 'Side Salad', price: '$5.99' },
    { name: 'XL Ciabatta Loaf', description: 'Fresh daily-baked bread', price: '$13.00' },
    { name: 'Large Baguette', price: '$8.00' },
    { name: '1/2 Ciabatta Bread', price: '$8.00' },
    { name: 'Small Baguette', price: '$4.00' },
    { name: 'Chips (sea salt, BBQ, sour cream & onion, jalapeño)', price: '$4.00' },
  ],
};

/* ---- Kids ---- */
const kids: MenuSection = {
  title: 'Kids Menu',
  items: [
    { name: 'Meatball & Spaghetti', description: 'Spaghetti and meatballs in marinara, parmesan', price: '$9.99' },
    { name: 'The Marcello', description: 'Lightly breaded chicken cutlet, mozzarella, rustic roll', price: '$9.99' },
    { name: 'The Giovanni', description: 'Fresh mozzarella, tomato and basil, rustic roll', price: '$8.99' },
    { name: 'Chicken Strips', description: 'With chips', price: '$8.99' },
    { name: 'Grilled Chicken Cutlets', description: 'With chips', price: '$8.99' },
    { name: 'Grilled Cheese', price: '$8.99' },
    { name: 'Turkey Little', description: 'Turkey and American cheese on a kaiser roll', price: '$8.99' },
  ],
};

/* ---- Desserts (available to order — confirm with Izzy's which are in-house) ---- */
const desserts: MenuSection = {
  title: 'Desserts',
  items: [
    { name: 'Large Cannoli', description: 'Crispy shell filled with sweet ricotta cream, chocolate chips', price: '$6.99', tag: 'Popular' },
    { name: 'Large Chocolate-Dipped Cannoli', description: 'Chocolate-dipped shell, sweet ricotta cream, chocolate chips', price: '$6.99' },
    { name: '3 Mini Cannolis', description: 'Crispy shells, sweet ricotta, chocolate chips', price: '$9.00' },
    { name: 'Tiramisu', description: 'Espresso-soaked ladyfingers, mascarpone, cocoa', price: '$9.00' },
    { name: 'Chocolate Mousse', description: 'Rich and creamy chocolate', price: '$9.00' },
    { name: '2 Eclairs', description: 'Choux pastry, cream filling, chocolate glaze', price: '$8.00' },
    { name: 'Coconut Cream Cake', description: 'Moist cake, coconut frosting, shredded coconut', price: '$9.99' },
    { name: '3-Layer Carrot Cake', description: 'Cream cheese frosting, chopped nuts', price: '$9.99' },
    { name: 'Jr. NY Cheesecake', description: 'Rich, creamy New York cheesecake', price: '$9.99' },
    { name: 'Gluten-Free Chocolate Cake', description: 'Rich and dense, gluten-free', price: '$9.99' },
    { name: 'Three-Layer Rainbow Cake', description: 'Sponge layers, chocolate drizzle and sprinkles', price: '$9.00' },
    { name: 'Rainbow Cookies', description: 'Tri-layered almond cookies in rich chocolate', price: '$9.00' },
    { name: 'Mixed Italian Cookies', description: 'Freshly baked assortment', price: '$6.99' },
    { name: 'Chocolate Fudge Brownie (4x4)', description: 'Rich chocolate fudge brownie', price: '$6.00' },
  ],
};

/* ---- Drinks ---- */
const drinks: MenuSection = {
  title: 'Drinks',
  items: [
    { name: 'Dr. Brown’s Cream Soda', price: '$4.00' },
    { name: 'Dr. Brown’s Diet Cream Soda', price: '$4.00' },
    { name: 'Dr. Brown’s Root Beer', price: '$4.00' },
    { name: 'Dr. Brown’s Diet Black Cherry', price: '$4.00' },
    { name: 'Zephyrhills Water', price: '$3.99' },
  ],
};

/** Full deli menu shown on /menu */
export const deliMenu: MenuSection[] = [lasagnas, hotDinners, soups, salads, sides, kids, desserts, drinks];

/** Take-home family dinners shown on /prepared-meals */
export const preparedMeals: MenuSection[] = [lasagnas, hotDinners];

/* ===================== SUBS, SANDWICHES & PANINIS ===================== */

const hotSubs: MenuSection = {
  title: 'Hot Subs & Melts',
  items: [
    { name: 'Il Antonio', description: 'Our famous homemade sausage (mild or spicy), peppers, onions, marinara', price: '$14.99', tag: 'House-made' },
    { name: 'Chicken Parm Sub', description: 'Breaded chicken, marinara, provolone, parmesan, toasted roll', price: '$14.99' },
    { name: 'Eggplant Parm Sub', description: 'Layered eggplant in marinara, melted parmesan', price: '$14.99' },
    { name: 'The Ultimate Melt', description: 'Chicken or eggplant, homemade sauce, imported provolone (also as a panini)', price: '$19.99' },
    { name: 'Bella Melt', description: 'Chicken, eggplant or pepperoni, roasted red peppers, hot capicola, provolone, blue cheese', price: '$18.49' },
    { name: 'Hot Roast Beef', description: 'Roast beef, provolone (onions and mushrooms optional)', price: '$13.95' },
    { name: 'Meatball Sub', description: 'Meatballs, cheese and marinara', price: '$13.95' },
    { name: 'Grilled Chicken Teriyaki Sub', description: 'Teriyaki chicken, mayo, lettuce, tomato, fresh-baked roll', price: '$13.99' },
    { name: 'Tuna Melt', description: 'Tuna salad, melted cheese, fresh tomato', price: '$13.95' },
    { name: 'Bacon, Egg & Cheese', description: 'Scrambled eggs, crispy bacon, melted cheese on a soft roll', price: '$12.95' },
  ],
};

const coldSubs: MenuSection = {
  title: 'Cold Subs, Clubs & Wraps',
  items: [
    { name: 'Combo Italiano Sub', description: 'Ham, Genoa, capicola, mortadella, provolone, romaine, tomato, onion, banana peppers, oregano', price: '$14.99', tag: 'Signature' },
    { name: 'Italian Club', description: 'Imported prosciutto, fresh mozzarella, sweet red peppers, balsamic, olive oil, basil', price: '$14.99', tag: 'Signature' },
    { name: 'Turkey Club', description: 'Oven-roasted turkey, smoked bacon, romaine, tomato, mayo', price: '$14.99' },
    { name: 'Beach Club', description: 'Turkey, ham, bacon, lettuce, tomato, mayo on a soft roll', price: '$14.99' },
    { name: 'Cranberry-Walnut Chicken Salad', description: 'On soft white, whole wheat, Italian bread or a wrap', price: '$13.99' },
    { name: 'Classic BLT', description: 'Crispy bacon, lettuce, tomato, mayo (also as a panini)', price: '$13.99' },
    { name: 'Turkey Reuben', description: 'Sliced turkey, Swiss, sauerkraut, Thousand Island, rye', price: '$13.99' },
    { name: 'Ham & Swiss', description: 'Ham, Swiss, lettuce, pickles, fresh-baked roll', price: '$13.99' },
    { name: 'Sliced Cold Roast Beef Sub', description: 'Roast beef, lettuce, tomato, choice of cheese', price: '$13.95' },
    { name: 'Chicken Salad Sandwich', description: 'On soft white, whole wheat, Italian bread or a wrap', price: '$12.99' },
    { name: 'Tuna Salad Sandwich', description: 'On soft white, whole wheat, Italian bread or a wrap', price: '$12.99' },
    { name: 'Chicken Caesar Wrap', description: 'Chicken and romaine in creamy Caesar', price: '$12.99' },
    { name: 'Veggie Wrap', description: 'Grilled peppers, onions, mushrooms, broccoli, cheese, lettuce, tomato, mayo', price: '$12.99' },
    { name: 'Egg Salad Sandwich', description: 'On soft white, whole wheat, Italian bread or a wrap', price: '$11.99' },
    { name: 'Fresh Raw Veggie Sub', description: 'Choice of cheese and condiments', price: '$11.99' },
  ],
};

const paninis: MenuSection = {
  title: 'Paninis',
  note: 'Pressed on ciabatta. Most can be made as a sandwich on request.',
  items: [
    { name: 'The Anna', description: 'Breaded chicken cutlet, fresh mozzarella, tomato, red onion, herb mayo', price: '$15.99', tag: 'Popular' },
    { name: 'The Vito', description: 'Grilled chicken, roasted red peppers, basil pesto, fresh mozzarella, romaine', price: '$15.99', tag: 'Popular' },
    { name: 'The Domenico', description: 'Grilled chicken, black olive paste, grilled zucchini, fresh mozzarella', price: '$15.99' },
    { name: 'The Angelo', description: 'Imported prosciutto, mozzarella, mixed greens', price: '$15.99' },
    { name: 'Buffalo Blue Cheese', description: 'Fried chicken cutlet in buffalo sauce, blue cheese crumbles, lettuce, tomato, onion', price: '$15.99' },
    { name: 'Grilled Veggie', description: 'Seasonal grilled veggies, provolone, everything seasoning, balsamic glaze, pesto', price: '$15.99' },
    { name: 'The Gina', description: 'Grilled shrimp, herb aioli, mixed greens', price: '$16.99' },
    { name: 'The Vincenzo', description: 'House sausage (mild or hot), broccoli rabe, black olive paste', price: '$14.99', tag: 'House-made' },
    { name: 'The Rosanna', description: 'Fresh mozzarella, tomato, basil, olive oil', price: '$14.99' },
    { name: 'The Nicoletta', description: 'Grilled vegetables, fresh tomatoes, fresh mozzarella', price: '$13.99' },
    { name: 'Cuban', description: 'Roasted pork, ham, Swiss, pickles, mustard, pressed Cuban bread', price: '$13.99' },
  ],
};

/** Shown on /subs-and-sandwiches */
export const subsMenu: MenuSection[] = [coldSubs, hotSubs, paninis];

/* ===================== CATERING ===================== */
/* Catering is by quote — these trays mirror the menu. Pricing is a sample; we
   provide a final quote per event. Half tray serves ~8–10; full ~16–20. */
export const cateringTrays: MenuSection[] = [
  {
    title: 'Antipasto & Salads',
    note: 'Half (serves 8–10) / Full (serves 16–20). Sample pricing — request a quote.',
    items: [
      { name: 'Antipasto Tray (Tuscano-style)', description: 'Cured meats, provolone, artichokes, roasted peppers, olives, greens', price: '$59 / $109', tag: 'Signature' },
      { name: 'Caprese Platter', description: 'Fresh mozzarella, vine tomatoes, basil, olive oil', price: '$45 / $85' },
      { name: 'Caesar or Garden Salad', price: '$35 / $65' },
    ],
  },
  {
    title: 'Hot Entrées',
    note: 'Half (serves 8–10) / Full (serves 16–20).',
    items: [
      { name: 'Meat or Cheese Lasagna', price: '$65 / $120', tag: 'Signature' },
      { name: 'Chicken Parmigiana', price: '$65 / $120', tag: 'Popular' },
      { name: 'Eggplant Parmigiana', price: '$60 / $110' },
      { name: 'Baked Shells', price: '$50 / $95' },
      { name: 'Penne alla Vodka', price: '$45 / $85' },
      { name: 'Sausage, Peppers & Onions', price: '$55 / $100', tag: 'House-made' },
      { name: 'Spaghetti & Meatballs', price: '$50 / $95' },
    ],
  },
  {
    title: 'Heroes, Sides & Sweets',
    items: [
      { name: 'Sub Platter', description: 'Assorted Combo Italiano and Italian Club subs, cut and arranged', price: '$60 / $115' },
      { name: 'Side Trays', description: 'Macaroni salad, potato salad, coleslaw, roasted peppers', price: '$25 / $45' },
      { name: 'Dessert Tray', description: 'Assorted cookies, cannoli and brownies', price: '$36 / $66', tag: 'Popular' },
    ],
  },
];

/* ===================== IZZY'S BAKERY ===================== */

/* Sourdough & breads (/bakery/sourdough-and-breads) */
export const sourdoughAndBreads: MenuSection[] = [
  {
    title: 'Fresh Sourdough',
    note: 'Our pride and joy — naturally leavened and baked fresh. Limited quantities, so call ahead or come early.',
    items: [
      { name: 'Country Sourdough Loaf', description: 'Crackly crust, open crumb, slow-fermented', price: 'Mkt', tag: 'Signature' },
      { name: 'Sourdough Boule', description: 'Round artisan loaf, perfect for the table', price: 'Mkt', tag: 'Popular' },
      { name: 'Sliced Sandwich Sourdough', description: 'Soft-crust pan loaf, great for toast', price: 'Mkt' },
    ],
  },
  {
    title: 'Other Fresh Breads',
    note: 'Baked daily — also available at the counter.',
    items: [
      { name: 'XL Ciabatta Loaf', description: 'Fresh daily-baked bread', price: '$13.00' },
      { name: '1/2 Ciabatta Bread', price: '$8.00' },
      { name: 'Large Baguette', price: '$8.00' },
      { name: 'Small Baguette', price: '$4.00' },
    ],
  },
];

/* Breakfast & desserts (/bakery/breakfast-and-desserts) */
export const breakfastAndDesserts: MenuSection[] = [
  {
    title: 'Breakfast Favorites',
    note: 'Baked fresh every morning — best while they last. Prices to confirm.',
    items: [
      { name: 'Cinnamon Rolls', description: 'Warm, gooey, with icing', tag: 'Signature' },
      { name: 'Assorted Danishes', description: 'Cheese, fruit and almond' },
      { name: 'Scones', description: 'Buttery, rotating flavors' },
      { name: 'Muffins', description: 'Blueberry, chocolate chip and banana nut', tag: 'Popular' },
    ],
  },
  {
    title: 'Sweet Treats',
    note: 'A case full of good stuff — these are the regulars.',
    items: [
      { name: 'Black & White Cookies', description: 'The NY classic, soft and iced', tag: 'Signature' },
      { name: 'Fudge Brownies', description: 'Rich, dense and chocolatey' },
      { name: 'Fruit Turnovers', description: 'Flaky pastry, apple or cherry' },
      { name: 'Assorted Cookies', description: 'Ask about today’s batch' },
    ],
  },
];
