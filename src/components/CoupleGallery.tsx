
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Sparkles } from 'lucide-react';

const CoupleGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const images = [
    "public/lovable-uploads/f0f5e2a8-0de4-4427-b055-0b742d64b858.png",
    "public/lovable-uploads/334081c4-055b-43d7-88ff-f8213b49483f.png",
    "public/lovable-uploads/ebc8ca28-db9d-4b64-857c-049eca7c99bd.png",
    "public/lovable-uploads/f68d9120-2a9b-4b93-892a-b942e6890dde.png",
    "public/lovable-uploads/2d70d9a3-0c2a-4eb1-a365-5390dad9141e.png",
    "public/lovable-uploads/eb29f5c1-9f4c-4392-823f-d4f43af3ed66.png",
    "public/lovable-uploads/268e69be-5d92-4d64-8947-91208f6f8db7.png",
    "public/lovable-uploads/71d15647-8dc3-470e-80d2-0a105735a502.png"
  ];

  return (
    <motion.div
      className="my-12 rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <h2 className="text-center text-2xl font-serif text-gray-800 mb-6 relative inline-flex items-center">
        <Sparkles size={16} className="text-wedding-gold mr-2" />
        Our Journey Together
        <Sparkles size={16} className="text-wedding-gold ml-2" />
      </h2>
      
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <motion.div 
                    className="p-1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="overflow-hidden rounded-xl border border-wedding-gold/30 shadow-lg relative group">
                      <motion.img 
                        src={image} 
                        alt={`Anant and Yukta - Photo ${index + 1}`} 
                        className="w-full aspect-[4/3] object-cover transition-all duration-700"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.7 }
                        }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-wedding-gold/20 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-wedding-gold/20 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-wedding-gold/20 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-wedding-gold/20 rounded-br-lg"></div>
            </div>
            
            <CarouselPrevious className="left-4 bg-white/80 border-wedding-gold/30 hover:bg-wedding-gold hover:text-white transition-all duration-300" />
            <CarouselNext className="right-4 bg-white/80 border-wedding-gold/30 hover:bg-wedding-gold hover:text-white transition-all duration-300" />
          </Carousel>
        </div>
      </div>
      
      <div className="divider mt-8"></div>
    </motion.div>
  );
};

export default CoupleGallery;
