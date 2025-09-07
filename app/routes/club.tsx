import type { MetaFunction } from '@remix-run/node';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

export const meta: MetaFunction = () => {
  return [
    { title: 'Club · Build.Malaysia' },
    { name: 'description', content: 'Join an exclusive community of extraordinary Malaysian professionals who have been recognized for their exceptional achievements.' },
    { name: 'keywords', content: 'Malaysia talent club, exclusive network, professionals community, extraordinary talent, elite membership' },
    { property: 'og:title', content: 'Club · Build.Malaysia' },
    { property: 'og:description', content: 'Join an exclusive community of extraordinary Malaysian professionals.' },
    { name: 'twitter:title', content: 'Club · Build.Malaysia' },
    { name: 'twitter:description', content: 'Join an exclusive community of extraordinary Malaysian professionals.' },
  ];
};

// Community photos showing members
const communityPhotos = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=faces',
    alt: 'Community members networking'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces',
    alt: 'Professional collaboration'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=faces',
    alt: 'Team meeting'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1543269664-647b6d7f8dc3?w=400&h=300&fit=crop&crop=faces',
    alt: 'Innovation workshop'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=faces',
    alt: 'Professional development'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop&crop=faces',
    alt: 'Strategic planning session'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=faces',
    alt: 'Knowledge sharing'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=400&h=300&fit=crop&crop=faces',
    alt: 'Leadership development'
  },
];

export default function Club() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative"
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop)',
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white mb-8 leading-tight">
            Were You Deemed Extraordinary
            <br />
            by Malaysia?
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            If you've received recognition as an Extraordinary Individual through Malaysia's talent programs, 
            join our exclusive community and claim your exclusive merchandise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors">
              I'm extraordinary. Claim merchandise!
            </button>
            <button className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors">
              I wanna become extraordinary
            </button>
          </div>
        </div>
      </div>

      {/* Community Photo Gallery */}
      <div className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {communityPhotos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-[4/3] overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Brand Logo Section */}
      <div className="py-16 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm mb-8">
            We bring extraordinary talent to Malaysia.
          </p>
          
          {/* Large Build.Malaysia Logo */}
          <div className="mb-8">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight">
              <span className="font-bold">BUILD</span>
              <span className="font-normal">.</span>
              <span className="font-normal">MALAYSIA</span>
            </h2>
          </div>
          
          <div className="flex justify-center space-x-8 text-gray-400 text-sm">
            <a href="https://twitter.com/buildmalaysia" className="hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com/company/buildmalaysia" className="hover:text-white transition-colors">
              LinkedIn  
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
          
          <p className="text-gray-500 text-xs mt-8">
            © {new Date().getFullYear()} Build.Malaysia · All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}