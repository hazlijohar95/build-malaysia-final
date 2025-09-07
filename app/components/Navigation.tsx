import { Link } from '@remix-run/react';
import Logo from './Logo';

export default function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />
          
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/directory" className="nav-link">
              Directory
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/club" className="nav-link">
              Club
            </Link>
            <Link to="/hiring" className="nav-link">
              Hiring
            </Link>
          </div>
          
          {/* CTA Button */}
          <Link to="/evaluation" className="btn-primary">
            Begin Evaluation
          </Link>
        </div>
      </div>
    </nav>
  );
}