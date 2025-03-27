
import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const RSVPSection = () => {
  return (
    <motion.section 
      className="py-12 px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-lg border border-wedding-gold/10 invitation-card">
        <h2 className="font-serif text-3xl mb-4 text-gray-800">Join Us In Celebration</h2>
        <div className="divider"></div>
        <p className="text-gray-700 mb-6">
          We are excited to share this special day with you. Your presence will make our celebration complete.
        </p>
        
        <motion.div 
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/*<a */}
          {/*  href="tel:+917506900088" */}
          {/*  className="direction-button inline-flex items-center justify-center py-3 px-8 bg-wedding-gold/90 hover:bg-wedding-gold text-white rounded-md shadow-md"*/}
          {/*>*/}
          {/*  <Heart className="h-4 w-4 mr-2" />*/}
          {/*  RSVP Now*/}
          {/*</a>*/}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RSVPSection;
