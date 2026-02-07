import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

// Custom SVG component for the "X" (formerly Twitter) logo to match the image exactly
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-4 md:px-[128px] md:pb-10">
      <div className="max-w-[1400px] mx-auto flex flex-col">
        
        {/* Top Section: Logo */}
        <div className="flex items-center gap-2 mb-20 md:mb-32">
          <div className="relative md:w-[141px] md:h-[42px] w-20 h-8">
            <Image 
              src="/logo-white.png" 
              alt="Signflow Logo" 
              width={141} 
              height={42}
              className="object-contain"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>

        {/* Bottom Section: Links, Copyright, Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/0 pt-0">
          
          {/* Left: Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start md:gap-8 gap-4 text-sm text-[#FAFAFA] tracking-[-0.2px]">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </nav>

          {/* Center: Copyright */}
          {/* 
             Using absolute positioning centering trick or flex-basis 
             can ensure it stays dead center, but for this layout, 
             a standard flex item works well visually.
          */}
          <div className="text-xs text-[#FAFAFA] order-3 md:order-2">
            © 2026, All Rights Reserved
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-6 order-2 md:order-3">
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              <XIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};