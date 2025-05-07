import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('banner');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'Home', href: '#banner', id: 'banner' },
    { name: 'About me', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'Contact', href: '#contact', id: 'contact', icon: true, special: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (let item of menuItems) {
        const section = document.getElementById(item.id);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (id, special = false) => {
    if (special) {
      return `group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-white ${
        activeSection === id ? 'bg-red-600' : 'bg-red-500 hover:bg-red-600'
      }`;
    }
    return `transition-all duration-300 ${
      activeSection === id
        ? 'text-blue-500 font-semibold underline underline-offset-4'
        : 'text-gray-300 hover:text-blue-500'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-slate-900 to-black/70 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="../img/logo.png" alt="Logo" className="h-10" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center font-medium">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={getLinkClasses(item.id, item.special)}
              >
                {item.icon && (
                  <span className="text-lg  transition-all duration-300">
                    <FaPhoneAlt className='bounce-slow' />
                  </span>
                )}
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-2xl text-gray-300"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-black px-6 py-4`}
      >
        <ul className="space-y-4">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                onClick={toggleMenu}
                className={getLinkClasses(item.id, item.special)}
              >
                {item.icon && (
                  <span className="text-lg group-hover:bounce-slow transition-all duration-300">
                    <FaPhoneAlt />
                  </span>
                )}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
