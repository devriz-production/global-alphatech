// Company facts used across the site. Change a value here and every page updates.
// Anything marked CONFIRM is a sensible default that the company has not signed off yet;
// the full list is in README.md under "Facts to confirm".

export const site = {
  name: 'Global Alpha Tech',
  legalName: 'Global Alpha Tech Security Pvt. Ltd.',
  url: 'https://globalalphatech.com',
  tagline: 'Digital growth studio, Delhi',
  description:
    'Global Alpha Tech is a digital growth studio in Laxmi Nagar, Delhi. One team plans, builds and runs your website, apps, SEO, Google and Meta ads, social media and brand.',

  phone: '+91 77038 82098',
  phoneHref: 'tel:+917703882098',
  // CONFIRM: that this number is on WhatsApp. If not, set to '' and the WhatsApp buttons disappear.
  whatsapp: '917703882098',
  email: 'info@globalalphatech.com',

  address: {
    street: 'Plot No. 8, 3rd Floor, B-61/152, Gali No. 4, Guru Nanak Pura',
    locality: 'Laxmi Nagar',
    city: 'Delhi',
    region: 'Delhi',
    postalCode: '110092',
    country: 'IN',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+No.+8+3rd+Floor+B-61%2F152+Gali+No.+4+Guru+Nanak+Pura+Laxmi+Nagar+Delhi+110092',
  mapsEmbed: 'https://www.google.com/maps?q=Plot+No.+8,+3rd+Floor,+Guru+Nanak+Pura,+Laxmi+Nagar,+Delhi+110092&output=embed',

  // CONFIRM: office hours. Left empty, the line is hidden.
  hours: '',

  // Only real profiles. The old site linked Facebook, Pinterest and X to their home pages,
  // so they are left out until the company shares the actual profile addresses.
  social: [{ label: 'Instagram', href: 'https://www.instagram.com/gats.limited/', icon: 'instagram' }] as {
    label: string;
    href: string;
    icon: 'instagram' | 'linkedin' | 'facebook' | 'x' | 'youtube';
  }[],

  // Google Analytics 4 measurement ID, for example 'G-ABC123XYZ'. Empty means no analytics
  // script is loaded at all. If you add one, update the Cookies section of the privacy policy.
  gaId: '',

  // Badges such as Google Partner or Meta Business Partner. Add one only when the company
  // can show the certificate; the "Credentials" strip stays hidden while this is empty.
  credentials: [] as { label: string; detail: string }[],
};

export const whatsappLink = (text = 'Hello Global Alpha Tech, I would like to discuss a project.') =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : '';

export const addressLines = [
  site.address.street,
  `${site.address.locality}, ${site.address.city} ${site.address.postalCode}`,
];

export const nav = [
  { label: 'Services', href: '/services/' },
  { label: 'Work', href: '/work/' },
  { label: 'About', href: '/about/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Careers', href: '/careers/' },
];

// One label for the main call to action everywhere on the site.
export const cta = { label: 'Start a project', href: '/contact/' };
