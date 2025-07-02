'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  details: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'GMAN: Traffic Prediction',
    description: 'Spatiotemporal traffic prediction model with 51.49% improvement in air quality forecasting.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'Machine Learning', 'Time Series', 'Graph Networks'],
    github: 'https://github.com/AriolaLeka/GMAN-Traffic-Prediciton',
    details: [
      'Reproduced and enhanced a spatiotemporal traffic prediction model',
      'Achieved 51.49% improvement in 7–12h air quality forecasting',
      'Demonstrated robustness across diverse datasets',
      'Highlighted GMAN\'s adaptability to various time-series tasks'
    ]
  },
  {
    id: '2',
    title: 'Fruit Clustering Analysis',
    description: 'Machine learning clustering project on 150 fruit samples with 63% classification accuracy.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'Clustering', 'Data Analysis'],
    github: 'https://github.com/AriolaLeka/FruitClustering',
    details: [
      'Executed clustering project on 150 fruit samples',
      'Used K-Means, Agglomerative Clustering, and GMM',
      'Based on features like diameter, weight, and vitamin content',
      'Achieved 63% classification accuracy'
    ]
  },
  {
    id: '3',
    title: 'Bike Rental Demand Prediction',
    description: 'Predictive model for bike rental demand with R-squared of 0.83.',
    image: '/api/placeholder/400/300',
    technologies: ['Python', 'Random Forest', 'Regression', 'MLP'],
    github: 'https://github.com/ariolaleka/bike-rental-prediction',
    details: [
      'Developed predictive model for bike rental demand',
      'Analyzed 17 variables including weather conditions',
      'Compared Random Forest, Linear Regression, and MLP',
      'Achieved R-squared of 0.83'
    ]
  }
];

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Project Gallery
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{project.title}</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <motion.button
                    className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass-card p-8 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-white"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">{selectedProject.title}</span>
                  </div>
                  
                  {/* Project Details */}
                  <div className="space-y-4">
                    <p className="text-gray-200">
                      {selectedProject.description}
                    </p>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        Key Features:
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-200">
                        {selectedProject.details.map((detail, index) => (
                          <li key={index} className="text-sm">{detail}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        Technologies:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          <FaGithub className="w-4 h-4" />
                          View Code
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectGallery; 