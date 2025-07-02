'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaProjectDiagram, FaCode, FaGraduationCap, FaAward } from 'react-icons/fa';

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <FaProjectDiagram />,
    value: 15,
    label: 'Projects Completed',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: <FaCode />,
    value: 3,
    label: 'Years Experience',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: <FaGraduationCap />,
    value: 2,
    label: 'Degrees Earned',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: <FaAward />,
    value: 95,
    label: 'Success Rate',
    suffix: '%',
    color: 'from-orange-500 to-orange-600'
  }
];

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Statistics & Achievements
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-2xl`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.div
                className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix || ''}
                  />
                )}
              </motion.div>
              
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuously growing and learning in the field of data science and machine learning. 
            Each project and experience contributes to my expertise and passion for innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics; 