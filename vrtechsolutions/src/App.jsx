import { useEffect, useRef, useState } from 'react';
import IntroPage from './components/IntroPage';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import logo from './assets/logo.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Section refs
  const introRef = useRef(null);
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Enhanced scroll to section function with better offset calculation
  const scrollToSection = (ref, section) => {
    const headerHeight = 64; // 16 * 4 = 64px (h-16)
    const element = ref.current;
    
    if (element) {
      // Calculate position with proper offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(section);
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Enhanced intersection observer for better section detection
  useEffect(() => {
    const sectionRefs = [
      { id: 'intro', ref: introRef },
      { id: 'home', ref: homeRef },
      { id: 'services', ref: servicesRef },
      { id: 'contact', ref: contactRef }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        
        if (visibleSections.length > 0) {
          // Sort by visibility ratio to get the most visible section
          const mostVisible = visibleSections.sort((a, b) => 
            b.intersectionRatio - a.intersectionRatio
          )[0];
          
          // Find the section id from the ref
          const section = sectionRefs.find(s => s.ref.current === mostVisible.target);
          if (section) {
            setActiveSection(section.id);
          }
        }
      },
      { 
        // Improved thresholds and margins for better section detection
        rootMargin: '-80px 0px -20% 0px',
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]
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

      {/* Content Sections with improved scroll margins */}
      <main>
        <section ref={introRef} id="intro">
          <IntroPage />
        </section>
        <section ref={homeRef} id="home">
          <Home />
        </section>
        <section ref={servicesRef} id="services">
          <Services />
        </section>
        <section ref={contactRef} id="contact" className="scroll-mt-20">
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
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/vr-tech-solutions-48b76635a/"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        target="_blank" rel="noopener noreferrer"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/vrtechsolutions32?igsh=MWJwZ3B0a2I1Y3hjMA=="
        className="text-gray-300 hover:text-white transition-colors duration-200"
        target="_blank" rel="noopener noreferrer"
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.25 2.427.415a4.92 4.92 0 011.776 1.076 4.92 4.92 0 011.076 1.776c.165.457.359 1.257.415 2.427.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.25 1.97-.415 2.427a4.92 4.92 0 01-1.076 1.776 4.92 4.92 0 01-1.776 1.076c-.457.165-1.257.359-2.427.415-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.25-2.427-.415a4.92 4.92 0 01-1.776-1.076 4.92 4.92 0 01-1.076-1.776c-.165-.457-.359-1.257-.415-2.427C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.25-1.97.415-2.427A4.92 4.92 0 013.761 2.95a4.92 4.92 0 011.776-1.076c.457-.165 1.257-.359 2.427-.415C8.416 2.212 8.8 2.2 12 2.2m0-2.2C8.735 0 8.332.014 7.052.072c-1.276.058-2.149.25-2.905.534a7.09 7.09 0 00-2.563 1.66A7.09 7.09 0 00.024 4.828c-.284.756-.476 1.63-.534 2.905C-.014 8.332 0 8.735 0 12s.014 3.668.072 4.948c.058 1.276.25 2.149.534 2.905a7.09 7.09 0 001.66 2.563 7.09 7.09 0 002.563 1.66c.756.284 1.63.476 2.905.534C8.332 23.986 8.735 24 12 24s3.668-.014 4.948-.072c1.276-.058 2.149-.25 2.905-.534a7.09 7.09 0 002.563-1.66 7.09 7.09 0 001.66-2.563c.284-.756.476-1.63.534-2.905.058-1.28.072-1.683.072-4.948s-.014-3.668-.072-4.948c-.058-1.276-.25-2.149-.534-2.905a7.09 7.09 0 00-1.66-2.563 7.09 7.09 0 00-2.563-1.66c-.756-.284-1.63-.476-2.905-.534C15.668.014 15.265 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
        </svg>
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;