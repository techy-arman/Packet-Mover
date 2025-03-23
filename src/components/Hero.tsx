'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="pt-32 mt-20 md:pt-36 lg:pt-40 pb-20 lg:pb-28 section overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight hero-gradient-underline">
              <span className="gradient-text">Expert Moving</span> <br />
              <span className="text-white">for Your Peace of Mind</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Professional packing and moving services with care and precision. 
              We handle everything from start to finish for a stress-free relocation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact">
                <span className="btn-primary text-center block">Get Free Quote</span>
              </Link>
              <Link href="/#services">
                <span className="btn-secondary text-center block">Our Services</span>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-indigo-600 overflow-hidden glass-effect flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${i <= 4 ? 'text-yellow-400' : 'text-gray-500'}`} aria-hidden="true">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold">
                  <span className="gradient-text">4.9/5</span> Rating
                </div>
                <div className="text-sm text-gray-400">Over 2,000 happy customers</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[500px] flex justify-center lg:justify-end"
          >
            <div className="absolute -left-6 -top-6 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl"></div>
            <div className="absolute -right-10 bottom-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            
            <div className="relative w-full max-w-md lg:max-w-full h-full rounded-xl overflow-hidden glass-effect hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-indigo-500/40 blur-xl"></div>
                  <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-purple-500/30 blur-xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-blue-500/30 blur-xl"></div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto border-4 border-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-indigo-400" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Premium Service</h3>
                  <p className="text-indigo-300 mt-2">Professional & Reliable</p>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg glass-effect">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-300">Next Available</div>
                    <div className="font-semibold gradient-text">Tomorrow, 9:00 AM</div>
                  </div>
                  <Link href="/#contact">
                    <span className="btn-primary text-sm px-4 py-2">Book Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 