'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPython, FaDatabase, FaBrain, FaChartBar, FaCode, FaRobot } from 'react-icons/fa';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 95, icon: <FaPython />, color: 'from-blue-500 to-blue-600' },
  { name: 'Machine Learning', level: 90, icon: <FaBrain />, color: 'from-purple-500 to-purple-600' },
  { name: 'Data Analysis', level: 88, icon: <FaChartBar />, color: 'from-green-500 to-green-600' },
  { name: 'SQL & Databases', level: 85, icon: <FaDatabase />, color: 'from-orange-500 to-orange-600' },
  { name: 'Web Development', level: 80, icon: <FaCode />, color: 'from-red-500 to-red-600' },
  { name: 'AI Agents', level: 75, icon: <FaRobot />, color: 'from-indigo-500 to-indigo-600' },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-2xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
                <span className="ml-auto text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              
              <div className="skill-bar">
                <motion.div
                  className={`skill-progress bg-gradient-to-r ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
                />
              </div>
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
            Continuously expanding my expertise in data science, machine learning, and software development. 
            Passionate about leveraging technology to solve complex problems and drive innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 