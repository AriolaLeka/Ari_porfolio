'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaCode, FaChartBar } from 'react-icons/fa';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="relative w-24 h-24 mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaBrain className="text-white text-3xl" />
                </motion.div>
                <motion.div
                  className="absolute inset-2 bg-white rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaCode className="text-blue-600 text-xl" />
                </motion.div>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Ariola Leka
            </motion.h1>

            {/* Title */}
            <motion.p
              className="text-xl text-blue-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Machine Learning Engineer / Data Scientist
            </motion.p>

            {/* Progress Bar */}
            <div className="w-64 mx-auto mb-4">
              <div className="bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Progress Text */}
            <motion.p
              className="text-blue-200 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Loading... {progress}%
            </motion.p>

            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-1/4 left-1/4 text-blue-400 opacity-30"
                animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaChartBar className="text-2xl" />
              </motion.div>
              <motion.div
                className="absolute top-3/4 right-1/4 text-purple-400 opacity-30"
                animate={{ y: [0, 20, 0], rotate: [0, -360] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <FaBrain className="text-2xl" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-1/2 text-indigo-400 opacity-30"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <FaCode className="text-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 