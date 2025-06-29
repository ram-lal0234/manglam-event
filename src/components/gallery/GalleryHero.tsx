'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHeart, FaStar, FaCamera, FaArrowDown } from 'react-icons/fa';
import { PhotoGallery } from '@/components/ui/gallery';

const GalleryHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
      style={{ opacity }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-20 left-20">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaStar className="w-6 h-6 text-yellow-400" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-20 right-20">
        <motion.div
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHeart className="w-6 h-6 text-primary" />
        </motion.div>
      </div>

      {/* Content Overlay - Centered */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
            border: "1px solid rgba(215, 38, 56, 0.2)",
            backdropFilter: "blur(10px)"
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <FaCamera className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-primary font-great-vibes">Our Gallery</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl lg:text-7xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-gradient-primary font-playfair">
            Capturing
          </span>
          <br />
          <span className="text-foreground font-playfair">
            Perfect Moments
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl lg:text-2xl text-muted-foreground font-cormorant leading-relaxed mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Explore our collection of 
          <span className="text-primary font-medium"> unforgettable events</span> 
          and celebrations we've had the pleasure of creating.
        </motion.p>
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm text-muted-foreground font-cormorant">Scroll to explore</span>
            <FaArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Photo Gallery */}
      <div className="absolute bottom-0 left-0 right-0">
        <PhotoGallery animationDelay={0.5} />
      </div>
    </motion.section>
  );
};

export default GalleryHero; 