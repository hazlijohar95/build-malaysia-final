import { useState, useEffect } from 'react';

const profiles = [
  { 
    name: "Ahmad Rahman", 
    subtitle: "Built ML platform serving 50M+ users", 
    country: "from Malaysia", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  },
  { 
    name: "Siti Nurhaliza", 
    subtitle: "Led $100M product at scale", 
    country: "from Malaysia",
    image: "https://images.unsplash.com/photo-1494790108755-2616b512d0b7?w=80&h=80&fit=crop&crop=face"
  },
  { 
    name: "Raj Kumar", 
    subtitle: "Founded unicorn startup", 
    country: "from Malaysia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
  { 
    name: "Michelle Tan", 
    subtitle: "Pioneered quantum algorithms", 
    country: "from Malaysia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
  },
];

export default function HeroSection() {
  const [currentProfile, setCurrentProfile] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfile((prev) => (prev + 1) % profiles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black mb-16 leading-tight tracking-tight">
          We bring extraordinary
          <br />
          talent to Malaysia.
        </h1>

        {/* Profile Carousel */}
        <div className="mb-20 h-32 flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentProfile 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-6'
                }`}
              >
                <div className="flex items-center justify-center gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={profile.image}
                      alt={profile.name}
                      className="w-20 h-20 rounded-full object-cover shadow-sm"
                    />
                  </div>
                  <div className="text-left">
                    <div className="text-lg font-medium text-black mb-1">{profile.name}</div>
                    <div className="text-base text-gray-700 mb-1">{profile.subtitle}</div>
                    <div className="text-sm text-gray-500">{profile.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mb-16">
          {profiles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProfile(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentProfile 
                  ? 'bg-black w-8' 
                  : 'bg-gray-300 w-1.5'
              }`}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-base px-8 py-3">
            Check Eligibility
          </button>
          <button className="btn-secondary text-base px-8 py-3">
            See Who Qualified
          </button>
        </div>
      </div>
    </section>
  );
}