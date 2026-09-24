import React from 'react';
import { MessageCircle, Mail, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { GYM_CONTACT } from '../data/gymData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080B] border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <a href="#" className="inline-block group" aria-label="SKY HIGH FITNESS STUDIO Home">
              <Logo size="sm" className="transition-transform group-hover:scale-105" />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              Premier unisex strength training, hypertrophy, Hyrox conditioning, and MMA combat facility. Empowering your physical transformation under elite coaches.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141822] border border-slate-800 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={GYM_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#141822] border border-slate-800 flex items-center justify-center text-pink-400 hover:text-white hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${GYM_CONTACT.email}`}
                className="w-8 h-8 rounded-lg bg-[#141822] border border-slate-800 flex items-center justify-center text-[#00A3E0] hover:text-white hover:bg-[#00A3E0] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Drona Unisex Gym
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Programs & Disciplines
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">
                  Membership Plans & Fees
                </a>
              </li>
              <li>
                <a href="#timings" className="hover:text-white transition-colors">
                  Studio Schedule & MMA Timings
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-white transition-colors">
                  Online Registration
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Timings Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Operating Hours
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-200 block font-semibold">Morning Shift:</span>
                <span className="text-slate-400 font-mono">5:00 AM – 10:00 AM</span>
              </div>
              <div>
                <span className="text-slate-200 block font-semibold">Evening Shift:</span>
                <span className="text-slate-400 font-mono">4:00 PM – 9:30 PM</span>
              </div>
              <div>
                <span className="text-slate-200 block font-semibold">MMA & Kickboxing:</span>
                <span className="text-[#E60028] font-mono">Mon–Fri 7:00 PM – 8:00 PM</span>
              </div>
              <div>
                <span className="text-rose-400 block font-semibold">Sunday:</span>
                <span className="text-slate-400">Closed (Recovery & Maintenance)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Help */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Direct Helpdesk
            </h4>
            <p className="text-xs text-slate-400">
              Have questions regarding admission or personal training?
            </p>
            <div className="space-y-1.5 text-xs font-mono">
              <p className="text-slate-300">
                WhatsApp: <a href={GYM_CONTACT.whatsappUrl} className="text-emerald-400 hover:underline">+91 {GYM_CONTACT.phone}</a>
              </p>
              <p className="text-slate-300 break-all">
                Email: <a href={`mailto:${GYM_CONTACT.email}`} className="text-[#00A3E0] hover:underline">{GYM_CONTACT.email}</a>
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-block px-2.5 py-1 rounded bg-[#161B26] border border-slate-800 text-[11px] text-slate-300">
                Unisex · Certified Trainers · Pro Gear
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} SKY HIGH FITNESS STUDIO. All rights reserved. Formerly Drona Unisex Gym.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
