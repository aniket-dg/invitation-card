
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const InvitationHeader = () => {
  return (
    <motion.header 
      className="text-center mb-8 py-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <span className="block text-wedding-gold text-sm tracking-widest uppercase font-medium relative">
            <span className="absolute -left-4 top-0"><Sparkles size={14} className="text-wedding-gold/70" /></span>
            Wedding Invitation
            <span className="absolute -right-4 top-0"><Sparkles size={14} className="text-wedding-gold/70" /></span>
          </span>
        </motion.div>
        <div className="divider"></div>
      </div>
      
      <motion.div 
        className="flex flex-col items-center space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h1 className="font-serif text-4xl md:text-6xl tracking-wide text-gray-800 relative">
          <span className="relative inline-block">
            <span className="absolute -left-8 -top-4 text-wedding-gold opacity-70 text-xl">❦</span>
            Anant
          </span>
          <span className="text-wedding-gold mx-2">&</span>
          <span className="relative inline-block">
            Yukta
            <span className="absolute -right-8 -top-4 text-wedding-gold opacity-70 text-xl">❦</span>
          </span>
        </h1>
        <p className="text-gray-600 italic mt-4 font-serif">
          Request the pleasure of your company as they celebrate their marriage
        </p>
      </motion.div>
    </motion.header>
  );
};

export default InvitationHeader;
