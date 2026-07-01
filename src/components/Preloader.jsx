import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [fillComplete, setFillComplete] = useState(false);

  useEffect(() => {
    // 1.6s for the water-fill effect
    const fillTimer = setTimeout(() => {
      setFillComplete(true);
    }, 1800);

    // After fill completes, wait briefly then complete the preloader (to slide shutter up)
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: { 
          duration: 1.0, 
          ease: [0.76, 0, 0.24, 1], // Custom premium cubic-bezier for shutter speed
          delay: 0.1
        } 
      }}
      className="fixed inset-0 w-full h-full bg-[#ff2a2a] z-[100000] flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        initial={{ scale: 1, opacity: 1 }}
        exit={{ 
          scale: 0.85, 
          opacity: 0,
          transition: { duration: 0.6, ease: 'easeInOut' }
        }}
        className="relative select-none text-center px-4"
      >
        {/* Background layer: Dark transparent text */}
        <div 
          className="text-6xl md:text-9xl font-black tracking-tighter text-black/15 font-display"
        >
          Srinivas.
        </div>

        {/* Foreground layer: White text with clip-path water fill */}
        <motion.div 
          initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
          animate={{ 
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transition: { duration: 1.6, ease: [0.42, 0, 0.58, 1] } 
          }}
          className="absolute inset-0 flex items-center justify-center text-6xl md:text-9xl font-black tracking-tighter text-white font-display pointer-events-none"
        >
          Srinivas.
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
