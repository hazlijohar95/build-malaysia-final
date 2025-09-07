import { Link } from "@remix-run/react";

interface LogoProps {
  className?: string;
  linkToHome?: boolean;
}

export default function Logo({ className = "", linkToHome = true }: LogoProps) {
  const logoContent = (
    <div className={`inline-flex items-baseline ${className}`}>
      <span 
        className="text-xl font-bold tracking-tight text-white"
        style={{ 
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontWeight: 700,
          letterSpacing: '-0.02em'
        }}
      >
        Build
      </span>
      <span className="text-xl text-white">.</span>
      <span 
        className="text-xl font-normal tracking-tight text-white"
        style={{ 
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
        aria-label="Build.Malaysia - Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

// Variant with larger size
export function LogoLarge({ className = "", linkToHome = true }: LogoProps) {
  const logoContent = (
    <div className={`inline-flex items-baseline ${className}`}>
      <span 
        className="text-4xl font-bold tracking-tight text-white"
        style={{ 
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontWeight: 700,
          letterSpacing: '-0.03em'
        }}
      >
        Build
      </span>
      <span className="text-4xl text-white">.</span>
      <span 
        className="text-4xl font-normal tracking-tight text-white"
        style={{ 
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontWeight: 400,
          letterSpacing: '-0.02em'
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
        aria-label="Build.Malaysia - Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}