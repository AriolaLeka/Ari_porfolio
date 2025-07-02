'use client';

import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProjectItem {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: ProjectItem[] = [
  {
    title: 'GMAN: A Graph Multi-Attention Network for Traffic Prediction - Reproducibility Project',
    description: "Reproduced and enhanced a spatiotemporal traffic prediction model, achieving a 51.49% improvement in 7–12h air quality forecasting. Demonstrated robustness across diverse datasets, highlighting GMAN's adaptability to various time-series tasks.",
    role: 'Researcher',
    technologies: ['Python', 'Machine Learning', 'Time Series', 'Graph Networks'],
  },
  {
    title: 'Fruit Clustering Analysis Using Machine Learning',
    description: 'Executed a clustering project on 150 fruit samples using K-Means, Agglomerative Clustering, and GMM, based on features like diameter, weight, and vitamin content. Achieved 63% classification accuracy and uncovered meaningful patterns across fruit types.',
    role: 'Data Scientist',
    technologies: ['Python', 'Clustering', 'Data Analysis'],
  },
  {
    title: 'Predictive Analysis of Bike Rental Demand Using Machine Learning',
    description: 'Developed a predictive model to forecast bike rental demand, analyzing 17 variables, including weather conditions, time, and date. Compared Random Forest, Linear Regression, and Multi-layer Perceptron, achieving an R-squared of 0.83.',
    role: 'Machine Learning Engineer',
    technologies: ['Python', 'Random Forest', 'Regression', 'MLP'],
  },
];

const Projects = () => {
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
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-medium">Role:</span> {project.role}
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View on GitHub</span>
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 