'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaHeart, FaStar, FaUsers, FaCalendarAlt, FaLightbulb, FaBullseye, FaEye } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate paragraphs
      gsap.from(".mission-paragraph", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* SVG Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="missionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(215, 38, 56, 0.05)" />
              <stop offset="50%" stopColor="rgba(215, 38, 56, 0.02)" />
              <stop offset="100%" stopColor="rgba(215, 38, 56, 0.07)" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#missionGradient)"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Floating Flower Decorations */}
      <div className="absolute top-20 left-20 flower-decoration floating">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-20 flower-decoration floating-delayed">
        <svg viewBox="0 0 24 24">
          <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,18C13.1,18 14,18.9 14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20C10,18.9 10.9,18 12,18M12,8C13.1,8 14,8.9 14,10C14,11.1 13.1,12 12,12C10.9,12 10,11.1 10,10C10,8.9 10.9,8 12,8M12,14C13.1,14 14,14.9 14,16C14,17.1 13.1,18 12,18C10.9,18 10,17.1 10,16C10,14.9 10.9,14 12,14Z"/>
        </svg>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 geometric-pattern opacity-12" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium"
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
              <FaLightbulb className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-primary font-great-vibes">Our Vision</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Mission Section 1 - Name Meaning */}
          <motion.div
            className="mission-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                      boxShadow: "0 20px 40px rgba(215, 38, 56, 0.3)"
                    }}
                  >
                    <FaHeart className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating Decoration */}
                <motion.div
                  className="absolute -top-4 -right-4"
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
            </motion.div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  <FaHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-playfair">The Meaning of Manglam</h3>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                The word Manglam signifies purity and auspiciousness. We chose this name for our company because, for us, being a part of someone's precious moments and special day is an absolute honor. From our name to the work we do, we aim to make everything truly mangalmay—filled with positivity, joy, and heartfelt effort.
              </p>
            </div>
          </motion.div>

          {/* Mission Section 2 - Wedding Promise */}
          <motion.div
            className="mission-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <div className="space-y-6 lg:order-1 order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  <FaBullseye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-playfair">Our Promise</h3>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                At the heart of every wedding lies a beautiful promise—a lifetime bond not just between two people, but between two families. At Manglam Event, we understand the depth of that connection, and we're here to transform your wedding into a luxurious, personal, and unforgettable celebration.
              </p>
            </div>

            {/* Image */}
            <motion.div
              className="relative lg:order-2 order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                      boxShadow: "0 20px 40px rgba(215, 38, 56, 0.3)"
                    }}
                  >
                    <FaBullseye className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating Decoration */}
                <motion.div
                  className="absolute -top-4 -left-4"
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
                  <FaStar className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission Section 3 - Behind the Scenes */}
          <motion.div
            className="mission-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                      boxShadow: "0 20px 40px rgba(215, 38, 56, 0.3)"
                    }}
                  >
                    <FaEye className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating Decoration */}
                <motion.div
                  className="absolute -bottom-4 -right-4"
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
            </motion.div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  <FaEye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-playfair">Behind the Scenes</h3>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                We believe your wedding day should be about soaking in every brilliant moment—laughing with your friends, talking with your family, and feeling every emotion as it unfolds. That's why we work quietly behind the scenes, handling every detail with care and precision, so you can be completely present.
              </p>
            </div>
          </motion.div>

          {/* Mission Section 4 - Handcrafted Celebrations */}
          <motion.div
            className="mission-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <div className="space-y-6 lg:order-1 order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  <FaStar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-playfair">Handcrafted Celebrations</h3>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                Every celebration we plan is handcrafted and tailored entirely to your needs. From intimate gatherings to grand affairs, we pour our passion, commitment, and signature attention to detail into bringing your dream to life. Whether it's a dreamy destination or your own backyard, we create visual experiences and designer touches that reflect your unique vibe.
              </p>
            </div>

            {/* Image */}
            <motion.div
              className="relative lg:order-2 order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                      boxShadow: "0 20px 40px rgba(215, 38, 56, 0.3)"
                    }}
                  >
                    <FaStar className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating Decoration */}
                <motion.div
                  className="absolute -top-4 -left-4"
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
                  <FaStar className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission Section 5 - Our Team */}
          <motion.div
            className="mission-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                      boxShadow: "0 20px 40px rgba(215, 38, 56, 0.3)"
                    }}
                  >
                    <FaUsers className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating Decoration */}
                <motion.div
                  className="absolute -bottom-4 -right-4"
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
            </motion.div>

            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  <FaUsers className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-playfair">Our Creative Team</h3>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                Our young, vibrant team of designers works closely with local artists and craftsmen to custom-design every element of your functions. We're not just planners—we're storytellers, curators, and creators of endless memories. With us, you get more than just an event; you get a seamless experience.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                We assist you at every step of the planning process, connect you with the best service providers, and even offer thoughtful gift solutions. Our hospitality is personified from the very first hello to the final goodbye.
              </p>
            </div>
          </motion.div>

          {/* Mission Section 6 - Final Message */}
          <motion.div
            className="mission-paragraph grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <div className="space-y-6 lg:order-1 order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                    boxShadow: "0 8px 25px rgba(215, 38, 56, 0.3)"
                  }}
                >
                  <FaHeart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground font-playfair">Our Commitment</h3>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed tracking-wide font-cormorant text-foreground/90">
                Because we love what we do, and it shows in every detail. From concept to celebration, we're here to make your wedding less about the hassle and more about the joy—so two families can come together, and a lifetime of memories can begin.
              </p>
              
              <div className="p-6 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(215, 38, 56, 0.1) 0%, rgba(215, 38, 56, 0.05) 100%)",
                  border: "1px solid rgba(215, 38, 56, 0.2)"
                }}
              >
                <p className="text-xl font-bold text-primary font-great-vibes text-center">
                  Let's bring your dreamland to life.
                </p>
              </div>
            </div>

            {/* Image */}
            <motion.div
              className="relative lg:order-2 order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)",
                      boxShadow: "0 20px 40px rgba(215, 38, 56, 0.3)"
                    }}
                  >
                    <FaHeart className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                {/* Floating Decoration */}
                <motion.div
                  className="absolute -top-4 -left-4"
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
                  <FaStar className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: FaHeart, value: "100%", label: "Satisfaction" },
            { icon: FaUsers, value: "500+", label: "Happy Couples" },
            { icon: FaStar, value: "5.0", label: "Rating" },
            { icon: FaCalendarAlt, value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
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
      </div>
    </motion.section>
  );
};

export default MissionSection; 