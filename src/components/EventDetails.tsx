
import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const eventCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: 0.2 * custom,
      duration: 0.6
    }
  })
};

const EventDetails = () => {
  return (
    <motion.section 
      className="py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <h2 className="text-center font-serif text-3xl mb-8 text-gray-800">Celebration Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Haldi Ceremony Card */}
        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-wedding-gold/10 invitation-card section-transition"
          variants={eventCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <h3 className="font-serif text-xl mb-4 text-center">Haldi Ceremony</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="text-wedding-gold mr-3 h-5 w-5" />
              <span>9 May 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-wedding-gold mr-3 h-5 w-5" />
              <span>09:00 AM</span>
            </div>
            <div className="flex items-start">
              <MapPin className="text-wedding-gold mr-3 h-5 w-5 mt-1 flex-shrink-0" />
              <span>House no 188, Hudco Colony, Jamner Road, Bhusawal, Jalgaon, Maharashtra 425201</span>
            </div>
          </div>
        </motion.div>
        
        {/* Wedding Card */}
        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-wedding-gold/10 invitation-card section-transition"
          variants={eventCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h3 className="font-serif text-xl mb-4 text-center">Wedding Ceremony</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="text-wedding-gold mr-3 h-5 w-5" />
              <span>10 May 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="text-wedding-gold mr-3 h-5 w-5" />
              <span>12:35 PM</span>
            </div>
            <div className="flex items-start">
              <MapPin className="text-wedding-gold mr-3 h-5 w-5 mt-1 flex-shrink-0" />
              <span>Shiv Sagar Mangal Karyalaya, Gondur Airport Rd, Mangalmurti Colony, Dhule, Walwadi, Maharashtra 424002</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EventDetails;
