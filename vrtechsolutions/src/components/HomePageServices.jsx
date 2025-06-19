// src/components/HomePageServices.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import your assets
import dataAnalysisImage from '../assets/DataAnalysis.png';
import designWorksImage from '../assets/DesignWorks.png';
import researchProjectsImage from '../assets/Research.png';
import academicConsultationImage from '../assets/AcademicConsultations.png';

// Import the modified HoverEffect component
import { HoverEffect } from './ui/card-hover-effect'; // Adjust path if necessary

function HomePageServices() {
  const servicesData = [ // Renamed to servicesData for clarity
    {
      title: 'Data Analysis',
      description: 'Create comprehensive reports that help you make informed decisions.',
      image: dataAnalysisImage,
      features: ['Drone data processing', 'Statistical analysis', 'Interactive visualizations', 'Trend identification'],
      path: '/services/data-analysis', // Added path for navigation
    },
    {
      title: 'Creative Design',
      description: 'Get visually stunning assets that capture attention of everyone.',
      image: designWorksImage,
      features: ['Workshop booklets', 'Marketing materials', 'Abstract designs', 'Brand identity'],
      path: '/services/creative-design', // Added path
    },
    {
      title: 'AI/ML Projects',
      description: 'Intelligent systems that solve complex problems with AI/ML.',
      image: researchProjectsImage,
      features: ['Custom AI models', 'ML algorithm development', 'Predictive analytics', 'Computer vision'],
      path: '/services/ai-ml-projects', // Added path
    },
    {
      title: 'Academic Consultation',
      description: 'Support for research projects, article writing, and academic development.',
      image: academicConsultationImage,
      features: ['Research problem identification', 'Article writing & editing', 'Methodology guidance', 'Literature review'],
      path: '/services/academic-consultation', // Added path
    },
  ];

  // Animation variants for the section title (can be simplified or removed if not needed)
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-20 sm:py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-purple-200">
      <h2 className="text-center text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
          Our Services
        </span>
      </h2>
      <p className="text-lg text-gray-700 whitespace-nowrap truncate text-center max-w-full px-4">
        Explore our range of specialized solutions designed to drive innovation and deliver results.
      </p>
      <div className="max-w-7xl mx-auto"> {/* Changed max-w-6xl to max-w-7xl for a bit more space if needed */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20" // Adjusted margins
          initial="hidden"
          whileInView="show" // Changed to whileInView for scroll-triggered animation
          variants={titleVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
        </motion.div>

        {/* Use the HoverEffect component */}
        <HoverEffect items={servicesData} />

      </div>
    </section>
  );
}

export default HomePageServices;