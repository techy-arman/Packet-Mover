'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const CallButton = () => {
  const phoneNumber = '+91-7323827241';

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Link href={`tel:${phoneNumber}`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-animation floating-animation"
          style={{
            background: 'linear-gradient(135deg, #f03e3e, #c92a2a)',
            boxShadow: '0 4px 20px rgba(224, 36, 36, 0.4)'
          }}
          aria-label="Call us now"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            <path d="M15 7.5V7c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.5" style={{ opacity: 0.5 }} />
            <path d="M14.5 7.5v1c0 .28-.22.5-.5.5h-4c-.28 0-.5-.22-.5-.5v-1" style={{ opacity: 0.5 }} />
          </svg>
        </motion.button>
      </Link>
    </div>
  );
};

export default CallButton; 