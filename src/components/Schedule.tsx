import React from 'react';
import { Clock, Calendar, Swords, Video, Sun, Moon, AlertCircle } from 'lucide-react';
import { GYM_CONTACT } from '../data/gymData';

export const Schedule: React.FC = () => {
  const days = [
    { name: 'Monday', gym: '5:00 AM – 10:00 AM & 4:00 PM – 9:30 PM', mma: '7:00 PM – 8:00 PM', online: 'Available' },
    { name: 'Tuesday', gym: '5:00 AM – 10:00 AM & 4:00 PM – 9:30 PM', mma: '7:00 PM – 8:00 PM', online: 'Available' },
    { name: 'Wednesday', gym: '5:00 AM – 10:00 AM & 4:00 PM – 9:30 PM', mma: '7:00 PM – 8:00 PM', online: 'Available' },
    { name: 'Thursday', gym: '5:00 AM – 10:00 AM & 4:00 PM – 9:30 PM', mma: '7:00 PM – 8:00 PM', online: 'Available' },
    { name: 'Friday', gym: '5:00 AM – 10:00 AM & 4:00 PM – 9:30 PM', mma: '7:00 PM – 8:00 PM', online: 'Available' },
    { name: 'Saturday', gym: '5:00 AM – 10:00 AM & 4:00 PM – 9:30 PM', mma: 'Open Mat / Strength Focus', online: 'Available' },
    { name: 'Sunday', gym: 'Studio Closed (Rest & Recovery Day)', mma: 'Closed', online: 'On Request' },
  ];

  return (
    <section id="timings" className="py-20 bg-[#0A0B0E] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0] mb-2">
            Weekly Hours & Slots
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase text-white tracking-wide">
            Studio Timings & Schedule
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-400">
            Convenient morning and evening splits crafted to fit working professionals, students, and athletes.
          </p>
        </div>

        {/* 3 Major Timing Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Morning Shift */}
          <div className="p-6 rounded-2xl bg-[#12151C] border border-slate-800 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Early Birds</span>
              <h3 className="text-xl font-heading font-black uppercase text-white mt-0.5">Morning Session</h3>
              <p className="text-2xl font-mono font-bold text-slate-100 mt-1 tabular-nums">
                5:00 AM – 10:00 AM
              </p>
              <p className="text-xs text-slate-400 mt-1.5">Strength training, fasted cardio & mobility.</p>
            </div>
          </div>

          {/* Evening Shift */}
          <div className="p-6 rounded-2xl bg-[#12151C] border border-slate-800 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 border border-[#00A3E0]/20 flex items-center justify-center text-[#00A3E0] shrink-0">
              <Moon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00A3E0]">Prime Time</span>
              <h3 className="text-xl font-heading font-black uppercase text-white mt-0.5">Evening Session</h3>
              <p className="text-2xl font-mono font-bold text-slate-100 mt-1 tabular-nums">
                4:00 PM – 9:30 PM
              </p>
              <p className="text-xs text-slate-400 mt-1.5">Full gym floor, weight training & personal coaching.</p>
            </div>
          </div>

          {/* MMA Slot */}
          <div className="p-6 rounded-2xl bg-[#12151C] border border-slate-800 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#E60028]/10 border border-[#E60028]/20 flex items-center justify-center text-[#E60028] shrink-0">
              <Swords className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E60028]">Fight Camp</span>
              <h3 className="text-xl font-heading font-black uppercase text-white mt-0.5">MMA & Kickboxing</h3>
              <p className="text-2xl font-mono font-bold text-slate-100 mt-1 tabular-nums">
                7:00 PM – 8:00 PM
              </p>
              <p className="text-xs text-slate-400 mt-1.5">Monday to Friday striking, boxing & mitts.</p>
            </div>
          </div>
        </div>

        {/* Weekly Timetable Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#12151C]">
          <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00A3E0]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Weekly Operating Matrix
              </h4>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <Video className="w-4 h-4" />
              <span>Online Sessions Available Daily</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-[#161B26] text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-6 font-bold">Day</th>
                  <th className="py-3 px-6 font-bold">General Gym Floor</th>
                  <th className="py-3 px-6 font-bold">MMA / Kickboxing Batch</th>
                  <th className="py-3 px-6 font-bold">Remote Coaching</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {days.map((row) => {
                  const isSunday = row.name === 'Sunday';
                  return (
                    <tr
                      key={row.name}
                      className={`hover:bg-slate-800/30 transition-colors ${
                        isSunday ? 'bg-red-950/10 text-slate-400' : ''
                      }`}
                    >
                      <td className="py-3.5 px-6 font-sans font-bold text-white flex items-center gap-2">
                        {row.name}
                        {isSunday && (
                          <span className="text-[10px] font-mono text-[#E60028] bg-[#E60028]/10 px-1.5 py-0.5 rounded">
                            OFF
                          </span>
                        )}
                      </td>
                      <td className={`py-3.5 px-6 ${isSunday ? 'text-rose-400 font-sans' : 'text-slate-300'}`}>
                        {row.gym}
                      </td>
                      <td className="py-3.5 px-6 text-slate-300">
                        {row.mma}
                      </td>
                      <td className="py-3.5 px-6 text-emerald-400 font-sans">
                        {row.online}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
