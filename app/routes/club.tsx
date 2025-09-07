import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Club · Build.Malaysia' },
    { name: 'description', content: 'Join an exclusive community of extraordinary Malaysian professionals. Connect, collaborate, and contribute to Malaysia\'s future through our elite talent network.' },
    { name: 'keywords', content: 'Malaysia talent club, exclusive network, professionals community, extraordinary talent, elite membership' },
    { property: 'og:title', content: 'Club · Build.Malaysia' },
    { property: 'og:description', content: 'Join an exclusive community of extraordinary Malaysian professionals.' },
    { name: 'twitter:title', content: 'Club · Build.Malaysia' },
    { name: 'twitter:description', content: 'Join an exclusive community of extraordinary Malaysian professionals.' },
  ];
};

const membershipTiers = [
  {
    id: 1,
    name: 'Explorer',
    price: 'Free',
    description: 'Perfect for discovering the community and exploring opportunities',
    features: [
      'Access to monthly virtual networking events',
      'Basic directory access (limited profiles)',
      'Monthly newsletter with industry insights',
      'Community forums participation',
      'Job board access (view only)'
    ],
    limitations: [
      'Limited to 5 profile connections per month',
      'No access to premium content',
      'Standard support only'
    ],
    buttonText: 'Join Free',
    popular: false
  },
  {
    id: 2,
    name: 'Professional',
    price: 'RM 299/month',
    description: 'For active professionals ready to engage and grow',
    features: [
      'All Explorer benefits',
      'Full directory access with advanced search',
      'Unlimited profile connections',
      'Access to all virtual and in-person events',
      'Premium content library',
      'Job board with application features',
      'Mentorship program participation',
      'Regional WhatsApp groups',
      'Quarterly industry reports'
    ],
    limitations: [
      'Regional events only (no global access)',
      'Standard networking tools'
    ],
    buttonText: 'Start Professional',
    popular: true
  },
  {
    id: 3,
    name: 'Executive',
    price: 'RM 899/month',
    description: 'For senior leaders and high-impact professionals',
    features: [
      'All Professional benefits',
      'Global event access (KL, Singapore, London, SF)',
      'Executive roundtables and private dinners',
      'Priority access to investment opportunities',
      'Personal brand building support',
      'Speaking opportunities at events',
      'Direct line to TalentCorp liaisons',
      'Family program benefits',
      'Concierge relocation services',
      'Annual executive retreat invitation'
    ],
    limitations: [],
    buttonText: 'Apply for Executive',
    popular: false
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Malaysia Tech Leaders Summit 2024',
    date: '2024-03-15',
    time: '2:00 PM - 6:00 PM',
    location: 'Kuala Lumpur Convention Centre',
    type: 'In-Person',
    attendees: 120,
    maxAttendees: 150,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center',
    description: 'Annual gathering of Malaysian tech leaders from global companies.'
    speakers: ['Ahmad Rahman (Google)', 'Sarah Lim (Former Goldman Sachs)', 'Dr. Priya (DeepMind)']
  },
  {
    id: 2,
    title: 'Virtual Coffee Chat: Fintech Innovation',
    date: '2024-02-28',
    time: '8:00 AM - 9:00 AM',
    location: 'Virtual (Zoom)',
    type: 'Virtual',
    attendees: 45,
    maxAttendees: 50,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=200&fit=crop&crop=center',
    description: 'Informal discussion on the latest trends in Malaysian fintech.'
    speakers: ['Marcus Tan (JPMorgan)', 'Lisa Wong (Grab Financial)']
  },
  {
    id: 3,
    title: 'Healthcare Innovation Roundtable',
    date: '2024-03-08',
    time: '7:00 PM - 9:00 PM',
    location: 'Private Venue, KLCC',
    type: 'In-Person',
    attendees: 25,
    maxAttendees: 30,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=200&fit=crop&crop=center',
    description: 'Exclusive discussion on transforming Malaysia\'s healthcare system.'
    speakers: ['Dr. Raj Patel (Johns Hopkins)', 'Dr. Amy Chen (Mayo Clinic)']
  }
];

const testimonials = [
  {
    id: 1,
    content: 'The Build.Malaysia Club connected me with opportunities I never would have discovered on my own. Within 6 months of joining, I was offered a leadership role at a Malaysian unicorn startup.',
    author: 'Ahmad Zafran',
    title: 'Senior Software Engineer at Google',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
  },
  {
    id: 2,
    content: 'The quality of connections and conversations in this community is unmatched. It\'s like having a personal board of advisors from world-class companies.',
    author: 'Dr. Sarah Abdullah',
    title: 'Principal Scientist at Pfizer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b512d0b7?w=60&h=60&fit=crop&crop=face'
  },
  {
    id: 3,
    content: 'From visa guidance to business partnerships, the Club has been instrumental in my successful return to Malaysia. The executive tier benefits are worth every ringgit.',
    author: 'David Lim',
    title: 'Head of Product at Tesla',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
  }
];

const stats = [
  { label: 'Active Members', value: '2,847' },
  { label: 'Countries Represented', value: '47' },
  { label: 'Fortune 500 Companies', value: '183' },
  { label: 'Successful Returns to Malaysia', value: '412' }
];

function MembershipCard({ tier }: { tier: typeof membershipTiers[0] }) {
  return (
    <div className={`relative bg-white rounded-2xl border-2 p-8 ${
      tier.popular 
        ? 'border-black shadow-lg scale-105' 
        : 'border-gray-200 hover:border-gray-300'
    } transition-all duration-300`}>
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
        <div className="mt-2">
          <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
        </div>
        <p className="mt-4 text-gray-600">{tier.description}</p>
      </div>
      
      <div className="space-y-4 mb-8">
        <h4 className="font-semibold text-gray-900">What's included:</h4>
        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        {tier.limitations.length > 0 && (
          <div className="pt-4 border-t border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
            <ul className="space-y-2">
              {tier.limitations.map((limitation, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-500">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
        tier.popular
          ? 'bg-black text-white hover:bg-gray-800'
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        {tier.buttonText}
      </button>
    </div>
  );
}

function EventCard({ event }: { event: typeof upcomingEvents[0] }) {
  const spotsLeft = event.maxAttendees - event.attendees;
  const isAlmostFull = spotsLeft <= 5;
  
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            event.type === 'Virtual'
              ? 'bg-gray-100 text-gray-800'
              : 'bg-gray-100 text-gray-800'
          }`}>
            {event.type}
          </span>
          {isAlmostFull && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Almost Full
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{event.description}</p>
        
        <div className="space-y-2 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {event.time}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {event.location}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            {event.attendees}/{event.maxAttendees} attendees
          </div>
        </div>
        
        {event.speakers.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Featured Speakers:</h4>
            <div className="flex flex-wrap gap-1">
              {event.speakers.map((speaker, index) => (
                <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                  {speaker}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <button className="w-full btn-primary">
          {spotsLeft > 0 ? 'Reserve Spot' : 'Join Waitlist'}
        </button>
      </div>
    </div>
  );
}

export default function Club() {
  const [selectedTier, setSelectedTier] = useState<string>('Professional');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl text-balance">
              Join Malaysia's Most
              <span className="block text-gray-600">
                Extraordinary Network
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 text-balance">
              Connect with elite Malaysian professionals from world-class companies. 
              Access exclusive opportunities, events, and resources to accelerate your impact in Malaysia.
            </p>
            <div className="mt-8 flex justify-center">
              <button className="btn-primary bg-white text-black hover:bg-gray-100">
                Apply for Membership
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Tiers */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Choose Your Membership Level
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Select the membership tier that best fits your career stage and networking goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier) => (
              <MembershipCard key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with fellow members through our carefully curated events and networking opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our Members Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from extraordinary professionals who have transformed their careers through our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8">
                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How to Join
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our membership is carefully curated to ensure the highest quality of professionals and connections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply</h3>
              <p className="text-gray-600">
                Submit your application with professional background, achievements, and connection to Malaysia.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Review</h3>
              <p className="text-gray-600">
                Our membership committee reviews applications based on professional excellence and potential impact.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Welcome</h3>
              <p className="text-gray-600">
                Upon acceptance, gain immediate access to our network, events, and exclusive opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Ready to Join Malaysia's Elite Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards connecting with extraordinary professionals who are building Malaysia's future.
          </p>
          <button className="btn-primary bg-white text-black hover:bg-gray-100 mr-4">
            Apply for Membership
          </button>
          <button className="btn-secondary border-white text-white hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}