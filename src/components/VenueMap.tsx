
import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const VenueMap = () => {
  const [isMapExpanded, setIsMapExpanded] = useState(false);
  const venueLocation = "Shiv+Sagar+Mangal+Karyalaya+Gondur+Airport+Rd+Mangalmurti+Colony+Dhule+Walwadi+Maharashtra+424002";
  
  const handleDirectionClick = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${venueLocation}`, '_blank');
  };

  return (
    <motion.section 
      className="py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <h2 className="text-center font-serif text-3xl mb-8 text-gray-800">Venue</h2>
      
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-lg border border-wedding-gold/10 invitation-card mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start mb-4">
            <MapPin className="text-wedding-gold mr-3 h-5 w-5 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-lg">Shiv Sagar Mangal Karyalaya</h3>
              <p className="text-gray-600">Gondur Airport Rd, Mangalmurti Colony, Dhule, Walwadi, Maharashtra 424002</p>
            </div>
          </div>
          
          <button 
            onClick={handleDirectionClick}
            className="direction-button flex items-center justify-center w-full py-3 px-6 bg-wedding-gold/10 hover:bg-wedding-gold/20 text-gray-800 rounded-md mt-2 border border-wedding-gold/30"
          >
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </button>
        </motion.div>
        
        <motion.div 
          className={`map-container transition-all duration-500 ease-in-out ${isMapExpanded ? "h-[600px]" : "h-[300px]"} elegant-shadow`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe 
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${venueLocation}&zoom=15`}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Map"
          />
          <button 
            onClick={() => setIsMapExpanded(!isMapExpanded)}
            className="absolute bottom-4 right-4 bg-white/90 backdrop-filter backdrop-blur-sm px-3 py-2 rounded-md text-sm shadow-md border border-gray-200 hover:bg-white transition-all duration-300"
          >
            {isMapExpanded ? "Show Less" : "Expand Map"}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VenueMap;
