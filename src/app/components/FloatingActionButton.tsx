'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaDownload, FaEnvelope } from 'react-icons/fa';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Add your CV download logic here
    const link = document.createElement('a');
    link.href = '/cv/Ariola_Leka_CV.pdf'; // Update with your CV path
    link.download = 'Ariola_Leka_CV.pdf';
    link.click();
  };

  const contactMe = () => {
    window.location.href = 'mailto:leka_ariola@yahoo.com';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            <motion.button
              onClick={contactMe}
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Contact Me"
            >
              <FaEnvelope />
            </motion.button>
            
            <motion.button
              onClick={downloadCV}
              className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Download CV"
            >
              <FaDownload />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg flex items-center justify-center text-white hover:shadow-xl transition-shadow animate-pulse-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isOpen ? "Close Menu" : "Quick Actions"}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowUp />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton; 