import { Link } from '@remix-run/react';

const profiles = [
  { 
    name: "Ahmad Rahman", 
    achievement: "10M+ Followers on LinkedIn", 
    description: "Building Malaysia's AI future", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face"
  },
  { 
    name: "Siti Nurhaliza", 
    achievement: "Listed as 30 under 30 most inspiring by Forbes Asia", 
    description: "Leading fintech revolution",
    image: "https://images.unsplash.com/photo-1494790108755-2616b512d0b7?w=400&h=600&fit=crop&crop=face"
  },
  { 
    name: "Raj Kumar", 
    achievement: "Malaysia's Youngest Unicorn Founder", 
    description: "Transforming Southeast Asia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face"
  },
  { 
    name: "Michelle Tan", 
    achievement: "Stanford Research Scholar", 
    description: "Quantum computing pioneer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face"
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-white mb-16 leading-tight tracking-tight text-center">
          We bring extraordinary
          <br />
          talent to Malaysia.
        </h1>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="relative h-96 overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${profile.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-start">
                <div className="text-white">
                  <h3 className="text-lg font-medium mb-2 leading-tight">
                    {profile.achievement}
                  </h3>
                  <p className="text-sm opacity-90 mb-2">
                    {profile.description}
                  </p>
                  <p className="text-xs opacity-75">
                    {profile.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/evaluation" 
            className="btn-primary text-base px-8 py-3 text-center inline-block"
          >
            Check Eligibility
          </Link>
          <Link 
            to="/directory" 
            className="btn-secondary text-base px-8 py-3 text-center inline-block"
          >
            See Who Qualified
          </Link>
        </div>
      </div>
    </section>
  );
}