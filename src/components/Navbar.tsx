import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';
import { Logo } from './Logo';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Membership Plans', href: '#plans' },
    { label: 'Timings', href: '#timings' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0B0E]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-2'
          : 'bg-gradient-to-b from-[#0A0B0E]/95 via-[#0A0B0E]/70 to-transparent py-2.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Zone 1: Authentic Uploaded Brand Logo */}
          <a
            href="#"
            className="flex items-center group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00A3E0] rounded-xl py-0.5"
            aria-label="SKY HIGH FITNESS STUDIO Home"
          >
            <Logo size="sm" className="transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Zone 2: Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 focus:outline-hidden focus-visible:text-[#00A3E0] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00A3E0] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct WhatsApp Action & Join Now */}
          <div className="flex items-center gap-3">
            <a
              href={GYM_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600/90 hover:bg-emerald-600 rounded-lg shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onJoinClick}
              className="px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#008fca] active:scale-95 shadow-[0_0_15px_rgba(0,163,224,0.35)] rounded-lg transition-all cursor-pointer"
            >
              Join Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0C0E14]/98 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 backdrop-blur-xl animate-fadeIn">
          {/* Mobile Clean Brand Header */}
          <div className="flex items-center pb-3 border-b border-slate-800/80">
            <Logo size="sm" />
          </div>

          <div className="flex flex-col space-y-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={GYM_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 rounded-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
