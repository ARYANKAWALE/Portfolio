import React, { useState, useEffect } from 'react';
import { navigationItems, scrollToSection, getCurrentActiveSection, debounce } from './nav-utils';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 50);
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

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      } as const
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed z-50 left-0 right-0 flex justify-center transition-all duration-300 ${isScrolled ? 'top-4' : 'top-0'
        } ${className}`}
    >
      <motion.div
        layout
        className={`relative flex items-center backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-500 ${isScrolled
          ? 'bg-black/60 rounded-full px-4 py-2 w-auto max-w-[90vw]'
          : 'bg-black/30 w-full px-8 py-6 rounded-none border-none'
          }`}
        style={{
          backdropFilter: "blur(12px)",
        }}
      >
        <div className={`flex items-center justify-between w-full ${isScrolled ? 'gap-4' : 'max-w-7xl mx-auto'}`}>

          {/* Logo */}
          <motion.div
            layout
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleNavClick('main')}
          >
            <motion.div
              layout
              className={`relative flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                }`}
            >
              <span className="text-white font-bold text-lg">A</span>
            </motion.div>
            <AnimatePresence>
              {!isScrolled && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-bold text-xl text-white tracking-tight overflow-hidden whitespace-nowrap"
                >
                  Aryan
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${activeSection === item.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.button
              layout
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className={`hidden md:block bg-white text-black font-semibold px-5 py-2 rounded-full text-sm shadow-lg hover:shadow-white/20 transition-all`}
            >
              Contact Me
            </motion.button>

            <motion.button
              layout
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="md:hidden text-white p-1"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden md:hidden mx-4"
            >
              <div className="flex flex-col p-4 gap-2">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeSection === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.1 }}
                  onClick={handleContactClick}
                  className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-4 py-3 rounded-xl text-sm shadow-lg"
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
