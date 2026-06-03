/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Antonio's core palette
        forest: '#1f4d3a', // deep green
        wine: '#9c3b2e', // wine red
        cream: '#f6f4ee', // cream
        gold: '#bf9b3e', // warm gold
        ink: '#14241c', // near-black green-ink
        // Izzy's Bakery accents (bakery section only)
        berry: '#a14e63', // soft berry/rose
        caramel: '#c79a5b', // caramel
      },
      fontFamily: {
        // Characterful old-world display serif
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
        // Clean, readable body sans
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,36,28,0.06), 0 12px 32px -12px rgba(20,36,28,0.22)',
        lift: '0 24px 60px -24px rgba(20,36,28,0.45)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
