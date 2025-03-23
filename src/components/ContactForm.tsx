'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    moveFrom: '',
    moveTo: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      moveDate: '',
      moveFrom: '',
      moveTo: '',
      message: '',
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 gradient-underline"
          >
            Get Your <span className="gradient-text">Free Quote</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Contact us today for a free, no-obligation moving estimate
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect rounded-xl shadow-lg p-8 border border-gray-700/30">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-300">Your message has been received. We'll get back to you shortly!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="moveDate" className="block text-sm font-medium mb-2">Preferred Moving Date</label>
                      <input
                        type="date"
                        id="moveDate"
                        name="moveDate"
                        value={formData.moveDate}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="moveFrom" className="block text-sm font-medium mb-2">Moving From</label>
                      <input
                        type="text"
                        id="moveFrom"
                        name="moveFrom"
                        value={formData.moveFrom}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Current address"
                      />
                    </div>
                    <div>
                      <label htmlFor="moveTo" className="block text-sm font-medium mb-2">Moving To</label>
                      <input
                        type="text"
                        id="moveTo"
                        name="moveTo"
                        value={formData.moveTo}
                        onChange={handleChange}
                        className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Destination address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tell us about your move (items, special requirements, etc.)"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center cursor-pointer primary-btn w-1/2 px-10 justify-center py-3 rounded-full">
                          <FiSend className="mr-2" />
                          Submit
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="glass-effect rounded-xl p-8 border border-gray-700/30 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex">
                  <div className="bg-indigo-600/20 p-3 rounded-lg text-indigo-400 mr-4 self-start">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-gray-300 mt-1">1234 Moving Street, Suite 500<br />New York, NY 10001</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-indigo-600/20 p-3 rounded-lg text-indigo-400 mr-4 self-start">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="text-gray-300 mt-1">(555) 123-4567</p>
                    <p className="text-gray-400 text-sm">Monday-Friday, 8am-7pm</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-indigo-600/20 p-3 rounded-lg text-indigo-400 mr-4 self-start">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-gray-300 mt-1">contact@premiummovers.com</p>
                    <p className="text-gray-400 text-sm">We respond within 24 hours</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-indigo-600/20 p-3 rounded-lg text-indigo-400 mr-4 self-start">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <ul className="text-gray-300 mt-1 space-y-1">
                      <li>Monday-Friday: 8:00 AM - 7:00 PM</li>
                      <li>Saturday: 9:00 AM - 5:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Urgency box */}
            <div className="bg-indigo-600/20 rounded-xl p-6 border border-indigo-500/20">
              <h4 className="text-xl font-semibold mb-2">Need Urgent Support?</h4>
              <p className="text-gray-300 mb-4">For immediate assistance with urgent moving needs, call our priority line.</p>
              <a href="tel:(555)789-0123" className="btn-primary inline-flex items-center">
                <FiPhone className="mr-2" />
                (555) 789-0123
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 