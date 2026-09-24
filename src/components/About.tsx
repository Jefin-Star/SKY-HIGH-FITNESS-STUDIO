import React from 'react';
import { Target, Users, Zap, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import strengthImg from '../assets/images/gym_strength_floor_1790151425815.jpg';
import combatImg from '../assets/images/mma_combat_training_1790151414663.jpg';
import { Logo } from './Logo';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0C0E14] border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0] mb-2">
            The Sky High Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase text-white tracking-wide">
            About Our Gym
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400 text-balance">
            Rooted in the renowned foundation of Drona Unisex Gym, Sky High Fitness Studio sets the benchmark for strength, discipline, and modern athletic training.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Bento */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
                <img
                  src={strengthImg}
                  alt="Sky High Gym Free Weights and Olympic Racks"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs font-bold uppercase text-[#00A3E0] tracking-wider">
                    Strength Zone
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    Olympic Lifting & Resistance
                  </h3>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-slate-800 group shadow-lg">
                <img
                  src={combatImg}
                  alt="Sky High Gym Combat and Boxing Area"
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs font-bold uppercase text-[#E60028] tracking-wider">
                    Combat Pit
                  </span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    Boxing, MMA & Muay Thai
                  </h3>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#12151C] border border-slate-800 flex items-center gap-4">
                <div className="text-3xl font-black font-heading text-[#00A3E0]">6000+</div>
                <div>
                  <div className="text-xs font-bold uppercase text-white tracking-wide">Sq. Ft. Facility</div>
                  <div className="text-xs text-slate-400">Cardio, Weights & MMA Cage</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#12151C] border border-slate-800 flex flex-col justify-center">
                <span className="text-2xl font-black font-heading text-white">100% UNISEX</span>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  A welcoming, safe, and respectful environment where both men and women train with supreme focus.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-white tracking-wide">
                Where Purpose Meets Elite Physical Conditioning
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Welcome to <strong className="text-white">SKY HIGH FITNESS STUDIO</strong> (formerly known and widely respected as <strong className="text-[#00A3E0]">Drona Unisex Gym</strong>). We believe that transforming your physique requires more than just machines—it demands an environment that breeds dedication, proper guidance, and camaraderie.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Whether you are stepping into a gym for the very first time, preparing for competitive combat in our MMA cage sessions, or refining your strength through progressive overload, our studio is engineered to support every milestone of your fitness path.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#141822] border border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-[#00A3E0]/15 flex items-center justify-center text-[#00A3E0] mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-white">Goal-Centric Training</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Custom programs for rapid fat reduction, athletic hypertrophy, and competitive endurance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141822] border border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-[#E60028]/15 flex items-center justify-center text-[#E60028] mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-white">Combat & Hyrox</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Daily functional racing setups alongside weekday evening MMA and kickboxing striking drills.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141822] border border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-white">Supportive Community</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Zero intimidation. Trainers and fellow members push you to break barriers every day.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#141822] border border-slate-800/80">
                <div className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-white">Certified Mentorship</h4>
                <p className="text-xs text-slate-400 mt-1 leading-normal">
                  Experienced coaches on the floor ensuring proper lifting posture and safe progression.
                </p>
              </div>
            </div>

            {/* Official Studio Trademark Showcase - Unmodified Uploaded Asset */}
            <div className="p-6 rounded-2xl bg-[#0F121A] border border-slate-800/80 shadow-xl flex flex-col sm:flex-row items-center gap-6 relative transition-all duration-300 hover:border-[#00A3E0]/30">
              <div className="w-full sm:w-1/2 flex items-center justify-center p-2">
                <Logo size="md" className="w-full max-w-xs" />
              </div>

              {/* Details */}
              <div className="w-full sm:w-1/2 space-y-2 text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00A3E0] px-2.5 py-0.5 rounded-full bg-[#00A3E0]/10 border border-[#00A3E0]/20 inline-block">
                  Official Trademark
                </span>
                <h4 className="text-base font-bold text-white uppercase tracking-wider">
                  Sky High Fitness Studio
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Certified unisex training facility uniting Olympic weightlifting, hypertrophy resistance, and combat sports.
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
                  <span>Certified Performance Center</span>
                </div>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                Modern Cardio & Strength Machines
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                Separate Changing Lockers
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                Online & Remote Training
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
