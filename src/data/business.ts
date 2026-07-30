/**
 * SINGLE SOURCE OF TRUTH
 * ----------------------
 * Every business fact lives here and is imported everywhere (header, footer,
 * contact page, JSON-LD schema). Do NOT hardcode name / address / phone / email
 * anywhere else in the project — change it once here and it updates site-wide.
 *
 * Placeholders wrapped in {{DOUBLE_BRACES}} must be filled in before launch.
 * See README.md → "Before you go live" for the full checklist.
 */

export interface OpeningHour {
  /** Schema.org day name, e.g. "Monday" */
  day: string;
  /** Short label shown to humans, e.g. "Mon" */
  label: string;
  /** 24h open time for schema, e.g. "09:00". Null = closed. */
  opens: string | null;
  /** 24h close time for schema, e.g. "17:00". Null = closed. */
  closes: string | null;
}

export const business = {
  name: "Antonio's Italian Market",
  /** Short tagline used in the wordmark + meta */
  tagline: 'Italian Market & Deli',
  legalName: "Antonio's Italian Market",
  founded: 1998,

  // --- Name / Address / Phone (NAP) — must be byte-identical everywhere ---
  address: {
    street: '12214 US Highway 1',
    city: 'Juno Beach',
    region: 'FL',
    regionName: 'Florida',
    postalCode: '33408',
    country: 'US',
    full: '12214 US Highway 1, Juno Beach, FL 33408',
  },

  // CRITICAL: phoneHref digits MUST exactly match phoneDisplay.
  // The old site dialed the wrong number because these drifted apart.
  phoneDisplay: '(561) 625-6544',
  phoneHref: 'tel:+15616256544',

  email: 'basnight04@aol.com', // client-provided contact email

  // Lat/Lng for LocalBusiness geo + map. Approximate for 12214 US-1, Juno Beach.
  // Replace with the exact pin from Google Business Profile if you have it.
  // Exact coordinates from the business's Google Maps listing.
  geo: {
    latitude: 26.8552634,
    longitude: -80.0569413,
  },

  // Verified Google Maps link to the business (used for directions / view-on-map).
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Antonio%27s%20Italian%20Market%2C%2012214%20US%20Highway%201%2C%20Juno%20Beach%2C%20FL%2033408',

  // --- Hours --- {{CONFIRM_HOURS}} confirm against Google Business Profile
  hours: [
    { day: 'Monday', label: 'Mon', opens: '09:00', closes: '17:00' },
    { day: 'Tuesday', label: 'Tue', opens: '09:00', closes: '17:00' },
    { day: 'Wednesday', label: 'Wed', opens: '09:00', closes: '17:00' },
    { day: 'Thursday', label: 'Thu', opens: '09:00', closes: '17:00' },
    { day: 'Friday', label: 'Fri', opens: '09:00', closes: '17:00' },
    { day: 'Saturday', label: 'Sat', opens: '09:00', closes: '17:00' },
    { day: 'Sunday', label: 'Sun', opens: null, closes: null },
  ] as OpeningHour[],
  hoursSummary: 'Mon–Sat 9:00am–5:00pm · Sunday closed',

  priceRange: '$$',

  // --- Online ordering (food) ---
  orderUrl: 'https://www.getsauce.com/order/antonios-deli-and-meats/menu', // GetSauce online ordering

  // --- Social profiles (sameAs in schema) ---
  social: {
    instagram: 'https://instagram.com/antoniosmarketitaliano',
    // facebook: 'https://facebook.com/...', // add if/when available
  },

  /**
   * Izzy's Bakery operates from the same address as a distinct family brand.
   * It gets its own accent colors + its own Bakery JSON-LD on the bakery pages.
   */
  izzys: {
    name: "Izzy's Bakery",
    tagline: 'Fresh Italian Bakery',
    // Same physical address as Antonio's
    address: {
      full: '12214 US Highway 1, Juno Beach, FL 33408',
    },
    // {{IZZYS_PHONE_OR_SAME}} — if Izzy's shares Antonio's line, reuse it here.
    phoneDisplay: '(561) 625-6544',
    phoneHref: 'tel:+15616256544',
  },

  /**
   * Direct Floral — Taylor's flower business, operating from the same address
   * as a third distinct family brand. Gets its own page (/flowers), its own
   * accent treatment, and its own Florist JSON-LD for its Google Business Profile.
   */
  directFloral: {
    name: 'Direct Floral',
    tagline: 'Fresh Florida-Grown Flowers',
    // Same physical address as Antonio's
    address: {
      full: '12214 US Highway 1, Juno Beach, FL 33408',
    },
    // {{FLORAL_PHONE_OR_SAME}} — a distinct number (even a forwarding line)
    // strengthens the separate Google Business Profile. Shares Antonio's line for now.
    phoneDisplay: '(561) 625-6544',
    phoneHref: 'tel:+15616256544',
  },

  /**
   * Antonio's is a local distributor of The Upper Crust pies — order their
   * deep-dish pies through Antonio's. The Upper Crust is a separate, family-owned
   * Lake Worth bakery (a Palm Beach County icon since 1978); we resell/carry them.
   */
  upperCrust: {
    name: 'The Upper Crust',
    // Where customers place pie orders THROUGH Antonio's. Defaults to the GetSauce
    // order page; swap for a dedicated pie-order link if you set one up.
    orderUrl: 'https://www.getsauce.com/order/antonios-deli-and-meats/menu', // {{UPPER_CRUST_ORDER_URL}}
    website: 'https://theuppercrustpies.com',
  },
} as const;

export type Business = typeof business;

/** Derived helper: schema.org openingHoursSpecification array. */
export const openingHoursSpecification = business.hours
  .filter((h) => h.opens && h.closes)
  .map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.day,
    opens: h.opens,
    closes: h.closes,
  }));

/** Derived helper: the full mailing address string used by schema + footer. */
export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: business.address.street,
  addressLocality: business.address.city,
  addressRegion: business.address.region,
  postalCode: business.address.postalCode,
  addressCountry: business.address.country,
};

export default business;
