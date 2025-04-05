import React, { useEffect } from 'react';
import drone from '../assets/drone.png';
import { motion } from 'framer-motion';

const IntroPage = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const element = document.querySelector(e.target.hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener('click', smoothScroll));
    return () => links.forEach((link) => link.removeEventListener('click', smoothScroll));
  }, []);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-50 to-white pt-32 pb-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              <span className="text-purple-700">Precision</span> in Data.
              <br />
              <span className="text-purple-700">Perfection</span> in Design —
              <br />
              Powered by AI.
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Transforming complexity into clarity with AI-powered data analysis and design. Our cutting-edge solutions deliver insights that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="#services"
                className="px-8 py-4 bg-purple-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-white text-purple-600 text-lg font-medium rounded-lg shadow-lg border-2 border-purple-600 hover:bg-purple-50 transition duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="bg-white p-6 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-102">
              <img src={drone} alt="AI-driven traffic analysis" className="w-full rounded-lg" />
              <motion.div
                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-medium shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                AI-driven traffic analysis in action
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntroPage;