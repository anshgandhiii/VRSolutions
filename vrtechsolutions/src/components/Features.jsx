// src/pages/Home.jsx (or wherever your Home component is)
import React from 'react';
import { motion } from 'framer-motion';
import FeatureShowcaseRow from '../components/FeatureShowcaseRow'; // Adjust path if needed

// Import your new feature images
import analyticsImage from '../assets/ai-travel.webp'; 
import creativeImage from '../assets/ai-travel.webp'; 
import deliveryImage from '../assets/ai-travel.webp';   

const Features = () => {
  // Original feature data (without icons, as images will be used)
  const featuresData = [
    {
      imgSrc: analyticsImage,
      imgAlt: 'Advanced Analytics Illustration',
      title: 'Advanced Analytics',
      description: 'Leverage AI-powered insights for actionable intelligence and data-driven decision making.',
      imageSide: 'left', // Image on the left for the first item
    },
    {
      imgSrc: creativeImage,
      imgAlt: 'Creative Excellence Design',
      title: 'Creative Excellence',
      description: 'Stunning, user-centric designs that flawlessly blend modern aesthetics with intuitive functionality.',
      imageSide: 'right', // Image on the right for the second item
    },
    {
      imgSrc: deliveryImage,
      imgAlt: 'Rapid Delivery Process',
      title: 'Rapid Delivery',
      description: 'Experience quick project turnarounds and efficient workflows without compromising on quality or precision.',
      imageSide: 'left', // Image on the left for the third item
    },
  ];

  return (
    // Main container for the Home page sections
    <div className="bg-gradient-to-b from-white to-purple-200">

      {/* Hero Section (Your Existing IntroPage component would go here) */}
      {/* <IntroPage /> */}


      {/* New Features Section */}
      <div className="py-16"> {/* Overall padding for this group of features */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-24 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Animate heading only once
            transition={{ duration: 0.7 }}
          >
            “Our mission is to deliver precision in data and perfection in design, powered by AI.”
          </motion.h2>
        </div>

        {/* Map through your features data to render each showcase row */}
        {featuresData.map((feature, index) => (
          <FeatureShowcaseRow
            key={feature.title}
            imgSrc={feature.imgSrc}
            imgAlt={feature.imgAlt}
            title={feature.title}
            description={feature.description}
            imageSide={feature.imageSide}
            animationDelay={0.2 + index * 0.15} // Stagger the animation delay slightly for each row
          />
        ))}
      </div>


      {/* Stats Section Refined */}
        <motion.section
        className="py-20 md:py-28 bg-gradient-to-br from-purple-300 to-indigo-700 text-white shadow-2xl overflow-hidden" // Changed to gradient, increased padding, added overflow
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <div className="max-w-5xl mx-auto text-center px-6 sm:px-8 relative">
            {/* Optional: Subtle background pattern or shapes */}
            {/* Example:
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/5 rounded-full opacity-50 blur-xl"></div>
            */}

            <motion.div
            className="py-8" // Increased padding within the motion div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
            <div className="mb-8 md:mb-12">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-2">
                Our Network & Partnerships
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                Collaborating with <span className="text-purple-300">Leading</span> Institutions
                </h3>
            </div>

            <motion.p
                className="text-lg sm:text-xl md:text-2xl mt-6 max-w-3xl mx-auto text-purple-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
                Proudly partnering with prestigious academic and research institutions to drive innovation and foster technological advancements:
            </motion.p>

            {/* List of Institutions - Enhanced Styling */}
            <motion.div
                className="mt-10 md:mt-12 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 sm:gap-x-10 sm:gap-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.6 }}
            >
                {[
                "NIT Surat",
                "NIT Calicut",
                "NIT Tiruchirappalli",
                "Mahindra University, Hyderabad",
                ].map((institute, index) => (
                <motion.span
                    key={institute}
                    className="text-md sm:text-lg font-medium text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md hover:bg-white/20 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {institute}
                </motion.span>
                ))}
            </motion.div>
            </motion.div>
        </div>
        </motion.section>
    </div> // End of main container
  );
};

export default Features;