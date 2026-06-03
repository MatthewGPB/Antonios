/**
 * Placeholder menu data — realistic on-brand items and prices so the owners
 * can edit easily. These are NOT real prices; confirm everything before launch.
 * Edit here and it updates the relevant pages automatically.
 */

export interface MenuItem {
  name: string;
  description?: string;
  price?: string; // string so we can show "Mkt" or "$9 / $14"
  tag?: 'Signature' | 'House-made' | 'Popular' | 'Seasonal';
}

export interface MenuSection {
  title: string;
  note?: string;
  items: MenuItem[];
}

/* ---------------- Deli counter, hot foods, salads (/menu) ---------------- */
export const deliMenu: MenuSection[] = [
  {
    title: 'From the Deli Counter',
    note: 'Sliced fresh to order. Sold by the pound.',
    items: [
      { name: 'Prosciutto di Parma', description: 'Aged 16 months, paper-thin', price: '$24.99/lb', tag: 'Signature' },
      { name: 'Genoa Salami', description: 'Classic, peppery, sliced to order', price: '$12.99/lb' },
      { name: 'Sopressata (hot or sweet)', description: 'Dry-cured Calabrian style', price: '$16.99/lb' },
      { name: 'Mortadella', description: 'With pistachio, the real Bologna', price: '$10.99/lb' },
      { name: 'Fresh Mozzarella', description: 'Pulled in-house daily', price: '$9.99/lb', tag: 'House-made' },
      { name: 'Imported Provolone', description: 'Sharp, aged 12 months', price: '$13.99/lb' },
      { name: 'Parmigiano-Reggiano', description: 'DOP, aged 24 months', price: '$21.99/lb' },
    ],
  },
  {
    title: 'Hot Foods',
    note: 'Made fresh daily — call ahead for trays.',
    items: [
      { name: 'Chicken Parmigiana', description: 'Hand-breaded cutlet, San Marzano sauce, mozzarella', price: '$13.99' },
      { name: 'Eggplant Rollatini', description: 'Ricotta-stuffed, baked in marinara', price: '$11.99' },
      { name: 'Penne alla Vodka', description: 'Creamy tomato, a touch of prosciutto', price: '$10.99', tag: 'Popular' },
      { name: 'Meatballs & Sunday Gravy', description: 'Three house meatballs in slow-simmered gravy', price: '$9.99', tag: 'House-made' },
      { name: 'Sausage & Peppers', description: 'House Italian sausage, sweet peppers, onions', price: '$11.99', tag: 'Signature' },
      { name: 'Baked Ziti', description: 'Ricotta, mozzarella, marinara', price: '$9.99' },
    ],
  },
  {
    title: 'Salads & Sides',
    items: [
      { name: 'Antipasto Salad', description: 'Cured meats, cheeses, olives, greens', price: '$9.99' },
      { name: 'Caprese', description: 'House mozzarella, tomato, basil, olive oil', price: '$8.99' },
      { name: 'Marinated Olives', description: 'Castelvetrano & Cerignola', price: '$7.99/lb' },
      { name: 'Roasted Peppers', description: 'In garlic & olive oil', price: '$8.99/lb' },
      { name: 'Pasta Salad', description: 'Tri-color, fresh vegetables, vinaigrette', price: '$6.99/lb' },
    ],
  },
];

/* ---------------- Subs & sandwiches (/subs-and-sandwiches) ---------------- */
export const subsMenu: MenuSection[] = [
  {
    title: 'Signature Subs',
    note: 'On fresh-baked Italian bread or a roll. Half / Whole.',
    items: [
      { name: 'The Antonio', description: 'Prosciutto, sopressata, capicola, fresh mozzarella, roasted peppers, balsamic', price: '$9 / $15', tag: 'Signature' },
      { name: 'Italian Combo', description: 'Genoa, ham, provolone, lettuce, tomato, oil & vinegar', price: '$8 / $13', tag: 'Popular' },
      { name: 'Chicken Cutlet', description: 'Breaded cutlet, fresh mozzarella, roasted peppers', price: '$8 / $13' },
      { name: 'Eggplant Parm Hero', description: 'Hand-breaded eggplant, marinara, mozzarella', price: '$8 / $12' },
      { name: 'Meatball Parm', description: 'House meatballs, Sunday gravy, mozzarella', price: '$8 / $12', tag: 'House-made' },
      { name: 'Sausage & Peppers Hero', description: 'House Italian sausage, sweet peppers, onions', price: '$8 / $13', tag: 'Signature' },
    ],
  },
  {
    title: 'Paninis',
    note: 'Pressed and served warm.',
    items: [
      { name: 'Caprese Panini', description: 'Fresh mozzarella, tomato, basil, pesto', price: '$9.50' },
      { name: 'Prosciutto & Fig', description: 'Prosciutto, fig jam, arugula, shaved parmigiano', price: '$10.50', tag: 'Popular' },
      { name: 'Chicken Pesto', description: 'Grilled chicken, pesto, provolone, roasted peppers', price: '$9.50' },
    ],
  },
];

/* ---------------- Prepared meals (/prepared-meals) ---------------- */
export const preparedMeals: MenuSection[] = [
  {
    title: 'Family Dinners to Go',
    note: 'Serves 4–6. Heat-and-serve. Order by 2pm for same-day pickup.',
    items: [
      { name: 'Lasagna Bolognese (tray)', description: 'Layered with bolognese, béchamel & parmigiano', price: '$34.99', tag: 'Popular' },
      { name: 'Chicken Parm Family Pack', description: 'Six cutlets, marinara, mozzarella, side of penne', price: '$39.99' },
      { name: 'Eggplant Rollatini Tray', description: 'Ricotta-stuffed, baked in marinara', price: '$32.99' },
      { name: 'Stuffed Shells Tray', description: 'Jumbo shells, ricotta, Sunday gravy', price: '$29.99' },
    ],
  },
  {
    title: 'Single & Double Portions',
    items: [
      { name: 'Penne alla Vodka', description: 'Single / Double', price: '$10.99 / $18.99' },
      { name: 'Chicken Marsala', description: 'Mushrooms, marsala, served with potatoes', price: '$13.99' },
      { name: 'Veal Piccata', description: 'Lemon, capers, white wine', price: '$16.99', tag: 'Seasonal' },
    ],
  },
];

/* ---------------- Catering trays (/catering) ---------------- */
export const cateringTrays: MenuSection[] = [
  {
    title: 'Antipasto & Salads',
    note: 'Half tray (serves 8–10) / Full tray (serves 16–20).',
    items: [
      { name: 'Grand Antipasto', description: 'Imported meats, cheeses, marinated vegetables, olives', price: '$59 / $109', tag: 'Signature' },
      { name: 'Caprese Platter', description: 'House mozzarella, vine tomatoes, basil, EVOO', price: '$45 / $85' },
      { name: 'Caesar or Garden Salad', price: '$35 / $65' },
    ],
  },
  {
    title: 'Hot Entrées',
    note: 'Half tray (serves 8–10) / Full tray (serves 16–20).',
    items: [
      { name: 'Chicken Parmigiana', price: '$65 / $120', tag: 'Popular' },
      { name: 'Penne alla Vodka', price: '$45 / $85' },
      { name: 'Sausage & Peppers', price: '$55 / $100', tag: 'Signature' },
      { name: 'Eggplant Rollatini', price: '$60 / $110' },
      { name: 'Baked Ziti', price: '$45 / $85' },
      { name: 'Meatballs in Sunday Gravy', price: '$50 / $95', tag: 'House-made' },
    ],
  },
  {
    title: 'Heroes & Extras',
    items: [
      { name: 'Sub Platter', description: 'Assorted signature subs, cut and arranged', price: '$60 / $115' },
      { name: 'Garlic Bread Trays', price: '$18 / $32' },
      { name: 'Cannoli Tray', description: 'Filled to order', price: '$36 / $66', tag: 'Popular' },
    ],
  },
];

/* ---------------- Izzy's bakery — cakes (/bakery/cakes) ---------------- */
export const cakes: MenuSection[] = [
  {
    title: 'Custom Cakes',
    note: 'Order 72 hours ahead. Pricing varies by size & design — inquire for a quote.',
    items: [
      { name: 'Italian Rum Cake', description: 'Sponge soaked in rum, custard & whipped cream', price: 'from $34', tag: 'Signature' },
      { name: 'Tiramisù Cake', description: 'Espresso-soaked layers, mascarpone cream', price: 'from $36', tag: 'Popular' },
      { name: 'Cannoli Cream Cake', description: 'Vanilla sponge, sweet ricotta, chocolate chips', price: 'from $38' },
      { name: 'Birthday Cake', description: 'Your colors & message, buttercream or whipped', price: 'from $30' },
      { name: 'Wedding Cakes', description: 'Tiered, tasting available by appointment', price: 'Inquire', tag: 'Seasonal' },
    ],
  },
];

/* -------- Izzy's bakery — pastries & desserts (/bakery/pastries...) -------- */
export const pastries: MenuSection[] = [
  {
    title: 'Pastries',
    items: [
      { name: 'Cannoli', description: 'Filled to order, classic or chocolate-dipped', price: '$3.50 ea', tag: 'Signature' },
      { name: 'Sfogliatelle', description: 'Flaky shell, citrus ricotta', price: '$3.95 ea' },
      { name: 'Lobster Tail (Aragosta)', description: 'Sfogliatelle filled with French cream', price: '$4.95 ea', tag: 'Popular' },
      { name: 'Tiramisù (individual)', price: '$5.50 ea' },
      { name: 'Napoleon', description: 'Puff pastry, vanilla custard', price: '$4.25 ea' },
    ],
  },
  {
    title: 'Cookies & Biscotti',
    note: 'Sold by the pound — perfect for trays.',
    items: [
      { name: 'Assorted Italian Cookies', price: '$13.99/lb', tag: 'Popular' },
      { name: 'Almond Biscotti', price: '$11.99/lb' },
      { name: 'Pignoli (pine nut)', price: '$18.99/lb' },
      { name: 'Rainbow Cookies', price: '$15.99/lb' },
    ],
  },
  {
    title: 'Fresh Breads',
    note: 'Baked throughout the day.',
    items: [
      { name: 'Italian Semolina Loaf', price: '$4.50' },
      { name: 'Ciabatta', price: '$4.95' },
      { name: 'Focaccia (rosemary & sea salt)', price: '$5.50', tag: 'House-made' },
    ],
  },
];
