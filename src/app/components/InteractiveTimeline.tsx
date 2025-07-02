'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    id: '1',
    type: 'experience',
    title: 'Data Science Intern in Lithography',
    subtitle: 'Beyond Gravity & ZEISS SMT',
    location: 'Zurich, Switzerland',
    period: 'Aug 2024 - Jan 2025',
    description: 'Developed statistical process control tools and enhanced data architecture for semiconductor manufacturing.',
    details: [
      'Developed a statistical process control tool to detect short/long-term trends and out-of-family behaviors in semiconductor manufacturing.',
      'Extended the internal data architecture to ingest and normalize supplier measurement data in diverse formats.',
      'Contributed to core Python libraries (SQLAlchemy, Plotly Dash, Pydantic), working in an agile team with automated testing, code reviews, and pair programming.'
    ],
    icon: <FaBriefcase />
  },
  {
    id: '2',
    type: 'experience',
    title: 'Research Assistant - Machine Learning',
    subtitle: 'Istituto Dalle Molle di Studi sull\'Intelligenza Artificiale (IDSIA)',
    location: 'USI, Lugano, Switzerland',
    period: 'April 2024 - Jul 2024',
    description: 'Extended thesis research with additional experiments and robust discoveries.',
    details: [
      'Extended Thesis research, increases the number of experiments using the same baseline, leading to a more robust discovery.'
    ],
    icon: <FaBriefcase />
  },
  {
    id: '3',
    type: 'education',
    title: 'Master of Science in Informatics',
    subtitle: 'Università Della Svizzera Italiana',
    location: 'USI, Lugano, Switzerland',
    period: 'Sep 2021 - Feb 2024',
    description: 'Specialized in Artificial Intelligence with focus on machine learning and data science.',
    details: [
      'Thesis: Machine Learning Approaches for Predicting Pest Insect Behavior in Corn Crops: A Comparative Analysis, Grade: 9.5/10',
      'Developed and compared multiple machine learning models to accurately predict the flight time of Ostrinia Nubilalis',
      'Employed advanced techniques including ARIMAX, Gradient Boosting Regressor, NARX, LSTM, and Graph Deep Learning models'
    ],
    icon: <FaGraduationCap />
  },
  {
    id: '4',
    type: 'experience',
    title: 'Software Developer Internship',
    subtitle: 'MGSoftWare, BloomDev',
    location: 'Tirana, Albania',
    period: 'Nov 2018 - Jun 2020',
    description: 'Developed multiple web pages using HTML, CSS, PHP, JavaScript, jQuery, and MySQL, which culminated in my bachelor\'s thesis interactive course, leading to improved educational delivery and a better engagement teacher-student.',
    details: [
      'Developed multiple web pages using HTML, CSS, PHP, JavaScript, jQuery, and MySQL',
      'Created an interactive online course website that culminated in bachelor\'s thesis',
      'Improved educational delivery and teacher-student engagement through web-based solutions'
    ],
    icon: <FaBriefcase />
  },
  {
    id: '5',
    type: 'education',
    title: 'Bachelor in Telecommunication Engineering',
    subtitle: 'Polytechnic University of Tirana',
    location: 'Tirana, Albania',
    period: '10/2017 - 11/2020',
    description: 'Focused on software development and web technologies.',
    details: [
      'Thesis: Designing a Website for an Online Course, Grade: 10/10',
      'Developed an interactive online course website to enhance student-professor interactions',
      'Implemented features such as lecture distribution, quiz creation, and result analysis'
    ],
    icon: <FaGraduationCap />
  }
];

const InteractiveTimeline = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Interactive Timeline
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="relative"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    className="glass-card p-6 rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-full ${
                        item.type === 'experience' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-purple-500 text-white'
                      }`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <FaCalendar className="w-3 h-3" />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        {item.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                    
                    <div className="mt-3">
                      <span className="text-xs text-blue-500 font-medium">
                        Click for details →
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Detailed Modal */}
          <AnimatePresence>
            {selectedItem && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedItem(null)}
              >
                <motion.div
                  className="glass-card p-8 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto bg-gray-900/95 backdrop-blur-md"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {(() => {
                    const item = timelineData.find(i => i.id === selectedItem);
                    if (!item) return null;
                    
                    return (
                      <>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-3 rounded-full ${
                            item.type === 'experience' 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-purple-500 text-white'
                          }`}>
                            {item.icon}
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-white">
                              {item.title}
                            </h2>
                            <p className="text-gray-300">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm text-gray-300">
                            <div className="flex items-center gap-1">
                              <FaCalendar className="w-4 h-4" />
                              {item.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <FaMapMarkerAlt className="w-4 h-4" />
                              {item.location}
                            </div>
                          </div>
                          
                          <p className="text-gray-200">
                            {item.description}
                          </p>
                          
                          <div>
                            <h3 className="font-semibold text-white mb-2">
                              Key Achievements:
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-200">
                              {item.details.map((detail, index) => (
                                <li key={index} className="text-sm">{detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => setSelectedItem(null)}
                          className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          Close
                        </button>
                      </>
                    );
                  })()}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTimeline; 