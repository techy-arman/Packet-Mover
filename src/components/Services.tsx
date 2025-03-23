'use client';

import { motion } from 'framer-motion';
import { FiHome, FiTruck, FiPackage, FiGlobe, FiArchive, FiShield } from 'react-icons/fi';

const Services = () => {
  const servicesData = [
    {
      icon: <FiHome className="w-6 h-6" />,
      title: 'Residential Moving',
      description: 'Complete home relocation services with careful handling of your belongings.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: 'Commercial Moving',
      description: 'Office and business relocations with minimal downtime.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: <FiPackage className="w-6 h-6" />,
      title: 'Professional Packing',
      description: 'Expert packing services using quality materials for maximum protection.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: 'International Moving',
      description: 'Worldwide relocation services with customs assistance and documentation.',
      color: 'from-indigo-600 to-purple-600',
    },
    {
      icon: <FiArchive className="w-6 h-6" />,
      title: 'Storage Solutions',
      description: 'Secure, climate-controlled storage facilities for short and long-term needs.',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Moving Insurance',
      description: 'Comprehensive coverage options to protect your valuable possessions.',
      color: 'from-purple-600 to-blue-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-28 section">
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-12 gradient-underline"
          >
            Our <span className="gradient-text">Premium</span> Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive moving solutions tailored to your needs. We handle everything from packing to 
            transportation with care and efficiency.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-effect rounded-xl p-6 hover-lift"
            >
              <div className={`bg-gradient-to-br ${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-5 text-white`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 