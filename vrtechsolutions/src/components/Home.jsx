import React from 'react';
import drone from '../assets/drone.png';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              <span className="text-purple-700">Precision</span> in Data.
              <br />
              <span className="text-purple-700">Perfection</span> in Design — 
              <br />
              Powered by AI.
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Transforming complexity into clarity with AI-powered data analysis and design. Our cutting-edge solutions deliver insights that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#services" className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition duration-300 text-center">
                Explore Our Services
              </a>
              <a href="#contact" className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg shadow-md border border-purple-600 hover:bg-purple-50 transition duration-300 text-center">
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2 relative">
            <div className="bg-white p-4 rounded-xl shadow-xl transform transition duration-500 hover:scale-105">
              <img 
                src={drone}
                alt="AI-driven traffic analysis" 
                className="w-full rounded-lg"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white py-2 px-6 rounded-full text-sm font-medium shadow-lg">
                AI-driven traffic analysis in action
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
            <div className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Advanced Analytics</h3>
              <p className="text-gray-700">Leverage AI-powered insights to transform raw data into actionable intelligence.</p>
            </div>
            
            
            <div className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Creative Excellence</h3>
              <p className="text-gray-700">Stunning designs that blend aesthetics with functionality for maximum impact.</p>
            </div>
            
            
            <div className="bg-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Rapid Delivery</h3>
              <p className="text-gray-700">Quick turnaround times without compromising on quality or attention to detail.</p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Stats Section */}
{/* Stats Section */}
{/* <section className="py-16 px-4 bg-purple-700 text-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
      <div className="p-4">
        <div className="text-3xl md:text-4xl font-bold mb-2">
         Experienced Team Members
        </div>
      </div>
      <div className="p-4">
        <div className="text-3xl md:text-4xl font-bold mb-2">
          Working with NITs &amp; IITs
        </div>
      </div>
    </div>
  </div>
</section> */}

    </div>
  );
};

export default Home;
