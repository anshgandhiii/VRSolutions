import React, { useEffect } from 'react';
import dataAnalysisImage from '../assets/DataAnalysis.png';
import designWorksImage from '../assets/DesignWorks.png';
import researchProjectsImage from '../assets/Research.png';
import academicConsultationImage from '../assets/AcademicConsultations.png';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      title: 'Data Analysis',
      description: 'Create comprehensive reports that help you make informed decisions.',
      image: dataAnalysisImage,
      features: ['Drone data processing', 'Statistical analysis', 'Interactive visualizations', 'Trend identification'],
    },
    {
      title: 'Creative Design',
      description: 'Get visually stunning assets that capture attention of everyone.',
      image: designWorksImage,
      features: ['Workshop booklets', 'Marketing materials', 'Abstract designs', 'Brand identity'],
    },
    {
      title: 'AI/ML Projects',
      description: 'Intelligent systems that solve complex problems with AI/ML.',
      image: researchProjectsImage,
      features: ['Custom AI models', 'ML algorithm development', 'Predictive analytics', 'Computer vision'],
    },
    {
      title: 'Academic Consultation',
      description: 'Support for research projects, article writing, and academic development.',
      image: academicConsultationImage,
      features: ['Research problem identification', 'Article writing & editing', 'Methodology guidance', 'Literature review'],
    },
  ];

  return (
    <section id="services" className="py-20 px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Our Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
            >
              <div className="h-40 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Unavailable';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-base">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-gray-700 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <svg className="h-5 w-5 mr-3 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;