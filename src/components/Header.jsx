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
    { name: 'Contact me', href: '#contact', id: 'contact', icon: <FaPhoneAlt className="text-sm" />, special: true },
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
      return `rounded-2xl px-4 py-2 flex items-center gap-2 text-white transition ${
        activeSection === id ? 'bg-red-600' : 'bg-red-500 hover:bg-red-600'
      }`;
    }
    return `hover:text-blue-600 transition ${
      activeSection === id ? 'text-blue-500 font-semibold' : 'text-gray-300'
    }`;
  };

  return (
    <header className="fixed w-full h-[4rem] bg-gradient-to-r from-slate-900 to-black shadow z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="logo">
          <img src="../img/logo.png" alt="logo" className="h-[3.5rem]" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 capitalize font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className={getLinkClasses(item.id, item.special)}
                >
                  {item.name}
                  {item.icon && item.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-400">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 font-medium">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  onClick={toggleMenu}
                  className={getLinkClasses(item.id, item.special)}
                >
                  {item.name}
                  {item.icon && item.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
