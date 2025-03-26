
import React from 'react';
import { motion } from 'framer-motion';

const InvitationHeader = () => {
  return (
    <motion.header 
      className="text-center mb-8 py-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mb-4">
        <span className="block text-wedding-gold text-sm tracking-widest uppercase">Wedding Invitation</span>
        <div className="divider"></div>
      </div>
      
      <motion.div 
        className="flex flex-col items-center space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1 className="font-serif text-4xl md:text-6xl tracking-wide text-gray-800">
          Anant <span className="text-wedding-gold">&</span> Yukta
        </h1>
        <p className="text-gray-600 italic mt-4">
          Request the pleasure of your company as they celebrate their marriage
        </p>
      </motion.div>
    </motion.header>
  );
};

export default InvitationHeader;
