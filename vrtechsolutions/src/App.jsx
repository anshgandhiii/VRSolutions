import { useEffect, useRef, useState } from 'react';
import IntroPage from './components/IntroPage';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import logo from './assets/logo.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Section refs
  const introRef = useRef(null);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to section
  const scrollToSection = (ref, section) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  // Change active section on scroll
  useEffect(() => {
    const sectionRefs = {
      intro: introRef,
      home: homeRef,
      services: servicesRef,
      contact: contactRef,
    };

    const handleScroll = () => {
      for (const [key, ref] of Object.entries(sectionRefs)) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(key);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection(introRef, 'intro');
              }} className="flex items-center space-x-1 no-gap">
                <img src={logo} alt="VR Tech Solutions Logo" className="h-10 w-auto" />
                <span className="text-xl font-bold text-gray-900">VR Tech Solutions</span>
              </a>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {[
                { label: 'Home', ref: homeRef, key: 'home' },
                { label: 'Services', ref: servicesRef, key: 'services' },
                { label: 'Contact', ref: contactRef, key: 'contact' },
              ].map(({ label, ref, key }) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(ref, key)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === key
                      ? 'text-purple-700 border-b-2 border-purple-500'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-md py-2">
              {[
                { label: 'Home', ref: homeRef, key: 'home' },
                { label: 'Services', ref: servicesRef, key: 'services' },
                { label: 'Contact', ref: contactRef, key: 'contact' },
              ].map(({ label, ref, key }) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(ref, key)}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === key
                      ? 'text-purple-700'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Content Sections */}
      <main className="pt-20">
        <section ref={introRef} id="intro" className="scroll-mt-20">
          <IntroPage />
        </section>
        <section ref={homeRef} id="home" className="scroll-mt-20">
          <Home />
        </section>
        <section ref={servicesRef} id="services" className="scroll-mt-20">
          <Services />
        </section>
        <section ref={contactRef} id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <p className="mt-2 text-sm text-gray-300">
              © {new Date().getFullYear()} VR Tech Solutions. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">FB</a>
            <a href="#" className="text-gray-300 hover:text-white">TW</a>
            <a href="#" className="text-gray-300 hover:text-white">LN</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;