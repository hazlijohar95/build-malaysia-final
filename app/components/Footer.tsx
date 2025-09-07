import { Link } from '@remix-run/react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100/50">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="mb-8 lg:mb-0">
            <Logo />
            <p className="mt-2 text-sm text-gray-600 max-w-md">
              Connecting extraordinary Malaysian talent to build the nation's future.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 text-sm text-gray-600">
            <Link to="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
            <a 
              href="https://twitter.com/buildmalaysia" 
              className="hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a 
              href="https://linkedin.com/company/buildmalaysia" 
              className="hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:hello@buildmalaysia.com" 
              className="hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <div>© 2025 Build Malaysia. All rights reserved.</div>
          <div className="mt-4 sm:mt-0">
            Made for Malaysia's extraordinary talent.
          </div>
        </div>
      </div>
    </footer>
  );
}