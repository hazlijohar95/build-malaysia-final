import type { MetaFunction } from '@remix-run/node';
import { useState, useMemo } from 'react';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Directory · Build.Malaysia' },
    { name: 'description', content: 'Search extraordinary Malaysian professionals who have been recognized for their exceptional achievements.' },
    { name: 'keywords', content: 'Malaysia talent directory, professionals, networking, extraordinary talent, Malaysian diaspora' },
    { property: 'og:title', content: 'Directory · Build.Malaysia' },
    { property: 'og:description', content: 'Search extraordinary Malaysian professionals who have been recognized for their exceptional achievements.' },
    { name: 'twitter:title', content: 'Directory · Build.Malaysia' },
    { name: 'twitter:description', content: 'Search extraordinary Malaysian professionals who have been recognized for their exceptional achievements.' },
  ];
};

// Profile data exactly matching reference structure  
const profiles = [
  {
    id: 1,
    name: 'Ahmad Zafran',
    title: 'CEO, TechMalaysia',
    fromLocation: 'Kuala Lumpur',
    toLocation: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    badges: ['O1A', 'YC', 'Techstars', 'Depict'],
    tags: ['O-1A', 'Founders']
  },
  {
    id: 2,
    name: 'Arlan Rakhmetzhan',
    title: 'Founder of Nozomio AI (YC S25)',
    fromLocation: 'Penang',
    toLocation: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    badges: ['O1A', 'YC', 'F', 'N'],
    tags: ['O-1A', 'Founders']
  },
  {
    id: 3,
    name: 'Andrej Karpathy',
    title: 'Co-founder of OpenAI, Tesla, Autopilot',
    fromLocation: 'Johor',
    toLocation: 'San Francisco, CA', 
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    badges: ['EB1A', 'Tesla', 'OpenAI', 'Stanford'],
    tags: ['EB-1A', 'Founders']
  },
  {
    id: 4,
    name: 'Sigil Wen',
    title: 'Founder of Extraordinary',
    fromLocation: 'Selangor',
    toLocation: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    badges: ['O1A', 'EB1A', 'Extraordinary', 'A16z'],
    tags: ['O-1A', 'EB-1A', 'Founders']
  },
  {
    id: 5,
    name: 'Guillermo Rauch',
    title: 'CEO of Vercel',
    fromLocation: 'Sabah',
    toLocation: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=face',
    badges: ['O1A', 'EB1A', 'Vercel', 'Next.js'],
    tags: ['O-1A', 'EB-1A', 'Software Engineers']
  }
];

// Filter tags exactly matching reference
const filterTags = [
  'O-1A',
  'Founders', 
  'Canada',
  'Members at a16z',
  'Software Engineers',
  'Featured in SF Standard'
];

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredProfiles = useMemo(() => {
    return profiles.filter(profile => {
      const matchesSearch = searchQuery === '' || 
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.fromLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.toLocation.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilters = activeFilters.length === 0 || 
        activeFilters.every(filter => profile.tags.includes(filter));

      return matchesSearch && matchesFilters;
    });
  }, [searchQuery, activeFilters]);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Headline - Exactly like reference */}
          <h1 className="text-6xl font-normal text-white mb-10 leading-tight">
            Search Extraordinary
          </h1>

          {/* Search Bar - Large white bar exactly like reference */}
          <div className="mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full h-12 pl-12 pr-4 bg-white border-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none text-base"
                placeholder="Search by profession, location, or organizations"
              />
            </div>
          </div>

          {/* Filter Tags - White buttons exactly like reference */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleFilter(tag)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilters.includes(tag)
                    ? 'bg-gray-600 text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Profile Grid - 3 columns exactly like reference */}
          <div className="grid grid-cols-3 gap-1 border border-gray-500">
            {filteredProfiles.map((profile, index) => (
              <div
                key={profile.id}
                className={`bg-black p-6 hover:bg-gray-950 transition-colors cursor-pointer group ${
                  index % 3 !== 2 ? 'border-r border-gray-500' : ''
                } ${
                  Math.floor(index / 3) !== Math.floor((filteredProfiles.length - 1) / 3) ? 'border-b border-gray-500' : ''
                }`}
              >
                {/* Profile Content - Exactly matching reference layout */}
                <div className="flex items-start gap-4">
                  {/* Profile Image */}
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-16 h-16 object-cover flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  
                  {/* Profile Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-1 leading-tight">
                      {profile.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">
                      {profile.title}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      {profile.fromLocation} → {profile.toLocation}
                    </p>
                    
                    {/* Badges Row - Exactly like reference */}
                    <div className="flex flex-wrap gap-1">
                      {profile.badges.map((badge, badgeIndex) => (
                        <div
                          key={badgeIndex}
                          className={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium ${
                            badge === 'O1A' || badge === 'EB1A' 
                              ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                              : 'bg-gray-700 text-white border border-gray-600'
                          }`}
                        >
                          {badge}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProfiles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                No profiles match your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilters([]);
                }}
                className="mt-4 text-white hover:text-gray-300 underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}