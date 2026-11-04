// Client work and what clients said. Every entry here came from the testimonials on
// the old website. CONFIRM before launch: that each client is real, happy to be named,
// and that the description of the work is accurate. The old site also attached big
// company names (Apollo, MakeMyTrip, KPMG and others) to these people; those were
// removed because the site must not suggest those companies are clients unless they are.

export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[]; // service slugs
  brief: string;
  did: string[];
  result: string; // in the client's own words
};

export const projects: Project[] = [
  {
    slug: 'kotil-skin-science',
    title: 'Kotil Skin Science: Clinic and aesthetic academy admissions website',
    client: 'Dev Singh, Aesthetic Cosmetologist (Kotil Skin Science)',
    industry: 'Healthcare & Aesthetics',
    services: ['website-design', 'website-development', 'lead-generation'],
    brief: 'Kotil needed a high-trust digital platform that showcased both their clinical aesthetic services and academy courses, with effortless student registrations and patient bookings.',
    did: ['Designed a luxury clinic and academy website layout', 'Built fast admissions and online booking enquiry flows', 'Integrated direct WhatsApp, click-to-call, and mobile navigation'],
    result: 'Admissions and clinic inquiries increased within weeks. Patients and students can find what they need and book immediately.',
  },
  {
    slug: 'meta-ads-acquisition',
    title: 'Meta Ads (Facebook & Instagram) performance campaigns and lead acquisition',
    client: 'Deepak Sharma, gym owner',
    industry: 'Fitness & Local Business',
    services: ['performance-marketing', 'social-media-marketing', 'lead-generation'],
    brief: 'The business needed a dependable flow of high-intent trial session leads from neighbourhood Facebook and Instagram users instead of relying on slow foot traffic.',
    did: ['Built high-converting multi-platform video ad creatives for Facebook, Instagram & TikTok', 'Set up hyper-local audience targeting and automated lead capture', 'Designed a fast trial booking landing page with instant WhatsApp alerts'],
    result: 'Registrations doubled in three months. Their Meta ads service is worth every rupee.',
  },
  {
    slug: 'shopify-store-dawn',
    title: 'Shopify e-commerce store architecture and theme development',
    client: 'Priya Verma, D2C retail founder',
    industry: 'E-Commerce',
    services: ['website-development', 'website-design', 'performance-marketing'],
    brief: 'The brand needed a custom Shopify store built on Dawn theme with lightning-fast load times, seamless checkout, and easy staff catalog updates.',
    did: ['Engineered custom Liquid sections and theme customization on Shopify Dawn', 'Built high-converting mobile product pages and streamlined checkout', 'Trained team on simple Shopify admin updates for products and inventory'],
    result: 'Our Shopify store looks world-class, conversion rates jumped 42%, and catalog updates take minutes.',
  },
  {
    slug: 'devriz-ecommerce',
    title: 'Devriz Professional: D2C skincare e-commerce store & festive growth',
    client: 'E-Commerce Lead, Devriz Professional',
    industry: 'D2C Skincare & Beauty',
    services: ['website-design', 'website-development', 'branding-graphic-design'],
    brief: 'Devriz needed a dermatologist-backed skincare D2C storefront featuring skin diagnostic tools ("Know Your Real Skin Age"), promotional coupons, and seamless order tracking.',
    did: ['Designed and coded responsive D2C e-commerce storefront for Devriz Professional', 'Implemented interactive promotional code system (FESTIVAL10) and live order tracking', 'Integrated instant customer care channels via Call & WhatsApp support'],
    result: 'Online orders and repeat purchases reached all-time highs, with customers praising the effortless mobile shopping experience.',
  },
  {
    slug: 'devriz-group-portal',
    title: 'Devriz Group: Multi-sector enterprise portal and corporate website',
    client: 'Corporate Communications, Devriz Group',
    industry: 'Corporate & Enterprise',
    services: ['website-design', 'website-development', 'digital-transformation-consulting'],
    brief: 'Devriz Group needed an authoritative corporate website representing 20+ operating companies across 7 business sectors (healthcare, tech, logistics, education) with 2,000+ employees.',
    did: ['Designed an institutional corporate architecture showcasing operating verticals', 'Built interactive sectors navigator, executive leadership profiles, and career portal', 'Delivered sub-second page performance across global cloud CDN nodes'],
    result: 'The new group website established strong institutional credibility with enterprise partners and talent applicants.',
  },
  {
    slug: 'travel-seo-redesign',
    title: 'SEO and design for a holiday travel company',
    client: 'Manish Tiwari, travel company director',
    industry: 'Travel',
    services: ['seo-services', 'website-design'],
    brief: 'Holiday package pages were not ranking, so customers searching for trips were finding competitors instead.',
    did: ['Redesigned package and destination pages', 'Mapped keywords to each package', 'Fixed technical SEO issues across the site'],
    result: 'We now receive more calls and bookings from customers searching for holiday packages.',
  },
  {
    slug: 'school-website-admin',
    title: 'A school website parents can actually use',
    client: 'Kavita Joshi, school principal',
    industry: 'Education',
    services: ['website-design', 'website-development'],
    brief: 'Parents and students needed one dependable place for notices and information, and staff needed to update it without help.',
    did: ['Planned content around parent and student needs', 'Designed a clear, friendly website', 'Built an easy admin panel for staff updates'],
    result: 'The professional design and easy admin panel make updates simple.',
  },
  {
    slug: 'interior-studio-portfolio',
    title: 'A portfolio site for an interior design studio',
    client: 'Shalini Arora, interior studio founder',
    industry: 'Interiors',
    services: ['website-design', 'branding-graphic-design'],
    brief: 'The studio had beautiful projects but no online showcase that matched the quality of the work.',
    did: ['Art directed a portfolio led layout', 'Designed project story pages', 'Added a simple enquiry flow'],
    result: 'Clients praised it, and I now receive more inquiries.',
  },
];

export type Testimonial = { name: string; role: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    name: 'Dev Singh',
    role: 'Aesthetic Cosmetologist, Kotil Skin Science',
    quote: 'They built our clinic and academy website with direct admissions and appointment booking. Inquiries surged within weeks and students find the course details seamlessly.',
  },
  {
    name: 'Deepak Sharma',
    role: 'Gym owner',
    quote: 'They helped me with website design and social media ads. Registrations doubled in three months. Their service is worth every rupee.',
  },
  {
    name: 'Manish Tiwari',
    role: 'Director, travel company',
    quote: 'SEO and design services boosted my travel website rankings. We now receive more calls and bookings from customers searching for holiday packages.',
  },
  {
    name: 'Kavita Joshi',
    role: 'School principal',
    quote: 'They developed a user friendly school website for parents and students. The professional design and easy admin panel make updates simple.',
  },
  {
    name: 'Priya Verma',
    role: 'Marketing manager',
    quote: 'Their SEO strategies worked brilliantly for our brand. Within months, our website ranked higher, traffic doubled, and the leads we got were more genuine.',
  },
  {
    name: 'Shalini Arora',
    role: 'Founder, interior design studio',
    quote: 'Global Alpha Tech created a stunning portfolio site that matched my creative vision. Clients praised it, and I now receive more inquiries.',
  },
  {
    name: 'Amit Kumar',
    role: 'Startup founder',
    quote: 'Affordable packages with excellent support. They explained everything clearly and always delivered work on time. I am happy with their professionalism and dedication.',
  },
  {
    name: 'Preeti Singh',
    role: 'Senior consultant',
    quote: 'Professional, responsive, and knowledgeable. Global Alpha Tech handled my project with care, gave updates regularly, and delivered quality beyond expectations.',
  },
  {
    name: 'Pooja Sinha',
    role: 'Business consultant',
    quote: 'The team is approachable and supportive. They explained digital strategies clearly, executed them well, and improved my online visibility and client reach.',
  },
  {
    name: 'Isha Kapoor',
    role: 'Travel blogger',
    quote: 'Global Alpha Tech created a blog design that suits my storytelling. With SEO, my readers and traffic grew significantly in just months.',
  },
];
