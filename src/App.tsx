import { useState } from 'react';

// Import Types and Mock Data
import { EVENTS_DATA } from './constants/events';

// Import Modular Components
import { Header } from './components/common/Header/Header';
import { Hero } from './components/sections/HeroSection';
import { EventsSection } from './components/sections/EventsSection';
import { JourneySection } from './components/sections/JourneySection';
import { AboutSection } from './components/sections/AboutSection';
import { CategoriesSection } from './components/sections/CategoriesSection';
import { DisciplinesSection } from './components/sections/DisciplinesSection';
import { AdvantageSection } from './components/sections/AdvantageSection';
import { ArenaMapSection } from './components/sections/ArenaMapSection';
import { EcosystemSection } from './components/sections/EcosystemSection';
import { SponsorsSection } from './components/sections/SponsorsSection';
import { Footer } from './components/common/Footer/Footer';
import { LiveStreamModal } from './components/common/Modal/LiveStreamModal';

export default function App() {
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [watchLiveOpen, setWatchLiveOpen] = useState(false);

  // Handle Event Registration
  const handleRegisterEvent = (eventId: string) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(prev => prev.filter(id => id !== eventId));
    } else {
      setRegisteredEvents(prev => [...prev, eventId]);
    }
  };

  // Scroll helpers — scrollIntoView works with the wrapper div as scroll container
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-y-auto overflow-x-hidden text-white selection:bg-[#ff4c4c] selection:text-white bg-[#100f0f]">
      {/* Background Ambient Glows (Figma Ellipse 11 & Ellipse 12) */}
      <div className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#5f2f2f]/30 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[400px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#5f2f2f]/20 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[800px] left-[-300px] w-[700px] h-[700px] rounded-full bg-[#5f2f2f]/10 blur-[180px] pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#5f2f2f]/15 blur-[120px] pointer-events-none z-0" />

      {/* Navigation Header */}
      <Header 
        onRegisterClick={() => scrollToSection('ecosystem')}
        onLoginClick={() => alert('Login flow initiated')}
      />

      {/* Hero Section */}
      <Hero 
        onWatchLiveClick={() => setWatchLiveOpen(true)}
        onCreateAccountClick={() => scrollToSection('ecosystem')}
      />

      {/* Competitions & Events Section */}
      <EventsSection 
        events={EVENTS_DATA}
        registeredEvents={registeredEvents}
        onRegisterEvent={handleRegisterEvent}
      />

      {/* User Journey Section */}
      <JourneySection />

      {/* What is BotLeague Section */}
      <AboutSection />

      {/* Categories Section */}
      <CategoriesSection />

      {/* Disciplines Section */}
      <DisciplinesSection />

      {/* Why Register & Advantage */}
      <AdvantageSection />

      {/* Arena Map & Structure Section */}
      <ArenaMapSection />

      {/* Join the Ecosystem Forms Section */}
      <EcosystemSection />

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Footer Section */}
      <Footer />

      {/* Live Stream Video Modal */}
      {watchLiveOpen && (
        <LiveStreamModal onClose={() => setWatchLiveOpen(false)} />
      )}
    </div>
  );
}
