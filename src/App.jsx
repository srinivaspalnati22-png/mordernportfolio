import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ArchitectureViewer from './components/ArchitectureViewer';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <>
      {/* 1. Fullscreen Agency Preloader */}
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <Preloader onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      {/* 2. Main Portfolio Layout */}
      <div className="w-full min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FF2A2A] selection:text-white">
        <Navbar onOpenResume={handleOpenResume} />
        
        <main className="w-full">
          <Hero onOpenResume={handleOpenResume} />
          <About onOpenResume={handleOpenResume} />
          <Skills onOpenResume={handleOpenResume} />
          <ArchitectureViewer />
          <Services />
          <Projects />
        </main>

        <Footer onOpenResume={handleOpenResume} />

        {/* 3. ATS-Friendly Resume Modal & Print Engine */}
        <AnimatePresence>
          {isResumeOpen && (
            <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
