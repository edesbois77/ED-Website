export interface DetailedCaseStudy {
  id: string;
  title: string;
  client: string;
  logo: string;
  headlineResult: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    stats: Array<{
      value: string;
      label: string;
    }>;
    description: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  visuals: {
    hero: string;
    gallery?: string[];
  };
  tags: string[];
  duration: string;
  year: string;
}

export const detailedCaseStudies: DetailedCaseStudy[] = [
  {
    id: 'one-football',
    title: 'From Local Secret to Global Leader',
    client: 'OneFootball',
    logo: 'https://i.imgur.com/o8kSoHs.png',
    headlineResult: '176% revenue growth in 5 years',
    summary: 'Repositioned Britain as a must-visit destination for millennial travelers through data-driven content strategy.',
    challenge: 'In 2019, OneFootball was a strong local player but had little revenue or recognition outside Berlin, especially in the global B2B market. The commercial team was talented but inexperienced in media and unproven in executing large, multi-market partnership deals. OneFootball’s focus on product innovation hadn’t translated into commercial growth and the limited tech stack further restricted scale. The objective: Utilise ED to transform OneFootball from a Berlin-based tech brand into a global B2B leader, drive substantial international revenue and build a commercial culture ready to compete at the highest level.',
    solution: 'To build OneFootball’s B2B presence and credibility beyond Berlin, ED product solutions were utilised to craft a robust go-to-market strategy grounded in storytelling, relationship-building and targeted market expansion. We established dedicated commercial teams in key media hubs—London, Paris and Milan—to drive awareness and secure early flagship partnerships. By prioritizing large, multi-market deals, we accelerated trust within the industry, creating case studies that strengthened our global pitch. As momentum grew, we scaled the sales organisation, invested in upskilling teams and enhanced our ad tech stack to unlock programmatic revenue. Strategic acquisitions and partnerships further elevated our market position. This holistic, growth-driven approach transformed OneFootball into a trusted, market-leading B2B partner for brands, agencies and rights holders worldwide—fueling 176% revenue growth and tripling the size of our commercial team between 2019 and 2025.',
    results: {
      stats: [
        { value: '£26M', label: 'Incremental Bookings' },
        { value: '26%', label: 'YoY Growth in Engagement' },
        { value: '20M+', label: 'Travelers Reached' },
        { value: '340%', label: 'Social Media Growth' }
      ],
      description: 'The campaign exceeded all KPIs, delivering measurable impact across awareness, consideration, and conversion metrics. The content strategy became a template for future tourism campaigns.'
    },
    testimonial: {
      quote: "Edward's strategic leadership helped us break through with a fresh, data-driven approach—delivering results that exceeded expectations and fundamentally changed how we think about digital tourism marketing.",
      author: "Sarah Mitchell",
      role: "Director of Marketing, Visit Britain"
    },
    visuals: {
      hero: 'https://i.imgur.com/TNFQZFC.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://i.imgur.com/o8kSoHs.png?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    tags: ['Football', 'Sport', 'Revenue Growth', 'Product Development', 'B2B'],
    duration: '68 months',
    year: '2019-2025'
  },
  {
    id: 'nike-global-expansion',
    title: 'Digital Commerce Transformation',
    client: 'Nike',
    logo: 'https://i.imgur.com/L9LmtZv.png',
    headlineResult: '47% increase in digital revenue',
    summary: 'Transformed Nike\'s digital commerce strategy across European markets through innovative customer experience design.',
    challenge: 'Nike needed to accelerate digital transformation across European markets while maintaining brand consistency and improving customer experience. Legacy systems and fragmented customer journeys were limiting growth potential in the rapidly evolving e-commerce landscape.',
    solution: 'Developed and executed a comprehensive digital commerce strategy focusing on personalized customer experiences, streamlined checkout processes, and integrated omnichannel touchpoints. Led a team of 25+ specialists across UX, data analytics, and platform development to deliver a unified digital ecosystem.',
    results: {
      stats: [
        { value: '47%', label: 'Digital Revenue Increase' },
        { value: '62%', label: 'Conversion Rate Improvement' },
        { value: '€89M', label: 'Additional Annual Revenue' },
        { value: '35%', label: 'Customer Retention Growth' }
      ],
      description: 'The transformation positioned Nike as a leader in digital commerce innovation, with the new platform becoming a benchmark for the industry.'
    },
    testimonial: {
      quote: "Edward brought strategic vision and execution excellence that transformed our entire digital approach. The results speak for themselves—this project became the foundation for our continued digital leadership.",
      author: "Marcus Johnson",
      role: "VP Digital Commerce, Nike Europe"
    },
    visuals: {
      hero: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    tags: ['E-commerce', 'Digital Transformation', 'Customer Experience', 'Team Leadership'],
    duration: '24 months',
    year: '2018-2020'
  },
  {
    id: 'ea-sports-engagement',
    title: 'Gaming Community Revolution',
    client: 'Electronic Arts',
    logo: 'https://i.imgur.com/yZsCnOY.png',
    headlineResult: '185% increase in player engagement',
    summary: 'Revolutionized EA Sports community engagement through innovative content partnerships and data-driven insights.',
    challenge: 'EA Sports needed to deepen player engagement and extend game lifecycles in an increasingly competitive gaming market. Traditional marketing approaches weren\'t creating the authentic community connections needed to drive long-term player retention and in-game spending.',
    solution: 'Created an integrated community engagement strategy combining influencer partnerships, user-generated content campaigns, and real-time analytics. Developed a content ecosystem that celebrated player achievements and fostered genuine community connections across multiple gaming titles.',
    results: {
      stats: [
        { value: '185%', label: 'Player Engagement Increase' },
        { value: '92%', label: 'Community Growth' },
        { value: '$34M', label: 'Additional In-Game Revenue' },
        { value: '156%', label: 'Content Interaction Rate' }
      ],
      description: 'The strategy transformed EA Sports\' relationship with its community, creating sustainable engagement models that continue to drive growth across multiple game franchises.'
    },
    testimonial: {
      quote: "Edward understood our gaming community better than we did. His strategic approach to community building delivered engagement levels we never thought possible and created lasting value for our players and our business.",
      author: "Alex Chen",
      role: "Head of Community, EA Sports"
    },
    visuals: {
      hero: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    tags: ['Gaming', 'Community Building', 'Content Strategy', 'Analytics'],
    duration: '15 months',
    year: '2019-2020'
  },
  {
    id: 'coca-cola-campaign',
    title: 'Global Brand Activation Success',
    client: 'Coca-Cola',
    logo: 'https://i.imgur.com/vTuKtRs.png',
    headlineResult: '300% ROI on marketing investment',
    summary: 'This is dummy data with the main case study needing to be added.',
    challenge: 'Coca-Cola needed to revitalize brand engagement among Gen Z consumers while maintaining broad appeal across demographics. The challenge was creating authentic connections in an increasingly skeptical media landscape where traditional advertising approaches were losing effectiveness.',
    solution: 'Developed a multi-platform campaign strategy centered on authentic storytelling and community-driven content. Led creative development that balanced brand values with cultural relevance, implementing real-time optimization based on audience feedback and engagement data.',
    results: {
      stats: [
        { value: '300%', label: 'Marketing ROI' },
        { value: '78%', label: 'Brand Sentiment Increase' },
        { value: '45M', label: 'Global Impressions' },
        { value: '234%', label: 'Social Engagement Growth' }
      ],
      description: 'The campaign became Coca-Cola\'s most successful digital activation, setting new benchmarks for brand engagement and establishing frameworks used across future campaigns.'
    },
    testimonial: {
      quote: "Edward brought fresh thinking to our brand strategy that resonated across generations. The campaign results exceeded our highest expectations and proved that authentic storytelling still drives real business impact.",
      author: "Maria Rodriguez",
      role: "Global Marketing Director, Coca-Cola"
    },
    visuals: {
      hero: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    tags: ['Brand Strategy', 'Creative Direction', 'Global Campaigns', 'Cultural Marketing'],
    duration: '12 months',
    year: '2021-2022'
  },
  {
    id: 'microsoft-transformation',
    title: 'Enterprise Platform Innovation',
    client: 'Microsoft',
    logo: 'https://i.imgur.com/8Dt3rUC.png',
    headlineResult: '$127M new revenue stream created',
    summary: 'Led enterprise platform development that created new revenue opportunities and strengthened market position.',
    challenge: 'Microsoft needed to expand its enterprise offerings in the competitive cloud services market while differentiating from established players. The goal was to create new revenue streams that leveraged existing strengths while addressing unmet customer needs.',
    solution: 'Spearheaded the development of an integrated enterprise platform combining productivity tools, analytics, and collaboration features. Led cross-functional teams through agile development cycles, ensuring customer feedback drove product evolution and market fit.',
    results: {
      stats: [
        { value: '$127M', label: 'New Revenue Stream' },
        { value: '89%', label: 'Customer Satisfaction' },
        { value: '156%', label: 'Platform Adoption Rate' },
        { value: '67%', label: 'Market Share Growth' }
      ],
      description: 'The platform exceeded adoption targets and established Microsoft as a leader in integrated enterprise solutions, with the product becoming a cornerstone of their cloud strategy.'
    },
    testimonial: {
      quote: "Edward's leadership was instrumental in bringing our vision to life. His ability to balance technical innovation with commercial reality delivered a product that truly serves our enterprise customers.",
      author: "David Park",
      role: "VP Product Strategy, Microsoft"
    },
    visuals: {
      hero: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    tags: ['Enterprise Software', 'Product Development', 'Cloud Services', 'Innovation'],
    duration: '30 months',
    year: '2020-2023'
  },
  {
    id: 'apple-retail-experience',
    title: 'Retail Experience Transformation',
    client: 'Apple',
    logo: 'https://i.imgur.com/DeDjzd2.png',
    headlineResult: '43% increase in customer satisfaction',
    summary: 'Transformed Apple retail experience through innovative customer journey design and team development programs.',
    challenge: 'Apple needed to evolve its retail experience to meet changing customer expectations while maintaining the premium brand experience. The challenge was balancing efficiency with the personal touch that defines Apple\'s customer service philosophy.',
    solution: 'Redesigned the entire customer journey from entry to purchase, implementing new training programs and customer interaction protocols. Led the development of personalized service approaches that scaled across multiple retail locations while maintaining consistency.',
    results: {
      stats: [
        { value: '43%', label: 'Customer Satisfaction Increase' },
        { value: '28%', label: 'Sales Conversion Improvement' },
        { value: '91%', label: 'Employee Satisfaction' },
        { value: '52%', label: 'Customer Return Rate' }
      ],
      description: 'The transformation set new standards for retail excellence, with the new customer experience model being rolled out globally across Apple\'s retail network.'
    },
    testimonial: {
      quote: "Edward brought a deep understanding of both customer psychology and operational excellence. The retail experience transformation he led continues to drive customer loyalty and business results.",
      author: "Lisa Thompson",
      role: "VP Retail Operations, Apple"
    },
    visuals: {
      hero: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/1029739/pexels-photo-1029739.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1029740/pexels-photo-1029740.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    tags: ['Retail Strategy', 'Customer Experience', 'Team Development', 'Operations'],
    duration: '18 months',
    year: '2017-2019'
  }
];