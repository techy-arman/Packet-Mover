'use client';

import { motion } from 'framer-motion';
import { FiPackage, FiTruck, FiClipboard, FiHome, FiArrowRight } from 'react-icons/fi';

const PackingProcess = () => {
  const steps = [
    {
      icon: <FiClipboard />,
      title: 'Free Assessment',
      description: 'We start with a thorough evaluation of your moving needs and provide a detailed quote.',
      gradient: 'from-indigo-600/20 to-purple-800/30',
      iconBg: 'bg-purple-600/30',
      iconColor: 'text-purple-300',
      particleBg: 'bg-purple-400/30'
    },
    {
      icon: <FiPackage />,
      title: 'Professional Packing',
      description: 'Our team carefully packs your belongings using high-quality materials for maximum protection.',
      gradient: 'from-blue-600/20 to-indigo-800/30',
      iconBg: 'bg-blue-600/30',
      iconColor: 'text-blue-300',
      particleBg: 'bg-blue-400/30'
    },
    {
      icon: <FiTruck />,
      title: 'Secure Transportation',
      description: 'We transport your items in well-maintained vehicles with GPS tracking for peace of mind.',
      gradient: 'from-purple-600/20 to-indigo-800/30',
      iconBg: 'bg-indigo-600/30',
      iconColor: 'text-indigo-300',
      particleBg: 'bg-indigo-400/30'
    },
    {
      icon: <FiHome />,
      title: 'Safe Delivery & Setup',
      description: 'Your belongings are delivered and placed according to your instructions in your new location.',
      gradient: 'from-indigo-600/20 to-blue-800/30',
      iconBg: 'bg-cyan-600/30',
      iconColor: 'text-cyan-300',
      particleBg: 'bg-cyan-400/30'
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 section">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 gradient-underline"
          >
            Our <span className="gradient-text">Moving Process</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            A streamlined, efficient process designed to make your move as smooth as possible
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`process-step relative bg-gradient-to-br ${step.gradient} border-gray-700/50 backdrop-blur-sm overflow-hidden p-4 rounded-lg`}
              >
                {/* Shimmer effect overlay */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="shimmer-effect"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-indigo-500/10 blur-xl"></div>
                <div className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full bg-purple-500/10 blur-xl"></div>
                
                {/* Floating particle effects */}
                <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${step.particleBg} animate-pulse`}></div>
                <div className={`absolute top-1/2 right-8 w-2 h-2 rounded-full ${step.particleBg} animate-pulse`} style={{animationDelay: '0.5s'}}></div>
                <div className={`absolute bottom-4 left-6 w-2 h-2 rounded-full ${step.particleBg} animate-pulse`} style={{animationDelay: '1s'}}></div>
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${step.iconBg} ${step.iconColor} text-2xl backdrop-blur-sm`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
              
              {/* Connection arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-7 top-1/2 transform -translate-y-1/2 z-20">
                  <div className="process-arrow">
                    <FiArrowRight size={24} className="text-indigo-300" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center py-3 w-1/4 cursor-pointer px-10 rounded-full primary-btn"
        >
          <a href="/#contact" className="">
            Get Started Today
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackingProcess; 