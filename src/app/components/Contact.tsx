import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, opportunities, and collaborations.
            Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-8">
            <Link
              href="mailto:leka_ariola@yahoo.com"
              className="flex flex-col items-center group"
            >
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-2 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                <FaEnvelope className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Email</span>
            </Link>
            <Link
              href="https://github.com/ariolaleka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-2 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ariola-leka/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-2 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</span>
            </Link>
          </div>
          <div className="mt-12">
            <p className="text-gray-600 dark:text-gray-400">
              Location: Valencia, Spain
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Phone: +34611859231
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 