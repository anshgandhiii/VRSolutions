// src/components/IntroPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import styles from "../styles";
// Your Assets
import drone from '../assets/drone.png'; // Assuming this will be the main hero image
import vrLogo from '../assets/logo-removebg-preview.png';

// Motion Utilities (ensure this path is correct)
import { slideIn, staggerContainer, textVariant, fadeIn } from '../utils/motion';

const MotionLink = motion(RouterLink);

const IntroPage = () => {
  return (
    // min-h-screen removed to allow content below to flow naturally if page gets longer
    // bg-gradient-to-r from-purple-50 to-white (Kept your original background for the whole section)
    <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          {/* Centered Heading */}
          <div className="flex justify-center items-center flex-col relative z-10">
            <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
              VR Tech
            </motion.h1>
            <motion.div
              variants={textVariant(1.2)}
              className="flex flex-row justify-center items-center"
            >
              <h1 className={styles.heroHeading}>Solutions</h1>
            </motion.div>
          </div>

          {/* Large Image with Curve and Gradient */}
          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="relative w-full md:-mt-[20px] -mt-[12px]"
          >
            {/* Gradient Overlay */}
            <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

            <img
              src={drone} // Using your drone image
              alt="VR Tech Solutions"
              className="w-full sm:h-[400px] md:h-[500px] h-[300px] object-cover rounded-tl-[100px] md:rounded-tl-[140px] z-10 relative shadow-2xl"
            />
          </motion.div>

          <motion.div
            className="mt-16 md:mt-24 text-center max-w-3xl mx-auto" // Centered and constrained width
            variants={fadeIn('up', 'tween', 0.5, 0.8)} // Added a subtle fadeIn
          >
            <div className="flex items-center justify-center mb-6"> {/* Centered logo and name */}
              <img src={vrLogo} alt="VR Logo" className="h-12 sm:h-14 w-auto mr-3" />
              <span className="text-2xl sm:text-3xl font-bold text-gray-800">Tech Solutions</span>
            </div>

            <h2 className="text-lg md:text-xl text-purple-700 font-semibold mb-6">
              Precision in Data. Perfection in Design — Powered by AI.
            </h2>

            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
              Transforming complexity into clarity with AI-powered data analysis and design. Our cutting-edge solutions deliver insights that drive innovation and growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <MotionLink
                to="/services"
                className="px-8 py-3 bg-purple-600 text-white text-base md:text-lg font-medium rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
              </MotionLink>
              <MotionLink
                to="/contact"
                className="px-8 py-3 bg-white text-purple-600 text-base md:text-lg font-medium rounded-lg shadow-lg border-2 border-purple-600 hover:bg-purple-50 transition duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </MotionLink>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default IntroPage;