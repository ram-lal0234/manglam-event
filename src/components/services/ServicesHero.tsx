"use client";

import { motion } from "framer-motion";
import { FaHeart, FaStar, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";

const ServicesHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const stats = [
    { icon: FaHeart, value: "500+", label: "Events" },
    { icon: FaUsers, value: "1000+", label: "Happy Clients" },
    { icon: FaStar, value: "5.0", label: "Rating" },
    { icon: FaCalendarAlt, value: "24/7", label: "Support" }
  ];

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const rotationVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Set visibility after component mounts to prevent layout shifts
  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration issues
  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded-full w-48 mx-auto mb-8"></div>
            <div className="h-16 bg-gray-200 rounded w-96 mx-auto mb-8"></div>
            <div className="h-6 bg-gray-200 rounded w-80 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      key="services-hero"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* SVG Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.05)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.02)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.07)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#heroGradient)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Optimized Floating Decorations - Reduced to prevent performance issues */}
      <motion.div 
        className="absolute top-20 left-20"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.div
          variants={rotationVariants}
          animate="animate"
        >
          <FaStar className="w-8 h-8 text-yellow-400" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-20"
        variants={floatingVariants}
        animate="animate"
      >
        <motion.div
          variants={rotationVariants}
          animate="animate"
        >
          <FaHeart className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-5" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
            border: "1px solid rgba(215, 38, 56, 0.2)",
            backdropFilter: "blur(10px)"
          }}
          variants={itemVariants}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaHeart className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-primary font-great-vibes">Our Services</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl lg:text-7xl font-bold leading-tight mb-8"
          variants={itemVariants}
        >
          <span className="text-gradient-primary font-playfair">
            Crafting
          </span>
          <br />
          <span className="text-foreground font-playfair">
            Perfect Moments
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl lg:text-2xl text-muted-foreground font-cormorant leading-relaxed mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          From intimate gatherings to grand celebrations, we transform your vision into 
          <span className="text-primary font-medium"> unforgettable experiences</span> 
          with our comprehensive range of event services.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 300
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
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
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-background"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-background"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </motion.section>
  );
};

export default ServicesHero;
