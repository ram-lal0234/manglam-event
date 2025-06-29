'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaHeart, FaStar, FaCamera, FaArrowDown } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const GalleryHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Gallery images for the grid around the text
  const heroImages = [
    "/images/gallery/Folder-1/RING CEREMONY.png",
    "/images/gallery/Folder-1/DESTINATION WEDDING.png",
    "/images/gallery/Folder-2/WEDDING DECOR.png",
    "/images/gallery/Folder-2/BRIDE GROOM ENTRY.png",
    "/images/gallery/Folder-1/17.png",
    "/images/gallery/Folder-2/WEDDING PHOTOGRAPHY AND VIDEOGRAPHY.png",
    "/images/gallery/Folder-2/WEDDING CHOREOGRAPHY.png",
    "/images/gallery/Folder-1/10.png",
    "/images/gallery/Folder-1/15.png",
    "/images/gallery/Folder-2/PRINTING AND STATIONARY.png",
    "/images/gallery/Folder-1/5.png",
    "/images/gallery/Folder-2/20.png",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate grid images with stagger
      gsap.from(".grid-image", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      // Parallax effect for background grid
      gsap.to(".parallax-grid", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Floating animation for decorative elements
      gsap.to('.floating-element', {
        y: '20px',
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
      style={{ opacity }}
    >
      {/* Background Grid - Images around the center */}
      <div className="absolute inset-0 parallax-grid">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-4 p-4 md:p-8 h-full">
          {/* Top Row */}
          <motion.div
            className="grid-image col-span-2 md:col-span-3 row-span-1 relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={heroImages[0]}
              alt="Gallery 1"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
          </motion.div>

          <motion.div
            className="grid-image col-span-2 md:col-span-3 row-span-1 relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={heroImages[1]}
              alt="Gallery 2"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
          </motion.div>

          <motion.div
            className="grid-image col-span-2 md:col-span-3 row-span-1 relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={heroImages[2]}
              alt="Gallery 3"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
          </motion.div>

          <motion.div
            className="grid-image col-span-2 md:col-span-3 row-span-1 relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src={heroImages[3]}
              alt="Gallery 4"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
          </motion.div>

          {/* Left Column */}
          <motion.div
            className="grid-image col-span-2 md:col-span-2 row-span-2 relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={heroImages[4]}
              alt="Gallery 5"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
          </motion.div>

          {/* Center Content Area - Empty for text */}
          <div className="col-span-2 md:col-span-8 row-span-2 flex items-center justify-center">
            {/* Content will be placed here */}
          </div>

          {/* Right Column */}
          <motion.div
            className="grid-image col-span-2 md:col-span-2 row-span-2 relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={heroImages[5]}
              alt="Gallery 6"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
          </motion.div>

          {/* Bottom Row */}
          <motion.div
            className="grid-image col-span-2 md:col-span-3 row-span-1 relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src={heroImages[6]}
              alt="Gallery 7"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
          </motion.div>

          <motion.div
            className="grid-image col-span-2 md:col-span-3 row-span-1 relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={heroImages[7]}
              alt="Gallery 8"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
          </motion.div>

          <motion.div
            className="grid-image col-span-2 md:col-span-3 row-span-1 relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <Image
              src={heroImages[8]}
              alt="Gallery 9"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
          </motion.div>

          <motion.div
            className="grid-image col-span-2 md:col-span-3 row-span-1 relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <Image
              src={heroImages[9]}
              alt="Gallery 10"
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors duration-300" />
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />

      {/* Floating Decorations */}
      <div className="absolute top-20 left-20 floating-element">
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
      
      <div className="absolute bottom-20 right-20 floating-element">
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

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: FaCamera, value: "500+", label: "Photos" },
            { icon: FaHeart, value: "100+", label: "Events" },
            { icon: FaStar, value: "5.0", label: "Rating" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                  border: "1px solid rgba(215, 38, 56, 0.2)"
                }}
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground font-playfair">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-cormorant">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

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
    </motion.section>
  );
};

export default GalleryHero; 