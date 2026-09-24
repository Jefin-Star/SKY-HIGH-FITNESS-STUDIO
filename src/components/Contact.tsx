import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Check, 
  Copy,
  Navigation
} from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0B0E] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0] mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase text-white tracking-wide">
            Visit & Connect
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
            Reach out via WhatsApp, drop an email, or visit our studio floor to experience our facility first-hand.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-[#12151C] border border-slate-800 flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Instant Chat & Support
              </span>
              <h3 className="text-xl font-heading font-black uppercase text-white mt-1">
                WhatsApp Desk
              </h3>
              <p className="text-sm font-mono text-slate-200 mt-2 font-semibold">
                +91 {GYM_CONTACT.phone}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Chat directly with our head trainers for admission queries, trial sessions, and timings.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2">
              <a
                href={GYM_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Chat Now</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => handleCopy(GYM_CONTACT.phone, 'phone')}
                className="p-2 rounded-lg bg-[#181D28] text-slate-400 hover:text-white border border-slate-700 transition-colors"
                title="Copy Number"
                aria-label="Copy phone number"
              >
                {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-[#12151C] border border-slate-800 flex flex-col justify-between group hover:border-[#00A3E0]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 border border-[#00A3E0]/20 flex items-center justify-center text-[#00A3E0] mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0]">
                Official Email
              </span>
              <h3 className="text-xl font-heading font-black uppercase text-white mt-1">
                Email Inquiries
              </h3>
              <p className="text-sm font-mono text-slate-200 mt-2 break-all font-medium">
                {GYM_CONTACT.email}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                For corporate memberships, sponsorships, trainer vacancies, and general support.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2">
              <a
                href={`mailto:${GYM_CONTACT.email}`}
                className="flex-1 py-2 px-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#008fca] rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Compose Mail</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => handleCopy(GYM_CONTACT.email, 'email')}
                className="p-2 rounded-lg bg-[#181D28] text-slate-400 hover:text-white border border-slate-700 transition-colors"
                title="Copy Email"
                aria-label="Copy email address"
              >
                {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="p-6 rounded-2xl bg-[#12151C] border border-slate-800 flex flex-col justify-between group hover:border-pink-500/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400">
                Community & Highlights
              </span>
              <h3 className="text-xl font-heading font-black uppercase text-white mt-1">
                Instagram Page
              </h3>
              <p className="text-sm font-mono text-slate-200 mt-2 font-semibold">
                @{GYM_CONTACT.instagram}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Follow our daily workout reels, PR lifts, MMA sparring clips, and athlete transformations.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2">
              <a
                href={GYM_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:opacity-95 rounded-lg transition-opacity flex items-center justify-center gap-1.5"
              >
                <span>Follow on Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={() => handleCopy(`https://instagram.com/${GYM_CONTACT.instagram}`, 'instagram')}
                className="p-2 rounded-lg bg-[#181D28] text-slate-400 hover:text-white border border-slate-700 transition-colors"
                title="Copy Instagram Profile"
                aria-label="Copy Instagram link"
              >
                {copiedKey === 'instagram' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Gym Location & Map View */}
        <div className="rounded-3xl bg-[#12151C] border border-slate-800 overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00A3E0]/15 flex items-center justify-center text-[#00A3E0] shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-black uppercase text-white">
                  Studio Location & Directions
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Sky High Fitness Studio (Drona Unisex Gym)
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Convenient parking, clean studio atmosphere, and easy access.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={GYM_CONTACT.googleMapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#008fca] flex items-center gap-2 shadow-md transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Embedded Google Maps Frame */}
          <div className="relative w-full h-[400px] sm:h-[450px] bg-[#0A0B0E]">
            <iframe
              src={GYM_CONTACT.addressEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Sky High Fitness Studio Location on Google Maps"
              className="w-full h-full grayscale contrast-125 invert-[0.9] hue-rotate-180 opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
