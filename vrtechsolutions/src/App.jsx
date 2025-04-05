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
    const yOffset = -80; // Header height offset
    const element = ref.current;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
    
    setActiveSection(section);
  };

  // Change active section on scroll with improved intersection detection
  useEffect(() => {
    const sectionRefs = [
      { id: 'intro', ref: introRef },
      { id: 'home', ref: homeRef },
      { id: 'services', ref: servicesRef },
      { id: 'contact', ref: contactRef }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the section id from the ref
            const section = sectionRefs.find(s => s.ref.current === entry.target);
            if (section) {
              setActiveSection(section.id);
            }
          }
        });
      },
      { 
        rootMargin: '-100px 0px -80% 0px', // Adjust trigger area to better detect current section
        threshold: 0 
      }
    );

    // Observe all section elements
    sectionRefs.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
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

      {/* Content Sections - Adjusted scroll-mt values */}
      <main>
        <section ref={introRef} id="intro" className="scroll-mt-16">
          <IntroPage />
        </section>
        <section ref={homeRef} id="home" className="scroll-mt-16">
          <Home />
        </section>
        <section ref={servicesRef} id="services" className="scroll-mt-16">
          <Services />
        </section>
        <section ref={contactRef} id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <img src={logo} alt="Logo" className="h-10 w-auto mx-auto md:mx-0" />
            <p className="mt-2 text-sm text-gray-300">
              © {new Date().getFullYear()} VR Tech Solutions. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;