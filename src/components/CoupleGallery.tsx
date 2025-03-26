
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
      <h2 className="text-center text-2xl font-serif text-gray-800 mb-6">Our Journey Together</h2>
      
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
                  <div className="overflow-hidden rounded-xl border border-wedding-gold/20 shadow-lg">
                    <motion.img 
                      src={image} 
                      alt={`Anant and Yukta - Photo ${index + 1}`} 
                      className="w-full aspect-[4/3] object-cover"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <CarouselPrevious className="left-4 bg-white/80 border-wedding-gold/30 hover:bg-wedding-gold hover:text-white" />
          <CarouselNext className="right-4 bg-white/80 border-wedding-gold/30 hover:bg-wedding-gold hover:text-white" />
        </Carousel>
      </div>
      
      <div className="divider mt-8"></div>
    </motion.div>
  );
};

export default CoupleGallery;
