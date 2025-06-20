// src/components/IntroPageLeftContent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import vrLogo from '../assets/logo-removebg-preview.png'; // Ensure path is correct

const MotionLink = motion(RouterLink);

const IntroPageLeftContent = () => {
  console.log("IntroPageLeftContent rendering"); // For debugging re-renders
  return (
    <motion.div
      className="lg:w-1/2 lg:max-w-xl xl:max-w-2xl lg:pr-10 xl:pr-16 text-center lg:text-left mb-12 lg:mb-0"
      // Animation props remain the same
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="flex items-center justify-center lg:justify-start mb-6">
        <img src={vrLogo} alt="VR Solutions Logo" className="h-12 w-auto sm:h-14 md:h-16 mr-3" />
        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Tech Solutions
        </span>
      </div>

      <h2 className="text-lg md:text-xl xl:text-2xl text-purple-700 font-semibold mb-6">
        Precision in Data. Perfection in Design
      </h2>

      <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
        Transforming complexity into clarity with AI-powered data analysis and design. Our cutting-edge solutions deliver insights that drive innovation and growth.
      </p>

      <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
        <MotionLink
          to="/services"
          className="px-6 py-3 bg-purple-600 text-white text-base md:text-lg font-medium rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-50 transition duration-300 text-center"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(128,0,128,0.2)" }}
          whileTap={{ scale: 0.98 }}
        >
          Explore Our Services
        </MotionLink>
        <MotionLink
          to="/contact"
          className="px-6 py-3 bg-white text-purple-600 text-base md:text-lg font-medium rounded-lg shadow-lg border-2 border-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white transition duration-300 text-center"
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.98 }}
        >
          Get in Touch
        </MotionLink>
      </div>
    </motion.div>
  );
};

// Memoize the component. It will only re-render if its props change.
// Since it takes no props, it should effectively render only once after mount.
export default React.memo(IntroPageLeftContent);