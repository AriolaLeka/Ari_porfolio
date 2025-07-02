'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  period: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Beyond Gravity & ZEISS SMT (Lithography Division)',
    position: 'Data Science Intern in Lithography',
    location: 'Zurich, Switzerland',
    period: 'Aug 2024 - Jan 2025',
    achievements: [
      'Developed a statistical process control tool to detect short/long-term trends and out-of-family behaviors in semiconductor manufacturing.',
      'Extended the internal data architecture to ingest and normalize supplier measurement data in diverse formats.',
      'Contributed to core Python libraries (SQLAlchemy, Plotly Dash, Pydantic), working in an agile team with automated testing, code reviews, and pair programming.'
    ],
  },
  {
    company: "Istituto Dalle Molle di Studi sull'Intelligenza Artificiale (IDSIA)",
    position: 'Research Assistant - Machine Learning',
    location: 'USI, Lugano, Switzerland',
    period: 'April 2024 - Jul 2024',
    achievements: [
      'Extended Thesis research, increases the number of experiments using the same baseline, leading to a more robust discovery.'
    ],
  },
  {
    company: 'MGSoftWare, BloomDev',
    position: 'Software Developer Internship',
    location: 'Tirana, Albania',
    period: 'Nov 2018 - Jun 2020',
    achievements: [
      'Developed multiple web pages using HTML, CSS, PHP, JavaScript, jQuery, and MySQL, which culminated in my bachelor\'s thesis interactive course, leading to improved educational delivery and a better engagement teacher-student.'
    ],
  },
];

const Experience = () => {
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

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div 
          ref={ref}
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{exp.position}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                  <p className="text-gray-500 dark:text-gray-500">{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 