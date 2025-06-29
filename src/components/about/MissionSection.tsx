'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeart, FaStar, FaUsers, FaCalendarAlt, FaLightbulb, FaBullseye, FaEye, FaSeedling, FaGem } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate paragraphs with permanent visibility
      gsap.from(".mission-paragraph", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none none", // Changed to prevent reverse
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 1 }} // Changed from 0 to 1
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Clean Background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-bl from-background via-background to-primary/5" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Minimal floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full floating" />
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary/40 rounded-full floating-delayed" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary-light/30 rounded-full rotate-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-primary/50 rounded-full floating" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-primary/40 rounded-full sparkle" />

      {/* Clean lines */}
      <div className="absolute top-40 right-40 w-16 h-16 border border-primary/20 rotate-45 animated" />
      <div className="absolute bottom-40 left-40 w-12 h-12 border border-primary/15 rotate-45 animated-delayed" />
      <div className="absolute top-1/4 left-1/4 w-10 h-10 border border-primary/25 rotate-45 animated" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0, y: 50
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Clean badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 border border-primary/30 rounded-full text-sm"
            initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0, y: 20
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <FaLightbulb className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary font-great-vibes">Our Vision</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0, y: 30
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient-primary font-playfair">
                Our Mission
              </span>
              <br />
              <span className="text-foreground font-playfair">
                & Vision
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-cormorant leading-relaxed max-w-3xl mx-auto">
              Creating 
              <span className="text-primary font-medium"> mangalmay</span> moments filled with positivity, joy, and heartfelt effort.
            </p>
          </motion.div>
        </motion.div>

        {/* Mission Content */}
        <motion.div
          className="space-y-16"
          initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0, y: 20
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Mission Section 1 - Name Meaning */}
          <motion.div
            className="mission-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 1, x: 0 }} // Changed from opacity: 0, x: -50
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Clean image placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 1, scale: 1 }} // Changed from opacity: 0, scale: 0.8
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 border border-primary/20 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center border-2 border-primary/30 bg-primary/5">
                    <FaBullseye className="w-16 h-16 text-primary" />
                  </div>
                </div>
                
                {/* Minimal floating elements */}
                <div className="absolute -top-2 -right-2 w-3 h-3 border border-primary/40 rounded-full" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary/30 rounded-full" />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/30 bg-primary/5">
                  <FaBullseye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-great-vibes text-gradient-primary">
                  The Meaning of "Manglam"
                </h3>
              </div>
              
              <div className="text-xl space-y-4 text-muted-foreground font-cormorant leading-relaxed">
                <p>
                  <span className="text-primary font-medium">"Manglam"</span> is derived from Sanskrit, 
                  meaning <span className="text-primary font-medium">"auspicious"</span> or 
                  <span className="text-primary font-medium"> "blessed"</span>. This name perfectly captures 
                  our commitment to creating events that bring positive energy and blessings.
                </p>
                <p>
                  Every celebration we plan is infused with this spirit of auspiciousness. We believe that 
                  weddings and events should not just be beautiful spectacles, but should create 
                  <span className="text-primary font-medium"> mangalmay</span> moments that bring joy, 
                  positivity, and blessings to everyone involved.
                </p>
              </div>

              {/* Clean features */}
              <div className="space-y-3 pt-6">
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaStar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Auspicious & Blessed Events</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaStar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Positive Energy & Joy</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaStar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Heartfelt Effort & Care</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Mission Section 2 - Our Approach */}
          <motion.div
            className="mission-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 1, x: 0 }} // Changed from opacity: 0, x: 50
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/30 bg-primary/5">
                  <FaEye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-great-vibes text-gradient-primary">
                  Our Unique Approach
                </h3>
              </div>
              
              <div className="text-xl space-y-4 text-muted-foreground font-cormorant leading-relaxed">
                <p>
                  We believe that every event should be a <span className="text-primary font-medium">reflection of the couple's dreams</span>. 
                  Our approach combines traditional values with modern innovation, creating celebrations 
                  that are both meaningful and memorable.
                </p>
                <p>
                  From the initial consultation to the final celebration, we work closely with our clients 
                  to understand their vision, preferences, and cultural traditions. This personalized 
                  approach ensures that every event is <span className="text-primary font-medium">truly unique</span> and reflects 
                  the couple's personality and values.
                </p>
              </div>

              {/* Clean stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <motion.div
                  className="text-center p-4 border border-primary/20 rounded-lg bg-primary/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-primary font-great-vibes">100%</div>
                  <div className="text-sm text-muted-foreground">Personalized</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 border border-primary/20 rounded-lg bg-primary/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-2xl font-bold text-primary font-great-vibes">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </motion.div>
              </div>
            </div>

            {/* Clean image placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 1, scale: 1 }} // Changed from opacity: 0, scale: 0.8
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 border border-primary/20 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center border-2 border-primary/30 bg-primary/5">
                    <FaEye className="w-16 h-16 text-primary" />
                  </div>
                </div>
                
                {/* Minimal floating elements */}
                <div className="absolute -top-2 -left-2 w-3 h-3 border border-primary/40 rounded-full" />
                <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-primary/30 rounded-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Mission Section 3 - Our Promise */}
          <motion.div
            className="mission-paragraph text-center max-w-4xl mx-auto"
            initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0, y: 50
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border border-primary/30 bg-primary/5">
                  <FaHeart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-great-vibes text-gradient-primary">
                  Our Promise to You
                </h3>
              </div>
              
              <div className="text-xl space-y-4 text-muted-foreground font-cormorant leading-relaxed">
                <p className="text-lg">
                  We promise to create not just events, but <span className="text-primary font-medium">mangalmay</span> moments 
                  that will be cherished for a lifetime. Every celebration we plan is infused with 
                 <span className="text-primary font-medium"> love, care, and attention to detail</span>.
                </p>
                <p>
                  From the smallest decoration to the grandest celebration, we ensure that every element 
                  reflects the couple's vision and brings joy to everyone present. Our commitment is to 
                  make your special day truly <span className="text-primary font-medium">auspicious and blessed</span>.
                </p>
              </div>

              {/* Clean highlight box */}
              <motion.div
                className="p-8 border border-primary/20 rounded-lg bg-primary/5 mt-8"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold font-great-vibes text-primary mb-4">
                  Our Commitment
                </h4>
                <p className="text-xl text-muted-foreground font-cormorant">
                  To transform your dreams into <span className="text-primary font-medium">mangalmay</span> reality, 
                  creating celebrations that are not just beautiful, but truly blessed and auspicious.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionSection; 