
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const CoupleGallery = () => {
  const images = [
    "public/lovable-uploads/fc2468e6-02b8-42fc-a2e5-b13e4a6c5729.png",
    "public/lovable-uploads/2ece22fb-8a78-4b23-b22a-cced23ed1316.png",
    "public/lovable-uploads/ae2c9f95-2ea4-4bcd-aa1c-a2bbbf8cc3ad.png",
    "public/lovable-uploads/f725ba7f-4042-487f-8eca-19ee302212aa.png",
    "public/lovable-uploads/298adac9-61c7-4c72-a822-cdcbaa96c32e.png",
    "public/lovable-uploads/0a120eb6-2b76-4b68-9507-ab45c05be5ba.png",
    "public/lovable-uploads/854326d6-bbaa-4837-bcb5-bc397ba1496d.png",
    "public/lovable-uploads/3488fef7-f8b7-4804-81c0-638a00d29d52.png"
  ];

  return (
    <motion.div
      className="my-12 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <h2 className="text-center text-2xl font-serif text-gray-800 mb-6">Our Journey Together</h2>
      
      <Carousel className="w-full max-w-3xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="overflow-hidden rounded-xl border border-wedding-gold/20 shadow-md">
                  <img 
                    src={image} 
                    alt={`Anant and Yukta - Photo ${index + 1}`} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-white/80 border-wedding-gold/30 hover:bg-wedding-gold hover:text-white" />
        <CarouselNext className="right-4 bg-white/80 border-wedding-gold/30 hover:bg-wedding-gold hover:text-white" />
      </Carousel>
      
      <div className="divider mt-8"></div>
    </motion.div>
  );
};

export default CoupleGallery;
