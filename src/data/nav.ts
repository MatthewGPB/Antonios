/** Shared navigation — used by Header and Footer so links never drift. */
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Catering', href: '/catering' },
  { label: 'Subs & Sandwiches', href: '/subs-and-sandwiches' },
  { label: 'Our Sausage', href: '/our-sausage' },
  { label: 'Prepared Meals', href: '/prepared-meals' },
  {
    label: 'Bakery',
    href: '/bakery',
    children: [
      { label: "Izzy's Bakery", href: '/bakery' },
      { label: 'Custom Cakes', href: '/bakery/cakes' },
      { label: 'Pastries & Desserts', href: '/bakery/pastries-and-desserts' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
