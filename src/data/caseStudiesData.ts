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
    summary: 'How OneFootball utilised ED to become a household B2B name in the football industry by Scaling Teams, Building Strategic Partnerships and Driving Global Revenue Growth.',
    challenge: `In 2019, OneFootball was a strong local player but had little revenue or recognition outside Berlin, especially in the global B2B market. The commercial team was talented but inexperienced in media and unproven in executing large, multi-market partnership deals. OneFootball\'s focus on product innovation hadn\'t translated into commercial growth and the limited tech stack further restricted scale.

The objective: Utilise ED to transform OneFootball from a Berlin-based tech brand into a global B2B leader, drive substantial international revenue and build a commercial culture ready to compete at the highest level.`,
    solution: `To build OneFootball\'s B2B presence and credibility beyond Berlin, ED product solutions were utilised to craft a robust go-to-market strategy grounded in storytelling, relationship-building and targeted market expansion. We established dedicated commercial teams in key media hubs: London, Paris and Milan to drive awareness and secure early flagship partnerships. By prioritising large, multi-market deals (media, content, sponsorship), we accelerated trust within the industry, creating case studies that strengthened our global pitch. 

As momentum grew, we scaled the sales organisation, invested in upskilling teams and enhanced our ad tech stack to unlock programmatic revenue. Strategic acquisitions and partnerships also further elevated our market position.

As momentum grew, we scaled the sales organisation, invested in upskilling teams and enhanced our ad tech stack to unlock programmatic revenue. Strategic acquisitions and partnerships also further elevated our market position.`,
    results: {
      stats: [
        { value: '176%', label: 'Revenue Growth' },
        { value: '78', label: 'Commercial People' },
        { value: '7', label: 'Local Sales Teams' },
        { value: '22', label: 'Award Nominations' }
      ],
      description: 'The holistic, growth-driven approach transformed OneFootball into a trusted, market-leading B2B partner for brands, agencies and rights holders worldwide, fueling 176% revenue growth and tripling the size of our commercial team between 2019 and 2025.'
    },
    testimonial: {
      quote: "Utilising ED's varied suite of products, it enabled OneFootball to transform their B2B awareness, improve the commercial standards, enter new markets and ultimately grow media revenues to an industry leading level.",
      author: "Michael Pennington",
      role: "CEO - Forza Football (previously SVP of International Sales at OneFootball)"
    },
    visuals: {
      hero: 'https://i.imgur.com/TNFQZFC.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://i.imgur.com/oVKdgOI.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://i.imgur.com/ipfRWyK.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    tags: ['Football', 'Sport', 'Revenue Growth', 'Product Development', 'B2B'],
    duration: '68 months',
    year: '2019-2025'
  },
  {
    id: 'coca-cola-fanrituals',
    title: 'Uniting Fans & Inspiring Rituals: Euro2024',
    client: 'Coca-Cola',
    logo: 'https://i.imgur.com/KYF8Mye.png',
    headlineResult: '3x Industry Award Nominations',
    summary: 'Elevated Coca-Cola Zero Sugar’s presence across Europe by embedding the brand into fans’ match-day rituals with talent-led, multi-channel digital engagement.',
    challenge: `Coca-Cola Zero Sugar and Essence Mediacom faced a critical challenge ahead of Euro2024: despite rapid growth, the brand was in fierce competition with rivals targeting young, sugar-conscious consumers through innovative, entertainment-led campaigns. The objective was clear, strengthen consumption and forge a deeper emotional connection with fans during Europe's biggest football moment. With millions of passionate fans engaging digitally and emotionally with Euro2024, Coca-Cola Zero Sugar needed to cut through the noise and embed itself in fans' match-day rituals.
    
    The goal was to partner with a platform capable of authentically reaching and engaging the most devoted football audiences across every participating nation, making Coca-Cola Zero Sugar the must-have companion for the ultimate fan experience.`,
    solution: `Coca-Cola and Essence Mediacom utilised ED's expertise (Creat-ED, Strategis-ED, Deliver-ED and Analys-ED) when selecting OneFootball as their campaign partner, unlocking direct access to Europe's largest football audience with 77 million monthly users. Together, we activated a 360° campaign across the entire OneFootball ecosystem blending media, social, editorial, product integrations, interactive quizzes and creative branded content.

At the heart of the campaign was talent-led storytelling: German international Toni Kroos shared his personal match day rituals, while Armando, our "Fan Rituals Coach" delivered humor and energy through engaging video clips. Mr Joel Beya explored the traditions that unite fans and the campaign spotlighted fan stories from the OneFootball community, all united by the rallying cry #TasteYouDeserve with Coca-Cola Zero Sugar.

By putting Coca-Cola Zero Sugar at the center of the Euro2024 fan experience, we transformed match-day rituals and made the brand a genuine companion for football lovers across multiple markets. The campaign didn't just cut through the noise, it drove record engagement, deepened emotional connection and established Coca-Cola Zero Sugar as the drink of choice for millions of passionate football fans during the tournament.`,
    results: {
      stats: [
        { value: '2x', label: 'Digital Revenue Increase' },
        { value: '62%', label: 'Conversion Rate Improvement' },
        { value: '€89M', label: 'Additional Annual Revenue' },
        { value: '#1', label: 'Largest media deal at OneFootball' }
      ],
      description: 'The transformation positioned Nike as a leader in digital commerce innovation, with the new platform becoming a benchmark for the industry.'
    },
    testimonial: {
      quote: "Edward brought strategic vision and execution excellence that transformed our entire digital approach. The results speak for themselves—this project became the foundation for our continued digital leadership.",
      author: "Marcus Johnson",
      role: "VP Digital Commerce, Nike Europe"
    },
    visuals: {
      hero: 'https://i.imgur.com/24NwBv5.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://i.imgur.com/lsSzBqm.mp4?auto=compress&cs=tinysrgb&w=800',
        'https://i.imgur.com/prWkwB6.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://i.imgur.com/24NwBv5.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://i.imgur.com/pbX2QQX.gif?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    tags: ['Euro24', 'Digital', 'Coca-Cola', 'Football', 'Sponsorship', 'Partnership', 'Branded Content'],
    duration: '24 months',
    year: '2023-2024'
  },
  {
    id: 'fedex-nextinline',
    title: 'Next In Line: The Future of Football with FedEx',
    client: 'FedEx',
    logo: 'https://i.imgur.com/E832FHx.png',
    headlineResult: '6 Rising Stars & Millions of Fans',
    summary: 'Positioned FedEx as an innovator in European football by connecting Champions League fans with emerging stars through talent-led, multi-platform content and data-driven engagement.',
    challenge: 'In 2021, FedEx set out to shift perceptions and demonstrate its innovative, forward-thinking logistics solutions through the new ‘Where Now Meets Next’ brand positioning. With 65% of their core audience identified as UEFA Champions League fans, the challenge was to leverage the UCL’s platform to bring this positioning to life in a way that would resonate with discerning, data-driven B2B audiences. FedEx needed a standout campaign that would engage fans seeking deeper football insight and elevate the brand’s association with progress, innovation, and the next generation of football talent.',
    solution: `FedEx and their agency Fuse International selected ED and OneFootball for their creative concept, ‘Next In Line’, a campaign developed in-house to spotlight emerging Champions League talent and deliver on FedEx’s ‘Where Now Meets Next’ brand promise. Drawing on user research that revealed 72% of football fans wanted richer athlete-driven content, we crafted a multi-format series featuring some of Europe’s brightest young stars.

The campaign launched in the 2021/22 season with exclusive interviews and features on Eduardo Camavinga (Real Madrid), Trevoh Chalobah (Chelsea) and Jonathan David (Lille), offering fans unprecedented access to the journeys and insights of tomorrow’s football icons. Following the campaign’s success, FedEx renewed for the 2022/23 season, expanding the series to include Dejan Kulusevski (Tottenham), Fikayo Tomori (AC Milan) and Nuno Mendes (PSG).

Next In Line spanned the OneFootball ecosystem and beyond, combining branded media, social storytelling, bespoke sponsorship assets, competitions and data capture initiatives. The campaign reached millions of engaged football fans via the OneFootball network, partner publishers like ESPN and 90min and was amplified by FedEx, UEFA and Champions Journal. Through this approach, FedEx not only brought their innovative brand positioning to life but also became a trusted storyteller in the world of elite football, driving meaningful engagement and deepening their connection with B2B audiences across Europe.`,
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
      hero: 'https://i.imgur.com/ubcUIH7.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://i.imgur.com/yLray3u.png?auto=compress&cs=tinysrgb&w=800',
        'https://i.imgur.com/xnPCE0F.png?auto=compress&cs=tinysrgb&w=800',
        'https://i.imgur.com/RGlbmz9.gif?auto=compress&cs=tinysrgb&w=800',
        'https://i.imgur.com/I29rSV7.gif?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    tags: ['UCL', 'Sponsorship','FedEx', 'Branded Content', 'Digital', 'UEFA Champions League', 'Next In Line', 'Football'],
    duration: '24 months',
    year: '2021-2023'
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