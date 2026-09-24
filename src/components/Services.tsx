import React, { useState } from 'react';
import { 
  Dumbbell, 
  Flame, 
  Activity, 
  Zap, 
  Users, 
  Swords, 
  HeartHandshake, 
  Timer, 
  RotateCw, 
  Scale, 
  ArrowUpRight, 
  X,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_DATA } from '../data/gymData';
import { ServiceItem } from '../types';
import functionalImg from '../assets/images/functional_fitness_hiit_1790151442018.jpg';

interface ServicesProps {
  onSelectServiceForRegistration: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForRegistration }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'cardio-strength':
        return <Activity className="w-5 h-5 text-[#00A3E0]" />;
      case 'hypertrophy':
        return <Dumbbell className="w-5 h-5 text-[#00A3E0]" />;
      case 'hyrox':
        return <Flame className="w-5 h-5 text-[#E60028]" />;
      case 'functional-training':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'group-workout':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'mma-combat':
        return <Swords className="w-5 h-5 text-[#E60028]" />;
      case 'mobility-flexibility':
        return <HeartHandshake className="w-5 h-5 text-emerald-400" />;
      case 'hiit-workouts':
        return <Timer className="w-5 h-5 text-orange-400" />;
      case 'circuit-training':
        return <RotateCw className="w-5 h-5 text-sky-400" />;
      case 'weight-management':
        return <Scale className="w-5 h-5 text-indigo-400" />;
      default:
        return <Dumbbell className="w-5 h-5 text-[#00A3E0]" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#0A0B0E] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0] mb-2 block">
              High Performance Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase text-white tracking-wide">
              Our Training Services
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              From heavy barbell hypertrophy to competitive Hyrox circuits and evening MMA striking, discover our comprehensive fitness spectrum.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#141822] rounded-xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-[#00A3E0] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All (10)
            </button>
            <button
              onClick={() => setActiveCategory('strength')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'strength'
                  ? 'bg-[#00A3E0] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Strength
            </button>
            <button
              onClick={() => setActiveCategory('combat')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'combat'
                  ? 'bg-[#E60028] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Combat MMA
            </button>
            <button
              onClick={() => setActiveCategory('endurance')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'endurance'
                  ? 'bg-[#00A3E0] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Hyrox & HIIT
            </button>
            <button
              onClick={() => setActiveCategory('wellness')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap ${
                activeCategory === 'wellness'
                  ? 'bg-[#00A3E0] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Body & Mobility
            </button>
          </div>
        </div>

        {/* Feature Spotlight Banner with Generated Image */}
        <div className="mb-10 relative rounded-2xl overflow-hidden border border-slate-800 bg-[#12151C] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:max-w-xl z-10 space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00A3E0] bg-[#00A3E0]/15 px-3 py-1 rounded-md border border-[#00A3E0]/30 inline-block">
              Signature Programs
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-white">
              Hyrox Readiness & Functional Strength
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Equipped with turf sprint track, calibrated sleds, kettlebells, rowers, and assault conditioning tools. Engineered for members striving to build endurance that matches their muscular strength.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <button
                onClick={() => onSelectServiceForRegistration('Hyrox Training')}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#008fca] rounded-lg transition-all inline-flex items-center gap-1.5"
              >
                <span>Register for Hyrox</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onSelectServiceForRegistration('Mixed Martial Arts (MMA)')}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E60028] hover:bg-[#c90022] rounded-lg transition-all inline-flex items-center gap-1.5"
              >
                <span>Join MMA (7-8 PM)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-80 h-44 rounded-xl overflow-hidden border border-slate-700/60 shrink-0">
            <img
              src={functionalImg}
              alt="Functional fitness and Hyrox sprint turf equipment"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#12151C] border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#181D28] border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-slate-400 bg-slate-800/60">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-black uppercase text-white tracking-wide group-hover:text-[#00A3E0] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 font-medium">
                  {service.tagline}
                </p>
                <p className="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1 focus:outline-hidden"
                >
                  <span>Program Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForRegistration(service.title)}
                  className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#00A3E0] hover:text-white hover:bg-[#00A3E0] border border-[#00A3E0]/40 rounded-lg transition-all"
                >
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#12151C] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#181D28] border border-slate-700 flex items-center justify-center">
                {getServiceIcon(selectedService.id)}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0]">
                  Program Overview
                </span>
                <h3 className="text-2xl font-heading font-black uppercase text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.description}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Core Training Benefits:
              </h4>
              <div className="space-y-2">
                {selectedService.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#161B24] border border-slate-800 text-xs text-slate-300">
              <span className="font-bold text-white block mb-0.5">Recommended For:</span>
              <span>{selectedService.suitableFor}</span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForRegistration(title);
                }}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#008fca] rounded-xl shadow-lg"
              >
                Register for {selectedService.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
