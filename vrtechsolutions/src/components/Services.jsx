import React from 'react';
import dataAnalysisImage from '../assets/DataAnalysis.png';
import designWorksImage from '../assets/DesignWorks.png';
import researchProjectsImage from '../assets/Research.png';
import academicConsultationImage from '../assets/AcademicConsultations.png';

function Services() {
  const services = [
    {
      title: 'Data Analysis',
      description: 'Transform raw drone data into actionable insights with our advanced analytics services. We create comprehensive reports that help you make informed decisions.',
      image: dataAnalysisImage,
      features: ['Drone data processing', 'Statistical analysis', 'Interactive visualizations', 'Trend identification']
    },
    {
      title: 'Creative Design',
      description: 'Elevate your brand with our professional design services. From workshop materials to abstract designs, we create visually stunning assets that capture attention.',
      image: designWorksImage,
      features: ['Workshop booklets', 'Marketing materials', 'Abstract designs', 'Brand identity']
    },
    {
      title: 'AI/ML Projects',
      description: 'Harness the power of artificial intelligence and machine learning with our custom solutions. We build intelligent systems that solve complex problems.',
      image: researchProjectsImage,
      features: ['Custom AI models', 'ML algorithm development', 'Predictive analytics', 'Computer vision']
    },
    {
      title: 'Academic Consultation',
      description: 'Get expert guidance on your academic endeavors. Our team provides comprehensive support for research projects, article writing, and academic development.',
      image: academicConsultationImage,
      features: ['Research problem identification', 'Article writing & editing', 'Methodology guidance', 'Literature review']
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Our Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of services designed to help you leverage the power of data, design, and AI to achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Unavailable';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <svg className="h-4 w-4 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;