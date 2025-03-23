'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (item: string) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Home Relocation', href: '/services#home-relocation' },
        { name: 'Office Relocation', href: '/services#office-relocation' },
        { name: 'International Moving', href: '/services#international' },
        { name: 'Packing Services', href: '/services#packing' },
      ]
    },
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg backdrop-blur-sm py-2 mt-0' : 'gradient-bg-1 py-4 mt-0 xl:mt-9'
      }`}
    >
      <div className="container-custom px-8 md:px-12">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-md flex items-center justify-center hover-lift">
                <span className="text-white font-bold text-xl">PM</span>
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text">Premium</span>
                <span className="text-2xl font-bold text-white ml-2">Movers</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-8 mr-8">
              {menuItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants} className="relative group flex items-center h-full">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center hover:text-indigo-400 transition-colors py-2 text-white hover-expand"
                      >
                        {item.name}
                        <FiChevronDown className="ml-1" size={14} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg glass-effect ring-1 ring-black ring-opacity-5"
                          >
                            <div className="py-1" role="menu" aria-orientation="vertical">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/60 hover:text-indigo-400"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      href={item.href} 
                      className="hover:text-indigo-400 transition-colors py-2 text-white hover-expand"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants} className="flex items-center">
              <Link 
                href="/contact" 
                className="primary-btn flex items-center justify-center px-5 py-2 rounded-md text-white"
              >
                Contact us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <motion.button 
            variants={itemVariants}
            className="mobile-menu-button md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '9999px',
              background: 'var(--button-gradient)',
              boxShadow: '0 2px 10px rgba(79, 70, 229, 0.2)'
            }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect shadow-inner"
          >
            <div className="container-custom py-5">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-700/30">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full py-3 text-white hover:text-indigo-400 transition-colors"
                        >
                          {item.name}
                          <FiChevronDown className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 pb-2"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block py-2 text-gray-300 hover:text-indigo-400"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setIsOpen(false);
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        href={item.href}
                        className="block py-3 hover:text-indigo-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link 
                    href="/contact" 
                    className="btn-primary w-full flex items-center justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiPhone className="mr-2" />
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 