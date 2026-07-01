import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* 1. Fullscreen Agency Preloader with exit animation */}
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <Preloader onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      {/* 2. Main Portfolio Layout (renders along with preloader exit) */}
      <div className="w-full min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FF2A2A] selection:text-white">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
