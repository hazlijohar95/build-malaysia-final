import type { MetaFunction } from '@remix-run/node';
import Navigation from '~/components/Navigation';
import HeroSection from '~/components/HeroSection';
import ProfilesSection from '~/components/ProfilesSection';
import CompaniesSection from '~/components/CompaniesSection';
import TestimonialsSection from '~/components/TestimonialsSection';
import CTASection from '~/components/CTASection';
import Footer from '~/components/Footer';

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
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProfilesSection />
        <CompaniesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}