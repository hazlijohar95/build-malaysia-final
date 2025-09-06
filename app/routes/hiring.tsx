import type { MetaFunction } from '@remix-run/node';
import { useState, useMemo } from 'react';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Hiring · Build Malaysia' },
    { name: 'description', content: 'Discover exceptional career opportunities with leading Malaysian companies and startups. Connect with employers seeking extraordinary talent to build Malaysia\'s future.' },
    { name: 'keywords', content: 'Malaysia jobs, career opportunities, hiring, recruitment, extraordinary talent, Malaysian companies' },
    { property: 'og:title', content: 'Hiring · Build Malaysia' },
    { property: 'og:description', content: 'Discover exceptional career opportunities with leading Malaysian companies and startups.' },
    { name: 'twitter:title', content: 'Hiring · Build Malaysia' },
    { name: 'twitter:description', content: 'Discover exceptional career opportunities with leading Malaysian companies and startups.' },
  ];
};

const jobListings = [
  {
    id: 1,
    title: 'Senior Software Architect',
    company: 'Grab Malaysia',
    location: 'Kuala Lumpur',
    type: 'Full-time',
    remote: 'Hybrid',
    salary: 'RM 180,000 - 250,000',
    experience: '8+ years',
    skills: ['System Design', 'Microservices', 'Cloud Architecture', 'Team Leadership'],
    description: 'Lead the architectural design of our next-generation fintech platform serving millions of users across Southeast Asia. Work with cutting-edge technologies and shape the future of digital payments in the region.',
    requirements: [
      'Master\'s degree in Computer Science or related field',
      '8+ years of software development experience',
      'Experience with large-scale distributed systems',
      'Strong leadership and mentoring capabilities',
      'Previous experience in fintech or e-commerce preferred'
    ],
    benefits: [
      'Competitive salary with equity participation',
      'Comprehensive medical coverage for family',
      'Flexible working arrangements',
      'Professional development budget',
      'Annual performance bonus'
    ],
    postedDate: '2024-01-18',
    urgent: true,
    featured: true,
    companyLogo: '/api/placeholder/80/80',
    applicationDeadline: '2024-02-28'
  },
  {
    id: 2,
    title: 'Head of Investment Banking',
    company: 'CIMB Group',
    location: 'Kuala Lumpur',
    type: 'Full-time',
    remote: 'On-site',
    salary: 'RM 400,000 - 600,000',
    experience: '12+ years',
    skills: ['M&A', 'Capital Markets', 'Client Relationship', 'Strategic Planning'],
    description: 'Lead our investment banking division and drive growth across ASEAN markets. This role offers the opportunity to work on landmark deals and shape the future of capital markets in Southeast Asia.',
    requirements: [
      'MBA from top-tier institution',
      '12+ years in investment banking',
      'Proven track record in M&A and capital raising',
      'Strong network in ASEAN markets',
      'Excellent client relationship management skills'
    ],
    benefits: [
      'Executive compensation package',
      'Performance-based bonuses',
      'Executive health screening',
      'International assignment opportunities',
      'Stock option participation'
    ],
    postedDate: '2024-01-15',
    urgent: false,
    featured: true,
    companyLogo: '/api/placeholder/80/80',
    applicationDeadline: '2024-03-15'
  },
  {
    id: 3,
    title: 'Chief Technology Officer',
    company: 'Malaysian Fintech Startup',
    location: 'Kuala Lumpur',
    type: 'Full-time',
    remote: 'Hybrid',
    salary: 'RM 300,000 - 450,000 + Equity',
    experience: '10+ years',
    skills: ['Technical Leadership', 'Product Strategy', 'Team Building', 'Blockchain'],
    description: 'Join a rapidly growing fintech startup as CTO and build the technology infrastructure for Malaysia\'s next financial services unicorn. Lead a world-class engineering team.',
    requirements: [
      'Strong technical background with leadership experience',
      '10+ years in senior technology roles',
      'Experience scaling engineering teams (50+ engineers)',
      'Background in fintech or financial services',
      'Experience with blockchain and DeFi technologies'
    ],
    benefits: [
      'Significant equity stake in the company',
      'Competitive base salary',
      'Build and lead your own team',
      'Direct reporting to CEO',
      'International expansion opportunities'
    ],
    postedDate: '2024-01-12',
    urgent: true,
    featured: false,
    companyLogo: '/api/placeholder/80/80',
    applicationDeadline: '2024-02-20'
  },
  {
    id: 4,
    title: 'Principal Data Scientist',
    company: 'Genting Group',
    location: 'Kuala Lumpur',
    type: 'Full-time',
    remote: 'Hybrid',
    salary: 'RM 160,000 - 220,000',
    experience: '6+ years',
    skills: ['Machine Learning', 'AI/ML', 'Python', 'Statistical Modeling'],
    description: 'Drive data science initiatives across our hospitality and gaming businesses. Apply advanced analytics to optimize operations and enhance customer experiences.',
    requirements: [
      'PhD in Data Science, Statistics, or related field',
      '6+ years of hands-on data science experience',
      'Expertise in machine learning and statistical modeling',
      'Experience with large-scale data processing',
      'Strong communication and presentation skills'
    ],
    benefits: [
      'Competitive salary package',
      'Annual performance bonus',
      'Professional development opportunities',
      'Health and wellness programs',
      'Employee discounts at Genting properties'
    ],
    postedDate: '2024-01-10',
    urgent: false,
    featured: false,
    companyLogo: '/api/placeholder/80/80',
    applicationDeadline: '2024-02-25'
  },
  {
    id: 5,
    title: 'Medical Director - Oncology',
    company: 'KPJ Healthcare',
    location: 'Kuala Lumpur',
    type: 'Full-time',
    remote: 'On-site',
    salary: 'RM 250,000 - 350,000',
    experience: '15+ years',
    skills: ['Clinical Leadership', 'Oncology', 'Research', 'Team Management'],
    description: 'Lead our oncology department and establish Malaysia as a regional center of excellence for cancer treatment. Opportunity to shape cancer care across Southeast Asia.',
    requirements: [
      'Medical degree with oncology specialization',
      '15+ years of clinical experience',
      'Board certification in oncology',
      'Research and publication experience',
      'Leadership experience in healthcare settings'
    ],
    benefits: [
      'Executive medical package',
      'Research funding support',
      'Conference and training allowances',
      'Medical indemnity coverage',
      'Sabbatical leave opportunities'
    ],
    postedDate: '2024-01-08',
    urgent: false,
    featured: false,
    companyLogo: '/api/placeholder/80/80',
    applicationDeadline: '2024-03-10'
  },
  {
    id: 6,
    title: 'VP of Product Strategy',
    company: 'Aerodyne Group',
    location: 'Cyberjaya',
    type: 'Full-time',
    remote: 'Hybrid',
    salary: 'RM 200,000 - 280,000',
    experience: '8+ years',
    skills: ['Product Management', 'Strategy', 'Drone Technology', 'Market Analysis'],
    description: 'Drive product strategy for leading drone technology company. Shape the future of autonomous systems and AI-powered solutions across multiple industries.',
    requirements: [
      'Engineering or MBA background',
      '8+ years in product management roles',
      'Experience with B2B technology products',
      'Understanding of emerging technologies (AI, IoT, Drones)',
      'Strong analytical and strategic thinking skills'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Stock option participation',
      'International travel opportunities',
      'Professional development budget',
      'Health and wellness benefits'
    ],
    postedDate: '2024-01-05',
    urgent: false,
    featured: false,
    companyLogo: '/api/placeholder/80/80',
    applicationDeadline: '2024-02-15'
  }
];

const companies = [
  {
    id: 1,
    name: 'Grab Malaysia',
    industry: 'Technology',
    size: '1000+ employees',
    description: 'Southeast Asia\'s leading super app offering ride-hailing, food delivery, digital payments, and financial services.',
    culture: 'Innovation-driven, diverse, and collaborative environment focused on solving real-world problems.',
    openPositions: 12,
    logo: '/api/placeholder/120/120',
    website: 'https://grab.com/my',
    benefits: ['Equity participation', 'Flexible work', 'Health coverage', 'Learning budget']
  },
  {
    id: 2,
    name: 'CIMB Group',
    industry: 'Financial Services',
    size: '5000+ employees',
    description: 'Leading ASEAN universal bank providing consumer banking, commercial banking, and investment banking services.',
    culture: 'Professional excellence, customer-centric approach, and commitment to developing local talent.',
    openPositions: 8,
    logo: '/api/placeholder/120/120',
    website: 'https://cimb.com',
    benefits: ['Executive packages', 'International assignments', 'Performance bonuses', 'Executive health']
  },
  {
    id: 3,
    name: 'Genting Group',
    industry: 'Hospitality & Gaming',
    size: '3000+ employees',
    description: 'Multinational conglomerate with businesses in gaming, hospitality, plantations, property development, and cruise lines.',
    culture: 'Entrepreneurial spirit, innovation, and commitment to excellence in customer service.',
    openPositions: 15,
    logo: '/api/placeholder/120/120',
    website: 'https://genting.com',
    benefits: ['Career development', 'Global opportunities', 'Employee discounts', 'Wellness programs']
  },
  {
    id: 4,
    name: 'KPJ Healthcare',
    industry: 'Healthcare',
    size: '2000+ employees',
    description: 'Malaysia\'s largest private healthcare provider operating 28 hospitals across the country.',
    culture: 'Patient-centered care, medical excellence, and continuous professional development.',
    openPositions: 6,
    logo: '/api/placeholder/120/120',
    website: 'https://kpj.com',
    benefits: ['Medical coverage', 'Research funding', 'Conference allowances', 'Continuing education']
  }
];

const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Freelance'];
const remoteOptions = ['All Remote Options', 'On-site', 'Hybrid', 'Remote'];
const industries = ['All Industries', 'Technology', 'Financial Services', 'Healthcare', 'Manufacturing', 'Consulting'];
const locations = ['All Locations', 'Kuala Lumpur', 'Selangor', 'Penang', 'Johor', 'Cyberjaya'];

function JobCard({ job }: { job: typeof jobListings[0] }) {
  const daysAgo = Math.floor((new Date().getTime() - new Date(job.postedDate).getTime()) / (1000 * 60 * 60 * 24));
  
  return (
    <div className={`bg-white rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-lg group ${
      job.featured ? 'border-gray-300 shadow-sm' : 'border-gray-100 hover:border-gray-200'
    }`}>
      {job.featured && (
        <div className="flex items-center mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured
          </span>
          {job.urgent && (
            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Urgent Hiring
            </span>
          )}
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-4 flex-1">
          <img
            src={job.companyLogo}
            alt={job.company}
            className="w-12 h-12 rounded-lg object-cover bg-gray-100 flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors mb-1">
              {job.title}
            </h3>
            <p className="text-gray-600 font-medium mb-1">{job.company}</p>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {job.location}
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                {job.type}
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {job.remote}
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-right flex-shrink-0">
          <div className="text-lg font-bold text-gray-900">{job.salary}</div>
          <div className="text-sm text-gray-500">{job.experience}</div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
      
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.skills.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {skill}
          </span>
        ))}
        {job.skills.length > 4 && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
            +{job.skills.length - 4} more
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {daysAgo === 0 ? 'Posted today' : `Posted ${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`}
        </div>
        
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
            Save
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

function CompanyCard({ company }: { company: typeof companies[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start space-x-4 mb-6">
        <img
          src={company.logo}
          alt={company.name}
          className="w-16 h-16 rounded-xl object-cover bg-gray-100"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{company.name}</h3>
          <p className="text-gray-600 mb-2">{company.industry} • {company.size}</p>
          <p className="text-sm text-gray-600 line-clamp-2">{company.description}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Company Culture</h4>
        <p className="text-sm text-gray-600">{company.culture}</p>
      </div>
      
      <div className="flex flex-wrap gap-1 mb-6">
        {company.benefits.map((benefit) => (
          <span
            key={benefit}
            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
          >
            {benefit}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-900">{company.openPositions}</span> open positions
        </div>
        <div className="flex space-x-2">
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Visit Website
          </a>
          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
            View Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hiring() {
  const [activeTab, setActiveTab] = useState('jobs');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedRemote, setSelectedRemote] = useState('All Remote Options');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const filteredJobs = useMemo(() => {
    return jobListings.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesType = selectedType === 'All Types' || job.type === selectedType;
      const matchesRemote = selectedRemote === 'All Remote Options' || job.remote === selectedRemote;
      const matchesIndustry = selectedIndustry === 'All Industries' || 
                             (selectedIndustry === 'Technology' && (job.company.includes('Grab') || job.company.includes('Fintech') || job.company.includes('Aerodyne'))) ||
                             (selectedIndustry === 'Financial Services' && job.company.includes('CIMB')) ||
                             (selectedIndustry === 'Healthcare' && job.company.includes('KPJ'));
      const matchesLocation = selectedLocation === 'All Locations' || job.location.includes(selectedLocation);
      
      return matchesSearch && matchesType && matchesRemote && matchesIndustry && matchesLocation;
    });
  }, [searchQuery, selectedType, selectedRemote, selectedIndustry, selectedLocation]);

  const featuredJobs = filteredJobs.filter(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              Extraordinary Opportunities
              <span className="block text-gray-600">
                Await in Malaysia
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 text-balance">
              Discover career-defining opportunities with Malaysia's leading companies. 
              Join organizations that are shaping the future of business in Southeast Asia.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                {jobListings.length} active positions
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                {companies.length} hiring companies
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gray-600 rounded-full mr-2"></div>
                Average salary: RM 150K - 400K
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto container-padding">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'jobs'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Job Opportunities ({filteredJobs.length})
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'companies'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } transition-colors duration-200`}
            >
              Hiring Companies ({companies.length})
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'jobs' && (
        <>
          {/* Filters */}
          <div className="bg-gray-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto container-padding py-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Search */}
                <div className="lg:col-span-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search jobs, companies, skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Filters */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>

                  <select
                    value={selectedRemote}
                    onChange={(e) => setSelectedRemote(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    {remoteOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>

                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>

                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="max-w-7xl mx-auto container-padding py-12">
            <div className="mb-8">
              <p className="text-sm text-gray-600">
                Showing {filteredJobs.length} of {jobListings.length} positions
              </p>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="space-y-8">
                {/* Featured Jobs */}
                {featuredJobs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Positions</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                      {featuredJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Jobs */}
                {regularJobs.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">All Positions</h2>
                    <div className="space-y-4">
                      {regularJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">No jobs found</h3>
                <p className="mt-2 text-gray-500">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </>
      )}

      {activeTab === 'companies' && (
        <div className="max-w-7xl mx-auto container-padding py-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Companies Hiring Extraordinary Talent</h2>
            <p className="text-gray-600">
              Discover leading Malaysian companies that are actively seeking exceptional professionals to join their teams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto container-padding py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              Ready to Launch Your Malaysia Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of extraordinary professionals who have found their dream opportunities in Malaysia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-black hover:bg-gray-100">
                Create Profile
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-black">
                Upload Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}