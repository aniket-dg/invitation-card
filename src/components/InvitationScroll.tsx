
import React from 'react';
import { motion } from 'framer-motion';

const InvitationScroll = () => {
  return (
    <motion.section 
      className="py-12 px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div 
          className="scroll-animation bg-wedding-cream py-10 px-6 rounded-lg border-2 border-wedding-gold/20"
          initial={{ scaleY: 0.1, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
        >
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50' viewBox='0 0 100 50'%3E%3Cpath d='M10,25 L40,10 L60,10 L90,25 L60,40 L40,40 Z' fill='%23D4AF37' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E" 
            alt="Scroll ornament" 
            className="w-20 h-10 mx-auto mb-6"
          />
          
          <h2 className="font-serif text-4xl mb-4 text-gray-800">Royal Proclamation</h2>
          
          <div className="font-serif text-lg text-gray-700 space-y-4">
            <p>By the grace of God and with immense joy in our hearts,</p>
            <p>We, the families of <span className="text-wedding-gold font-semibold">Anant</span> and <span className="text-wedding-gold font-semibold">Yukta</span>,</p>
            <p>Do hereby invite you to witness and bless the sacred union of our beloved children</p>
            <p>As they exchange vows and embark on their journey of love and companionship.</p>
            <p className="mt-8">Your presence on this auspicious occasion will add to our happiness and joy.</p>
            <p className="mt-8">With profound respect and warm regards,</p>
            <p>The families of the Bride and Groom</p>
          </div>
          
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50' viewBox='0 0 100 50'%3E%3Cpath d='M10,25 L40,10 L60,10 L90,25 L60,40 L40,40 Z' fill='%23D4AF37' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E" 
            alt="Scroll ornament" 
            className="w-20 h-10 mx-auto mt-6 transform rotate-180"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InvitationScroll;
