import React, { useState, useEffect } from 'react';
import { navigationItems, scrollToSection, getCurrentActiveSection, debounce } from './nav-utils';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('main');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setActiveSection(getCurrentActiveSection());
      setIsScrolled(window.scrollY > 100);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId, () => setIsMenuOpen(false));
  };

  const handleContactClick = () => {
    scrollToSection('contact', () => setIsMenuOpen(false));
  };

  return (
    <nav className={`fixed z-50 transition-all duration-700 ease-in-out ${
      isScrolled 
        ? 'top-4 left-1/2 transform -translate-x-1/2' 
        : 'top-0 left-1/2 transform -translate-x-1/2 w-full'
    } ${className}`}>
      <div className={`transition-all duration-700 ease-in-out transform ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-md rounded-full px-8 py-3  scale-100' 
          : 'bg-transparent backdrop-blur-md rounded-none px-8 py-4 scale-100 w-screen'
      }`}>
        <div className={`flex items-center transition-all duration-500 ease-in-out ${
          isScrolled ? 'justify-between' : 'justify-between max-w-7xl mx-auto'
        }`}>
          {/* Logo */}
          <div className='flex items-center'>
            <h1 
              id="logo" 
              className={`font-bold text-white cursor-pointer flex items-center gap-2 transition-all duration-500 transform ${
                isScrolled ? 'text-xl mr-6 scale-95' : 'text-3xl mr-8 scale-100'
              }`}
              onClick={() => handleNavClick('main')}
            >
              <div className={`bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out transform ${
                isScrolled ? 'w-7 h-7 scale-90' : 'w-10 h-10 scale-100'
              }`}>
                <span className={`text-white font-bold transition-all duration-400 ease-in-out ${
                  isScrolled ? 'text-xs' : 'text-base'
                }`}>A</span>
              </div>
              <span className={`transition-all duration-400 ease-in-out transform ${
                isScrolled ? 'hidden sm:inline opacity-100 scale-95' : 'hidden md:inline opacity-100 scale-100'
              }`}>Aryan</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center transition-all duration-500 ease-in-out transform origin-center ${
            isScrolled ? 'space-x-1 scale-95 px-0' : 'space-x-20 scale-100 px-40 py-3'
          }`}>
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-medium transition-all duration-500 ease-in-out transform hover:scale-105 ${
                  isScrolled 
                    ? 'px-3 py-2 text-sm rounded-full' 
                    : 'px-4 py-2 text-base rounded-lg'
                } ${
                  activeSection === item.id && item.id !== 'projects'
                    ? isScrolled 
                      ? 'bg-white/20 text-white scale-105' 
                      : 'bg-blue-600/20 text-blue-400 border border-blue-400/30 scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className='hidden md:flex items-center'>
            <button 
              onClick={handleContactClick}
              className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600
                 hover:to-purple-700 transition-all duration-500 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isScrolled 
                  ? 'px-5 py-2 text-sm rounded-full scale-95' 
                  : 'px-6 py-3 text-base rounded-lg scale-100'
              }`}
              style={{
                transitionDelay: '150ms'
              }}
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-white p-2 transition-all duration-500 ease-in-out transform hover:scale-110 ${
              isScrolled ? 'scale-95' : 'scale-100'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className={`transition-all duration-300 ease-in-out ${
              isScrolled ? 'w-5 h-5' : 'w-6 h-6'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pt-4 transition-all duration-500 ease-in-out transform origin-center ${
            isScrolled ? 'border-t border-white/20 scale-95' : 'border-t border-gray-700 scale-100'
          }`}>
            <div className='flex flex-col space-y-2'>
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-sm font-medium text-left transition-all duration-500 ease-in-out transform hover:scale-105 ${
                    isScrolled ? 'rounded-lg' : 'rounded-md'
                  } ${
                    activeSection === item.id && item.id !== 'projects'
                      ? isScrolled 
                        ? 'bg-white/20 text-white scale-105' 
                        : 'bg-blue-600/20 text-blue-400 scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={handleContactClick}
                className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-500 ease-in-out transform hover:scale-105 mt-2 ${
                  isScrolled ? 'rounded-lg scale-95' : 'rounded-md scale-100'
                }`}
                style={{
                  transitionDelay: '300ms'
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
