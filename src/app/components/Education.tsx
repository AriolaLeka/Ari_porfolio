'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  details: {
    title: string;
    points: string[];
  }[];
}

const education: EducationItem[] = [
  {
    degree: 'Master of Science in Informatics, Minor in Artificial Intelligence',
    school: 'Università Della Svizzera Italiana',
    location: 'USI, Lugano, Switzerland',
    period: 'Sep 2021 - Feb 2024',
    details: [
      {
        title: 'Thesis: Machine Learning Approaches for Predicting Pest Insect Behavior in Corn Crops: A Comparative Analysis, Grade: 9.5/10',
        points: [
          'Developed and compared multiple machine learning models to accurately predict the flight time of Ostrinia Nubilalis, a significant agricultural pest.',
          'Employed advanced techniques including ARIMAX, Gradient Boosting Regressor, NARX, LSTM, and Graph Deep Learning models.',
          'Increased forecasting from a yearly statistic to a 10-day in advance prediction of the flight time of the pest and established temperature as a critical factor influencing pest behavior.'
        ],
      },
    ],
  },
  {
    degree: 'Bachelor in Telecommunication Engineering',
    school: 'Polytechnic University of Tirana',
    location: 'Tirana, Albania',
    period: '10/2017 - 11/2020',
    details: [
      {
        title: 'Thesis: Designing a Website for an Online Course, Grade: 10/10',
        points: [
          'Developed an interactive online course website to enhance student-professor interactions and streamline information dissemination.',
          'Implemented features such as lecture distribution, quiz creation, and result analysis, leading to improved educational delivery and engagement.'
        ],
      },
    ],
  },
];

const Education = () => {
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
    <section id="education" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.div 
          ref={ref}
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-2xl"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                  <p className="text-gray-500 dark:text-gray-500">{edu.period}</p>
                </div>
              </div>
              {edu.details.map((detail, i) => (
                <div key={i} className="mb-6 last:mb-0">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                    {detail.title}
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {detail.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 