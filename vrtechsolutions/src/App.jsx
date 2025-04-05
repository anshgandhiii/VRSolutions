import { useEffect, useRef, useState } from 'react';
import IntroPage from './components/IntroPage';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import logo from './assets/logo.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('intro');

  // Section refs
  const introRef = useRef(null);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to section
  const scrollToSection = (ref, section) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
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
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                scrollToSection(introRef, 'intro');
              }}>
                <img src={logo} alt="Logo" className="h-12 w-auto" />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {[
                { label: 'Home', ref: homeRef, key: 'home' },
                { label: 'Services', ref: servicesRef, key: 'services' },
                { label: 'Contact', ref: contactRef, key: 'contact' }
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
            {/* Social icons can stay unchanged */}
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
