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
    slug: 'clinic-online-booking',
    title: 'A clinic website with online appointment booking',
    client: 'Rashmi Yadav, clinic founder',
    industry: 'Healthcare',
    services: ['website-design', 'website-development'],
    brief: 'Patients could only book by phone during clinic hours, so the front desk was overloaded and evening enquiries were lost.',
    did: ['Designed a calm, mobile first clinic website', 'Built online appointment booking', 'Set up enquiry and booking notifications'],
    result: 'Patients can now book online easily, saving time and boosting visits.',
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
  {
    slug: 'gym-website-meta-ads',
    title: 'Website and Meta ads for a neighbourhood gym',
    client: 'Deepak Sharma, gym owner',
    industry: 'Fitness',
    services: ['website-design', 'performance-marketing'],
    brief: 'The gym relied on walk ins and word of mouth and wanted a predictable flow of new member sign ups.',
    did: ['Designed a membership focused website', 'Ran Instagram and Facebook ad campaigns', 'Built a lead form for trial sessions'],
    result: 'Registrations doubled in three months. Their service is worth every rupee.',
  },
  {
    slug: 'travel-blog-seo',
    title: 'Blog design and SEO for a travel writer',
    client: 'Isha Kapoor, travel blogger',
    industry: 'Media',
    services: ['website-design', 'seo-services'],
    brief: 'A storyteller needed a blog that did justice to long form travel writing and reached more readers through search.',
    did: ['Designed a reading first blog layout', 'Set up on page SEO for every post', 'Built a content plan around search demand'],
    result: 'With SEO, my readers and traffic grew significantly in just months.',
  },
  {
    slug: 'brand-seo-growth',
    title: 'SEO strategy for a growing consumer brand',
    client: 'Priya Verma, marketing manager',
    industry: 'Consumer brand',
    services: ['seo-services', 'digital-marketing'],
    brief: 'The brand needed more of its leads to come from search, and better quality leads at that.',
    did: ['Keyword and competitor research', 'On page and content improvements', 'Monthly ranking and lead reporting'],
    result: 'Within months, our website ranked higher, traffic doubled, and the leads we got were more genuine.',
  },
];

export type Testimonial = { name: string; role: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    name: 'Rashmi Yadav',
    role: 'Clinic founder',
    quote: 'They built a website for my clinic with an appointment system. Patients can now book online easily, saving time and boosting visits.',
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
