import { Link } from '@remix-run/react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        {/* Centered tagline */}
        <p className="text-gray-400 text-sm mb-8">
          We bring extraordinary talent to Malaysia.
        </p>
        
        {/* Large BUILD.MALAYSIA logo */}
        <div className="mb-8">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            <span className="font-bold">BUILD</span>
            <span className="font-normal">.</span>
            <span className="font-normal">MALAYSIA</span>
          </h2>
        </div>
        
        {/* Footer links */}
        <div className="flex justify-center space-x-8 text-gray-400 text-sm mb-8">
          <a 
            href="https://twitter.com/buildmalaysia" 
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a 
            href="https://linkedin.com/company/buildmalaysia" 
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
        
        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © 2025 Build.Malaysia · All rights reserved.
        </p>
      </div>
    </footer>
  );
}