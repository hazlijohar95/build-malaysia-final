const profiles = [
  {
    name: "Ahmad Rahman",
    achievement: "Built ML platform serving 50M+ users",
    location: "from Kuala Lumpur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Siti Nurhaliza", 
    achievement: "Led $100M product at scale",
    location: "from Penang",
    image: "https://images.unsplash.com/photo-1494790108755-2616b512d0b7?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Lim Wei Ming",
    achievement: "Founded unicorn startup",
    location: "from Johor Bahru",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Fatimah Zahra",
    achievement: "Pioneered quantum algorithms",
    location: "from Selangor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Raj Patel",
    achievement: "Designed products used by billions",
    location: "from Melaka",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Nurul Aina",
    achievement: "Transformed Fortune 500 companies",
    location: "from Sabah",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Chen",
    achievement: "Built AI systems protecting millions",
    location: "from Sarawak",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Aminah Hassan",
    achievement: "Led breakthrough in renewable energy",
    location: "from Kelantan",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
];

export default function ProfilesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-base text-gray-400 mb-4 font-medium tracking-wide uppercase">
            It allows the world's top 0.1% of talent
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight">
            to build extraordinary Malaysia.
          </h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12">
          {profiles.map((profile, index) => (
            <div 
              key={index}
              className="group cursor-pointer text-center"
            >
              <div className="mb-6 overflow-hidden mx-auto">
                <img 
                  src={profile.image}
                  alt={profile.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="font-medium text-base text-white mb-2">
                  {profile.name}
                </div>
                <div className="text-sm text-gray-300 mb-1 leading-relaxed">
                  {profile.achievement}
                </div>
                <div className="text-sm text-gray-400">
                  {profile.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-20">
          <button className="btn-secondary text-base px-8 py-3">
            See extraordinary profiles
          </button>
        </div>
      </div>
    </section>
  );
}