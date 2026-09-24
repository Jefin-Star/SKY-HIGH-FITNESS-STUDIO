import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Schedule } from './components/Schedule';
import { RegistrationForm } from './components/RegistrationForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { GYM_CONTACT } from './data/gymData';

export default function App() {
  const [selectedPlanForRegistration, setSelectedPlanForRegistration] = useState<string>('6 Months Membership');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanSelect = (planName: string) => {
    setSelectedPlanForRegistration(planName);
    scrollToSection('register');
  };

  const handleServiceSelect = (serviceTitle: string) => {
    if (serviceTitle.toLowerCase().includes('mma')) {
      setSelectedPlanForRegistration('MMA 3 Months');
    } else if (serviceTitle.toLowerCase().includes('couple')) {
      setSelectedPlanForRegistration('Couple Package');
    } else {
      setSelectedPlanForRegistration('6 Months Membership');
    }
    scrollToSection('register');
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-slate-100 flex flex-col font-sans selection:bg-[#00A3E0] selection:text-white relative">
      {/* Top Navigation */}
      <Navbar onJoinClick={() => scrollToSection('register')} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onJoinClick={() => scrollToSection('register')}
          onViewPlansClick={() => scrollToSection('plans')}
        />

        {/* 2. About Our Gym (Drona Unisex Gym / Sky High Fitness Studio) */}
        <About />

        {/* 3. Comprehensive Services */}
        <Services onSelectServiceForRegistration={handleServiceSelect} />

        {/* 4. Membership Plans */}
        <Pricing onSelectPlan={handlePlanSelect} />

        {/* 5. Schedule & Timings */}
        <Schedule />

        {/* 6. Membership Registration Form */}
        <RegistrationForm selectedPlan={selectedPlanForRegistration} />

        {/* 7. Contact Us & Google Maps */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Pill for Quick Booking */}
      <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40">
        <a
          href={GYM_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all hover:scale-105 active:scale-95"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </aside>
    </div>
  );
}
