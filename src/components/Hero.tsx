import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame, Clock, ShieldCheck, Dumbbell } from 'lucide-react';
import heroImg from '../assets/images/hero_gym_workout_1790151401327.jpg';
import { Logo } from './Logo';

interface HeroProps {
  onJoinClick: () => void;
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onJoinClick, onViewPlansClick }) => {
  const [gymStatus, setGymStatus] = useState<{ isOpen: boolean; label: string; subLabel: string }>({
    isOpen: false,
    label: 'Checking Hours...',
    subLabel: ''
  });
  useEffect(() => {
    const updateStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Mon ...
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeDec = hours + minutes / 60;

      if (day === 0) {
        setGymStatus({
          isOpen: false,
          label: 'Sunday Rest Day',
          subLabel: 'Reopening Monday 5:00 AM'
        });
        return;
      }

      // Morning: 5.0 to 10.0 (5:00 AM - 10:00 AM)
      // Evening: 16.0 to 21.5 (4:00 PM - 9:30 PM)
      if (currentTimeDec >= 5.0 && currentTimeDec < 10.0) {
        setGymStatus({
          isOpen: true,
          label: 'Open Now · Morning Session',
          subLabel: 'Floor open until 10:00 AM'
        });
      } else if (currentTimeDec >= 16.0 && currentTimeDec < 21.5) {
        const isMMA = day >= 1 && day <= 5 && currentTimeDec >= 19.0 && currentTimeDec <= 20.0;
        setGymStatus({
          isOpen: true,
          label: isMMA ? 'Open Now · MMA & Kickboxing Slot' : 'Open Now · Evening Session',
          subLabel: 'Floor open until 9:30 PM'
        });
      } else if (currentTimeDec < 5.0) {
        setGymStatus({
          isOpen: false,
          label: 'Opens at 5:00 AM Today',
          subLabel: 'Morning workout session begins at 5:00 AM'
        });
      } else if (currentTimeDec >= 10.0 && currentTimeDec < 16.0) {
        setGymStatus({
          isOpen: false,
          label: 'Midday Break',
          subLabel: 'Evening session resumes at 4:00 PM'
        });
      } else {
        setGymStatus({
          isOpen: false,
          label: 'Closed for Tonight',
          subLabel: 'Opens tomorrow at 5:00 AM'
        });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Cinematic Background Image with Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Sky High Fitness Studio workout floor and strength equipment"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse motion-safe:duration-[10000ms]"
          referrerPolicy="no-referrer"
        />
        {/* Layered dark scrim for high contrast and brand glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/85 to-[#0A0B0E]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A0B0E]/60 to-[#0A0B0E]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Live Studio Availability & Trust Signal */}
        <div className="mb-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#12151C]/90 border border-slate-700/60 backdrop-blur-md shadow-inner text-xs">
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                gymStatus.isOpen ? 'bg-emerald-400' : 'bg-amber-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                gymStatus.isOpen ? 'bg-emerald-500' : 'bg-amber-500'
              }`}
            />
          </span>
          <span className="font-semibold text-slate-200">{gymStatus.label}</span>
          <span className="text-slate-500 hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <span className="text-slate-400 hidden sm:inline">{gymStatus.subLabel}</span>
        </div>

        {/* Central Official Brand Lockup - Exact Uploaded Logo Asset */}
        <div className="mb-6 relative group w-full max-w-2xl px-2">
          <div className="relative mx-auto flex items-center justify-center p-2 sm:p-4">
            <Logo size="hero" className="transition-transform duration-300 group-hover:scale-[1.01] relative z-10" />
          </div>
        </div>

        {/* Main Value Proposition */}
        <h1 className="sr-only">SKY HIGH FITNESS STUDIO</h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed text-balance">
          Premier unisex gym for high-performance strength training, hypertrophy, Hyrox conditioning, and certified MMA combat sports in an empowering atmosphere.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#008fca] active:scale-95 shadow-[0_0_25px_rgba(0,163,224,0.45)] hover:shadow-[0_0_35px_rgba(0,163,224,0.7)] rounded-xl transition-all flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer"
          >
            <span>Join Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onViewPlansClick}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-[#161B24]/90 hover:bg-[#1E2532] border border-slate-700 hover:border-slate-500 active:scale-95 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <Dumbbell className="w-4 h-4 text-[#00A3E0]" />
            <span>View Membership Plans</span>
          </button>
        </div>

        {/* Hero Quick Highlights Row */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-[#12151C]/40 border border-slate-800/60">
            <Clock className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-200">Daily Shifts</h4>
              <p className="text-xs text-slate-400 mt-0.5">5-10 AM & 4-9:30 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-[#12151C]/40 border border-slate-800/60">
            <Flame className="w-5 h-5 text-[#E60028] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-200">Combat & MMA</h4>
              <p className="text-xs text-slate-400 mt-0.5">Mon–Fri 7:00–8:00 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-[#12151C]/40 border border-slate-800/60">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-200">Unisex Gym</h4>
              <p className="text-xs text-slate-400 mt-0.5">Safe & Supportive Vibe</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-[#12151C]/40 border border-slate-800/60">
            <Dumbbell className="w-5 h-5 text-[#00A3E0] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-200">Coaching</h4>
              <p className="text-xs text-slate-400 mt-0.5">Personal & Online Options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
