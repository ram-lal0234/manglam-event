"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaUsers, FaCalendarAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ServicesHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title elements
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });

      // Animate floating elements
      gsap.to(".floating-element", {
        y: "20px",
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
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
          <FaStar className="w-8 h-8 text-yellow-400" />
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
          <FaHeart className="w-8 h-8 text-primary" />
        </motion.div>
      </div>

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <FaHeart className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-primary font-great-vibes">Our Services</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="hero-title text-5xl lg:text-7xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
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
          className="hero-title text-xl lg:text-2xl text-muted-foreground font-cormorant leading-relaxed mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          From intimate gatherings to grand celebrations, we transform your vision into 
          <span className="text-primary font-medium"> unforgettable experiences</span> 
          with our comprehensive range of event services.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="hero-title grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: FaHeart, value: "500+", label: "Events" },
            { icon: FaUsers, value: "1000+", label: "Happy Clients" },
            { icon: FaStar, value: "5.0", label: "Rating" },
            { icon: FaCalendarAlt, value: "24/7", label: "Support" }
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

        {/* CTA Button */}
        <motion.div
          className="hero-title mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
              boxShadow: "0 10px 30px rgba(215, 38, 56, 0.3)"
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(215, 38, 56, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white">Explore Our Services</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesHero;
