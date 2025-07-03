import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, Check, Star } from 'lucide-react';
import { products } from '../data/mockData';
import { useBasket } from '../context/BasketContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addItem } = useBasket();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6 sm:mb-8">Product Not Found</h1>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Product Suite</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToBasket = () => {
    addItem(product);
  };

  // Get detailed content for each product
  const getProductDetails = (productId: string) => {
    const details: { [key: string]: any } = {
      'connect-ed': {
        subtitle: 'Trusted access. Strategic connection. Real traction.',
        overview: `<p class="mb-4 sm:mb-6">Connect-<span class="font-bold">ED</span> is your shortcut to decision-makers that matter, a service module built to unlock high-value relationships across sport, media, tech and entertainment. Backed by 25 years of real-world networking, commercial development and executive engagement, Connect-<span class="font-bold">ED</span> isn't just a contact list, it's a connection strategy.</p>

<p class="mb-4 sm:mb-6">Whether you're looking to unlock a warm intro, expand into new sectors, or accelerate your go-to-market through partnerships, Connect-<span class="font-bold">ED</span> delivers. It blends a rich black book with the ability to build new relationships fast, through proven outreach strategies, insight-driven targeting and a reputation that opens doors.</p>

<p>This isn't about spraying LinkedIn messages. It's about trusted access, targeted value and connecting in ways that move conversations and business forward.</p>`,
        keyBenefits: [
          'Access to a senior, high-trust network built over 25 years',
          'C-Level, VP and exec contacts across sport, media and tech',
          'Warm introductions backed by genuine relationship equity',
          'Cold outreach strategies that cut through and convert',
          'Trusted by agencies, platforms, rights holders and brands',
          'Built to accelerate partnerships, hiring and growth'
        ],
        detailedFeatures: [
          {
            title: 'Strategic Network Access',
            description: 'Unlock trusted connections across commercial, product, marketing and leadership roles.'
          },
          {
            title: 'Warm Introductions That Work',
            description: 'Not just names, real intros with credibility, context and a clear reason to talk.'
          },
          {
            title: 'Cold Outreach That Converts',
            description: 'Proven methods for getting replies, even from people you\'ve never met.'
          },
          {
            title: 'Partner & Platform Targeting',
            description: 'Identify the right people, at the right companies, with a tailored connection strategy.'
          },
          {
            title: 'Brand & Agency Relationship Management',
            description: 'Navigate holding groups, media owners and rights holders with confidence.'
          },
          {
            title: 'New Market Entry Support',
            description: 'Use the <span class="font-bold">ED</span> network and approach to open doors in unfamiliar categories or geos.'
          }
        ],
        quickStats: [
          { label: '25+ Years Network', icon: 'star' },
          { label: 'C-Level Access', icon: 'check' },
          { label: 'Proven Results', icon: 'circle' }
        ]
      },
      'creat-ed': {
        subtitle: 'Inventive thinking. Commercial instinct. Real outcomes.',
        overview: `<p class="mb-4 sm:mb-6">Creat-<span class="font-bold">ED</span> is built for briefs that demand more originality, more edge, more relevance. It’s not just creative for creative’s sake. It’s creativity shaped by data, driven by instinct and designed to deliver for brands, sponsors and audiences alike.</p>

<p class="mb-4 sm:mb-6">Whether building campaigns, products, or partnership platforms, Creat-<span class="font-bold">ED</span> brings a challenger mindset to every idea. It questions assumptions, reframes the brief and pushes past "what’s always been done" because better is almost always possible. It’s also about people: hiring, nurturing and surrounding yourself with the kind of talent that raises the creative bar.</p>

<p>This website is just one example of that mindset in action.</p>`,
        keyBenefits: [
          'Creative ideas shaped by data, insight and the need for commercial outcomes',
          'Strategic thinking that challenges the expected and inspires change',
          'Fast, fearless ideation with audience, platform, and brand in mind',
          'Experience building campaigns, products, and partnerships from scratch',
          'Naturally drawn to high-creative talent and idea-led collaboration',
          'Innovation mindset baked into team building, storytelling, and execution'
        ],
        detailedFeatures: [
          {
            title: 'Insight-Led Creative Strategy',
            description: 'Blend instinct and data to shape ideas that resonate with audiences and deliver for brands.'
          },
          {
            title: 'Campaign & Product Concepting',
            description: 'Develop high-impact campaigns, content formats and partnership platforms from scratch.'
          },
          {
            title: 'Innovation-First Thinking',
            description: 'Challenge assumptions, rethink briefs and create space for breakthrough ideas.'
          },
          {
            title: 'Creative Team Leadership',
            description: 'Build and nurture teams that think differently, collaborate well and deliver consistently.'
          },
          {
            title: 'Platform-Aware Storytelling',
            description: 'Design creative ideas with a clear understanding of channel, audience and context.'
          },
          {
            title: 'Applied Creativity, Not Theory',
            description: 'From pitch to launch, focus on ideas that are made to ship, not just sit in decks.'
          }
        ],
        quickStats: [
          { label: 'Creative Instinct', icon: 'star' },
          { label: 'Data-Informed', icon: 'check' },
          { label: 'Commercially Driven', icon: 'circle' }
        ]
      },
      'direct-ed': {
        subtitle: 'Built to inspire. Tuned to scale. Fueled by passion.',
        overview: `Direct-<span class="font-bold">ED</span> has been honed through decades of real-world experience building teams, delivering transformation and navigating complexity with empathy and conviction. It's not just about taking charge, it's about bringing people with you.

This isn't leadership by textbook. It's shaped by doing, hiring the right people, developing them, trusting them and showing up with passion every day. Whether scaling a team, turning around a culture, or driving change in pressure-filled moments, Direct-<span class="font-bold">ED</span> delivers the clarity, emotional intelligence and momentum needed to help your company lead with confidence and consistency.`,
        keyBenefits: [
          'Lead global teams with clarity, empathy, and conviction',
          'Hire smart, build trust, and scale winning cultures',
          'Mentor talent and support personal development at pace',
          'Create calm, focused momentum in high-stakes situations',
          'Encourage collaboration through example, not instruction',
          'Balance vision, strategy and real-world execution'
        ],
        detailedFeatures: [
          {
            title: 'Boardroom Clarity & Strategic Vision',
            description: 'Develop confident, big-picture thinking and executive-level clarity for high-impact decision-making.'
          },
          {
            title: 'Team Chemistry & Culture Building',
            description: 'Shape resilient teams and energising cultures through inclusive leadership and collaborative momentum.'
          },
          {
            title: 'High-Stakes Performance Optimization',
            description: 'Lead with composure and focus under pressure, using proven tools to drive success in demanding contexts.'
          },
          {
            title: 'Trust-Building Frameworks',
            description: 'Build lasting trust through empathy, consistency, and clear delegation at every layer of the organisation.'
          },
          {
            title: 'Passion-Driven Leadership Development',
            description: 'Inspire teams through purpose-driven leadership that nurtures growth, ambition, and ownership.'
          },
          {
            title: 'Outcome-Focused Execution',
            description: 'Translate vision into action with leadership systems that prioritise follow-through, agility, and results.'
          }
        ],
        quickStats: [
          { label: 'People-First Approach', icon: 'star' },
          { label: 'Proven Results', icon: 'check' },
          { label: 'High-Performance', icon: 'circle' }
        ]
      },
      'monetis-ed': {
        subtitle: 'Strategy-first selling. Built to close.',
        overview: `<p class="mb-4 sm:mb-6">Having accumulated $294M in won business, Monetis-<span class="font-bold">ED</span> turns commercial ambition into structured, scalable revenue. It starts with knowing where to fish, using insight and instinct to shape the right strategy and then crafting the right story to land results.</p>

<p class="mb-4 sm:mb-6">From building positioning and go-to-market plans to pitching, negotiating and closing, Monetis-<span class="font-bold">ED</span> blends high-level thinking with hands-on sales delivery. But it doesn’t stop at the deal. Real value comes from follow-through, managing relationships, delivering on promises and ensuring clients come back for more.</p>

<p>If you're looking for a sales engine that sells with purpose, guarantees results and sustains success, this is it.</p>`,
        keyBenefits: [
          'Builds sales strategies tailored to markets, segments and objectives',
          'Crafts compelling pitch stories rooted in insight and audience need',
          'Deep experience selling to brands, agencies, platforms and rights holders',
          'Converts with clarity, timing and a low-pressure, high-value approach',
          'Proven revenue delivery across direct, programmatic, sponsorship and partnership streams',
          'Prioritises delivery, client retention, and long-term commercial value'
        ],
        detailedFeatures: [
          {
            title: 'Targeted Sales Strategy',
            description: 'Identify high-potential markets, accounts and entry points with a clear plan to win.'
          },
          {
            title: 'Insight-Driven Storytelling',
            description: 'Develop sales narratives that resonate with your audience and align to their objectives.'
          },
          {
            title: 'Multi-Channel Revenue Expertise',
            description: 'Execute across direct, programmatic, sponsorship and platform-led opportunities.'
          },
          {
            title: 'High-Impact Pitching & Closing',
            description: 'Sell with confidence, timing and precision, always focused on value, not pressure.'
          },
          {
            title: 'Delivery & Account Management',
            description: 'Go beyond the sale by ensuring delivery matches the pitch and relationships stay strong.'
          },
          {
            title: 'Repeatable Growth Systems',
            description: 'Build structures and habits that drive consistent, scalable commercial success.'
          }
        ],
        quickStats: [
          { label: 'Strategy-Led Sales', icon: 'star' },
          { label: 'Guaranteed Results', icon: 'check' },
          { label: 'Built to Convert', icon: 'circle' }
        ]
      },
      'strategis-ed': {
        subtitle: 'Clarity. Buy-in. Real-world delivery.',
        overview: `<p class="mb-4 sm:mb-6">Strategis-<span class="font-bold">ED</span> is where fresh perspective meets practical planning. It starts with understanding what’s already in place, listening to the team/customers, analysing performance and identifying what’s working, what’s missing and what needs to change.</p>

<p class="mb-4 sm:mb-6">From there, Strategis-<span class="font-bold">ED</span> builds simple, grounded strategies that people believe in and can actually execute. Whether it’s team structure, product direction, partnership approach, or process design, the focus is always the same: clarity, alignment and momentum.</p>

<p>Because a strategy only works if people buy in and if it gets delivered.</p>`,
        keyBenefits: [
          'Identifies what’s working, what’s not and where to go next',
          'Shapes clear, pragmatic strategies built for execution',
          'Encourages early team input to build ownership and momentum',
          'Aligns structure, roles and processes to strategic goals',
          'Integrates partnerships and tech to drive efficiency',
          'Communicates plans with clarity to secure lasting buy-in'
        ],
        detailedFeatures: [
          {
            title: 'Strategic Assessment & Discovery',
            description: 'Review current processes, performance and team input to understand what needs to change.'
          },
          {
            title: 'Simple, Actionable Planning',
            description: 'Translate insights into strategies that are clear, effective and easy to execute.'
          },
          {
            title: 'Collaborative Strategy Design',
            description: 'Involve key voices early to build buy-in, alignment and real momentum.'
          },
          {
            title: 'Structural & Team Optimisation',
            description: 'Reshape roles, reporting lines and workflows to better meet business goals.'
          },
          {
            title: 'Partnership & Platform Thinking',
            description: 'Use smart external solutions and technologies to accelerate results.'
          },
          {
            title: 'Communication & Rollout Support',
            description: 'Deliver the plan in a way people understand, believe in and act on.'
          }
        ],
        quickStats: [
          { label: 'Clear Strategic Thinking', icon: 'star' },
          { label: 'Collaborative by Design', icon: 'check' },
          { label: 'Built to Deliver', icon: 'circle' }
        ]
      },
      'analys-ed': {
        subtitle: 'Insight that listens. Direction that delivers.',
        overview: `<p class="mb-4 sm:mb-6">Analys-<span class="font-bold">ED</span> is about more than just data, it’s about understanding what matters and acting on it. From audience surveys to product performance and campaign analytics, this module brings together behavioural insight, customer feedback and instinct to inform sharper decisions.</p>

<p class="mb-4 sm:mb-6">It’s not about dashboards for the sake of dashboards. It’s about asking the right questions, listening to the answers and using that to guide everything, from creative to commercial strategy. Whether refining a product, improving audience targeting, or amplifying underrepresented voices (like football fans), Analys-<span class="font-bold">ED</span> turns information into momentum.</p>

<p>Because real insight isn’t just what you collect, it’s what you do with it.</p>`,
        keyBenefits: [
          'Uses surveys, signals and behavioural data to surface insight',
          'Captures customer opinion to improve product and creative decisions',
          'Turns raw data into clear, actionable strategic direction',
          'Applies insight across media, product and partnership planning',
          'Emphasises real-time learning, testing and optimisation',
          'Advocates for the end user, especially voices often ignored'
        ],
        detailedFeatures: [
          {
            title: 'Audience & Customer Surveys',
            description: 'Design and deploy surveys to uncover real opinions, preferences and motivations.'
          },
          {
            title: 'Behavioural & Performance Analysis',
            description: 'Track how audiences engage with content, products and platforms and why.'
          },
          {
            title: 'Strategic Insight Translation',
            description: 'Turn raw data into clear commercial and creative recommendations.'
          },
          {
            title: 'Test-and-Learn Frameworks',
            description: 'Run real-time optimisation loops to refine performance and decision-making.'
          },
          {
            title: 'Cross-Functional Application',
            description: 'Apply insight to product, sales, creative and strategic planning processes.'
          },
          {
            title: 'Advocacy Through Analytics',
            description: 'Use data to amplify customer voices, especially those often unheard.'
          }
        ],
        quickStats: [
          { label: 'Customer-Led Insight', icon: 'star' },
          { label: 'Data with Direction', icon: 'check' },
          { label: 'Real-Time Learning', icon: 'circle' }
        ]
      },
      'deliver-ed': {
        subtitle: 'Results. Repeated. Respected.',
        overview: `<p class="mb-4 sm:mb-6">Deliver-<span class="font-bold">ED</span> is built for follow-through, the kind that turns targets into milestones and clients into advocates. From launching new markets to leading multinational teams, this module reflects a track record of not just hitting expectations, but raising them.</p>

<p class="mb-4 sm:mb-6">Whether driving revenue, retaining key accounts, or scaling success across regions, Deliver-<span class="font-bold">ED</span> is about what happens after the pitch: doing the work, delivering the value and outperforming the brief. It’s consistent. It's proven. And it’s trusted at every level, from frontline clients to the boardroom.</p>`,
        keyBenefits: [
          'Delivers consistent revenue growth across markets and verticals',
          'Repeatedly exceeds targets and performance expectations',
          'Proven leadership of sales teams across local and global remits',
          'Combines strategic oversight with hands-on execution',
          'Focused on long-term client success and repeat business',
          'Trusted internally and externally to lead, perform and deliver'
        ],
        detailedFeatures: [
          {
            title: 'Sustained Revenue Growth',
            description: 'Proven ability to scale commercial results across teams, territories and business models.'
          },
          {
            title: 'Target-Exceeding Performance',
            description: 'Consistently outperforms goals with strategic clarity and disciplined execution.'
          },
          {
            title: 'Market Expansion Leadership',
            description: 'Successfully launched and grew operations in the UK, France and Italy, delivering millions in new revenue.'
          },
          {
            title: 'Client Success & Retention',
            description: 'Prioritises long-term value by delivering on promises and keeping clients close.'
          },
          {
            title: 'Recognition & Internal Progression',
            description: 'Promoted repeatedly based on results, leadership and cross-functional impact.'
          },
          {
            title: 'Award-Winning Execution',
            description: 'Previous campaigns recognised by Media Week, M&Ms and the Festival of Media for effectiveness and innovation.'
          }
        ],
        quickStats: [
          { label: 'Consistantly Outperforms', icon: 'star' },
          { label: 'Client Delivery Focus', icon: 'check' },
          { label: 'Built to Scale', icon: 'circle' }
        ]
      },
      'communicat-ed': {
        subtitle: 'Clear. Considered. Commercial.',
        overview: `<p class="mb-4 sm:mb-6">Communicat-<span class="font-bold">ED</span> is built on the belief that great communication drives great companies. Whether it’s aligning a team, inspiring a room, or winning a pitch, this module ensures the message lands with clarity, relevance and intent.</p>

<p class="mb-4 sm:mb-6">From boardroom conversations to all-hands updates, Communicat-<span class="font-bold">ED</span> adapts to the audience, the moment and the mission. It’s not just about saying the right thing, it’s about building trust, driving alignment and delivering impact through the way you speak, write and show up.</p>

<p>Honest, thoughtful and always audience-aware, this is communication that makes a difference.</p>`,
        keyBenefits: [
          'Crafts clear, honest messaging that builds trust and alignment',
          'Adapts tone and delivery across C-Level, team and client audiences',
          'Uses storytelling to simplify complex strategies and inspire action',
          'Builds communication rhythms that support culture and clarity',
          'Blends commercial insight with human nuance in every message',
          'Seeks feedback and continuously improves communication impact'
        ],
        detailedFeatures: [
          {
            title: 'Executive-Level Storytelling',
            description: 'Shape strategic narratives that land with clarity and purpose in boardrooms and leadership teams.'
          },
          {
            title: 'Internal Communication Strategy',
            description: 'Create consistent, inspiring messaging that builds trust and aligns teams.'
          },
          {
            title: 'Audience-Adaptive Delivery',
            description: 'Flex style and tone across seniority levels, disciplines and functions, internally and externally.'
          },
          {
            title: 'Sales & Commercial Messaging',
            description: 'Develop compelling positioning and pitch narratives tailored to decision-makers.'
          },
          {
            title: 'Feedback-Driven Improvement',
            description: 'Invite and apply feedback to continuously sharpen communication effectiveness.'
          },
          {
            title: 'Culture-Building Through Clarity',
            description: 'Use language, rhythm, and tone to reinforce values, culture and vision at scale.'
          }
        ],
        quickStats: [
          { label: 'Audience-Aware Messaging', icon: 'star' },
          { label: 'Story-Driven Clarity', icon: 'check' },
          { label: 'Commercial Focus', icon: 'circle' }
        ]
      }
    };
    
    return details[productId] || {
      subtitle: 'Business Solution',
      overview: 'This powerful solution enhances your business operations with advanced features and proven methodologies.',
      keyBenefits: [
        'Improve operational efficiency',
        'Reduce costs and complexity',
        'Scale with your business growth',
        'Integrate with existing systems'
      ],
      detailedFeatures: [
        {
          title: 'Advanced Features',
          description: 'Comprehensive feature set designed for enterprise needs.'
        }
      ],
      quickStats: [
        { label: 'Enterprise Ready', icon: 'star' },
        { label: 'Proven Results', icon: 'check' },
        { label: '24/7 Support', icon: 'circle' }
      ]
    };
  };

  const productDetails = getProductDetails(product.id);

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'star':
        return <Star className="h-4 w-4 sm:h-5 sm:w-5 text-black fill-current" />;
      case 'check':
        return <Check className="h-4 w-4 sm:h-5 sm:w-5 text-black" />;
      case 'circle':
      default:
        return <div className="w-4 h-4 sm:w-5 sm:h-5 bg-black rounded-full"></div>;
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div 
          ref={headerRef}
          className={`mb-4 sm:mb-6 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Link
            to="/products"
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors font-light text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Product Suite</span>
          </Link>
        </div>

        {/* Product Header */}
        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Product Image */}
          <div className="relative group overflow-hidden rounded-2xl order-first lg:order-first">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 sm:h-80 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6 sm:space-y-8 order-last lg:order-last">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 tracking-tight">
                {product.name}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-bold mb-4 sm:mb-6">
                {productDetails.subtitle}
              </p>
              <div 
                className="text-base sm:text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: productDetails.overview }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={handleAddToBasket}
                className="group bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Add To Basket</span>
              </button>
              
              <Link
                to="/contact"
                className="group text-black hover:text-gray-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 border border-gray-200 hover:border-gray-300 text-sm sm:text-base"
              >
                <span>Request Demo</span>
              </Link>
            </div>

            {/* Quick Stats - Now customized per product */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              {productDetails.quickStats.map((stat: any, index: number) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-1 sm:mb-2">
                    {renderIcon(stat.icon)}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div 
          ref={benefitsRef}
          className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-200 ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 tracking-tight text-center">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {productDetails.keyBenefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2.5 sm:mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Features */}
        <div 
          ref={featuresRef}
          className={`transition-all duration-1000 delay-400 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12 tracking-tight text-center">
            Detailed Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {productDetails.detailedFeatures.map((feature: any, index: number) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="text-lg sm:text-xl font-medium text-black mb-3 sm:mb-4">{feature.title}</h3>
                <p 
                  className="text-gray-700 leading-relaxed text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 bg-black rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Ready to get started with {product.name}?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 font-light">
            Join thousands of companies already transforming their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={handleAddToBasket}
              className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base"
            >
              Add To Basket
            </button>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 border border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;