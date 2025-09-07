import { Link } from '@remix-run/react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/95 backdrop-blur-sm border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation Links */}
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
          
          {/* Desktop CTA Button */}
          <Link to="/evaluation" className="hidden md:block btn-primary">
            Begin Evaluation
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2  text-white hover:text-gray-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger Icon */}
            <svg
              className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Close Icon */}
            <svg
              className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-b border-white/20 shadow-lg">
          <Link
            to="/directory"
            className="block px-3 py-2 text-base font-normal text-gray-300 hover:text-white hover:bg-gray-900  transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            Directory
          </Link>
          <Link
            to="/blog"
            className="block px-3 py-2 text-base font-normal text-gray-300 hover:text-white hover:bg-gray-900  transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            Blog
          </Link>
          <Link
            to="/club"
            className="block px-3 py-2 text-base font-normal text-gray-300 hover:text-white hover:bg-gray-900  transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            Club
          </Link>
          <Link
            to="/hiring"
            className="block px-3 py-2 text-base font-normal text-gray-300 hover:text-white hover:bg-gray-900  transition-colors duration-200"
            onClick={closeMobileMenu}
          >
            Hiring
          </Link>
          
          {/* Mobile CTA Button */}
          <div className="px-3 pt-4">
            <Link
              to="/evaluation"
              className="block w-full text-center btn-primary"
              onClick={closeMobileMenu}
            >
              Begin Evaluation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}