
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const weddingDate = new Date('May 10, 2025 12:35:00').getTime();
  
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      if (distance < 0) {
        // Wedding day has arrived!
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const timeBoxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div 
      className="py-8 px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-serif text-3xl mb-4 text-gray-800">Counting Down to Forever</h2>
      <div className="divider"></div>
      
      <div className="flex justify-center items-center flex-wrap gap-4 mt-6">
        {timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 ? (
          <motion.div 
            className="text-center px-8 py-4 bg-wedding-gold/10 rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="block font-serif text-3xl text-wedding-gold">
              Today is the Wedding Day!
            </span>
          </motion.div>
        ) : (
          <>
            <motion.div 
              className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg min-w-[80px] border border-wedding-gold/10 shadow-sm"
              variants={timeBoxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="block font-serif text-3xl text-wedding-gold">{timeLeft.days}</span>
              <span className="text-gray-600 text-sm">Days</span>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg min-w-[80px] border border-wedding-gold/10 shadow-sm"
              variants={timeBoxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="block font-serif text-3xl text-wedding-gold">{timeLeft.hours}</span>
              <span className="text-gray-600 text-sm">Hours</span>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg min-w-[80px] border border-wedding-gold/10 shadow-sm"
              variants={timeBoxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="block font-serif text-3xl text-wedding-gold">{timeLeft.minutes}</span>
              <span className="text-gray-600 text-sm">Minutes</span>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg min-w-[80px] border border-wedding-gold/10 shadow-sm"
              variants={timeBoxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="block font-serif text-3xl text-wedding-gold">{timeLeft.seconds}</span>
              <span className="text-gray-600 text-sm">Seconds</span>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
