interface ProfileCardProps {
  title: string;
  name: string;
  countryCode?: string;
  image?: string;
  className?: string;
}

export default function ProfileCard({ 
  title, 
  name, 
  countryCode, 
  image, 
  className = "" 
}: ProfileCardProps) {
  return (
    <div className={`relative h-96 bg-gray-800 overflow-hidden ${className}`}>
      {image && (
        <img 
          src={image} 
          alt={name}
          loading="lazy"
          decoding="async" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
      <div className="absolute top-6 left-6 right-6">
        <div className="text-white text-sm font-medium mb-2">
          {title}
        </div>
        <div className="text-white/70 text-xs">
          {name} {countryCode && `(${countryCode})`}
        </div>
      </div>
    </div>
  );
}