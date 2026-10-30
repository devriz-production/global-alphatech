// Ways to work with the studio. `from` is a starting price shown on the Pricing page.
// CONFIRM: leave it empty to show "Quote on request", or fill it in, for example '₹25,000 / month'.

export const models = [
  {
    id: 'project',
    name: 'Projects',
    from: '',
    line: 'Fixed scope, fixed price.',
    bestFor: 'Websites, apps, branding and one off campaigns.',
    includes: [
      'Discovery workshop and written scope',
      'Dated timeline with milestones',
      'Agreed rounds of feedback at each stage',
      'Launch support and handover training',
    ],
    services: ['website-design', 'website-development', 'app-development', 'branding-graphic-design'],
  },
  {
    id: 'retainer',
    name: 'Growth retainers',
    from: '',
    line: 'A monthly team, focused on results.',
    bestFor: 'SEO, Google and Meta ads, social media, email and lead generation.',
    includes: [
      'Strategy and targets agreed up front',
      'One account manager as your single contact',
      'Weekly updates and a monthly report',
      'Monthly review call to plan the next month',
    ],
    services: ['seo-services', 'performance-marketing', 'social-media-marketing', 'email-marketing', 'lead-generation', 'digital-marketing'],
    featured: true,
  },
  {
    id: 'advisory',
    name: 'Advisory',
    from: '',
    line: 'Senior thinking, when you need it.',
    bestFor: 'Audits, roadmaps, tool selection and team training.',
    includes: [
      'Assessment of your current setup',
      'Written findings and a prioritised roadmap',
      'Workshops and training for your team',
      'Optional monthly advisory sessions',
    ],
    services: ['digital-transformation-consulting', 'digital-marketing'],
  },
];

export const quoteContains = [
  'What we will do, and what we will not',
  'Deliverables and the timeline for each',
  'Our fee, kept separate from any ad spend',
  'Payment terms and notice period',
  'What we need from you to get started',
];

export const priceFactors = [
  { title: 'Scope', text: 'How many pages, channels, campaigns or features the work covers.' },
  { title: 'Competition', text: 'Crowded markets need more content, more testing and more care.' },
  { title: 'Speed', text: 'Tighter deadlines need more people working in parallel.' },
  { title: 'Production', text: 'Shoots, video and custom illustration add to the creative effort.' },
];
