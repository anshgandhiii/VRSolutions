import React, { useEffect } from 'react';
import drone from '../assets/drone.png';
import { motion } from 'framer-motion';
import vrLogo from '../assets/logo-removebg-preview.png';

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
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-white" id="intro">
      <section className="pt-28 px-4 sm:px-8 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          
          {/* Left: Text Content */}
          <motion.div
            className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <img src={vrLogo} alt="VR Logo" className="h-14 w-auto mr-3" />
              <span className="text-3xl md:text-5xl font-extrabold text-gray-900">Tech Solutions</span>
            </div>

            <h2 className="text-lg md:text-2xl text-purple-700 font-semibold mb-4">
              Precision in Data. Perfection in Design — Powered by AI.
            </h2>

            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Transforming complexity into clarity with AI-powered data analysis and design. Our cutting-edge solutions deliver insights that drive innovation and growth.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#services"
                className="px-4 py-2 bg-purple-600 text-white text-sm md:text-base font-medium rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
              </motion.a>
              <motion.a
                href="#contact"
                className="px-4 py-2 bg-white text-purple-600 text-sm md:text-base font-medium rounded-lg shadow-lg border-2 border-purple-600 hover:bg-purple-50 transition duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Drone Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="bg-white p-4 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-102">
              <img src={drone} alt="AI-driven traffic analysis" className="w-full rounded-lg" />
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white py-1 px-4 rounded-full text-xs md:text-sm font-medium shadow-lg"
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
