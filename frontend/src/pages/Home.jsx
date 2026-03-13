import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Showcase from '../components/Showcase';
import Gallery from '../components/Gallery';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

const effectsMap = {
  confetti: { label: 'Confetti Storm', color: 'bg-pink-400' },
  coldPyro: { label: 'Cold Pyro', color: 'bg-amber-400' },
  lowFog: { label: 'Low Fog', color: 'bg-white/40' },
  lasers: { label: 'Laser Lights', color: 'bg-green-400' },
  sparkular: { label: 'Sparkular Fountains', color: 'bg-yellow-300' }
};

export default function Home() {
  const [activeEffects, setActiveEffects] = useState({});

  const toggleEffect = (key) => {
    setActiveEffects(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-dark)] font-inter">
      {/* Navigation */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <h1 className="text-2xl font-playfair font-bold text-[var(--color-gold)] tracking-wide">Dreamy SFX</h1>
        <div className="space-x-6">
          <Link to="/login" className="text-sm font-medium hover:text-[var(--color-gold)] transition-colors">Client login</Link>
          <Link to="/signup" className="px-6 py-2 bg-[var(--color-dark)] text-[var(--color-ivory)] text-sm font-medium rounded-full hover:bg-[var(--color-gold)] transition-colors shadow-lg">Book Now</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="z-10 text-center max-w-3xl px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight"
          >
            Design Your <span className="text-[var(--color-gold)] italic">Dream</span> Wedding Entry
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Create unforgettable wedding moments with cinematic special effects. Experience it in our live simulator below.
          </motion.p>
        </div>

        {/* Interactive Simulator Stage */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-12 px-6 pb-20 z-10">
          
          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 p-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-[var(--color-sage)]"
          >
            {Object.entries(effectsMap).map(([key, { label }]) => (
              <button
                key={key}
                onClick={() => toggleEffect(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeEffects[key] 
                    ? 'bg-[var(--color-dark)] text-[var(--color-gold)] shadow-lg scale-105' 
                    : 'bg-white hover:bg-[var(--color-sage)] text-gray-700'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {/* Stage Preview */}
          <div className="w-full h-[500px] bg-dark relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#2F2F2F]"></div>
            
            {/* The Stage Floor */}
            <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-8">
              <h3 className="text-white/30 font-playfair text-3xl font-bold tracking-widest uppercase">The Stage</h3>
            </div>

            {/* Simulated Effects Animations */}
            <AnimatePresence>
              {activeEffects.confetti && (
                <motion.div 
                  initial={{ opacity: 0, top: '-20%' }}
                  animate={{ opacity: 1, top: '10%' }}
                  exit={{ opacity: 0, top: '100%' }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-x-0 mx-auto w-full h-full flex justify-around pointer-events-none"
                >
                   {/* Abstract Confetti Particles */}
                   {[...Array(20)].map((_, i) => (
                     <div key={i} className={`w-3 h-3 ${['bg-pink-400', 'bg-gold', 'bg-white'][i%3]} rounded-full animate-bounce`} style={{ animationDelay: `${i * 0.1}s` }} />
                   ))}
                </motion.div>
              )}

              {activeEffects.coldPyro && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: '60%' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="absolute bottom-1/4 left-1/4 w-4 bg-gradient-to-t from-yellow-500 to-white rounded-t-full shadow-[0_0_30px_10px_rgba(255,200,0,0.6)]"
                />
              )}
              {activeEffects.coldPyro && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: '60%' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="absolute bottom-1/4 right-1/4 w-4 bg-gradient-to-t from-yellow-500 to-white rounded-t-full shadow-[0_0_30px_10px_rgba(255,200,0,0.6)]"
                />
              )}

              {activeEffects.lowFog && (
                <motion.div 
                  initial={{ opacity: 0, bottom: -50 }}
                  animate={{ opacity: 0.8, bottom: 0 }}
                  exit={{ opacity: 0, bottom: -50 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                  className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white/60 to-transparent blur-xl pointer-events-none"
                />
              )}
              
              {activeEffects.lasers && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-0 left-1/4 w-[1px] h-[200%] bg-green-400 shadow-[0_0_15px_5px_rgba(74,222,128,0.8)] origin-top transform rotate-45" />
                  <div className="absolute top-0 right-1/4 w-[1px] h-[200%] bg-green-400 shadow-[0_0_15px_5px_rgba(74,222,128,0.8)] origin-top transform -rotate-45" />
                </motion.div>
              )}

              {activeEffects.sparkular && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                  className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Inserted Sections */}
      <Showcase />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
}
