// src/components/OurWork.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom'; // Assuming you use React Router for links
import { ArrowRight } from 'lucide-react'; // Optional: for a nice arrow icon

// --- IMPORT YOUR PROJECT IMAGES HERE ---
// Example:
import projectImage1 from '../assets/DataAnalysis.png'; // Using your existing images as placeholders
import projectImage2 from '../assets/DesignWorks.png';
import projectImage3 from '../assets/Research.png';
import projectImage4 from '../assets/AcademicConsultations.png'; // Add more as needed

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger animation for each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Sample Project Data (Replace with your actual projects)
const projects = [
  {
    id: 1,
    title: 'Advanced Data Visualization Platform',
    category: 'Data Analysis & BI',
    image: projectImage1,
    link: '/portfolio/data-viz-platform', // Link to a detailed project page
    description: 'A cutting-edge platform for interactive data exploration and reporting.'
  },
  {
    id: 2,
    title: 'E-commerce Brand Identity & UX',
    category: 'Creative Design & Branding',
    image: projectImage2,
    link: '/portfolio/ecommerce-branding',
    description: 'Complete brand overhaul and user experience design for an online retailer.'
  },
  {
    id: 3,
    title: 'AI-Powered Predictive Maintenance',
    category: 'AI/ML Solutions',
    image: projectImage3,
    link: '/portfolio/ai-predictive-maintenance',
    description: 'Machine learning models predicting equipment failures for industrial clients.'
  },
  {
    id: 4,
    title: 'PhD Research Consultation',
    category: 'Academic & Research Support',
    image: projectImage4,
    link: '/portfolio/phd-consultation-success',
    description: 'Successful guidance on research methodology and publication for doctoral candidates.'
  },
  // Add more projects as needed
];

function OurWork() {
  return (
    <motion.section
      className="py-20 px-4 sm:px-8 bg-gradient-to-b from-purple-50 to-white" // Slightly different gradient or solid color
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      id="our-work" // For potential internal navigation
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          variants={titleVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Our Recent Work
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Discover a selection of projects that showcase our expertise and commitment to delivering exceptional results for our clients.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10" // Using 2 columns for larger visuals
          variants={gridVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <RouterLink to={project.link || '#'} className="block">
                <div className="aspect-w-4 aspect-h-3 sm:aspect-w-16 sm:aspect-h-9"> {/* Control image aspect ratio */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/800x600?text=Project+Image';
                    }}
                  />
                </div>

                {/* Overlay Content - Appears on Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 ease-in-out">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={ { y: 0, opacity: 1 }} // This won't work directly with group-hover like this.
                                                       // We'll rely on parent opacity and transition for simplicity here.
                      className="text-2xl font-bold mb-2 transition-transform duration-300 group-hover:translate-y-0 translate-y-4"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm text-purple-300 mb-4 transition-transform duration-300 delay-75 group-hover:translate-y-0 translate-y-4"
                    >
                      {project.category}
                    </motion.p>
                    <motion.span
                      className="inline-flex items-center px-6 py-3 text-sm font-semibold
                                 bg-purple-600 hover:bg-purple-700 rounded-lg
                                 transition-all duration-300 delay-150 group-hover:translate-y-0 translate-y-4
                                 transform group-hover:scale-100 scale-95 opacity-0 group-hover:opacity-100"
                    >
                      View Project
                      <ArrowRight size={18} className="ml-2" />
                    </motion.span>
                  </div>
                </div>
              </RouterLink>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: View All Projects Button */}
        {projects.length > 4 && ( // Show only if there are more projects than displayed initially
            <motion.div className="text-center mt-16" variants={titleVariants}>
                <RouterLink
                    to="/portfolio" // Link to your main portfolio page
                    className="inline-block px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                    Explore All Projects
                </RouterLink>
            </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default OurWork;