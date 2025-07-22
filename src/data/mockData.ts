import { Product, Testimonial, CaseStudy } from '../types';

export const products: Product[] = [
  {
    id: 'connect-ed',
    name: 'Connect-ED™',
    title: '',
    summary: 'Open the door to key decision-makers across media, sport and entertainment. A black book constructed over the past 25 years. It’s not just who you know, it’s how you make it matter.',
    features: [
      'Immediate access to a high-trust network across sport, media and tech.',
      'Senior-level introductions that unlock partnerships and accelerate growth.', 
      'Proven outreach strategies that land meetings and open new markets.'
    ],
    image: 'https://i.imgur.com/o0tjSV8.jpeg'
  },
  {
    id: 'creat-ed',
    name: 'Creat-ED™',
    title: '',
    summary: 'Integrates an entrepreneurial mindset that thinks beyond the brief, blending innovation, product evolution, customer satisfaction and partner success to spark meaningful change.',
    features: [
      'Deliver campaign and product ideas that drive real commercial outcomes.',
      'Reframe challenges with bold thinking built to unlock new opportunity.',
      'Access a creative approach that scales across brand, content and partnerships.'
    ],
    image: 'https://i.imgur.com/BD3oITq.jpeg'
  },
  {
    id: 'direct-ed',
    name: 'Direct-ED™',
    title: '',
    summary: 'Strengthens leadership at every level, from boardroom clarity to team chemistry, with passion at its core. It unlocks trust, sharpens culture and drives performance, even in high-stakes environments.',
    features: [
      'Strengthen leadership with proven global team-building experience.',
      'Create high-performing cultures through smart hiring and mentoring.',
      'Unlock trust, momentum, and clarity in complex team environments.'
    ],
    image: 'https://i.imgur.com/wIOEsH7.jpeg'
  },
  {
    id: 'monetis-ed',
    name: 'Monetis-ED™',
    title: '',
    summary: 'A market-proven product that blends strategic thinking, deep market knowledge, sharp go-to-market planning and flawless execution to deliver measurable, repeatable revenue growth.',
    features: [
      'Guaranteed scalable revenue growth.',
      'Build GTM strategies that position, pitch and close with precision.',
      'Combine senior selling with hands-on delivery and long-term client value.'
    ],
    image: 'https://i.imgur.com/vPlXmGQ.jpeg'
  },
  {
    id: 'strategis-ed',
    name: 'Strategis-ED™',
    title: '',
    summary: 'No more gut feel. No more hitting and hoping. Strategis-ED helps your business pause, refocus and plot a clear, actionable path forward, built on insight, alignment and commercial reality.',
    features: [
      'Identify what’s working, what’s not, and where to focus for maximum impact.',
      'Build clear, actionable strategies your teams believe in and execute on.',
      'Move from planning to performance with aligned, purpose-led executio.'
    ],
    image: 'https://i.imgur.com/P22fPMh.jpeg'
  },
  {
    id: 'analys-ed',
    name: 'Analys-ED™',
    title: '',
    summary: 'Stop guessing and start listening. Analys-ED turns real data into smart, actionable decisions, helping you evolve products, unlock commercial value and deliver better experiences for the people who matter most.',
    features: [
      'Capture insight that reveals what your audience really wants.',
      'Identify actionable opportunities from data others overlook.',
      'Turn intelligence into strategy, product evolution and revenue growth.'
    ],
    image: 'https://i.imgur.com/OPzOkQd.jpeg'
  },
  {
    id: 'deliver-ed',
    name: 'Deliver-ED™',
    title: '',
    summary: 'Achieving your OKR’s isn’t always easy, unless you purchase Deliver-ED. With a track record of exceeding expectations, it helps your business and clients hit goals, raise the bar and outperform time and again.',
    features: [
      'Proven to outperform goals across multiple markets and business models.',
      'Trusted to lead teams, deliver results and retain top-tier clients.',
      'Combines sharp commercial focus with consistent execution at scale.'
    ],
    image: 'https://i.imgur.com/OL87O5p.jpeg'
  },
  {
    id: 'communicat-ed',
    name: 'Communicat-ED™',
    title: '',
    summary: 'Deliver clarity that inspires action, from boardroom strategy to team culture and commercial storytelling. Deliver-ED ensures communication with purpose, not just polish.',
    features: [
      'Craft clear, persuasive messaging that moves teams and stakeholders.',
      'Deliver board-level narratives that align, inspire and drive actions.',
      'Translate complex ideas into standout decks, pitches and comms.'
    ],
    image: 'https://i.imgur.com/t9e2NfL.jpeg'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Kristiana Carlet',
    company: 'Spotify',
    content: 'Connect-ED, Creat-ED, and Monetis-ED will change the game for you as it did for us. The full ED suite always delivers!',
    rating: 5,
    avatar: 'https://i.imgur.com/MLlVj4K.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Ryan Storrar',
    company: 'GroupM',
    content: 'The Strategis-ED, Creat-ED and Deliver-ED modules helped us build consistently high-performing partnerships. Truly transformative for GroupM’s approach.',
    rating: 5,
    avatar: 'https://i.imgur.com/Pfb2ejp.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Steve McHenry',
    company: 'Sky',
    content: 'Monetis-ED, Communicat-ED and Creat-ED have become go-to solutions for us over the years, delivering great results time and again.',
    rating: 5,
    avatar: 'https://i.imgur.com/SJ5N3iO.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '4',
    name: 'Michael Pennington',
    company: 'Forza Football',
    content: 'The ED product suite has never let me down, delivering consistently for over 15 years. I can not recommend them highly enough.',
    rating: 5,
    avatar: 'https://i.imgur.com/HPMUlxF.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: '3x Industry Award Nominations',
    description: 'Elevated Coca-Cola Zero Sugar’s presence across Europe by embedding the brand into fans’ match-day rituals with talent-led, multi-channel digital engagement.',
    image: 'https://i.imgur.com/24NwBv5.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#'
  },
  {
    id: '2',
    title: 'From Local Secret to Global Leader',
    description: 'How OneFootball utilised ED to become a household B2B name in the football industry by Scaling Teams, Building Strategic Partnerships and Driving Global Revenues.',
    image: 'https://i.imgur.com/TNFQZFC.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#'
  },
  {
    id: '3',
    title: 'Next In Line: The Future of Football',
    description: 'Positioning FedEx as an innovator in football by connecting UCL fans with emerging stars through talent-led, multi-platform content and data-driven engagement.',
    image: 'https://i.imgur.com/ubcUIH7.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#'
  }
];

export const brandLogos: string[] = [
  'https://i.imgur.com/L9LmtZv.png',
  'https://i.imgur.com/b4Rxyze.png',
  'https://i.imgur.com/DbO52zz.png',
  'https://i.imgur.com/yZsCnOY.png',
  'https://i.imgur.com/vTuKtRs.png',
  'https://i.imgur.com/8Dt3rUC.png',
  'https://i.imgur.com/DeDjzd2.png',
  'https://i.imgur.com/utPLNRo.png',
  'https://i.imgur.com/8oS2N8r.png',
  'https://i.imgur.com/gLPYZou.png',
  'https://i.imgur.com/E832FHx.png',
  'https://i.imgur.com/2P20M61.png',
  'https://i.imgur.com/lb2cXlR.png',
  'https://i.imgur.com/KYF8Mye.png',
  'https://i.imgur.com/a0SfvC8.png',
  'https://i.imgur.com/5WUbW8Y.png',
  'https://i.imgur.com/vmYdYvb.png',
  'https://i.imgur.com/XKAwQ2g.png',
  'https://i.imgur.com/oZFvs2h.png',
  'https://i.imgur.com/VjfMh5H.png',
  'https://i.imgur.com/wRZBMC3.png'
];
