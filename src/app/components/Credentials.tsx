'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaAward, FaMedal } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';

const Credentials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const languages = [
    { name: 'Albanian', level: 'Native', color: 'from-green-500 to-green-600', icon: '🇦🇱' },
    { name: 'English', level: 'C1', color: 'from-blue-500 to-blue-600', icon: '🇺🇸' },
    { name: 'Italian', level: 'B2', color: 'from-yellow-500 to-yellow-600', icon: '🇮🇹' },
    { name: 'Spanish', level: 'B1', color: 'from-red-500 to-red-600', icon: '🇪🇸' },
    { name: 'German', level: 'A1', color: 'from-gray-500 to-gray-600', icon: '🇩🇪' },
  ];

  const achievements = [
    {
      title: 'Master\'s Thesis Excellence',
      description: 'Grade: 9.5/10 - Machine Learning Approaches for Predicting Pest Insect Behavior',
      icon: <FaTrophy className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Bachelor\'s Thesis Distinction',
      description: 'Grade: 10/10 - Designing a Website for an Online Course',
      icon: <FaAward className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Research Contribution',
      description: 'Extended thesis research at IDSIA with robust discoveries',
      icon: <FaMedal className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500'
    }
  ];



  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Credentials & Achievements
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Academic excellence, technical expertise, and multilingual capabilities
        </motion.p>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Languages Section */}
          <motion.div variants={cardVariants} className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <IoLanguage className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Languages</h3>
            </div>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  className="relative overflow-hidden rounded-xl p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lang.icon}</span>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{lang.name}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${lang.color} text-white text-sm font-medium`}>
                      {lang.level}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={cardVariants} className="glass-card p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                <FaAward className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Academic Achievements</h3>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="relative overflow-hidden rounded-xl p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color} text-white`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>




      </div>
    </section>
  );
};

export default Credentials; 