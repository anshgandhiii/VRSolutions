// src/components/Services.jsx
function Services() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto p-4">
            <div className="p-4 bg-gray-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold">Service 1</h3>
              <p className="text-gray-600">Description of service 1</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold">Service 2</h3>
              <p className="text-gray-600">Description of service 2</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold">Service 3</h3>
              <p className="text-gray-600">Description of service 3</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;