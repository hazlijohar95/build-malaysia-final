import { Link } from "@remix-run/react";

interface LogoProps {
  className?: string;
  linkToHome?: boolean;
}

export default function Logo({ className = "", linkToHome = true }: LogoProps) {
  const logoContent = (
    <div className={`inline-block ${className}`}>
      <div className="leading-none">
        <div 
          className="text-2xl font-medium tracking-tight text-black"
          style={{ 
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 500,
            letterSpacing: '-0.02em'
          }}
        >
          Build
        </div>
        <div 
          className="text-2xl font-normal italic text-black mt-0.5"
          style={{ 
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontStyle: 'italic',
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}
        >
          Malaysia
        </div>
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link 
        to="/" 
        className="inline-block hover:opacity-80 transition-opacity duration-200"
        aria-label="Build Malaysia - Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

// Variant with different sizes
export function LogoLarge({ className = "", linkToHome = true }: LogoProps) {
  const logoContent = (
    <div className={`inline-block ${className}`}>
      <div className="leading-none">
        <div 
          className="text-5xl font-medium tracking-tight text-black"
          style={{ 
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontWeight: 600,
            letterSpacing: '-0.03em'
          }}
        >
          Build
        </div>
        <div 
          className="text-5xl font-normal italic text-black mt-1"
          style={{ 
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontStyle: 'italic',
            fontWeight: 400,
            letterSpacing: '-0.02em'
          }}
        >
          Malaysia
        </div>
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link 
        to="/" 
        className="inline-block hover:opacity-80 transition-opacity duration-200"
        aria-label="Build Malaysia - Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

// Minimal single-line variant for compact spaces
export function LogoCompact({ className = "", linkToHome = true }: LogoProps) {
  const logoContent = (
    <div className={`inline-flex items-baseline gap-2 ${className}`}>
      <span 
        className="text-xl font-medium tracking-tight text-black"
        style={{ 
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontWeight: 500,
          letterSpacing: '-0.02em'
        }}
      >
        Build
      </span>
      <span 
        className="text-xl font-normal italic text-black"
        style={{ 
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontStyle: 'italic',
          fontWeight: 400,
          letterSpacing: '-0.01em'
        }}
      >
        Malaysia
      </span>
    </div>
  );

  if (linkToHome) {
    return (
      <Link 
        to="/" 
        className="inline-block hover:opacity-80 transition-opacity duration-200"
        aria-label="Build Malaysia - Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}