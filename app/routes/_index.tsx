import type { MetaFunction } from '@remix-run/node';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';
import ProfileCard from '~/components/ProfileCard';

export const meta: MetaFunction = () => {
  return [
    { title: 'Build.Malaysia · Extraordinary Talent Network for Malaysia' },
    { name: 'description', content: 'We bring extraordinary talent to Malaysia. Connect with top-tier Malaysian professionals who have excelled at the world\'s most prestigious companies and are now giving back to their homeland.' },
    { name: 'keywords', content: 'Malaysia, talent, professionals, network, careers, extraordinary, Build.Malaysia, O1 visa, EB1A, talent acquisition' },
    { name: 'author', content: 'Build.Malaysia' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { name: 'theme-color', content: '#000000' },
    
    // Open Graph tags
    { property: 'og:title', content: 'Build.Malaysia · Extraordinary Talent Network for Malaysia' },
    { property: 'og:description', content: 'We bring extraordinary talent to Malaysia. Connect with top-tier Malaysian professionals who have excelled at the world\'s most prestigious companies.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://buildmalaysia.com' },
    { property: 'og:site_name', content: 'Build.Malaysia' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:image', content: 'https://buildmalaysia.com/og-image.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Build.Malaysia - Extraordinary Talent Network' },
    
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@buildmalaysia' },
    { name: 'twitter:creator', content: '@buildmalaysia' },
    { name: 'twitter:title', content: 'Build.Malaysia · Extraordinary Talent Network for Malaysia' },
    { name: 'twitter:description', content: 'We bring extraordinary talent to Malaysia. Connect with top-tier Malaysian professionals who have excelled at the world\'s most prestigious companies.' },
    { name: 'twitter:image', content: 'https://buildmalaysia.com/twitter-image.jpg' },
    { name: 'twitter:image:alt', content: 'Build.Malaysia - Extraordinary Talent Network' },
    
    // Additional SEO tags
    { name: 'application-name', content: 'Build.Malaysia' },
    { name: 'apple-mobile-web-app-title', content: 'Build.Malaysia' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    
    // Canonical URL
    { tagName: 'link', rel: 'canonical', href: 'https://buildmalaysia.com' },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section with Profile Cards */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-16 leading-tight">
            We bring extraordinary talent to Malaysia.
          </h1>
          
          {/* Profile Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            <ProfileCard 
              title="Founding CTO at Brex"
              name="Jonathan Lima"
              countryCode="BR"
            />
            <ProfileCard 
              title="Director of Product @ Ramp"
              name="Shubham Agarwal"
              countryCode="IN"
            />
            <ProfileCard 
              title="Apple WWDC Winner"
              name="Mokshit Jain"
              countryCode="IN"
            />
            <ProfileCard 
              title="Youngest MIT 35 Under 35 in AI at 15"
              name="Riya Edwards"
              countryCode="ES"
            />
          </div>
        </div>
      </section>

      {/* Talent Pass Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-8">
            The Talent Pass is for <em className="italic">Extraordinary</em> Ability
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            It allows the world's top 0.1% of talent to work on Malaysian soil
          </p>
        </div>
      </section>

      {/* Talent List Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6 text-lg">
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="text-white font-medium">Founder & CEO of Vercel</div>
              <div className="text-gray-500">Argentina</div>
              <div className="text-gray-400">Guillermo Rauch</div>
            </div>
            
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="text-white font-medium">CEO of Y Combinator</div>
              <div className="text-gray-500">Canada</div>
              <div className="text-gray-400">Garry Tan</div>
            </div>
            
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="text-white font-medium">Researcher of Autopilot AI @ Tesla</div>
              <div className="text-gray-500">India</div>
              <div className="text-gray-400">Dhaval Shroff</div>
            </div>
            
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="text-white font-medium">CEO of RepLit</div>
              <div className="text-gray-500">Jordan</div>
              <div className="text-gray-400">Amjad Masad</div>
            </div>
            
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="text-white font-medium">Reverse Engineering Technologist</div>
              <div className="text-gray-500">Hong Kong</div>
              <div className="text-gray-400">Jane Manchun Wong</div>
            </div>
            
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="text-white font-medium">Founder of New Computer</div>
              <div className="text-gray-500">China</div>
              <div className="text-gray-400">Jason Yuan</div>
            </div>
            
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="text-white font-medium">Inventor & Founder of LightCell Energy</div>
              <div className="text-gray-500">Canada</div>
              <div className="text-gray-400">Danielle Fong</div>
            </div>
            
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="text-white font-medium">Research Scientist @ Deepmind</div>
              <div className="text-gray-500">Romania</div>
              <div className="text-gray-400">Stefania Druga</div>
            </div>
            
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="text-white font-medium">Founder of Composite</div>
              <div className="text-gray-500">New Zealand</div>
              <div className="text-gray-400">Yang Fan Yun</div>
            </div>
            
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="text-white font-medium">Creator behind Beluga (10M+ Subs)</div>
              <div className="text-gray-500">Canada</div>
              <div className="text-gray-400">Braden Boyko</div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-12">
            Extraordinary Technology
            <br />
            Companies Trust Us.
          </h2>
          <p className="text-xl text-gray-400 mb-16">
            Across AI / Chips / Crypto / Fintech / Consumer / Biotech / Robotics
          </p>
          
          {/* 2x2 Companies Grid */}
          <div className="grid grid-cols-2 gap-1 border border-white/20">
            <div className="aspect-video bg-black border-r border-white/20 border-b border-white/20 flex items-center justify-center p-8">
              <div className="text-white text-2xl font-light tracking-wider">
                ramp
              </div>
            </div>
            <div className="aspect-video bg-black border-b border-white/20 flex items-center justify-center p-8">
              <div className="text-white text-2xl font-light">
                Lovable
              </div>
            </div>
            <div className="aspect-video bg-black border-r border-white/20 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-16 h-12 bg-gray-600 mx-auto mb-2"></div>
                <div className="text-white text-xs tracking-widest">FOUNDERS FUND</div>
              </div>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center p-8">
              <div className="text-white text-2xl font-light flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20"></div>
                Cognition
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-normal text-white mb-12">
                Working with Build.Malaysia
              </h2>
            </div>
            
            <div className="bg-black border border-white/20 p-8">
              <div className="mb-8">
                <p className="text-white text-lg mb-6 leading-relaxed">
                  Build.Malaysia was a seamless experience. They handled everything—like 
                  helping me prepare letters for Mr. Beast and other creators to sign—and got my 
                  visa approved in days.
                </p>
                <p className="text-white text-lg leading-relaxed">
                  The team was incredibly responsive and I'm excited to keep working with 
                  Build.Malaysia for my MM2H application.
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700"></div>
                  <div>
                    <div className="text-white font-medium">Braden Boyko</div>
                    <div className="text-gray-400">Beluga, Youtuber</div>
                  </div>
                </div>
                
                <button className="btn-primary">
                  See Profile
                </button>
              </div>
              
              <div className="flex space-x-2 mt-6">
                <div className="h-1 w-8 bg-white"></div>
                <div className="h-1 w-1 bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}