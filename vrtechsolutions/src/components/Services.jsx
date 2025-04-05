import React from 'react';
import dataAnalysisImage from '../assets/DataAnalysis.png';
import designWorksImage from '../assets/DesignWorks.png';
import researchProjectsImage from '../assets/Research.png';
import academicConsultationImage from '../assets/AcademicConsultations.png';

function Services() {
  const services = [
    {
      title: 'Data Analysis',
      description: 'Drone data, project data analysis, and report creation.',
      image: dataAnalysisImage,
    },
    {
      title: 'Creative Design',
      description: 'Workshop booklets, abstract designs, event materials.',
      image: designWorksImage,
    },
    {
      title: 'AI/ML Projects',
      description: 'Custom AI/ML solutions.',
      image: researchProjectsImage,
    },
    {
      title: 'Academic Consultation',
      description: 'Research problem identification, article writing/editing, academic guidance.',
      image: academicConsultationImage,
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Unavailable';
                  }}
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
