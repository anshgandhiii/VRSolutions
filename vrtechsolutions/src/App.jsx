// App.jsx
import { useRef } from 'react';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">Logo</h1>
              </div>
            </div>
            <div className="flex items-center">
              <div className="space-x-4">
                <button
                  onClick={() => scrollToSection(homeRef)}
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection(aboutRef)}
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Sections */}
      <main className="pt-16">
        {/* Home Section */}
        <section
          ref={homeRef}
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">Welcome</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This is a brief description of our amazing single-page application.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section
          ref={servicesRef}
          className="min-h-screen flex items-center justify-center bg-white"
        >
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
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          className="min-h-screen flex items-center justify-center bg-gray-50"
        >
          <div className="text-center max-w-3xl mx-auto p-4">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-600">
              We are a passionate team dedicated to creating amazing web experiences.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-blue-100"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;