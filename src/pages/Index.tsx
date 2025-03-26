
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import InvitationHeader from '../components/InvitationHeader';
import EventDetails from '../components/EventDetails';
import VenueMap from '../components/VenueMap';
import RSVPSection from '../components/RSVPSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Set title
    document.title = "Anant & Yukta | Wedding Invitation";
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-wedding-ivory"
    >
      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.div 
          className="relative overflow-hidden bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-wedding-gold/10 invitation-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InvitationHeader />
          <EventDetails />
          <VenueMap />
          <RSVPSection />
          <Footer />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
