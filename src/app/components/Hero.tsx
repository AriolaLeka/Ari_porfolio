import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaBrain, FaChartBar } from 'react-icons/fa';
import { BsCodeSquare } from 'react-icons/bs';

const Hero = () => {
  return (
    <section id="about" className="relative pt-24 pb-32 px-4 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left z-10">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <FaBrain className="text-blue-500 text-2xl animate-pulse" />
              <span className="text-sm font-semibold text-blue-500 tracking-wider">AI/ML SPECIALIST</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-green-500">
              Ariola Leka
              <span className="text-2xl block mt-2 text-gray-600 dark:text-gray-400">Machine Learning Engineer/Data Scientist/Data Analyst</span>
            </h1>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <BsCodeSquare className="text-purple-500" />
                <span className="text-sm">Full Stack Development</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <FaBrain className="text-blue-500" />
                <span className="text-sm">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <FaChartBar className="text-green-500" />
                <span className="text-sm">Data Science</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0 mb-12 glass-card p-6 rounded-lg">
              Based in Valencia, Spain. Specialized in machine learning, data science, and data analysis. Experienced in statistical process control, time-series forecasting, and web development. Passionate about building robust data-driven solutions and contributing to innovative projects.
            </p>

            <div className="flex justify-center md:justify-start space-x-6">
              <Link
                href="https://github.com/ariolaleka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110"
              >
                <FaGithub className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:leka_ariola@yahoo.com"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110"
              >
                <FaEnvelope className="w-8 h-8" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ariola-leka/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110"
              >
                <FaLinkedin className="w-8 h-8" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center z-10">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl 
                          before:absolute before:inset-0 before:z-10 before:bg-gradient-to-r before:from-blue-500/20 before:via-purple-500/20 before:to-green-500/20 before:mix-blend-overlay
                          transform hover:scale-105 transition-all duration-500 ease-out
                          ring-1 ring-white/20 hover:ring-2 hover:ring-blue-500/50">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <Image
                src="/ari.png"
                alt="Ariola Leka at master graduation"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 