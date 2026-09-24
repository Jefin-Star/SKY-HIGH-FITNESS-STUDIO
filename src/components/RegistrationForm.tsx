import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  Calendar, 
  User, 
  Phone, 
  FileText, 
  Dumbbell, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { GYM_CONTACT, PLANS_DATA } from '../data/gymData';
import { RegistrationData } from '../types';

interface RegistrationFormProps {
  selectedPlan: string;
  onClearPlanSelection?: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  selectedPlan,
}) => {
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    membershipPlan: selectedPlan || '6 Months Membership',
    startDate: new Date().toISOString().split('T')[0],
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationData | null>(null);

  // Sync when prop changes
  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, membershipPlan: selectedPlan }));
    }
  }, [selectedPlan]);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof RegistrationData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (minimum 2 characters)';
    }

    // Phone validation: Indian standard or international
    const cleanPhone = formData.phoneNumber.replace(/[^0-9+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.membershipPlan) {
      errs.membershipPlan = 'Please choose a membership plan';
    }

    if (!formData.startDate) {
      errs.startDate = 'Please select your preferred start date';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate instant local validation and store
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      // Store in localStorage for persistence
      try {
        const history = JSON.parse(localStorage.getItem('skyhigh_registrations') || '[]');
        history.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('skyhigh_registrations', JSON.stringify(history));
      } catch (err) {
        console.error('Storage error', err);
      }
    }, 400);
  };

  // Generate WhatsApp Message URL
  const getWhatsAppLink = (data: RegistrationData) => {
    const text = encodeURIComponent(
      `Hello SKY HIGH FITNESS STUDIO! 👋\n\nI want to register for gym membership:\n` +
      `• Name: ${data.fullName}\n` +
      `• Phone: ${data.phoneNumber}\n` +
      `• Email: ${data.email}\n` +
      `• Plan: ${data.membershipPlan}\n` +
      `• Preferred Start Date: ${data.startDate}\n` +
      (data.message ? `• Goals / Message: ${data.message}\n\n` : '\n') +
      `Please confirm my admission and slot timing. Thank you!`
    );
    return `https://wa.me/91${GYM_CONTACT.phone}?text=${text}`;
  };

  // Generate Email mailto link
  const getEmailLink = (data: RegistrationData) => {
    const subject = encodeURIComponent(`Gym Registration - ${data.fullName} (${data.membershipPlan})`);
    const body = encodeURIComponent(
      `Hello Sky High Fitness Studio Team,\n\nI would like to complete my gym membership registration.\n\n` +
      `Full Name: ${data.fullName}\n` +
      `Phone: ${data.phoneNumber}\n` +
      `Email: ${data.email}\n` +
      `Selected Plan: ${data.membershipPlan}\n` +
      `Preferred Start Date: ${data.startDate}\n` +
      `Fitness Goals: ${data.message || 'General Fitness & Strength'}\n\n` +
      `Looking forward to starting workouts at your studio.\n\nBest regards,\n${data.fullName}`
    );
    return `mailto:${GYM_CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="register" className="py-20 bg-[#0C0E14] relative border-t border-slate-900 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0] mb-2">
            Start Your Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold uppercase text-white tracking-wide">
            Membership Registration
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-400">
            Fill in your details to secure your spot. Instant confirmation with direct WhatsApp desk support.
          </p>
        </div>

        <div className="rounded-3xl bg-[#12151C] border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-[#00A3E0]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-72 h-72 bg-[#E60028]/10 rounded-full blur-3xl pointer-events-none" />

          {submittedData ? (
            /* Success View */
            <div className="relative z-10 py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black uppercase text-white">
                  Registration Received!
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{submittedData.fullName}</strong>. Your membership request for <span className="text-[#00A3E0] font-semibold">{submittedData.membershipPlan}</span> has been logged.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-5 rounded-2xl bg-[#161B24] border border-slate-800 max-w-lg mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Member Name:</span>
                  <span className="font-bold text-white">{submittedData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Contact Number:</span>
                  <span className="font-mono text-white">{submittedData.phoneNumber}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Email Address:</span>
                  <span className="text-white">{submittedData.email}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Selected Plan:</span>
                  <span className="font-bold text-[#00A3E0]">{submittedData.membershipPlan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Start Date:</span>
                  <span className="font-mono text-white">{submittedData.startDate}</span>
                </div>
              </div>

              {/* Instant WhatsApp / Email Dispatch Actions */}
              <div className="pt-2 space-y-3 max-w-md mx-auto">
                <a
                  href={getWhatsAppLink(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation via WhatsApp</span>
                </a>

                <a
                  href={getEmailLink(submittedData)}
                  className="w-full py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-[#1A202C] hover:bg-[#232B3B] border border-slate-700 flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Send Confirmation via Email</span>
                </a>

                <button
                  onClick={() => {
                    setSubmittedData(null);
                    setFormData({
                      fullName: '',
                      phoneNumber: '',
                      email: '',
                      membershipPlan: '6 Months Membership',
                      startDate: new Date().toISOString().split('T')[0],
                      message: ''
                    });
                  }}
                  className="text-xs text-slate-400 hover:text-white underline pt-2"
                >
                  Register Another Member
                </button>
              </div>
            </div>
          ) : (
            /* Standard Registration Form */
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#161B24] border text-sm text-white placeholder:text-slate-500 focus:outline-hidden transition-all ${
                      errors.fullName
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/50'
                        : 'border-slate-700/80 focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="e.g. 9567236799"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#161B24] border text-sm text-white placeholder:text-slate-500 focus:outline-hidden transition-all ${
                      errors.phoneNumber
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/50'
                        : 'border-slate-700/80 focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="e.g. athlete@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#161B24] border text-sm text-white placeholder:text-slate-500 focus:outline-hidden transition-all ${
                      errors.email
                        ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/50'
                        : 'border-slate-700/80 focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Membership Plan (Dropdown) */}
                <div>
                  <label htmlFor="membershipPlan" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Dumbbell className="w-3.5 h-3.5 text-[#00A3E0]" />
                    <span>Membership Plan *</span>
                  </label>
                  <select
                    id="membershipPlan"
                    value={formData.membershipPlan}
                    onChange={(e) => {
                      setFormData({ ...formData, membershipPlan: e.target.value });
                      if (errors.membershipPlan) setErrors({ ...errors, membershipPlan: undefined });
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#161B24] border border-slate-700/80 text-sm text-white focus:outline-hidden focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 transition-all"
                  >
                    <optgroup label="General Gym & Strength">
                      <option value="1 Month Membership">1 Month Membership — ₹700 (+₹1,000 Adm)</option>
                      <option value="3 Months Membership">3 Months Membership — ₹1,800 (+₹1,000 Adm)</option>
                      <option value="6 Months Membership">6 Months Membership (Popular) — ₹3,800 (+₹1,000 Adm)</option>
                      <option value="1 Year Annual Pass">1 Year Membership (Best Value) — ₹7,000 (+₹1,000 Adm)</option>
                    </optgroup>
                    <optgroup label="MMA & Combat (Mon-Fri 7-8 PM)">
                      <option value="MMA 1 Month">MMA 1 Month — ₹1,000 (+₹1,500 Adm)</option>
                      <option value="MMA 3 Months">MMA 3 Months — ₹3,000 (+₹1,500 Adm)</option>
                      <option value="MMA 6 Months">MMA 6 Months — ₹6,000 (+₹1,500 Adm)</option>
                      <option value="MMA 1 Year Pass">MMA 1 Year Pass — ₹12,000 (+₹1,500 Adm)</option>
                    </optgroup>
                    <optgroup label="Special Programs">
                      <option value="Couple Package">Couple Package (3 Months) — ₹3,600</option>
                      <option value="Personal Training (PT)">Personal Training (1-on-1) — ₹4,000 / month</option>
                      <option value="Online Session Consultation">Online Remote Session Coaching</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Preferred Start Date */}
              <div>
                <label htmlFor="startDate" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Preferred Start Date *</span>
                </label>
                <input
                  type="date"
                  id="startDate"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.startDate}
                  onChange={(e) => {
                    setFormData({ ...formData, startDate: e.target.value });
                    if (errors.startDate) setErrors({ ...errors, startDate: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl bg-[#161B24] border text-sm text-white focus:outline-hidden transition-all ${
                    errors.startDate
                      ? 'border-rose-500 focus:ring-2 focus:ring-rose-500/50'
                      : 'border-slate-700/80 focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20'
                  }`}
                />
                {errors.startDate && (
                  <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.startDate}</span>
                  </p>
                )}
              </div>

              {/* Message / Fitness Goals */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#00A3E0]" />
                  <span>Message / Fitness Goals (Optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us about your fitness targets (e.g. weight loss, muscle gain, MMA sparring, injury recovery, preferred shift morning/evening)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#161B24] border border-slate-700/80 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#00A3E0] focus:ring-2 focus:ring-[#00A3E0]/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 rounded-xl text-sm font-extrabold uppercase tracking-wider text-white bg-[#00A3E0] hover:bg-[#008fca] active:scale-[0.99] shadow-[0_0_25px_rgba(0,163,224,0.35)] hover:shadow-[0_0_35px_rgba(0,163,224,0.55)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Registration...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Registration</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-3 text-center">
                <p className="text-xs text-slate-400">
                  Prefer direct inquiry?{' '}
                  <a
                    href={GYM_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1 ml-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp desk at {GYM_CONTACT.phoneDisplay}</span>
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
