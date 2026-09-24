import React, { useState } from 'react';
import { Check, Flame, Swords, Users, Sparkles, ArrowRight, ShieldAlert } from 'lucide-react';
import { PLANS_DATA } from '../data/gymData';
import { Plan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState<'general' | 'mma' | 'special'>('general');

  const plans = PLANS_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="plans" className="py-20 bg-[#0C0E14] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0] mb-2">
            Clear, Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase text-white tracking-wide">
            Membership Plans
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400 text-balance">
            Select your path. No hidden fees, flexible tenure options, and world-class guidance included.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#141822] border border-slate-800">
            <button
              onClick={() => setActiveTab('general')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'general'
                  ? 'bg-[#00A3E0] text-white shadow-[0_0_15px_rgba(0,163,224,0.35)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Gym & Strength</span>
            </button>

            <button
              onClick={() => setActiveTab('mma')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'mma'
                  ? 'bg-[#E60028] text-white shadow-[0_0_15px_rgba(230,0,40,0.35)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Swords className="w-4 h-4" />
              <span>MMA & Combat</span>
            </button>

            <button
              onClick={() => setActiveTab('special')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === 'special'
                  ? 'bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Couple & PT</span>
            </button>
          </div>
        </div>

        {/* Admission Fee Notice Pill */}
        <div className="mb-10 max-w-xl mx-auto text-center">
          {activeTab === 'general' && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141822] border border-[#00A3E0]/30 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#00A3E0]" />
              <span>Gym Admission Fee: <strong className="text-white font-mono tabular-nums">₹1,000</strong> (One-time registration)</span>
            </div>
          )}
          {activeTab === 'mma' && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141822] border border-[#E60028]/30 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#E60028]" />
              <span>MMA Admission Fee: <strong className="text-white font-mono tabular-nums">₹1,500</strong> (One-time registration)</span>
              <span className="text-slate-500">·</span>
              <span className="text-[#E60028] font-semibold">Includes Mon–Fri 7–8 PM Slots</span>
            </div>
          )}
          {activeTab === 'special' && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#141822] border border-amber-500/30 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Couple Offer & Dedicated 1-on-1 Personal Training with Diet Planning</span>
            </div>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div
          className={`grid gap-6 ${
            plans.length === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {plans.map((plan) => {
            const isMMA = plan.category === 'mma';
            const isSpecial = plan.category === 'special';

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-[#12151C] flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? isMMA
                      ? 'border-2 border-[#E60028] shadow-[0_0_30px_rgba(230,0,40,0.15)] ring-1 ring-[#E60028]/40'
                      : isSpecial
                      ? 'border-2 border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/40'
                      : 'border-2 border-[#00A3E0] shadow-[0_0_30px_rgba(0,163,224,0.15)] ring-1 ring-[#00A3E0]/40'
                    : 'border border-slate-800 hover:border-slate-700'
                } p-6`}
              >
                {/* Popular / Highlight Ribbons */}
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md ${
                        plan.popular
                          ? isMMA
                            ? 'bg-[#E60028] text-white'
                            : isSpecial
                            ? 'bg-amber-500 text-black'
                            : 'bg-[#00A3E0] text-white'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {plan.highlight}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-heading font-black uppercase text-white tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{plan.description}</p>
                  </div>

                  {/* Price Tag */}
                  <div className="py-4 border-y border-slate-800/80 mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-slate-400">₹</span>
                      <span className="text-4xl sm:text-5xl font-heading font-black text-white font-mono tabular-nums tracking-tight">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400 font-medium ml-1">
                        / {plan.duration}
                      </span>
                    </div>

                    {plan.admissionFee && (
                      <div className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-400">
                        <span className="text-slate-500">+</span>
                        <span>₹{plan.admissionFee.toLocaleString('en-IN')} one-time admission</span>
                      </div>
                    )}
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Plan Inclusions:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-snug">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isMMA ? 'text-[#E60028]' : isSpecial ? 'text-amber-400' : 'text-[#00A3E0]'
                          }`}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 ${
                      plan.popular
                        ? isMMA
                          ? 'bg-[#E60028] hover:bg-[#c90022] text-white shadow-lg shadow-red-950/40'
                          : isSpecial
                          ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-950/40'
                          : 'bg-[#00A3E0] hover:bg-[#008fca] text-white shadow-lg shadow-sky-950/40'
                        : 'bg-[#181E29] hover:bg-[#202735] text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600'
                    }`}
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule & Online Session Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#12151C] border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#00A3E0]/15 flex items-center justify-center text-[#00A3E0] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Online Sessions</h4>
              <p className="text-xs text-slate-400 mt-0.5">Live guided training and diet check-ins accessible from anywhere.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E60028]/15 flex items-center justify-center text-[#E60028] shrink-0">
              <Swords className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">MMA & Kickboxing Batch</h4>
              <p className="text-xs text-slate-400 mt-0.5">Mon to Fri 7:00 PM to 8:00 PM with dedicated fight coach.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Couple Package (3 Mos)</h4>
              <p className="text-xs text-slate-400 mt-0.5">Train with your partner for only ₹3,600 total (3 full months).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
