// src/components/IntroPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import the new memoized left content component
import IntroPageLeftContent from './IntroPageLeftContent'; // Adjust path if needed

// Assuming RightPartHero is correctly imported
import { RightPartHero } from './RightPartHero'; // Ensure this path is correct

const IntroPage = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute inset-0 opacity-20 -z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content Section */}
      {/* Adjusted padding: pt-16 (or less/more based on your navbar) and keeping pb for bottom space */}
      <section className="relative w-full px-4 sm:px-8 pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left: Memoized Text Content */}
          <IntroPageLeftContent />
          
          {/* Right: Hero Image/Component */}
          {/* The motion.div for RightPartHero can keep its animation */}
          <motion.div
            className="lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }} // Delay kept for staggered entry
          >
            <RightPartHero />
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default IntroPage;