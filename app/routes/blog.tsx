import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Blog · Build Malaysia' },
    { name: 'description', content: 'Insights on Malaysian talent acquisition, visa processes, and building extraordinary careers in Malaysia. Learn from industry experts and successful professionals.' },
    { name: 'keywords', content: 'Malaysia talent blog, visa insights, career development, extraordinary professionals, Malaysian diaspora' },
    { property: 'og:title', content: 'Blog · Build Malaysia' },
    { property: 'og:description', content: 'Insights on Malaysian talent acquisition, visa processes, and building extraordinary careers in Malaysia.' },
    { name: 'twitter:title', content: 'Blog · Build Malaysia' },
    { name: 'twitter:description', content: 'Insights on Malaysian talent acquisition, visa processes, and building extraordinary careers in Malaysia.' },
  ];
};

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to Malaysia\'s Talent Corporation Visa Programs',
    excerpt: 'Everything you need to know about Residence Pass-Talent (RP-T), Malaysia My Second Home (MM2H), and other visa options for extraordinary professionals.',
    content: `Malaysia has positioned itself as a regional hub for extraordinary talent through various visa programs designed to attract world-class professionals. The Talent Corporation Malaysia (TalentCorp) offers several pathways for exceptional individuals to contribute to Malaysia's economic growth.

The Residence Pass-Talent (RP-T) is Malaysia's flagship program for attracting top-tier professionals. This 10-year renewable pass is available to individuals who have excelled in their fields and can contribute significantly to Malaysia's key economic sectors including technology, finance, healthcare, and advanced manufacturing.

Key benefits of the RP-T include:
- 10-year validity with renewable terms
- Multiple entry privileges
- Freedom to work with any employer
- Path to permanent residency
- Spouse and children inclusion
- Tax incentives for qualifying professionals

To qualify for the RP-T, applicants must demonstrate extraordinary ability through:
- Executive roles at Fortune 500 companies
- Advanced degrees from top-tier universities
- Significant professional achievements
- Innovation and research contributions
- Leadership in their respective fields

The application process involves document verification, assessment by industry experts, and final approval by TalentCorp. Processing typically takes 3-6 months, and successful applicants receive comprehensive relocation support.

For Malaysian diaspora looking to return, the Returning Expert Programme (REP) offers additional incentives including tax exemptions and expedited processing for qualified professionals who have gained international experience.`,
    author: 'Dr. Amira Hassan',
    authorTitle: 'Immigration Policy Expert',
    authorImage: '/api/placeholder/40/40',
    publishedAt: '2024-01-15',
    readingTime: '8 min read',
    category: 'Visa & Immigration',
    tags: ['RP-T', 'TalentCorp', 'Immigration', 'Malaysia'],
    featuredImage: '/api/placeholder/600/300'
  },
  {
    id: 2,
    title: 'From Silicon Valley to Kuala Lumpur: A Tech Leader\'s Journey Home',
    excerpt: 'Ahmad Rahman shares his experience transitioning from Google to leading Malaysia\'s fintech revolution, and why now is the perfect time for tech talent to return.',
    content: `After 12 years in Silicon Valley, working at companies like Google and Facebook, I made the decision to return to Malaysia in 2023. This wasn't just a career move—it was about contributing to something bigger than myself.

The Malaysian tech ecosystem has undergone a remarkable transformation. When I left for Stanford in 2008, Malaysia's startup scene was nascent. Today, we have unicorns like Grab (co-founded by Malaysians), a thriving fintech sector, and government initiatives that rival those of Singapore and Hong Kong.

What convinced me to return:

1. **Government Support**: The Malaysia Digital Economy Corporation (MDEC) and TalentCorp provide unprecedented support for tech professionals. From tax incentives to fast-track visas, the infrastructure for talent is world-class.

2. **Market Opportunity**: Southeast Asia's digital economy is projected to reach $1 trillion by 2030. Malaysia is perfectly positioned as a hub for this growth, with its strategic location, developed infrastructure, and multilingual workforce.

3. **Quality of Life**: The cost of living advantage is significant. A $300K salary in Silicon Valley translates to roughly RM 500K in Malaysia, but your purchasing power is dramatically higher. Housing costs are 70% lower, and the quality of life is exceptional.

4. **Cultural Connection**: There's something irreplaceable about contributing to your homeland's growth. The professional networks, cultural understanding, and sense of purpose create advantages that can't be quantified.

The transition wasn't without challenges. Setting up banking, understanding local business practices, and rebuilding professional networks took time. However, the support from TalentCorp and fellow returnees made the process smoother.

Today, I'm the CTO of a Malaysian fintech startup that's expanding across ASEAN. We're solving problems specific to Southeast Asian markets while competing globally. It's the best of both worlds—Silicon Valley innovation with Malaysian heart.

For Malaysian tech professionals considering a return: the timing has never been better. The ecosystem is mature enough to offer world-class opportunities while still having room for exponential growth.`,
    author: 'Ahmad Rahman',
    authorTitle: 'CTO, Fintech Startup',
    authorImage: '/api/placeholder/40/40',
    publishedAt: '2024-01-10',
    readingTime: '6 min read',
    category: 'Success Stories',
    tags: ['Tech', 'Silicon Valley', 'Return Migration', 'Fintech'],
    featuredImage: '/api/placeholder/600/300'
  },
  {
    id: 3,
    title: 'Malaysia\'s Rise as a Global Financial Hub: Opportunities for Returning Professionals',
    excerpt: 'Explore how Malaysia is positioning itself as a leading financial center in ASEAN, and the opportunities this creates for finance professionals with international experience.',
    content: `Malaysia's financial services sector is experiencing unprecedented growth, positioning the country as a formidable competitor to traditional hubs like Hong Kong and Singapore. The combination of Islamic finance leadership, fintech innovation, and strategic government initiatives creates compelling opportunities for returning Malaysian professionals.

**The Islamic Finance Advantage**

Malaysia is the global leader in Islamic finance, commanding over 40% of the world's sukuk market. Major international banks including HSBC, Standard Chartered, and JP Morgan have established their Islamic finance headquarters in Kuala Lumpur. This specialization creates unique opportunities for finance professionals with expertise in both conventional and Islamic financial instruments.

**Fintech Revolution**

The Malaysian fintech ecosystem has exploded, with over 200 fintech companies operating in the country. Bank Negara Malaysia's regulatory sandbox has fostered innovation while maintaining stability. Key growth areas include:

- Digital banking (with new digital bank licenses approved)
- Blockchain and cryptocurrency (regulated approach)
- InsurTech and wealth management
- Cross-border payments and remittances

**Government Initiatives**

The Financial Sector Blueprint 2022-2026 outlines ambitious plans to transform Malaysia into a regional financial hub. Key initiatives include:

- Enhanced tax incentives for financial services
- Streamlined licensing for international firms
- Investment in digital infrastructure
- Talent development programs

**Career Opportunities**

Returning finance professionals can leverage their international experience in several high-growth areas:

1. **Investment Banking**: Malaysia's capital markets are deepening, with increased M&A activity and IPO volumes.

2. **Asset Management**: The country's growing wealth requires sophisticated investment solutions.

3. **Risk Management**: International regulatory experience is highly valued.

4. **Fintech Leadership**: Combining traditional finance knowledge with tech innovation.

**Compensation and Benefits**

While base salaries may be lower than global financial centers, the total compensation package often provides better value:

- Tax rates are competitive (28% maximum personal income tax)
- Cost of living is significantly lower
- Quality of life is excellent
- Career progression is often faster

**Success Story: Sarah Lim's Journey**

Sarah Lim, former VP at Goldman Sachs Singapore, returned to Malaysia in 2023 to lead a new digital bank initiative. "The opportunity to build something from scratch, combined with the supportive ecosystem and personal fulfillment of contributing to Malaysia's growth, made this an easy decision," she explains.

For Malaysian finance professionals considering a return, the timing is optimal. The sector is mature enough to offer sophisticated roles while still providing the excitement of a growing market.`,
    author: 'Sarah Lim',
    authorTitle: 'Former Goldman Sachs VP',
    authorImage: '/api/placeholder/40/40',
    publishedAt: '2024-01-05',
    readingTime: '10 min read',
    category: 'Industry Insights',
    tags: ['Finance', 'Islamic Finance', 'Fintech', 'Banking'],
    featuredImage: '/api/placeholder/600/300'
  },
  {
    id: 4,
    title: 'Building World-Class Healthcare in Malaysia: A Call to Medical Professionals',
    excerpt: 'Malaysia\'s healthcare sector is undergoing rapid transformation. Discover how returning medical professionals can contribute to building a world-class healthcare system.',
    content: `Malaysia's healthcare sector stands at an inflection point. With an aging population, rising medical tourism, and increasing healthcare demands, the country needs world-class medical professionals who can elevate standards while making healthcare accessible to all Malaysians.

**The Current Landscape**

Malaysia's healthcare system combines public and private sectors, serving both local and international patients. Medical tourism contributes significantly to the economy, with Malaysia ranking among the top global destinations for medical procedures.

Key strengths include:
- Advanced medical facilities and technology
- Competitive costs compared to Western countries
- Multilingual medical professionals
- Strategic location for regional healthcare hub

**Opportunities for Returning Professionals**

1. **Specialized Medicine**: There's high demand for subspecialists in cardiology, oncology, neurology, and orthopedics.

2. **Medical Research**: Government funding for healthcare research has increased significantly, with opportunities in clinical trials and medical device development.

3. **Digital Health**: Telemedicine and health-tech solutions are experiencing rapid adoption, especially post-COVID.

4. **Medical Education**: Opportunities to shape the next generation of Malaysian doctors through teaching and curriculum development.

**Government Support**

The Ministry of Health's initiatives include:
- Fast-track recognition of international medical qualifications
- Research grants for returning medical professionals
- Tax incentives for healthcare innovation
- Support for establishing specialized medical centers

**Success Stories**

Dr. Raj Patel returned from Johns Hopkins to establish Malaysia's first comprehensive stroke center. "The opportunity to implement world-class protocols while serving my community made this transition incredibly rewarding," he shares.

The time is right for medical professionals to return and contribute to Malaysia's healthcare transformation.`,
    author: 'Dr. Raj Patel',
    authorTitle: 'Neurologist, Johns Hopkins Alumni',
    authorImage: '/api/placeholder/40/40',
    publishedAt: '2023-12-28',
    readingTime: '7 min read',
    category: 'Healthcare',
    tags: ['Healthcare', 'Medical', 'Research', 'Innovation'],
    featuredImage: '/api/placeholder/600/300'
  },
  {
    id: 5,
    title: 'The Entrepreneur\'s Guide to Starting a Business in Malaysia',
    excerpt: 'From regulatory frameworks to funding opportunities, everything international entrepreneurs need to know about starting and scaling a business in Malaysia.',
    content: `Malaysia offers one of the most entrepreneur-friendly environments in Southeast Asia, with streamlined registration processes, robust intellectual property protection, and access to both local and regional markets. Here's a comprehensive guide for international entrepreneurs considering Malaysia as their business base.

**Business Registration and Setup**

Starting a business in Malaysia is straightforward:
- Online registration through MyCoID portal
- Minimum paid-up capital requirements are flexible
- Foreign ownership up to 100% allowed in most sectors
- Processing time: 1-3 days for standard applications

**Key Business Structures**

1. **Sdn Bhd (Private Limited Company)**: Most popular for foreign investors
2. **Representative Office**: For market research and liaison activities
3. **Branch Office**: Extension of parent company
4. **Partnership**: For professional services

**Funding Ecosystem**

Malaysia's funding landscape has matured significantly:

- **Government Grants**: MDEC, CRADLE Fund, MAVCAP
- **Venture Capital**: 500 Startups, Gobi Partners, Intres Capital
- **Angel Networks**: Malaysian Angel Investment Network
- **Corporate VCs**: Axiata Digital Innovation Fund, Khazanah Nasional

**Tax Incentives and Benefits**

- MSC Malaysia Status: Up to 100% tax exemption for qualifying companies
- Pioneer Status: 70% tax exemption for 10 years
- Investment Tax Allowance: 60% allowance on qualifying capital expenditure
- R&D Tax Incentives: Double deduction for R&D expenses

**Strategic Advantages**

1. **Regional Gateway**: Access to ASEAN's 650 million consumers
2. **Skilled Workforce**: Multilingual talent pool
3. **Infrastructure**: World-class digital and physical infrastructure
4. **Cost Efficiency**: 30-50% lower operational costs than Singapore
5. **Cultural Diversity**: Understanding of various Asian markets

**Industry Focus Areas**

Government priority sectors with additional incentives:
- Digital economy and fintech
- Advanced manufacturing and Industry 4.0
- Healthcare and biotechnology
- Renewable energy
- Aerospace and defense

**Success Story: Tech Startup Journey**

"We chose Malaysia as our ASEAN hub because of the supportive ecosystem and strategic location. Within 18 months, we've expanded to 5 countries while maintaining our development center in Kuala Lumpur," shares David Chen, founder of a successful SaaS startup.

**Practical Steps to Get Started**

1. **Market Research**: Utilize MATRADE and MDEC resources
2. **Business Plan**: Align with government priority sectors
3. **Legal Setup**: Engage local corporate secretarial services
4. **Banking**: Establish corporate banking relationships
5. **Talent Acquisition**: Leverage local and international talent
6. **Regulatory Compliance**: Understand sector-specific requirements

**Common Challenges and Solutions**

- **Talent Shortage**: Utilize government programs like TalentCorp
- **Regulatory Navigation**: Engage experienced local partners
- **Market Understanding**: Join industry associations and chambers of commerce
- **Funding Access**: Build relationships with local investors early

The entrepreneurial ecosystem in Malaysia continues to strengthen, with increasing success stories and government support. For entrepreneurs with global ambitions but regional focus, Malaysia offers an compelling combination of opportunity and support.`,
    author: 'David Chen',
    authorTitle: 'Serial Entrepreneur & Investor',
    authorImage: '/api/placeholder/40/40',
    publishedAt: '2023-12-20',
    readingTime: '12 min read',
    category: 'Entrepreneurship',
    tags: ['Startups', 'Business', 'Entrepreneurship', 'Funding'],
    featuredImage: '/api/placeholder/600/300'
  }
];

const categories = ['All', 'Visa & Immigration', 'Success Stories', 'Industry Insights', 'Healthcare', 'Entrepreneurship'];

function BlogCard({ post, featured = false }: { post: typeof blogPosts[0]; featured?: boolean }) {
  if (featured) {
    return (
      <article className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 transition-all duration-300 hover:shadow-lg group">
        <div className="aspect-[2/1] overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readingTime}</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors mb-4 line-clamp-2">
            {post.title}
          </h2>
          
          <p className="text-gray-600 mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500">{post.authorTitle}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 transition-all duration-300 hover:shadow-lg group">
      <div className="flex items-center space-x-4 mb-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {post.category}
        </span>
        <span className="text-sm text-gray-500">{post.readingTime}</span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors mb-3 line-clamp-2">
        {post.title}
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-xs font-medium text-gray-900">{post.author}</p>
            <p className="text-xs text-gray-500">{post.authorTitle}</p>
          </div>
        </div>
        <span className="text-xs text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          })}
        </span>
      </div>
    </article>
  );
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="pt-24 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              Insights & Stories
            </h1>
            <p className="mt-6 text-xl text-gray-600 text-balance">
              Expert insights on Malaysian talent acquisition, career development, and success stories from extraordinary professionals who are building Malaysia's future.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto container-padding py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto container-padding pb-16">
        {filteredPosts.length > 0 ? (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
                <BlogCard post={featuredPost} featured={true} />
              </div>
            )}

            {/* Regular Posts */}
            {regularPosts.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No articles found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search criteria or category filter.</p>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto container-padding py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
            <p className="mt-4 text-lg text-gray-600">
              Get the latest insights on Malaysian talent trends and career opportunities delivered to your inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg sm:rounded-r-none rounded-r-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="mt-3 sm:mt-0 btn-primary rounded-l-none">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}