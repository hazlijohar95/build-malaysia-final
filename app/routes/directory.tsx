import type { MetaFunction } from '@remix-run/node';
import { useState, useMemo } from 'react';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Directory · Build Malaysia' },
    { name: 'description', content: 'Discover extraordinary Malaysian professionals who have excelled at world-class companies. Connect with talent that\'s ready to contribute to Malaysia\'s growth.' },
    { name: 'keywords', content: 'Malaysia talent directory, professionals, networking, extraordinary talent, Malaysian diaspora' },
    { property: 'og:title', content: 'Directory · Build Malaysia' },
    { property: 'og:description', content: 'Discover extraordinary Malaysian professionals who have excelled at world-class companies.' },
    { name: 'twitter:title', content: 'Directory · Build Malaysia' },
    { name: 'twitter:description', content: 'Discover extraordinary Malaysian professionals who have excelled at world-class companies.' },
  ];
};

// Mock data for profiles
const profiles = [
  {
    id: 1,
    name: 'Ahmad Zafran',
    title: 'Senior Software Engineer',
    company: 'Google',
    location: 'Kuala Lumpur, Malaysia',
    expertise: ['Machine Learning', 'Cloud Architecture', 'Distributed Systems'],
    image: '/api/placeholder/150/150',
    background: 'Former Meta, graduated from Stanford University',
    verified: true,
    category: 'Technology'
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    title: 'Investment Director',
    company: 'Goldman Sachs',
    location: 'Singapore',
    expertise: ['Private Equity', 'Venture Capital', 'Financial Analysis'],
    image: '/api/placeholder/150/150',
    background: 'Former McKinsey, Harvard MBA',
    verified: true,
    category: 'Finance'
  },
  {
    id: 3,
    name: 'David Lim',
    title: 'Head of Product',
    company: 'Tesla',
    location: 'Austin, Texas',
    expertise: ['Product Strategy', 'Electric Vehicles', 'Manufacturing'],
    image: '/api/placeholder/150/150',
    background: 'Former Apple, MIT graduate',
    verified: true,
    category: 'Technology'
  },
  {
    id: 4,
    name: 'Priya Krishnan',
    title: 'Research Scientist',
    company: 'DeepMind',
    location: 'London, UK',
    expertise: ['Artificial Intelligence', 'Neural Networks', 'Computer Vision'],
    image: '/api/placeholder/150/150',
    background: 'Former OpenAI, PhD from Cambridge',
    verified: true,
    category: 'Research'
  },
  {
    id: 5,
    name: 'Marcus Tan',
    title: 'Managing Director',
    company: 'JPMorgan Chase',
    location: 'Hong Kong',
    expertise: ['Investment Banking', 'M&A', 'Capital Markets'],
    image: '/api/placeholder/150/150',
    background: 'Former Goldman Sachs, Wharton MBA',
    verified: true,
    category: 'Finance'
  },
  {
    id: 6,
    name: 'Dr. Sarah Abdullah',
    title: 'Principal Scientist',
    company: 'Pfizer',
    location: 'New York, NY',
    expertise: ['Drug Discovery', 'Biotechnology', 'Clinical Research'],
    image: '/api/placeholder/150/150',
    background: 'Former Roche, PhD from Oxford',
    verified: true,
    category: 'Healthcare'
  }
];

const categories = ['All', 'Technology', 'Finance', 'Healthcare', 'Research'];
const locations = ['All Locations', 'Malaysia', 'Singapore', 'USA', 'UK', 'Hong Kong'];

function ProfileCard({ profile }: { profile: typeof profiles[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 transition-all duration-300 hover:shadow-lg group">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-16 h-16 rounded-full object-cover bg-gray-100"
          />
          {profile.verified && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-black rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-black transition-colors">
                {profile.name}
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                {profile.title}
              </p>
              <p className="text-sm text-gray-500">
                {profile.company}
              </p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {profile.category}
            </span>
          </div>
          
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-2">{profile.background}</p>
            <div className="flex items-center text-xs text-gray-500 mb-3">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {profile.location}
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {profile.expertise.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200"
                >
                  {skill}
                </span>
              ))}
              {profile.expertise.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-50 text-gray-500">
                  +{profile.expertise.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex space-x-3">
        <button className="flex-1 bg-black text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200">
          Connect
        </button>
        <button className="px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [sortBy, setSortBy] = useState('name');

  const filteredAndSortedProfiles = useMemo(() => {
    let filtered = profiles.filter(profile => {
      const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           profile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           profile.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           profile.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || profile.category === selectedCategory;
      
      const matchesLocation = selectedLocation === 'All Locations' || 
                             profile.location.includes(selectedLocation === 'USA' ? 'Texas' : selectedLocation);
      
      return matchesSearch && matchesCategory && matchesLocation;
    });

    // Sort profiles
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'company':
          return a.company.localeCompare(b.company);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedLocation, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="pt-24 pb-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl text-balance">
              Extraordinary Talent Directory
            </h1>
            <p className="mt-6 text-xl text-gray-600 text-balance">
              Connect with Malaysian professionals who have excelled at the world's most prestigious companies and are ready to contribute to Malaysia's growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                {profiles.length} verified professionals
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                {new Set(profiles.map(p => p.company)).size} top companies represented
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search professionals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="company">Sort by Company</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            Showing {filteredAndSortedProfiles.length} of {profiles.length} professionals
          </p>
        </div>

        {filteredAndSortedProfiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No professionals found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search criteria or filters.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto container-padding py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Want to join our directory?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              If you're an extraordinary professional with ties to Malaysia, we'd love to have you in our network.
            </p>
            <button className="mt-8 btn-primary">
              Apply to Join
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}