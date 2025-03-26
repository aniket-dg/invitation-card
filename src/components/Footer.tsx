
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="py-8 text-center text-gray-500 text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="divider"></div>
      <p>Anant & Yukta</p>
      <p className="mt-2">10 May 2025</p>
    </motion.footer>
  );
};

export default Footer;
