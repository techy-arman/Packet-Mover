'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'John Davis',
    role: 'Homeowner',
    content: 'The team was incredibly professional and careful with our belongings. They made our moving experience stress-free and efficient. Would highly recommend!',
    rating: 5,
    location: 'New York, NY',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Business Owner',
    content: 'As a business owner, I needed a reliable moving service to relocate our office. They handled everything with precision and minimal disruption to our operations.',
    rating: 5,
    location: 'Chicago, IL',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Apartment Resident',
    content: 'Moving from a high-rise apartment was challenging, but their team navigated it flawlessly. Everything arrived intact and on time. Excellent service!',
    rating: 4,
    location: 'San Francisco, CA',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'International Relocator',
    content: 'My international move seemed overwhelming until I hired this company. They handled all the logistics, paperwork, and even helped with customs. Incredible team!',
    rating: 5,
    location: 'Miami, FL',
  },
  {
    id: 5,
    name: 'Robert Wilson',
    role: 'Family Relocation',
    content: 'Moving a family of five seemed impossible until we found this company. Their team was patient, organized and made the process smooth for all of us.',
    rating: 5,
    location: 'Boston, MA',
  },
  {
    id: 6,
    name: 'Jennifer Lee',
    role: 'Small Business Owner',
    content: 'They helped move my small boutique with incredible care. Not a single item was damaged, and they finished ahead of schedule!',
    rating: 5,
    location: 'Seattle, WA',
  },
];

// Testimonial card component for each individual testimonial
const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="glass-effect p-6 rounded-lg border border-gray-700/30 shadow-lg h-full flex flex-col hover-lift"
  >
    {/* Quote symbol */}
    <div className="text-indigo-400 mb-4">
      <svg width="30" height="24" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.953 0L0 15.136V36H20.93V15.136H6.977L13.953 0ZM38.023 0L24.07 15.136V36H45V15.136H31.047L38.023 0Z" fill="currentColor" fillOpacity="0.2"/>
      </svg>
    </div>
    
    {/* Testimonial content */}
    <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.content}"</p>
    
    <div className="flex items-center pt-4 border-t border-gray-700/30 mt-auto">
      {/* Avatar */}
      <div className="w-12 h-12 bg-indigo-600/20 rounded-full flex items-center justify-center text-xl font-bold text-indigo-400 mr-3">
        {testimonial.name.charAt(0)}
      </div>
      
      <div>
        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
        <p className="text-indigo-400 text-sm">{testimonial.role}</p>
        <div className="flex items-center mt-1">
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FiStar key={i} className="text-yellow-400 fill-current w-4 h-4" />
            ))}
          </div>
          <span className="text-gray-500 text-xs ml-2">{testimonial.location}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [touchStartX, setTouchStartX] = useState(0);
  const ref = useRef(null);
  
  // Calculate number of testimonials to show based on screen size
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  // Get current page testimonials
  const getCurrentPageTestimonials = () => {
    const start = page * testimonialsPerPage;
    const end = start + testimonialsPerPage;
    return testimonials.slice(start, end);
  };
  
  // Navigation functions
  const nextPage = () => {
    setDirection(1);
    setPage((prevPage) => (prevPage + 1) % totalPages);
  };
  
  const prevPage = () => {
    setDirection(-1);
    setPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
  
  // Auto-rotate pages
  useEffect(() => {
    const interval = setInterval(() => {
      nextPage();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX - touchEndX;
    
    if (difference > 50) {
      nextPage(); // Swipe left
    } else if (difference < -50) {
      prevPage(); // Swipe right
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section 
      className="section py-20 lg:py-28" 
      id="testimonials" 
      ref={ref}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 gradient-underline"
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto mb-12"
          >
            See what our satisfied customers have to say about our premium packing and moving services.
          </motion.p>
        </div>
        
        {/* Testimonials slider with grid layout */}
        <div className="relative mx-auto overflow-hidden">
          {/* Navigation buttons */}
          <div className="flex justify-between absolute -left-2 -right-2 md:-left-6 md:-right-6 top-1/2 -translate-y-1/2 z-20">
            <button 
              className="btn-icon hidden md:flex"
              onClick={prevPage}
              aria-label="Previous testimonials"
            >
              <FiChevronLeft size={24} className="text-white" />
            </button>
            
            <button 
              className="btn-icon hidden md:flex"
              onClick={nextPage}
              aria-label="Next testimonials"
            >
              <FiChevronRight size={24} className="text-white" />
            </button>
          </div>
          
          {/* Animated grid container */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getCurrentPageTestimonials().map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Page indicators */}
        <div className="flex justify-center mt-10">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > page ? 1 : -1);
                setPage(i);
              }}
              className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                i === page ? 'w-8 bg-indigo-500' : 'bg-gray-600'
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        
        {/* Mobile navigation buttons */}
        <div className="flex justify-center space-x-4 mt-8 md:hidden">
          <button 
            className="btn-icon"
            onClick={prevPage}
            aria-label="Previous testimonials"
          >
            <FiChevronLeft size={24} className="text-white" />
          </button>
          
          <button 
            className="btn-icon"
            onClick={nextPage}
            aria-label="Next testimonials"
          >
            <FiChevronRight size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 