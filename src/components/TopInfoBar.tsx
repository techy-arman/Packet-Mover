'use client';

import { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const TopInfoBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (window.scrollY > lastScrollY) {
          // Scrolling down - hide the bar
          setIsVisible(false);
        }
      } else {
        // At the top - show the bar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-950 to-indigo-900 text-white transition-all duration-300 ease-in-out z-50 hidden xl:block ${
        isVisible ? 'py-2 translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container-custom mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row md:space-x-8 mb-2 md:mb-0 items-center">
          <Link href="tel:+91-9876543210" className="flex items-center hover:text-indigo-300 transition-colors mb-2 md:mb-0">
            <FiPhone className="mr-2" size={16} />
            <span className="text-sm">+91-9876543210</span>
          </Link>
          
          <Link href="mailto:info@premiummovers.com" className="flex items-center hover:text-indigo-300 transition-colors mb-2 md:mb-0">
            <FiMail className="mr-2" size={16} />
            <span className="text-sm">info@premiummovers.com</span>
          </Link>
          
          <div className="flex items-center text-gray-300">
            <FiClock className="mr-2" size={16} />
            <span className="text-sm">Monday - Sunday 9:00AM - 10:00PM</span>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-700 transition-colors">
            <FaFacebookF size={14} />
          </Link>
          <Link href="https://google.com" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-700 transition-colors">
            <FaGoogle size={14} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-700 transition-colors">
            <FaInstagram size={14} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-700 transition-colors">
            <FaLinkedinIn size={14} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-7 w-7 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-700 transition-colors">
            <FaTwitter size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar; 