'use client';

import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

// Static import for critical above-the-fold components
// Dynamic imports for below-the-fold components
const Services = dynamic(() => import('../components/Services'));
const PackingProcess = dynamic(() => import('../components/PackingProcess'));
const Testimonials = dynamic(() => import('../components/Testimonials'));
const ContactForm = dynamic(() => import('../components/ContactForm'));
const Footer = dynamic(() => import('../components/Footer'));

// Loading fallbacks
const LoadingFallback = () => <div className="w-full h-48 flex items-center justify-center"><div className="animate-pulse text-indigo-400">Loading...</div></div>;

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Fix any potential scroll issues
    document.body.style.overflowX = 'hidden';
    
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className="min-h-screen text-white flex flex-col w-full overflow-hidden">
      <Navbar />
      <main className="flex-grow w-full overflow-hidden">
        {isClient && (
          <div className="w-full">
            <div className="gradient-bg-1">
              <Hero />
            </div>
            <Suspense fallback={<LoadingFallback />}>
              <div className="gradient-bg-2">
                <Services />
              </div>
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <div className="gradient-bg-3">
                <PackingProcess />
              </div>
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <div className="gradient-bg-1">
                <Testimonials />
              </div>
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              <div className="gradient-bg-2">
                <ContactForm />
              </div>
            </Suspense>
          </div>
        )}
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}
