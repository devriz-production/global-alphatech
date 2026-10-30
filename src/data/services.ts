// Every service the studio sells. Each entry becomes a page at /services/<slug>/,
// a row on the homepage index, a link in the menu and footer, and an option in the
// contact form. Add or edit services here only.

export type PracticeId = 'grow' | 'build' | 'brand';

export const practices: { id: PracticeId; name: string; line: string }[] = [
  { id: 'grow', name: 'Growth marketing', line: 'Get found, get chosen, get paid.' },
  { id: 'build', name: 'Websites and apps', line: 'Fast products your customers enjoy using.' },
  { id: 'brand', name: 'Brand and advisory', line: 'A sharper identity and clearer decisions.' },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  practice: PracticeId;
  title: string; // the page headline
  titleLight: string; // the second, lighter half of the headline
  summary: string;
  intro: string;
  outcomes: string[];
  deliverables: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  fit: string[];
  tools: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  metaTitle: string;
};

export const services: Service[] = [
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing Strategy',
    short: 'Digital marketing',
    practice: 'grow',
    title: 'One plan for every channel,',
    titleLight: 'tied to revenue.',
    summary:
      'A full funnel plan that decides where your budget goes, what each channel must deliver and how we will measure it.',
    intro:
      'Most businesses run ads on one platform, post on another and hope the website does the rest. We start with your numbers instead: what a customer is worth to you, what you can afford to pay to win one, and where those customers already spend their time. Then we build one plan across search, social, ads, email and your website, and run it as a single system.',
    outcomes: [
      'A monthly budget split by channel, with the reason for every rupee',
      'Targets for enquiries, cost per enquiry and revenue agreed before anything launches',
      'One report that shows what worked, what did not and what changes next month',
    ],
    deliverables: [
      { title: 'Audit', text: 'Your website, ad accounts, social profiles, Google Business Profile and three competitors, reviewed and scored.' },
      { title: 'Customer and offer research', text: 'Who buys, why they buy and what makes them choose you over the next option on the screen.' },
      { title: 'Channel plan', text: 'Which channels to use and in what order, with budgets, targets and a 90 day calendar.' },
      { title: 'Tracking setup', text: 'Google Analytics 4, Tag Manager, conversion and call tracking, so every enquiry has a known source.' },
      { title: 'Monthly execution', text: 'Our specialists run the plan across the channels you choose, as one coordinated team.' },
      { title: 'Review and reporting', text: 'A written report every month and a review call to agree the next month together.' },
    ],
    steps: [
      { title: 'Discover', text: 'Workshop, data access and a full audit of what you have today.' },
      { title: 'Plan', text: 'A written strategy with channels, budget, targets and timeline.' },
      { title: 'Launch', text: 'Tracking first, then campaigns, content and site changes go live.' },
      { title: 'Improve', text: 'Monthly reviews move budget towards whatever is winning.' },
    ],
    fit: [
      'Businesses spending on ads without knowing what they get back',
      'Founders who want one team instead of five separate vendors',
      'Brands entering a new city or launching a new product line',
    ],
    tools: ['Google Analytics 4', 'Google Tag Manager', 'Looker Studio', 'Google Ads', 'Meta Ads Manager', 'HubSpot', 'Zoho CRM'],
    faqs: [
      {
        q: 'Do I have to use every channel?',
        a: 'No. Most businesses do best with two or three channels done properly. The plan recommends where to start and what to add once those are paying for themselves.',
      },
      {
        q: 'Can you work alongside my existing team or agency?',
        a: 'Yes. We can own the strategy and reporting while your team or another partner handles part of the execution. We agree who does what in writing at the start.',
      },
    ],
    related: ['performance-marketing', 'seo-services', 'lead-generation'],
    metaTitle: 'Digital Marketing Strategy Agency in Delhi',
  },
  {
    slug: 'seo-services',
    name: 'SEO Services',
    short: 'SEO',
    practice: 'grow',
    title: 'Be the answer',
    titleLight: 'when customers search.',
    summary:
      'Technical, on page, local and content SEO that moves you up Google for the searches that bring paying customers.',
    intro:
      'Ranking for your own name is easy. Ranking for “skin clinic in Laxmi Nagar” or “CBSE school in East Delhi” is where the enquiries are. We find the searches your customers actually type, fix whatever stops Google from trusting your site, and publish the pages and articles that earn the top positions. Then we keep going, because SEO compounds month after month.',
    outcomes: [
      'More visits from people ready to buy, not just more visits',
      'Your Google Business Profile showing in the map results for nearby searches',
      'A fast site that Google can crawl, understand and rank with confidence',
    ],
    deliverables: [
      { title: 'Technical SEO', text: 'Speed, Core Web Vitals, indexing, structured data, redirects and crawl errors, found and fixed.' },
      { title: 'Keyword and intent map', text: 'The searches that matter, grouped by intent and matched to the page that should rank for each.' },
      { title: 'On page optimisation', text: 'Titles, headings, internal links and content rewritten for people first and search engines second.' },
      { title: 'Local SEO', text: 'Google Business Profile, local citations, a review plan and location pages for every area you serve.' },
      { title: 'Content', text: 'Landing pages and articles researched and written by people who understand your subject.' },
      { title: 'Authority building', text: 'Digital PR and relevant links from real websites. No paid link networks, ever.' },
    ],
    steps: [
      { title: 'Audit', text: 'A crawl of your site, your rankings today and the gap to your competitors.' },
      { title: 'Fix', text: 'Technical and on page problems resolved in order of impact.' },
      { title: 'Publish', text: 'New pages and articles shipped on a steady monthly schedule.' },
      { title: 'Earn', text: 'Authority built through PR, partnerships and genuinely useful content.' },
    ],
    fit: [
      'Clinics, schools, coaching centres and local services competing for nearby customers',
      'E-commerce stores that need category and product pages to rank',
      'B2B companies whose buyers research on Google before they call',
    ],
    tools: ['Google Search Console', 'Google Business Profile', 'Ahrefs', 'Semrush', 'Screaming Frog', 'PageSpeed Insights'],
    faqs: [
      {
        q: 'How long does SEO take to work?',
        a: 'Technical fixes can show results within weeks. Competitive rankings usually take several months of steady work. After the audit we give you a realistic timeline for your market and show progress every month.',
      },
      {
        q: 'Do you guarantee first page rankings?',
        a: 'No one can honestly guarantee a position on Google, and you should be wary of anyone who does. We commit to the work, the targets we agree with you and open reporting on both.',
      },
      {
        q: 'Will you write the content too?',
        a: 'Yes. Our writers research each topic and work from the keyword map. You review everything before it goes live.',
      },
    ],
    related: ['website-development', 'digital-marketing', 'performance-marketing'],
    metaTitle: 'SEO Services in Delhi: Local, Technical and Content SEO',
  },
  {
    slug: 'performance-marketing',
    name: 'Performance Marketing',
    short: 'Google and Meta ads',
    practice: 'grow',
    title: 'Ads that are judged',
    titleLight: 'on what they earn.',
    summary:
      'Google Ads and Meta Ads managed against cost per enquiry and return on ad spend, with creatives, landing pages and tracking handled in house.',
    intro:
      'Boosting posts is not a strategy. We build campaigns around a target you can bank: cost per enquiry, cost per sale or return on ad spend. Search campaigns catch people who are already looking. Meta and YouTube create demand. Retargeting brings back the people who left. Every week we cut what is not working and move the money to what is.',
    outcomes: [
      'A clear cost per enquiry or sale, tracked from click to closed deal',
      'Budget that moves every week towards the campaigns that perform',
      'Creatives tested in a planned sequence instead of guessed at',
    ],
    deliverables: [
      { title: 'Google Ads', text: 'Search, Performance Max, Shopping, YouTube and Demand Gen campaigns, built and managed.' },
      { title: 'Meta Ads', text: 'Facebook and Instagram campaigns, instant forms, Advantage+ and catalogue ads.' },
      { title: 'Ad creatives', text: 'Static, carousel, reels and short video ads produced by our own design team.' },
      { title: 'Landing pages', text: 'Fast, single purpose pages designed to turn ad clicks into enquiries.' },
      { title: 'Conversion tracking', text: 'Pixels, Conversions API and offline conversions from your CRM, so platforms learn from real sales.' },
      { title: 'Weekly optimisation', text: 'Bids, budgets, search terms, audiences and creative tests reviewed every week.' },
    ],
    steps: [
      { title: 'Account audit', text: 'What has been spent, what it returned and where money leaked.' },
      { title: 'Build', text: 'Tracking, campaign structure, creatives and landing pages.' },
      { title: 'Launch and learn', text: 'Controlled budgets while the platforms find your buyers.' },
      { title: 'Scale', text: 'More budget behind proven campaigns, new tests alongside.' },
    ],
    fit: [
      'Businesses that need enquiries this month, not next year',
      'E-commerce brands with clear margins and a product catalogue',
      'Anyone already spending on ads who cannot say what each rupee returned',
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'YouTube', 'LinkedIn Ads', 'Google Merchant Center', 'Google Analytics 4'],
    faqs: [
      {
        q: 'What budget do I need to start?',
        a: 'Ad spend is paid directly to Google or Meta and is separate from our fee. We recommend a starting budget after looking at your market and competition. We would rather start modestly and scale what works than spend big on day one.',
      },
      {
        q: 'Who owns the ad accounts?',
        a: 'You do. We work inside accounts registered to your business, so the data and history stay with you whatever happens.',
      },
      {
        q: 'How often will I hear from you?',
        a: 'You get a short weekly update and a full monthly report with a review call. If something important changes in between, we tell you straight away.',
      },
    ],
    related: ['lead-generation', 'social-media-marketing', 'website-design'],
    metaTitle: 'Google Ads and Meta Ads Agency in Delhi | Performance Marketing',
  },
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    short: 'Social media',
    practice: 'grow',
    title: 'Content people stop for,',
    titleLight: 'on a schedule you can trust.',
    summary:
      'Strategy, content production, reels, community management, and influencer and UGC campaigns for Instagram, Facebook, LinkedIn and YouTube.',
    intro:
      'Posting every day is not the goal. Being remembered is. We plan content around what your customers care about, produce it properly with scripting, shooting and editing, and publish on a calendar you approve in advance. Then we listen: replies, comments and messages are answered, and the numbers decide what we make next.',
    outcomes: [
      'A consistent look and voice across every platform',
      'Reels and posts planned a month ahead and approved by you',
      'Followers who turn into enquiries, tracked back to the content that won them',
    ],
    deliverables: [
      { title: 'Content strategy', text: 'Content pillars, formats, posting rhythm and a monthly calendar.' },
      { title: 'Design and copy', text: 'Posts, carousels and stories designed to your brand and written in your voice.' },
      { title: 'Reels and short video', text: 'Scripts, shoots and edits for reels, shorts and stories.' },
      { title: 'Influencer and UGC', text: 'Creator shortlists, briefs, agreements and performance tracking.' },
      { title: 'Community management', text: 'Comments and messages answered within agreed working hours.' },
      { title: 'Monthly insights', text: 'What grew, what fell flat and what we will make next because of it.' },
    ],
    steps: [
      { title: 'Brand audit', text: 'Your profiles, competitors and audience, reviewed honestly.' },
      { title: 'Plan', text: 'Pillars, formats and the first month of content for approval.' },
      { title: 'Produce', text: 'Shoots, design and edits, delivered in batches.' },
      { title: 'Publish and learn', text: 'Scheduling, replies and monthly learning loops.' },
    ],
    fit: [
      'Consumer brands, restaurants, salons, gyms and clinics',
      'Founders who want to build a personal brand on LinkedIn',
      'Businesses whose profiles have gone quiet or inconsistent',
    ],
    tools: ['Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Meta Business Suite', 'Adobe Creative Cloud', 'Figma'],
    faqs: [
      {
        q: 'Do you shoot content or use stock images?',
        a: 'We shoot. Real photographs and videos of your people, products and space perform better and build trust. Stock is used rarely and only where it fits.',
      },
      {
        q: 'Can you run paid promotion for the posts as well?',
        a: 'Yes. Organic content and paid social work best together, and our performance team can put budget behind the posts that prove themselves.',
      },
    ],
    related: ['performance-marketing', 'branding-graphic-design', 'email-marketing'],
    metaTitle: 'Social Media Marketing Agency in Delhi | Reels, Content and Influencers',
  },
  {
    slug: 'lead-generation',
    name: 'Lead Generation',
    short: 'Lead generation',
    practice: 'grow',
    title: 'A steady pipeline of enquiries',
    titleLight: 'your team can close.',
    summary:
      'Funnels that combine ads, landing pages, WhatsApp and CRM automation to bring in qualified leads and follow them up automatically.',
    intro:
      'A lead that waits two hours for a reply is often a lead lost to the competitor who answered first. We build the full chain: the offer, the ad, the landing page, the instant reply on WhatsApp or email, and the CRM that reminds your team to follow up. Then we measure lead quality, not just lead count, and feed the results back into the ads.',
    outcomes: [
      'Every enquiry captured in one place with its source attached',
      'Instant first replies, even at night and on Sundays',
      'Fewer junk leads, because the ad platforms learn which leads became customers',
    ],
    deliverables: [
      { title: 'Offer and funnel design', text: 'What you offer, to whom, and the steps from first click to booked call.' },
      { title: 'Landing pages and forms', text: 'Focused pages and forms that ask only what your team needs.' },
      { title: 'WhatsApp and calls', text: 'Click to WhatsApp, call tracking and missed call alerts wired into the funnel.' },
      { title: 'CRM setup', text: 'Zoho, HubSpot or a simple shared sheet to start, configured around your sales process.' },
      { title: 'Automated follow up', text: 'Instant replies, reminders and nurture messages across WhatsApp, email and SMS.' },
      { title: 'Lead quality loop', text: 'Sales outcomes sent back to Google and Meta so they find more buyers like your best ones.' },
    ],
    steps: [
      { title: 'Map', text: 'Your sales process, from enquiry to payment, written down.' },
      { title: 'Build', text: 'Pages, forms, automations and CRM, tested end to end.' },
      { title: 'Drive', text: 'Ads and content send the right traffic into the funnel.' },
      { title: 'Refine', text: 'Weekly checks on lead quality and conversion at every step.' },
    ],
    fit: [
      'Real estate, education, healthcare and financial services businesses',
      'B2B firms with a sales team that needs more qualified meetings',
      'Any business losing enquiries to slow follow up',
    ],
    tools: ['Google Ads', 'Meta Lead Ads', 'WhatsApp Business', 'Zoho CRM', 'HubSpot', 'Zapier', 'Make'],
    faqs: [
      {
        q: 'Do you sell lead lists?',
        a: 'No. Bought lists hurt your reputation and break privacy law. Every lead we generate has asked to hear from you.',
      },
      {
        q: 'What if I already have a CRM?',
        a: 'We connect to it. If it is not set up well, we help tidy it so your team actually uses it.',
      },
    ],
    related: ['performance-marketing', 'email-marketing', 'digital-transformation-consulting'],
    metaTitle: 'Lead Generation Services in Delhi | Funnels, WhatsApp and CRM',
  },
  {
    slug: 'email-marketing',
    name: 'Email Marketing',
    short: 'Email marketing',
    practice: 'grow',
    title: 'Turn one time buyers',
    titleLight: 'into regulars.',
    summary:
      'Lifecycle email and WhatsApp campaigns: welcome series, abandoned cart, re-engagement and newsletters that sell without spamming.',
    intro:
      'Winning a new customer costs far more than keeping one. Email and WhatsApp are the channels you own outright, with no algorithm deciding who sees your message. We set up the automated messages that should always be running, then add campaigns and newsletters that people genuinely open.',
    outcomes: [
      'Automated messages that earn while your team sleeps',
      'Emails that reach the inbox, not the spam folder',
      'Repeat purchases and referrals you can measure',
    ],
    deliverables: [
      { title: 'Deliverability', text: 'SPF, DKIM and DMARC set up, and your list cleaned of addresses that bounce.' },
      { title: 'Automated flows', text: 'Welcome, abandoned cart, post purchase, win back and review requests.' },
      { title: 'Campaigns and newsletters', text: 'A monthly calendar of offers, stories and useful updates.' },
      { title: 'Templates', text: 'Branded templates that look right on every phone and inbox.' },
      { title: 'Segmentation', text: 'Different messages for new, loyal and lapsed customers.' },
      { title: 'Reporting', text: 'Revenue per email, not just opens and clicks.' },
    ],
    steps: [
      { title: 'Audit', text: 'Your list, your platform and your sender reputation.' },
      { title: 'Set up', text: 'Authentication, templates and the core automated flows.' },
      { title: 'Campaign', text: 'A regular calendar of campaigns built around your year.' },
      { title: 'Optimise', text: 'Subject lines, timing and offers tested month by month.' },
    ],
    fit: [
      'E-commerce and D2C brands with repeat purchase potential',
      'Clinics, schools and gyms that want to stay in touch with members',
      'B2B companies with long sales cycles',
    ],
    tools: ['Klaviyo', 'Mailchimp', 'Brevo', 'Zoho Campaigns', 'WhatsApp Business Platform'],
    faqs: [
      {
        q: 'Is email marketing still worth it?',
        a: 'Yes. It is one of the few channels you fully own, and it costs very little to send. For businesses with repeat customers it is often the most profitable channel they have.',
      },
      {
        q: 'Can you send WhatsApp campaigns too?',
        a: 'Yes, through the official WhatsApp Business Platform with templates approved by Meta, and only to people who have opted in.',
      },
    ],
    related: ['lead-generation', 'social-media-marketing', 'digital-marketing'],
    metaTitle: 'Email and WhatsApp Marketing Services in Delhi',
  },
  {
    slug: 'website-design',
    name: 'Website Design',
    short: 'Website design',
    practice: 'build',
    title: 'Websites that look',
    titleLight: 'like you mean business.',
    summary:
      'UX research, wireframes and visual design for websites and landing pages that are clear, quick to scan and built to convert.',
    intro:
      'Visitors decide in seconds whether to stay. Good design makes that decision easy: it tells them what you do, proves you are trustworthy and shows exactly what to do next. We design for your customer on a phone first, then scale up, and every page has one job it is designed to do.',
    outcomes: [
      'A site that explains what you do within the first screen',
      'Clear paths from every page to an enquiry, call or purchase',
      'A design system your team can extend without breaking it',
    ],
    deliverables: [
      { title: 'Discovery workshop', text: 'Goals, audiences, competitors and the content you already have.' },
      { title: 'Sitemap and user flows', text: 'The pages you need and the journey through them.' },
      { title: 'Wireframes', text: 'Layouts agreed in grey before any colour is added.' },
      { title: 'Visual design system', text: 'Typography, colour, components and imagery direction.' },
      { title: 'Mobile first layouts', text: 'Every page designed for phones, tablets and desktops.' },
      { title: 'Prototype and handoff', text: 'Clickable Figma prototypes and developer ready files.' },
    ],
    steps: [
      { title: 'Understand', text: 'Workshop, analytics review and competitor teardown.' },
      { title: 'Structure', text: 'Sitemap, flows and wireframes for key pages.' },
      { title: 'Design', text: 'Visual design, two rounds of feedback included.' },
      { title: 'Hand off', text: 'Prototype, design system and build support.' },
    ],
    fit: [
      'Businesses whose website no longer reflects the quality of their work',
      'Startups preparing to launch or raise funding',
      'Companies with traffic that does not turn into enquiries',
    ],
    tools: ['Figma', 'FigJam', 'Microsoft Clarity', 'Hotjar', 'Maze'],
    faqs: [
      {
        q: 'Do you design and build, or only design?',
        a: 'Both. Most clients have us design and develop together, which keeps the finished site faithful to the design. We can also hand files to your own developers.',
      },
      {
        q: 'How many revisions do I get?',
        a: 'Each quote states the rounds of feedback included, usually two per stage. Agreeing wireframes first keeps late changes to a minimum.',
      },
    ],
    related: ['website-development', 'branding-graphic-design', 'seo-services'],
    metaTitle: 'Website Design Company in Delhi | UX and UI Design',
  },
  {
    slug: 'website-development',
    name: 'Website Development',
    short: 'Website development',
    practice: 'build',
    title: 'Fast, secure websites',
    titleLight: 'your team can update.',
    summary:
      'WordPress, Shopify and custom coded websites built for speed, search and easy editing, with hosting and maintenance looked after.',
    intro:
      'A slow website loses visitors before it has said a word. We build on the platform that suits the job: WordPress for content heavy sites, Shopify for stores, and custom code where speed and flexibility matter most. Every site launches fast, secure, search ready and simple for your team to update.',
    outcomes: [
      'Pages that load quickly on an ordinary mobile connection',
      'A content system your team can use without calling a developer',
      'Payments, bookings, WhatsApp and CRM working together',
    ],
    deliverables: [
      { title: 'The right platform', text: 'WordPress, Shopify, Webflow or a custom build, chosen for your needs rather than our habits.' },
      { title: 'Performance', text: 'Core Web Vitals targets met, images optimised and code kept lean.' },
      { title: 'SEO foundations', text: 'Clean URLs, structured data, sitemaps and redirects from your old site.' },
      { title: 'Integrations', text: 'Razorpay and other payment gateways, booking systems, CRMs and WhatsApp.' },
      { title: 'Training', text: 'A recorded walkthrough so your team can edit pages and publish posts.' },
      { title: 'Care plans', text: 'Hosting, security updates, backups and small changes each month.' },
    ],
    steps: [
      { title: 'Plan', text: 'Platform choice, integrations and content migration plan.' },
      { title: 'Build', text: 'Development on a private staging site you can review.' },
      { title: 'Test', text: 'Devices, browsers, forms, speed and accessibility checks.' },
      { title: 'Launch', text: 'Go live with redirects, analytics and monitoring in place.' },
    ],
    fit: [
      'Clinics and schools that need bookings, forms or admin panels',
      'Shops moving from marketplaces to their own online store',
      'Businesses stuck on a slow, hard to edit website',
    ],
    tools: ['WordPress', 'Shopify', 'Webflow', 'Astro', 'Next.js', 'Razorpay', 'Cloudflare'],
    faqs: [
      {
        q: 'How long does a website take?',
        a: 'It depends on the number of pages and integrations. A focused business website takes a few weeks; larger stores and portals take longer. Your quote includes a dated timeline.',
      },
      {
        q: 'Will I be able to edit the website myself?',
        a: 'Yes. Every site comes with an editor your team can use and a recorded training session.',
      },
      {
        q: 'Do you offer hosting and maintenance?',
        a: 'Yes, through monthly care plans that cover hosting, updates, backups, security monitoring and small content changes.',
      },
    ],
    related: ['website-design', 'seo-services', 'app-development'],
    metaTitle: 'Website Development Company in Delhi | WordPress, Shopify and Custom',
  },
  {
    slug: 'app-development',
    name: 'App Development',
    short: 'App development',
    practice: 'build',
    title: 'Android and iOS apps',
    titleLight: 'people keep using.',
    summary:
      'Product planning, UX and development of Android, iOS and web apps, with reliable backends and admin panels.',
    intro:
      'Most apps are deleted within days of being downloaded. The ones that survive solve one problem well and feel effortless doing it. We help you decide what the first version must do, design it around real users, and build it on a stack that can grow, with an admin panel your team can run.',
    outcomes: [
      'A first version scoped tightly enough to launch, and launch well',
      'One codebase for Android and iOS where that makes sense',
      'Admin tools that let your team manage users, content and orders',
    ],
    deliverables: [
      { title: 'Product scoping', text: 'User stories, priorities and a clear definition of version one.' },
      { title: 'UX and UI design', text: 'Flows, wireframes and polished screens, tested with real users.' },
      { title: 'App development', text: 'Cross platform with Flutter or React Native, or native where needed.' },
      { title: 'Backend and admin panel', text: 'APIs, databases, authentication and a dashboard for your team.' },
      { title: 'Testing and launch', text: 'Device testing, Play Store and App Store submission handled for you.' },
      { title: 'Support and iteration', text: 'Monitoring, fixes and new features released on a steady cadence.' },
    ],
    steps: [
      { title: 'Scope', text: 'Workshops to define users, features and version one.' },
      { title: 'Design', text: 'Clickable prototype tested before development starts.' },
      { title: 'Build', text: 'Two week sprints with a working build at the end of each.' },
      { title: 'Launch and grow', text: 'Store release, analytics and an improvement roadmap.' },
    ],
    fit: [
      'Startups building their first product',
      'Clinics, schools and gyms that want booking or member apps',
      'Businesses replacing spreadsheets with a proper internal tool',
    ],
    tools: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Node.js', 'Firebase', 'AWS'],
    faqs: [
      {
        q: 'Do you build for both Android and iOS?',
        a: 'Yes. For most products we use a cross platform framework so one codebase serves both, which saves time and cost. We recommend native development when the app needs it.',
      },
      {
        q: 'Who owns the source code?',
        a: 'You do, once the project is paid for. Code lives in a repository under your account.',
      },
    ],
    related: ['website-development', 'website-design', 'digital-transformation-consulting'],
    metaTitle: 'App Development Company in Delhi | Android, iOS and Web Apps',
  },
  {
    slug: 'branding-graphic-design',
    name: 'Branding and Graphic Design',
    short: 'Branding and design',
    practice: 'brand',
    title: 'A brand people recognise',
    titleLight: 'before they read the name.',
    summary:
      'Brand strategy, logo and identity systems, guidelines, packaging, and the everyday creatives that keep it all consistent.',
    intro:
      'A brand is the feeling people have about you when you are not in the room. Good identity design makes that feeling deliberate. We start with positioning, then design a logo and visual system that works everywhere it needs to: on a phone screen, a shop sign, a box and a billboard. Then we keep your everyday creatives consistent with it.',
    outcomes: [
      'A clear position that sets you apart from competitors',
      'An identity that looks consistent across every touchpoint',
      'Guidelines that let anyone produce on brand work',
    ],
    deliverables: [
      { title: 'Brand strategy', text: 'Positioning, personality, messaging and tone of voice.' },
      { title: 'Logo and identity', text: 'Logo, colour, typography, graphic elements and imagery style.' },
      { title: 'Brand guidelines', text: 'A practical rulebook for your team, printers and partners.' },
      { title: 'Collateral', text: 'Brochures, company profiles, presentations, stationery and signage.' },
      { title: 'Packaging', text: 'Packaging and labels designed for the shelf and the screen.' },
      { title: 'Production studio', text: 'Product shoots, model shoots and motion graphics for launches.' },
    ],
    steps: [
      { title: 'Discover', text: 'Interviews, market scan and positioning options.' },
      { title: 'Explore', text: 'Two or three creative routes, presented in context.' },
      { title: 'Refine', text: 'One route developed into a complete identity.' },
      { title: 'Roll out', text: 'Guidelines, templates and launch assets.' },
    ],
    fit: [
      'New businesses that need to look established from day one',
      'Companies whose look has drifted after years of ad hoc design',
      'Brands launching a new product range or entering a new market',
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'After Effects', 'Figma'],
    faqs: [
      {
        q: 'Do I own the logo and files?',
        a: 'Yes. On final payment the full rights and the editable source files are yours.',
      },
      {
        q: 'Can you refresh our logo instead of replacing it?',
        a: 'Often that is the smarter choice. We will tell you honestly whether a refresh or a new identity serves you better.',
      },
    ],
    related: ['website-design', 'social-media-marketing', 'digital-marketing'],
    metaTitle: 'Branding Agency in Delhi | Logo, Identity and Graphic Design',
  },
  {
    slug: 'digital-transformation-consulting',
    name: 'Digital Transformation Consulting',
    short: 'Consulting',
    practice: 'brand',
    title: 'Clear digital decisions,',
    titleLight: 'made with people who have done it.',
    summary:
      'Roadmaps, tool selection, CRM and automation setup, and team training that move your business from manual work to digital systems.',
    intro:
      'Most businesses do not need more software. They need the right few tools, set up properly, and a team that uses them. We look at how work actually gets done today, find where time and money leak, and build a practical roadmap. Then we help implement it, from CRM to automation to training, so the change sticks.',
    outcomes: [
      'A prioritised roadmap with costs, owners and timelines',
      'Fewer manual tasks, spreadsheets and missed follow ups',
      'A team confident with the tools they have been given',
    ],
    deliverables: [
      { title: 'Digital assessment', text: 'How your sales, marketing and operations run today, mapped and scored.' },
      { title: 'Roadmap', text: 'A 12 month plan ranked by impact and effort.' },
      { title: 'Tool selection', text: 'Independent advice on CRMs, ERPs, website platforms and automation tools.' },
      { title: 'CRM and automation', text: 'Implementation of the chosen tools and the workflows between them.' },
      { title: 'Training', text: 'Hands on sessions and simple written guides for your team.' },
      { title: 'Ongoing advisory', text: 'A monthly session to keep priorities and progress on track.' },
    ],
    steps: [
      { title: 'Assess', text: 'Interviews, process mapping and a tools inventory.' },
      { title: 'Prioritise', text: 'Quick wins and bigger projects, ranked and costed.' },
      { title: 'Implement', text: 'Tools configured, data migrated and workflows automated.' },
      { title: 'Embed', text: 'Training, documentation and follow up reviews.' },
    ],
    fit: [
      'Owner led businesses that have outgrown spreadsheets and WhatsApp groups',
      'Teams preparing to scale to new cities or channels',
      'Businesses that bought software their team does not use',
    ],
    tools: ['Zoho One', 'HubSpot', 'Google Workspace', 'Microsoft 365', 'Zapier', 'Make', 'Notion'],
    faqs: [
      {
        q: 'Do you sell software?',
        a: 'No. Our advice is independent. We recommend what suits your business and budget, including free tools when they are enough.',
      },
      {
        q: 'Can you just do an assessment?',
        a: 'Yes. Many clients start with the assessment and roadmap alone, then decide what to implement and who should do it.',
      },
    ],
    related: ['lead-generation', 'app-development', 'digital-marketing'],
    metaTitle: 'Digital Transformation Consulting in Delhi | CRM and Automation',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const servicesIn = (practice: PracticeId) => services.filter((s) => s.practice === practice);
